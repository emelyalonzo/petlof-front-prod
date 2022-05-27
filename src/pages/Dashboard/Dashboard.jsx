import { useState, useEffect } from "react";
import { useCookies } from 'react-cookie';
import TinderCard from "react-tinder-card";
import ChatContainer from "../../components/ChatContainer/ChatContainer";
import axios from "axios";

const Dashboard = () => {

  const [user, setUser] = useState(null);
  const [cookies, setCookie, removeCookie] = useState(['null']);

  const userId = cookies.UserId;

  const getUser = async () => {
    try {
      const response = await axios.get('http://localhost:3001/users', {
        params: {userId}
      })
      setUser(response.data)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUser()
  }, [user]);

  console.log('user', user);

  const character = [
    {
      name: 'Richard Hendricks',
      url: 'https://imgur.com/QsUowEE.jpg'
    },
    {
      name: 'Erlich Bachman',
      url: 'https://imgur.com/3JlDcRY.jpg'
    },
    {
      name: 'Monica Hall',
      url: 'https://imgur.com/jMIdy9q.jpg'
    },
    {
      name: 'Jared Dunn',
      url: 'https://imgur.com/N1WkP.jpg'
    },
    {
      name: 'Dinesh Chugtai',
      url: 'https://imgur.com/FCthgih.jpg'
    }
  ]

  const [lastDirection, setLastDirection] = useState()

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

          {character.map((genderedUser) => (
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
