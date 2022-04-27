import React from 'react';

const Chatheader = () => {
    return (
        <div className='chatHeader'>
            <div className='chatHeader__profile'>
                <div className='chatHeader__img'>
                    <img src="" className='chatHeader__img--photo'/>

                </div>
                <h3>UserName</h3>

            </div>
            <i className='log-out-icon'>-</i>
            
        </div>
    );
}

export default Chatheader;
