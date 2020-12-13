import React from 'react'
import aboutImage from '../../assets/img/about.jpg'

const About = ({ lan }) => {
  return (
    <div className='container pt-2 pb-5'>
      <div className='section-header pt-5 pb-5 text-center'>
        <h3 className='section-title'>
          <span>Our </span>Store
        </h3>
        <h6 className='section-subtitle mr-auto ml-auto'>
          {lan
            ? `Giảng dạy nhiều nhạc cụ của như Piano, Guitar, Trống, Violin,Viola, Cello và Bass.`
            : ` We offer music lessons for Piano, Guitar, Drums, Violin, Viola, Cello
          and Bass.`}
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
              {lan ? (
                <p>
                  Trường nhạc Đô Rê Mi là trường nhạc của người Việt Nam với một
                  đội ngũ giáo viên Việt Mỹ chuyên nghiệp để phục vụ cho cộng
                  đồng người Việt tại Atlanta và các thành phố lân cận của tiểu
                  bang Georgia. Trường dạy từ thiếu nhi, giải trí cho đến chuyên
                  nghiệp. Trường được trang bị với nhiều phòng học riêng biệt,
                  máy thu âm và hình để học sinh có một nơi học hiệu quả, tiện
                  nghi, tối tân và an toàn.{' '}
                </p>
              ) : (
                <p>
                  Doremi Music Lessons is the first professional
                  Vietnamese-American music teaching studio offering lessons for
                  a wide variety of musical instruments. We also offer studio
                  recording services at our in house studio equipped with the
                  latest recording equipment. Our store carries a vast selection
                  of beginner as well as professional musical equipment and
                  accessories.
                  <br></br>
                  <br></br>
                  Our goal is to provide the gift of music for the Vietnamese
                  and American communities of north Atlanta, Georgia. Our
                  facility is equipped with private lesson rooms and
                  surveillance systems to keep a safe and secure learning
                  environment for our students and customers. Our musically
                  trained and accredited staff will provide you with the most
                  effective and engaging learning experience.
                  <br></br>
                  <br></br>
                  Whether you are pursuing music as a hobby, an extracurricular
                  activity for your child or as aprofession, Doremi Music will
                  help guide you along the way.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
