import React from 'react'
import './footer.scss'

export default function Footer() {
  return (
    <footer className='footer'>
      <img onClick={() => window.location.reload()} className="footer__logo" src="./logo.svg" alt="" />
    </footer>
  )
}
