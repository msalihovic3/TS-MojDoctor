import { Button } from "../components/Button";
import {  getAllForUser, getMe, getConfirm } from '../redux/actions/userActions';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useState } from "react";

export const ConfirmLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [loginError, setLoginError] = useState(false);
    const divBackground = {
        width: "600px",
        backgroundColor: "white",
        height: "650px",
        borderRadius: 10,
        marginTop: "50px",
        marginLeft: "450px"

    };
    const container = {
        display: 'grid',
        marginTop: "50px"
    };

    const inputField2 = {
        height: "40px",
        width: "400px",
        marginLeft: "100px",
        borderRadius: 10,
        marginTop: "30px"

    }

    const imageLogo = {
        width: "25px",
        height: "25px",
        borderRadius: 7,
        marginTop: "100px",
        flex: 1
    }

    return (
        <div style={divBackground}>

            <div style={container}>
                <div style={{ display: "flex", margin: "auto" }}>
                    {/* <img src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-amber-orange-solid-color-background.jpg"
                         loading="lazy"
                         style={imageLogo}
                         alt="" /> */}
                    <strong style={{ flex: 1, marginLeft: "2px", marginTop: "100px" }}> MojDoktor </strong>
                </div>
                <h1 style={{ marginBottom: "1px" }}>Welcome to MojDoktor</h1>
                <input refs="email" type="text" size="30" placeholder="Email" style={inputField2} value={email} onChange={(e) => {setEmail(e.target.value); }} />
               
                <input type="text" size="30" placeholder="Code" style={inputField2} value={code} onChange={(e) => {setCode(e.target.value); }} />
             
               
                <p style={{ textAlign: "left", marginLeft: "100px", fontSize: "10pt", color: "#FF8C00" }}></p>
                <Button text = "Confirm Login" style = {{width: '99px', margin: 'auto'}}onClick={() => {
                    if (email ) {
                           
                        dispatch(getConfirm(code)).then(() => {
                         
                            dispatch(getMe(email)).then((id) => {
                                dispatch(getAllForUser(id)).then((data) => {
                                 
                                    if (data.roles[0].id === 1 ) {
                                        navigate('/adminHome');
                                     
                                    } else if( data.roles[0].id===2) {
                                        navigate('/doctorHome');
                                    }else{
                                        navigate('/patientHome');
                                    }
                                })
                            });
                        }).catch(() => {setLoginError(true)});
                      
                    }

                }}></Button>
           
            </div>
        </div>
    )
}