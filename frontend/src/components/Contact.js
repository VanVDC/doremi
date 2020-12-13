import React from 'react'

const Contact = () => {
  return (
    <div className='container pt-2 pb-5'>
      <div className='section-header pt-5 pb-5 text-center'>
        <h3 className='section-title'>
          <span>Contact </span>Us
        </h3>
        <h6 className='section-subtitle mr-auto ml-auto'>
          If you have any questions, comments or concerns, please email us your
          comments and we will get back to you ASAP. Thank you for visiting
          Doremi Music!
        </h6>
      </div>
      <div className='section-content'>
        <div className='row'>
          <div className='col-md-9 col-lg-7 mr-auto ml-auto'>
            <form
              action='https://formspree.io/TNdoremi@gmail.com '
              method='POST'
            >
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control rounded-0'
                  aria-describedby='emailHelp'
                  placeholder='Enter Name...'
                />
              </div>
              <div className='form-group'>
                <input
                  type='email'
                  className='form-control rounded-0'
                  aria-describedby='emailHelp'
                  placeholder='Enter email...'
                />
              </div>
              <div className='form-group'>
                <textarea
                  className='form-control rounded-0'
                  rows='5'
                  placeholder='Enter Message...'
                />
              </div>
              <div className='form-group text-center'>
                <button
                  type='submit'
                  className='btn btn-block btn-primary rounded-0 mr-auto ml-auto'
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
