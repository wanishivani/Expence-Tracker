import { Card } from "react-bootstrap";
import "./Products.modules.css";

import {useRef,useContext} from 'react';
import AuthContext from "../Auth/AuthContext";
export function Product() {
  const NewPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);
   const submitHandler=event=>{
    event.preventDefault();

    const enternewpassword = NewPasswordInputRef.current.value;

    fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBioGGFEkjafDlfi3KO8DrKky9eXgcEH9A"
    ,{
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enternewpassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(res => {  

        // history.replace('/')
      });
    };
  return (
    <Card style={{width:"500px",padding:'',backgroundColor:'aqua',textAlign:"center" ,border:''}}>
    <section className="classes.profile">
      <h1>Your User Profile</h1>
      <form className="classes.form" onSubmit={submitHandler}>
        <div className="control">
          <label htmlFor="new-password">New Password</label>
          <input
          type="password"
          id="new-password"
          minLength="7"
          ref={NewPasswordInputRef}
        />
        </div>
        <div className="action">
          <button>Change Password</button>
        </div>
      </form>
    </section>
    </Card>
  );
}
