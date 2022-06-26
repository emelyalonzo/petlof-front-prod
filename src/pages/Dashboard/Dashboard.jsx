import { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import ChatContainer from "../../components/ChatContainer/ChatContainer";
import { matchApi, userApi } from "../../services";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [genderedUsers, setGenderedUsers] = useState(null);
  const [lastDirection, setLastDirection] = useState();

  const userId = localStorage.getItem("UserId");
  const Id = localStorage.getItem("Id");
  localStorage.removeItem("FirstStep");
  localStorage.setItem("Dashboard", "true");

  // API responds with the registered user
  const getUser = async () => {
    try {
      const { data: { data }} = await userApi.getUser(userId);
      setUser(data.user);
    } catch (err) {
      console.log(err);
    }
  };

  // API responds with the list of people with chosen gender.
  const getGenderedUser = async (user) => {
    try {
      // const {
      //   data: { data },
      // } = await axios.get("http://localhost:3001/gender", {
      //   params: { gender_identity: user?.gender_interest },
      // });
      const { data: { data }} = await userApi.getGendered(user?.gender_interest)
      setGenderedUsers(data.users);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (user && !genderedUsers) {
      getGenderedUser(user);
    }
  }, [user, genderedUsers]);

  // Send data to the API with the chosen matches.
  const updatedMatches = (matchedUserId) => {
    try {
      // axios
      //   .put("http://localhost:3001/match/addmatch", {
      //     userId,
      //     matchedUserId,
      //   })
      //   .then(() => getUser());
      matchApi.add(userId, matchedUserId).then(() => getUser())
    } catch (err) {
      console.log(err);
    }
  };

  // Swipe functionality
  const swiped = (direction, swipedUserId) => {
    if (direction === "right") {
      updatedMatches(swipedUserId);
    }
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {};

  const matchedUserIds = user?.matches.map((id) => id).concat(Id);

  const filteredGenderedUsers = genderedUsers?.filter(
    (genderedUser) => !matchedUserIds.includes(genderedUser._id)
  );

  if (!user || !genderedUsers) {
    return "401";
  }

  return (
    <div className="dashboard">
      <div className="chatContainer-colum">
        <ChatContainer user={user} />
      </div>
      <div className="swipe-colum">
        <div className="swiper-container">
          <div className="card-container">
            {filteredGenderedUsers?.map((genderedUser) => (
              <TinderCard
                className="swipe"
                key={genderedUser.user_id}
                onSwipe={(dir) => swiped(dir, genderedUser.user_id)}
                onCardLeftScreen={() => outOfFrame(genderedUser.first_name)}
              >
                <div
                  style={{
                    backgroundImage: "url(" + genderedUser.imageURL + ")",
                  }}
                  className="card"
                >
                  <h3><span className="h3-span">{genderedUser.first_name}</span>{genderedUser.about}</h3>
                </div>
              </TinderCard>
            ))}

            <div className="swipe-info">
              {lastDirection ? <p>You swiped {lastDirection}</p> : <p />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
