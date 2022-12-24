import { Button } from "../components/Button";
import { createUser } from '../redux/actions/userActions';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useState } from "react";
import { HaveAccountComponent } from "../components/HaveAccountComponent";

export const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [loginError, setLoginError] = useState(false);
    const [repeatedPasswordError, setRepeatedPasswordError] = useState('');
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
        marginTop: "35px"
    };

    const inputField2 = {
        height: "40px",
        width: "400px",
        marginLeft: "100px",
        borderRadius: 10,
        marginTop: "30px"
    };

    const imageLogo = {
        width: "25px",
        height: "25px",
        borderRadius: 7,
        marginTop: "15px",
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
                    <strong style={{ flex: 1, marginLeft: "2px", marginTop: "15px" }}> MojDoktor </strong>
                </div>
                <h1 style={{ marginBottom: "1px" }}>Welcome to MojDoktor</h1>
                <p style={{ marginTop: "1px", fontSize: "10pt" }}>Say hello to easy booking</p>
                <input refs="name" type="text" size="30" placeholder="Name" style={inputField1} value={name} onChange={(e) => {setName(e.target.value); }} />
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
                <input type="phoneNumber" name="text" placeholder="Phone number" style={inputField2} value={phoneNumber} onChange={(e) => {setPhoneNumber(e.target.value); }}></input>
                <p style={{ textAlign: "left", marginLeft: "100px", fontSize: "10pt", color: "#FF8C00" }}></p>
                <Button text = "Sign up" onClick={() => {
                    if (email && password) {
                        dispatch(createUser(name,email, password,phoneNumber)).then(() => {
                            navigate('/role');
                        }).catch(() => {setLoginError(true)});
                    }

                }}></Button>
                <HaveAccountComponent navigate={() => navigate('/login')}></HaveAccountComponent>
            </div>
        </div>
    )
}