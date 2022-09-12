import {useState, useEffect} from 'react';
import axios from 'axios';
import { matchApi } from '../../services';

const Matchesdisplay = ({ matches, setClickedUser }) => {

    const [matchedProfiles, setMatchedProfiles] = useState(null)

    const matchedUserIds = matches.map((id) => id);
    const userId = localStorage.getItem("UserId");

    const getMatches = async () => {
        try {
            // const {data: {data}} = await axios.get('http://localhost:3001/match', {
            //     params: {userIds: JSON.stringify(matchedUserIds)}
            // })
            const {data: {data}} = await matchApi.get(matchedUserIds)
            console.log(data.foundUsers)
            setMatchedProfiles(data.foundUsers);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getMatches()
    }, [matches]);

    return (
        <div className="matches-display">
            {matchedProfiles?.map((match) => (
                <div key={match.user_id} className="match-card" onClick={() => setClickedUser(match)}>
                    <div className='img-container'>
                        <img src={match?.imageURL} alt={match?.first_name + " profile"} />
                    </div>
                    <h3>{match?.first_name}</h3>
                </div>
            ))}
        </div>
    );
}

export default Matchesdisplay;
