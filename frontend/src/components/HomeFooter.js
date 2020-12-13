import React from 'react'

const HomeFooter = () => {
  return (
    <footer className=''>
      <div className='container text-light pt-5'>
        <div className='row d-flex justify-content-around'>
          <div className='col-sm-6 col-md-6 col-lg-4 mb-5'>
            <div className='footer-title'>
              <h6>Norcross Location</h6>
            </div>
            <div className='footer-content'>
              <p className='text-muted'>
                <small>
                  Address : 5430 Jimmy Carter Blvd, Norcross, GA 30093
                </small>
              </p>
              <p className='text-muted'>
                <small>Phone : (678) 343-1534</small>
              </p>
              <p className='text-muted'>
                <small>E-mail : tndoremi@gmail.com</small>
              </p>
            </div>
          </div>

          <div className='col-sm-6 col-md-6 col-lg-3 mb-5'>
            <div className='footer-title'>
              <h6>Suwanee Location</h6>
            </div>
            <div className='footer-content'>
              <p className='text-muted'>
                <small>
                  Address : 302 Satellite Blvd Ste C225, Suwanee, GA 30024
                </small>
              </p>
              <p className='text-muted'>
                <small>Phone : (404) 917-3348</small>
              </p>
              <p className='text-muted'>
                <small>E-mail : tndoremi@gmail.com</small>
              </p>
            </div>
          </div>
          <div className='col-sm-6 col-md-6 col-lg-3 mb-5'>
            <div className='footer-title'>
              <h6>Connect with Us</h6>
            </div>
            <div className='footer-content'>
              <div className='social-media mt-4'>
                <a
                  href='https://www.facebook.com/doremimusiclesson/?ref=page_internal'
                  className='text-light'
                >
                  <i className='fab fa-facebook-f mr-4' />
                </a>
                <a
                  href='https://www.youtube.com/channel/UCqrVTX-uBHAf9WYyHpxs3JA'
                  className='text-light'
                >
                  <i className='fab fa-youtube mr-4' />
                </a>
                <a
                  href='https://www.yelp.com/biz/doremi-music-lessons-norcross'
                  className='text-light'
                >
                  <i className='fab fa-yelp mr-4' />
                </a>
                <a
                  href='https://www.google.com/maps/place/DoReMi+Music+Lessons/@33.9066827,-84.2070231,15z/data=!4m7!3m6!1s0x0:0xa1afc6068030cbde!8m2!3d33.9066827!4d-84.2070231!9m1!1b1'
                  className='text-light'
                >
                  <i className='fab fa-google' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default HomeFooter
