import userContext from './UserContext.js'
import { useState } from 'react';

const UserState = (props) => {

    // progress number for the loading bar is here.
    const [progress, setprogress] = useState(30);

    const [Acuserinfo, setAcuserinfo] = useState({ name: "", email: "", mobile: "", adress: "" });

    const [userorders, setUserorders] = useState([]);

    const [neworderlist, setNeworderlist] = useState([]);


    

    let mohit=[];




    return (
        <userContext.Provider value={{ progress, setprogress, Acuserinfo, setAcuserinfo, userorders, setUserorders, neworderlist, setNeworderlist ,mohit}}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserState;