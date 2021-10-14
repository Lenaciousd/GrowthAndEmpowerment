import React from 'react'

const ContactInfo = () => {
  return (
    <div className="container-contact" id="Contact">
      <h2>
        Contact Me
      </h2>

        <a href="mailto:lenoracare@gmail.com">
          <img className="icon" src="/assets/gmailIcon.png" />
        </a>

        <a href="https://www.linkedin.com/in/lenora-esquenazi">
          <img className="iconOther" src="/assets/linkedinLogo.png" />
        </a>

        {/*
        <a href="https://www.facebook.com/groups/1153363065126869">
        <img className="iconFacebook" src="/assets/facebookLogo.png" />
        </a> */}


    </div>
  )
}

export default ContactInfo;