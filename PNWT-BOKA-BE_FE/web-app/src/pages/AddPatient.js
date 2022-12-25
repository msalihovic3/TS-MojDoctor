import { Button } from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useState } from "react";
import { AddEmployeeInputs } from "../components/AddEmployeeInputs";
import { addEmployee, signOut, getNewEmployee, setRole, setRoleAdmin} from "../redux/actions/userActions";
import Select from 'react-select';

export const AddPatient = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [saveError, setSaveError] = useState(false);
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorPhoneNumber, setErrorPhoneNumber] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorName, setErrorName] = useState('');
    const isDoctor = useSelector(state => state.user.isDoctor);
    const restaurant = useSelector(state => state.restaurant.restaurant);
    const [selectedValue, setSelectedValue] = useState();
    const options = [{value:3, label: "Patient"}]
    var role = 1;
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
    };

    const imageLogo = {
        width: "25px",
        height: "25px",
        borderRadius: 7,
        flex: 1
    };
    const inputField = {
        height: "40px",
        width: "400px",
        marginLeft: "105px",
        borderRadius: 10,
        marginTop: "30px",
        color:"black"

    }
   
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
            <div style={{ borderBottom:"2px solid red" , marginTop:"3%", marginLeft:'1%', marginRight:'1%' }}><p  style={{ width: '10rem', marginBottom:"0px", borderBottom:"2px solid red", color:'red', padding:'2px' }}>Add user</p></div>
           
           
            <div style={{justifyContent:'center', alignItems:'center', height: '100vh'}}>

       
                <div style={{float:"right", height:"100%", width: "200px", textAlign: "left", marginRight: "850px", marginTop: "100px", flex: 1 }}>

                    <AddEmployeeInputs 
                        name={name}
                        password={password} 
                        email={email} 
                        phoneNumber={phoneNumber}
                        setName={setName}
                        setPassword={setPassword} 
                        setEmail={setEmail} 
                        setPhoneNumber={setPhoneNumber}
                        errorEmail={errorEmail}
                        errorName={errorName}
                        errorPassword={errorPassword}
                        errorPhoneNumber={errorPhoneNumber}
                    ></AddEmployeeInputs>
             

                <div> 
            <div style={inputField}>
                <Select 
                   options={options} id='select'
                value={options.find(obj => obj.value === selectedValue)}
                 onChange={(e) => {
                    setSelectedValue(e.value);
                    role= e.value
          }}
          />
          </div>

                <Button text="ADD" style={{marginTop: "30px",marginLeft: "230px"}} onClick={() => {
                    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) || password.length < 8
                    || name.length < 2 || phoneNumber.length < 5) {
                        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
                            setErrorEmail("Email is not valid email.")
                        } else {
                            setErrorEmail("")
                        }
                        if (password.length < 8) {
                            setErrorPassword("Password has to be at least 8 caracters long.")
                        } else {
                            setErrorPassword("")
                        }
                        if (name.length < 2) {
                            setErrorName("Name has to be at least 2 caracters long.")
                        } else {
                            setErrorName("")
                        }
                        if (phoneNumber.length < 5) {
                            setErrorPhoneNumber("Phone number has to be valid.")
                        } else {
                            setErrorPhoneNumber("")
                        }
                    }
                     else if (name && email && password && phoneNumber) {
                        dispatch(addEmployee(name,email,password,phoneNumber, restaurant.id)).then(() => {
                            dispatch(getNewEmployee(email)).then((id) => {

                                dispatch(setRoleAdmin(selectedValue, id));
                                alert('Employee added successfully.');
                            })
                        }).catch(() => setSaveError("Something went wrong. Employee can't be created."))
                    } 
                }}></Button>
                </div>
                {saveError && <div style={{
                    float:"right",  color: 'white', marginRight: "-230px", marginTop: "15px"}}><small>{saveError}</small>
                    </div>}
                </div>
            </div>
        </div>
    )
}