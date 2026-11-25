import React, { useState } from 'react'
import ClinicButton from './ClinicButton'

function ClinicLogin() {

   const [doYouHaveAnAccount, setDoYouHaveAnAccount] = useState(true);
   

   const [userName, setUserName] = useState("");
   const [password, setPassword] = useState("");
   function navigateBetweenCreateAccountAndLogin() {
     setDoYouHaveAnAccount(!doYouHaveAnAccount);
   }
   function LoginAction(){
    alert("This is your username:"+ userName + " and this is your password: "+ password );
   }
  return (
    <>
    { doYouHaveAnAccount ? (
                    <div style={{border:"3px solid blue", marginTop:"190px"}}>
                        <label>UserName:</label>
                        <input type="text" onChange={e=> setUserName(e.target.value)} placeholder='Enter Your username'/><br/>
                        <label>Password:</label>
                        <input type="password" onChange={e=> setPassword(e.target.value)} /><br/>
                        <ClinicButton buttonLabel="LOGIN" onClickButton={LoginAction}/> <br/>
                        <label>New here? </label>
                        <ClinicButton buttonLabel="Create Account" onClickButton={navigateBetweenCreateAccountAndLogin}/>
                    </div>
    ):(
            <div style={{border:"3px solid indigo", marginTop:"190px"}}>
                <label>Patient ID:</label>
                <input type="text" placeholder='Enter Your Patient ID'/><br/>
                <label>Email:</label>
                <input type="email" /><br/>
                <label>Password:</label>
                <input type="password" /><br/>
                <label>Confirm Password:</label>
                <input type="password" /><br/>
                <ClinicButton buttonLabel="LOGIN"/> <br/>
                 <label>Already have an account?? </label>
                <ClinicButton buttonLabel="Sign In" onClickButton={navigateBetweenCreateAccountAndLogin}/>
            </div>
    )
     }
    </>
  )
}

export default ClinicLogin