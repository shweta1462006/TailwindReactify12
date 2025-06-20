import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="footer flex align-center justify-between sm:footer-horizontal h-30 bg-gray-600 text-white w-full bg-base-200 text-base-content p-20">
  <nav  >
    <div className='flex flex-col align-center justify-center'>
    <h6 className="footer-title uppercase  ">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a></div>
  </nav>
  <nav>
        <div className='flex flex-col align-center justify-center'>
    <h6 className="footer-title uppercase ">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a></div>
  </nav>
  <nav>
    <div className='flex flex-col align-center justify-center'>
    <h6 className="footer-title uppercase   ">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Marketing</a>
    </div>
  </nav>
    <nav>
    <div className='flex flex-col align-center justify-center'>
    <h6 className="footer-title uppercase  ">Newsletter</h6>
    <a className="link link-hover">Whatapp</a>
    <a className="link link-hover">E-mail</a>
    <a className="link link-hover">Telegram</a>
    <a className="link link-hover">Contact no.</a></div>
  </nav>

</footer>
    </div>
  )
}
