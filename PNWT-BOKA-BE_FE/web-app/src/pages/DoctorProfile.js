import { Button } from "../components/Button";
import { useState } from 'react';
import { updateUserProfile } from "../redux/actions/userActions";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router";
import { signOut, getMe, getAllForUser } from "../redux/actions/userActions";
export const DoctorProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
 
    const [contactError, setContactError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [saveError, setSaveError] = useState(false);
    const initialemail = useSelector(state => state.user.email);
    const [email, setEmail] = useState(initialemail || '');
    const initialname = useSelector(state => state.user.name);
    const initialcontact = useSelector(state => state.user.phoneNumber)
    const initialJMBG = useSelector(state => state.user.jmbg)
    const [name, setName] = useState(initialname || '');
    const [phoneNumber, setPhoneNumber] = useState(initialcontact || '');
    const [jmbg, setJmbg] = useState(initialJMBG || '');

    function onSave() {
        if (email && name && phoneNumber ) {
            dispatch(updateUserProfile({
                email: initialemail,
                 name, 
                 phoneNumber,
                  jmbg
            })).then(() => {  dispatch(getMe(email)).then((id) => {
                dispatch(getAllForUser(id)).then((data) => {
                 
                    setEmail(data.email)
                    setPhoneNumber(data.phoneNumber)
                    setJmbg(data.jmbg)
                    setName(data.name)
                })
            });  }).catch(() => {
                setSaveError(true);
            })
        }
    }
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
        marginTop: "30px",
        color:"black"

    }

    const divTop = {
        borderColor: "red",
        height: "40px",
        backgroundColor: "#78A4C1"
    };

    const divRight = {
        height: "40px",
        width: "150px",
        borderLeft: "3px solid #52527a",
        float: "right"
    }

    const imageLogo = {
        width: "25px",
        height: "25px",
        borderRadius: 7,
        flex: 1
    };

    return (
        <div style={{ backgroundColor: "#78A4C1" }}>
                <div style={divTop}>
                <div style={{ float: "left", display: "flex", marginLeft: "30px", marginTop: "28px" }}>
                    {/* <img src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-amber-orange-solid-color-background.jpg"
                        loading="lazy"
                        style={imageLogo}
                        alt="" /> */}
                    <strong style={{ flex: 1, color: "white", marginLeft: "2px" }}>MojDoktor</strong>
                </div>
                <div style={divRight}>
                    <p style={{ color: "white", fontSize: "10pt",marginTop: "10px"}} onClick={() => { dispatch(signOut()); navigate('/login')}} >LOG OUT</p>
                </div>
                <div style={divRight}>
                    <p style={{ color: "white", fontSize: "10pt",marginTop: "10px" }} onClick={() => {navigate('/doctorProfile');}}>DOCTOR PROFILE</p>
                </div>

                <div style={divRight}>
                    <p style={{ color: "white",fontSize: "10pt",marginTop: "10px" }}
                       onClick={() => {
                           navigate('/doctorRequests');
                       }}>ALL REQUESTS</p>
                </div>

                <div style={divRight}>
                    <p style={{ color: "white",fontSize: "10pt",marginTop: "10px" }} onClick={() => {navigate('/addPatient');}}>ADD PATIENT</p>
                </div>
          

            </div>
            <div style={{justifyContent:'center', alignItems:'center', height: '100vh'}}>
       
                <div style={{justifyContent:"center", alignItems:'center', marginLeft:"450px", height:"100%", width: "200px", textAlign: "left", marginTop: "100px", flex: 1 }}>
              
               
                    <input refs="name" type="text" size="30" placeholder="First name" style={{...inputField1, borderWidth: nameError ? "thick" : "thin", borderColor: nameError ? 'red' : 'black' }} value={name} onChange={(e) => {
                        setName(e.target.value);
                        setSaveError(false);
                        if (e.target.value.length < 2)
                        {
                            setNameError(true);
                        } else {
                            setNameError(false);
                        }
                        }}/>

               


                    <input refs="phoneNumber" type="text" size="30" placeholder="PhoneNumber" style={{...inputField2, borderWidth: contactError ? "thick" : "thin", borderColor: contactError ? 'red' : 'black' }} value={phoneNumber} onChange={(e) => {
                        setPhoneNumber(e.target.value);
                        setSaveError(false);
                        if (!e.target.value.match(/^[0-9()-]+$/) || e.target.value.length < 4)
                        {
                            setContactError(true);
                        } else {
                            setContactError(false);
                        }
                        }} />
                    
                    <input refs="jmbg" type="text" size="30" placeholder="JMBG" style={{...inputField2, borderWidth: contactError ? "thick" : "thin", borderColor: contactError ? 'red' : 'black' }} value={jmbg} onChange={(e) => {
                        setJmbg(e.target.value);
                        setSaveError(false);
                        if (!e.target.value.match(/^[0-9()-]+$/) || e.target.value.length < 4)
                        {
                            setContactError(true);
                        } else {
                            setContactError(false);
                        }
                        }} />

                    <input refs="email" type="text" size="30" placeholder="Email" style={inputField2}  value={email} onChange={(e) => setEmail(e.target.value)} disabled={true}/>

                <div> 
                <Button text="UPDATE" style={{marginTop: "30px",marginLeft: "220px"}} onClick={() => onSave()}></Button>
                {saveError && <div style={{
                    marginLeft: '160px', marginRight: '-230px',  color: 'white'}}><small>Unable to update profile. Please try again.</small>
                    </div>}
                </div>

                </div>
            </div>
        </div>
    )
}