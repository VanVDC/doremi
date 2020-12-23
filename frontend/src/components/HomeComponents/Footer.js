import React from 'react'

const Footer = () => {
  const currentDate = new Date()
  return (
    <div className='bottom-footer pt-3 pb-3 text-center'>
      <small>
        Copyright &copy; {currentDate.getFullYear()} Doremi Music Lessons
      </small>
    </div>
  )
}

export default Footer
