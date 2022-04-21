import React from 'react'
import "../style.css"
import contact_us from "./contact_us3.svg"

export const Form2 = () => {
  return (
    <div className="container">
    <div className="forms-container">
      <div className="contactUs">


        
        <form action="#" className="contact-us-form">
          <h2 className="title">Contact Us</h2>
          <div className="input-field">
            <i className="fas fa-envelope"></i>
            <input type="email" placeholder="Email id" required />
          </div>
          <div className="input-field">
            <i className="fas fa-phone fa-rotate-90"></i>
            <input type="text" placeholder="Phone no" pattern="[789][0-9]{9}" required/>
          </div>

          <div className="input_field_textarea">
            <i className="fas fa-comment-alt"></i>
            <textarea placeholder='Message'></textarea>
          </div>

          <input type="submit" value="SUBMIT" className="btn solid" />
          
        </form>
      </div>
    </div>

    <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>Contact Info</h3>
            
            <div className="contact-details">
                <div className="contact-icon">
                    <i className="fa fa-map-marker"></i> 
                </div>
                <p>Pet-e-care, Nashik</p>
            </div>
           
            <div className="contact-details">
                <div className="contact-icon">
                    <i className="fas fa-phone-alt"></i> 
                </div>
                <p>8668835360</p>
            </div>

            <div className="contact-details">
                <div className="contact-icon">
                    <i className="fa fa-envelope"></i> 
                </div>
                <p>petecare@gmail.com</p>
            </div>

          </div>
          <img src={contact_us} class="image" alt="" />
        </div>    

        </div> 

</div>

  )
}
