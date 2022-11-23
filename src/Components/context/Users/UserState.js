import userContext from './userContext'
import { useState } from 'react';

const UserState = (props) => {


    const HandleLogin = async (userinfo) => {

        const response = await fetch("http://localhost:1983/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: userinfo.email, password: userinfo.password })
        });

        // we need to convert response into json ffor
        const json = await response.json();

        // console.log(json)

        if (json.success) {

            // !saving the auth-token to the local browser storage

            localStorage.setItem('token', json.authtoken);
            // props.showalert("Login successful", 'success')
        }
        return json.success
    }


    const HandleSignup = async (newuserinfo) => {

        // setprogress(30)
        const response = await fetch("http://localhost:1983/api/auth/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: newuserinfo.username, email: newuserinfo.email, password: newuserinfo.password })
        });

        // json contains success msg and auth-token
        // setprogress(80)
        const json = await response.json();

        // saving the authtoken
        if (json.success) {
            console.log("Signup successful");



            // giving some delay time as this function is not waiting for the token to get stored in localstorage and navigates to '/'.

            setTimeout(() => {
                localStorage.setItem('token', json.authtoken);
            }, 500);

        }
        // setprogress(100)

        return json.success;
    }

    return (
        <userContext.Provider value={{ HandleLogin, HandleSignup }}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserState;