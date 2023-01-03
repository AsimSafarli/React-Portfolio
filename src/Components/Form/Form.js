import React from "react";
import "./Form.css"
function Form() {
  return (
    <>
      <div className="formmain">
        <div className="formdiv">
          <div><span className="span1" >Got a project in <span className="span2">mind?</span></span></div>
          <div><img src="Assets/Formox.png"/><img className="formicon" src="Assets/Formicon.png"/>  <img className="ellip" src="Assets/ellipse 3.png" /></div>
        </div>
        <form className="form">
            <div className="ymeal">
            <div className="yname">
            <label  for="yname">Your name</label>
          <input type="text"  name="yname" />
            </div>
        <div className="yemail">
        <label  for="yemail">Your email</label>
          <input type="text"  name="yemail" />
        </div>
            </div>

          <label>Your Message</label>
          <br></br>
          <textarea />
          <button className="formbutton" type="submit"><span>Send Message</span><ion-icon name="paper-plane-outline"></ion-icon></button>
        </form>
      </div>
    </>
  );
}

export default Form;
