import React, {useState} from 'react';

const Chatinput = () => {

    const [textArea, setTextArea] = useState(null)

    return (
        <div className='chatInput'>
            <textarea 
                value={textArea} 
                onChange={(e) => setTextArea(e.target.value)}
                />
            <button className='secondary-button'>Submit</button>
            
        </div>
    );
}

export default Chatinput;
