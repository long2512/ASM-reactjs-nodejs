import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-[#f2d1a6] py-32 mt-32 pl-32">
          <div className="container grid grid-cols-4 max-w-6xl mx-auto gap-20">
            <div className="colum-inner leading-10 ">
              <h1 className="text-2xl text-black font-medium py-6">
                CUSTOMER SERVICE
              </h1>
              <p>Help & Contact</p>
              <p>Returns & Refunds</p>
              <p>Online Stores</p>
              <p>Terms & Conditions</p>
            </div>
            <div className="colum-inner leading-10">
              <h1 className="text-2xl text-black font-medium py-6">COMPANY</h1>
              <p>About us</p>
              <p>Blog</p>
              <p>Order Tracking</p>
              <p>FAQs</p>
              <p>Contact</p>
              <p>Login</p>
            </div>
            <div className="colum-inner leading-10">
              <h1 className="text-2xl text-black font-medium py-6">SOCIAL MEDIA</h1>
              <p>Twitter</p>
              <p>Instagram</p>
              <p>Tumblr</p>
              <p>Pinterest</p>
            </div>
            <div className="colum-inner leading-10">
              <h1 className="text-2xl text-black font-medium py-6">ARCHIVE</h1>
              <p>Clay</p>
              <p>Design</p>
              <p>New</p>
              <p>Plaster</p>
              <p>Vision</p>
            </div>
          </div>
        </footer>
      );
}

export default Footer