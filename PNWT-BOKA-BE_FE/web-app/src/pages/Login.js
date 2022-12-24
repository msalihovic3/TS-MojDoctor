import { Button } from "../components/Button";
import { getUser, getMe, getAllForUser } from '../redux/actions/userActions';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useState } from "react";
import {findRestaurantById} from "../redux/actions/restaurantActions";

export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');
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

    const inputField1 = {
        height: "40px",
        width: "400px",
        marginLeft: "100px",
        borderRadius: 10,
        marginTop: "55px"

    }

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
    console.log(user)
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
                <p style={{ marginTop: "1px", fontSize: "10pt" }}></p>
                <input refs="email" type="text" size="30" placeholder="Email" style={inputField1} value={email} onChange={(e) => {setEmail(e.target.value); setLoginError(false)}} />
                <input type="password" name="password" placeholder="Password" style={inputField2} value={password} onChange={(e) => {setPassword(e.target.value); setLoginError(false)}}></input>
                <p style={{ textAlign: "left", marginLeft: "100px", fontSize: "10pt", color: "red" }}  onClick={() => {
                     navigate('/changePassword');
                }} >Forgot password?</p>
                <Button text = "Log In" onClick={() => {
                    if (email && password) {
                        dispatch(getUser(email, password)).then(() => {
                            alert('sent mail with verification code');
                            navigate('/confirmLogin');
                           
                        }).catch(() => {setLoginError(true)});
                    }   

                }}></Button>
                {loginError ? (<div><br/><small>Invalid combination of email and password. Please try again.</small></div>) : (<div><br/><small>Please login.</small></div>)}
                <div style={{ marginTop: "120px" }}>
                    <p style={{ textAlign: "left", marginLeft: "20px", fontSize: "10pt", display: "inline" }}>Don't have an account?</p>
                    <p style={{ display: "inline", marginRight: "380px", fontSize: "10pt", color: "#BB1B28" }} onClick={() => navigate('/signup')}> Sign Up</p>
                </div>

            </div>
        </div>
    )
}