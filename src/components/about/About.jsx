import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about_container">
      <div className="about_me">
        <div className="about_me-image">
      <img src={ME} alt="About Image" />
      </div>
    </div>
      
      <div className='about_contact'>
        <div className='about_cards'>
          <article className='about_card'>
            <FaAward className='about_icon'/>
          <h5>Experience</h5>
          <small>Student</small>
          </article>
          <article className='about_card'>
            <FiUsers className='about_icon'/>
          <h5>Experience</h5>
          <small>0 users currently</small>
          </article>
          <article className='about_card'>
            <VscFolderLibrary className='about_icon'/>
          <h5>Projects</h5>
          <small>20+ Completed projects</small>
          </article>
          </div>
          <p>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio a autem magni, accusamus voluptas ad possimus ea? Optio quam 
           eveniet placeat dolores facilis nulla beatae, rerum dolorem vel fugit saepe?
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

      </div>
      </div>
     
   
    </section>

  )
}
export default About