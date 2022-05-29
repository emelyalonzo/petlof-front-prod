import {useState, useEffect} from 'react';
import axios from 'axios';

const Matchesdisplay = ({ matches, setClickedUser }) => {

    const [matchedProfiles, setMatchedProfiles] = useState(null)

    console.log("matches en matchesDisplay", matches)

    const matchedUserIds = matches.map((id) => id);

    console.log("matchedUserIds en MatchesDisplay",matchedUserIds)

    const getMatches = async () => {
        try {
            const {data: {data}} = await axios.get('http://localhost:3001/match', {
                params: {userIds: JSON.stringify(matchedUserIds)}
            })
            console.log("datos de respuesta para obtener matches", data.foundUsers)
            setMatchedProfiles(data.foundUsers);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getMatches()
    }, []);

    return (
        <div className="matches-display">
            {matchedProfiles?.map((match, _index) => (
                <div key={{_index}} className="match-card" onClick={() => setClickedUser(match)}>
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
