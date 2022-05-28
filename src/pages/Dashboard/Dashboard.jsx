import { useState, useEffect } from "react";
import { useCookies } from 'react-cookie';
import TinderCard from "react-tinder-card";
import ChatContainer from "../../components/ChatContainer/ChatContainer";
import axios from "axios";

const Dashboard = () => {

  const [user, setUser] = useState(null);
  const [genderedUsers, setGenderedUsers] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const [lastDirection, setLastDirection] = useState();
  

  const userId = "98a74188-83b8-4d08-8051-d0e532344549"
  console.log(userId)

  
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get('http://localhost:3001/users', {
          params: {id: userId}
        })
        console.log(response)
        setUser(response.data.user)
      } catch (err) {
        console.log(err);
      }
    }
    getUser()
    console.log("update user")
  }, []);
  console.log('user', user);


  useEffect(() => {
    if (user) {
      const getGenderedUser = async (user) => {
        try {
          const response = await axios.get('http://localhost:3001/gender', {
            params: {gender_interest: user?.gender_interest}
          })
          console.log(response);
          setGenderedUsers(response.data)
        } catch (err) {
          console.log(err);
        }
      }
      getGenderedUser(user)
    }
  }, [user]);

 

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <div className="dashboard">
      <ChatContainer />
      <div className="swiper-container">
        <div className="card-container">



          {genderedUsers.map((genderedUser) => (
            <TinderCard
              className="swipe"
              key={genderedUser.user_id}
              onSwipe={(dir) => swiped(dir, genderedUser.user_id)}
              onCardLeftScreen={() => outOfFrame(genderedUser.first_name)}
            >
              <div
                style={{ backgroundImage: "url(" + genderedUser.url + ")" }}
                className="card"
              >
                <h3>{genderedUser.first_name}</h3>
              </div>
            </TinderCard>
          ))}

          <div className="swipe-info">
            {lastDirection ? <p>You swiped {lastDirection}</p> : <p/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
