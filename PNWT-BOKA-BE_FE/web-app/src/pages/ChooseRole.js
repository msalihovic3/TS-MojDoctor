import { setRole } from '../redux/actions/userActions';
import { getMe } from "../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export const ChooseRole = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const email = useSelector(state => state.user.email);
    const userId  = useSelector(state => state.user.id)

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

    const imageLogo = {
        width: "25px",
        height: "25px",
        borderRadius: 7,
        marginTop: "100px",
        flex: 1
    }

    useEffect(() => {
        if(!userId) {
            dispatch(getMe(email));
        }
    },[]);

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
        
                <p style={{ marginTop: "1px", fontSize: "10pt", color: "red" }}>Choose your role</p>
                 <div>
                <img style={{ paddingTop:"95px" ,marginLeft:"50px", width:"200px", height:"200px", float:"left", color: "#FF8C00"  }} src="https://cdn-icons-png.flaticon.com/512/3774/3774293.png" onClick={() => {
                    dispatch(setRole("2", userId)).then(() => {
                        navigate('/login');
                    })
                }}/>
                <img style={{ paddingTop:"95px", paddingRight:"50px", width:"200px", height:"200px", float:"right", color: "#FF8C00"  }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHCOky0OPWwj_s3TIlzyCstLmEAuTDP7RCgE7_vSiMEMYMdO1oCgUs2-vCHwghkzoldEU&usqp=CAU"  onClick={() => {
                    dispatch(setRole("3", userId)).then(() => {
                        navigate('/login');
                    })
                }}/>
                </div>
            </div>
        </div>
    )
}