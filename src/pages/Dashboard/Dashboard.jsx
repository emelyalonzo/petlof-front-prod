import { useState, useEffect, useMemo } from "react";
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
  console.log("el componente se ha iniciado", userId)

  const getUser = async () => {
    try {
      console.log("dentro de getUser en el useEffect")
      const {data: {data}} = await axios.get('http://localhost:3001/users', {
        params: {id: userId}
      })
      console.log("27",data)
      setUser(data.user)
    } catch (err) {
      console.log(err);
    }
  }
  
  useEffect(() => {
    console.log("use effect de user antes de getUser")
    
    getUser()
    console.log("update user")
  }, []);
  console.log('user', user);


  useEffect(() => {
    if (user && !genderedUsers) {
      const getGenderedUser = async (user) => {
        try {
          const { data: {data} } = await axios.get('http://localhost:3001/gender', {
            params: {gender_interest: user?.gender_interest}
          })
          console.log(data);
          setGenderedUsers(data.users)
        } catch (err) {
          console.log(err);
        }
      }
      getGenderedUser(user)
    }
  }, [user, genderedUsers]);

 

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }
  if (!user || !genderedUsers) {
    return "no existe el usuario"
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
