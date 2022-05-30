import React from 'react'
import Nav from '../../components/Nav/Nav'
const About = () => {
  return (
    <div>
        <Nav 
          minimal={true}
          isPage={true}
          setShowModal={() => {}}
          showModal={false}
        />
        <div className='titleAbout'>
            <h2>About Us</h2>
            <p>Group of developers.</p>
        </div>
    </div>

  )
}

export default About