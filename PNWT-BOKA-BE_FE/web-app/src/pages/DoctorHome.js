import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router";
import { signOut } from "../redux/actions/userActions";
export const DoctorHome = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const divTop = {

        height: "45px",

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
        borderRadius: 5,
        flex: 1
    };

  

    return (
        <div style={{ backgroundColor:"#78A4C1" }}>
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
            <div style={{ borderBottom:"2px solid red" , marginTop:"3%", marginLeft:'1%', marginRight:'1%' }}><p  style={{ width: '10rem', marginBottom:"0px", borderBottom:"2px solid red", color:'red', padding:'2px' }}>Dashboard</p></div>
       
 <div style={{ height: '95vh',  display: 'flex', justifyContent:'space-between', margin:"2%", paddingTop:'5%'}}>
         

</div>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossOrigin="anonymous"
/>
        </div>
        
    )
}
export default DoctorHome;