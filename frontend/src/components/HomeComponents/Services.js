import React from 'react'

import curriculum from '../../assets/img/curriculum.jpg'
import facility from '../../assets/img/facility.jpg'
import perform from '../../assets/img/perform.jpg'
import teacher from '../../assets/img/teacher.jpg'

const Services = ({ lan }) => {
  return (
    <div className='services'>
      <div className=' container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            {lan ? `VÌ SAO CHỌN TRƯỜNG NHẠC DOREMI?` : <span>Why US?</span>}
          </h3>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-lg-3 mb-3 d-flex'>
              <div className='card rounded-0 flex-fill'>
                <img
                  src={curriculum}
                  className='card-img-top'
                  alt='curriculum'
                />
                {lan ? (
                  <div className='card-body'>
                    <h5 className='card-title'>GIÁO TRÌNH</h5>
                    <p className='card-text'>
                      Chương trình giảng dạy bao gồm: lý thuyết, thực hành &
                      trình diễn. Chúng tôi tin rằng nền tảng nhạc lý căn bản
                      vững chắc rất quan trọng đối với mọi nhạc sĩ. Vì nhạc lý
                      căn bản sẽ luôn được áp dụng trong mọi thể nhạc như nhạc
                      cổ điển cho tới nhạc cận đại. Trường có nhiều phương pháp
                      giảng dạy dể hiểu, sống động, thực tế và sẽ áp dụng phương
                      pháp phù hợp nhất cho mỗi học sinh.
                    </p>
                  </div>
                ) : (
                  <div className='card-body'>
                    <h5 className='card-title'>CURRICULUM</h5>
                    <p className='card-text'>
                      Our curriculum includes theory, application, and
                      performance. We believe that a solid foundation of basic
                      music theory is very important for any musician. With the
                      solid foundation of music theory, students can effectively
                      apply what they’ve learned to musical pieces ranging from
                      classical to contemporary. We offer many different
                      teaching techniques and will use the method that is most
                      effective and fun for our students.
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className='col-lg-3 mb-3 d-flex'>
              <div className='card rounded-0 flex-fill'>
                <img src={teacher} className='card-img-top' alt='teacher' />
                {lan ? (
                  <div className='card-body'>
                    <h5 className='card-title'>GIÁO VIÊN</h5>
                    <p className='card-text'>
                      Đội ngũ giáo viên chuyên nghiệp của chúng tôi tốt nghiệp
                      từ những trường âm nhạc như đại học Georgia State
                      University, đại học University of Georgia, nhạc viện
                      Atlanta và nhạc viện Sài Gòn. Các giáo viên của chúng tôi
                      thông thạo tiếng Việt và tiếng Anh và sẽ hỗ trợ tốt hơn
                      trong giao tiếp giữa học sinh, giáo viên và phụ huynh. Các
                      giáo viên của chúng tôi được đào tạo sư phạm để giảng dạy
                      từ lớp nhạc cơ bản tới nâng cao
                    </p>
                  </div>
                ) : (
                  <div className='card-body'>
                    <h5 className='card-title'>TEACHERS</h5>
                    <p className='card-text'>
                      Our professionally trained staffs are graduates from music
                      institutions such as Georgia State University, University
                      of Georgia, The Atlanta Institute of Music, and The Saigon
                      Music Conservatory. Our teachers are also bilingual and
                      are fluent in Vietnamese, English, and Spanish to better
                      aid in student, teacher, and parent communication. Our
                      teachers are also trained in the pedagogy of beginners as
                      well as advanced students.
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className='col-lg-3 mb-3 d-flex'>
              <div className='card rounded-0 flex-fill'>
                <img src={facility} className='card-img-top' alt='facility' />

                {lan ? (
                  <div className='card-body'>
                    <h5 className='card-title'>CƠ SỞ</h5>
                    <p className='card-text'>
                      Phòng học riêng biệt giúp cho các em học sinh đạt được
                      hiệu quả cao nhất với trải nghiệm một thầy-một trò. Camera
                      giám sát được trang bị cho từng phòng học & sẽ phát trực
                      tiếp qua phòng đợi nhằm đảm bảo an toàn cho học sinh.
                      Phòng học trang bị hầu hết các nhạc cụ như piano, guitar
                      hoặc trống cho học sinh sử dụng trong giờ học.
                    </p>
                  </div>
                ) : (
                  <div className='card-body'>
                    <h5 className='card-title'>FACILITY</h5>
                    <p className='card-text'>
                      Our studio rooms are very spacious while offering an
                      effective private one-on-one learning experience for our
                      students. Each room is equipped with video surveillance
                      cameras that can be seen from the lobby to insure that all
                      of our students are in a safe and secure learning
                      environment. Our teaching studios also offer most musical
                      instruments for students to use during their lesson, such
                      as pianos, guitars, and drums.
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className='col-lg-3 mb-3 d-flex'>
              <div className='card rounded-0 flex-fill'>
                <img src={perform} className='card-img-top' alt='perform' />
                {lan ? (
                  <div className='card-body'>
                    <h5 className='card-title'> TRÌNH DIỄN</h5>
                    <p className='card-text'>
                      Học sinh sẽ có cơ hội trình diễn cho giáo viên và phụ
                      huynh trong các chương trình âm nhạc của trường Doremi.
                      Học sinh sẽ có kinh nghiệm trình diễn trước khán giả là
                      giáo viên, phụ huynh và bạn học. Chúng tôi cũng tổ chức
                      chương trình hòa nhạc lớn hằng năm để giúp các em học sinh
                      có được trải nghiệm âm thanh, ánh sáng sân khấu chuyên
                      nghiệp với sự tán thưởng nồng nhiệt của khán giả trong
                      chương trình âm nhạc của năm.
                    </p>
                  </div>
                ) : (
                  <div className='card-body'>
                    <h5 className='card-title'>PERFORMANCES</h5>
                    <p className='card-text'>
                      The students will also get a chance to perform for faculty
                      and parents at our seasonal student recitals. Students
                      will get to experience the gratification of being able to
                      perform in front of an audience of teachers, parents, and
                      peers. We also host an annual concert, in which students
                      can enjoy the experience of performing under the bright
                      lights, in a big venue, and hearing the applause of a big
                      audience at our most spectacular show of the year.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
