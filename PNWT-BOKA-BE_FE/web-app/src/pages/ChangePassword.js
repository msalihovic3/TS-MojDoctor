import { Button } from "../components/Button";
import { createUser, getAllForUser, getMe, updateUser, resetPassword } from '../redux/actions/userActions';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useState } from "react";

export const ChangePassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');
    const [repeatedPasswordError, setRepeatedPasswordError] = useState('');
    const [changePasswordError, setChangePasswordError] = useState('');
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
                <p style={{ marginTop: "1px", fontSize: "10pt" }}>Say hello to easy booking</p>
                <input refs="email" type="text" size="30" placeholder="Email" style={inputField2} value={email} onChange={(e) => {setEmail(e.target.value); }} />
                <input type="password" name="password" placeholder="Password" style={inputField2} value={password} onChange={(e) => {setPassword(e.target.value); }}></input>
                <input refs="repeatedPassword" type="password" name="repeatedPassword" placeholder="Repeat password" style={inputField2} value={repeatedPassword} onChange={(e) => {
                    setRepeatedPassword(e.target.value); 
                    if (repeatedPassword == password) {
                        setRepeatedPasswordError('');
                    }
                    else {
                        setRepeatedPasswordError('Validation: Field Repeat Password must have the same value as the Password field!');
                    }
                    }}></input>
                    {repeatedPasswordError && <small>{repeatedPasswordError}</small>}
                <p style={{ textAlign: "left", marginLeft: "100px", fontSize: "10pt", color: "#FF8C00" }}></p>
                <Button text = "Change password" style = {{width: '99px', margin: 'auto'}}onClick={() => {
                    if (email && password && repeatedPassword) {
                        dispatch(getMe(email)).then((userId) => {
                            dispatch(getAllForUser(userId)).then((payload) => {
                                dispatch(updateUser({
                                   
                                    email: payload.email,
                
                                    new_password: password,
                                    confirm_new_password: repeatedPassword
                                })).then(() => {
                                    alert('Confirm new password on mail.');
                                    navigate('/login');
                                }).catch(() => {setChangePasswordError(true)});
                            })                            
                        });
                    }

                }}></Button>
               {changePasswordError ? (<div><br/><small>Error: Password is not changed.</small></div>) : (<div><br/><small></small></div>)}

            </div>
        </div>
    )
}