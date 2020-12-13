import React from 'react'
import aboutImage from '../assets/img/about.jpg'

const About = () => {
  return (
    <div className='container pt-2 pb-5'>
      <div className='section-header pt-5 pb-5 text-center'>
        <h3 className='section-title'>
          <span>Our </span>Store
        </h3>
        <h6 className='section-subtitle mr-auto ml-auto'>
          We offer music lessons for Piano, Guitar, Drums, Violin, Viola, Cello
          and Bass.
        </h6>
      </div>
      <div className='section-content'>
        <div className='row'>
          <div className='col-md-12 col-lg-6 mb-3'>
            <div className='aboutImage'>
              <img src={aboutImage} alt='about company' />
            </div>
          </div>
          <div className='col-md-12 col-lg-6'>
            <h3 className='about-title'>About us</h3>
            <div className='about-description'>
              <p>
                Doremi Music Lessons is the first professional
                Vietnamese-American music teaching studio offering lessons for a
                wide variety of musical instruments. We also offer studio
                recording services at our in house studio equipped with the
                latest recording equipment. Our store carries a vast selection
                of beginner as well as professional musical equipment and
                accessories.
              </p>
              <p>
                Our goal is to provide the gift of music for the Vietnamese and
                American communities of north Atlanta, Georgia. Our facility is
                equipped with private lesson rooms and surveillance systems to
                keep a safe and secure learning environment for our students and
                customers. Our musically trained and accredited staff will
                provide you with the most effective and engaging learning
                experience.
              </p>
              <p>
                Whether you are pursuing music as a hobby, an extracurricular
                activity for your child or as aprofession, Doremi Music will
                help guide you along the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
