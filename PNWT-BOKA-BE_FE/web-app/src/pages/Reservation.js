import { Button } from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useState , useEffect} from "react";
import { Request } from "../components/Request";
import { addEmployee, signOut, getNewEmployee, setRole, getUsers} from "../redux/actions/userActions";
import {addRequest} from "../redux/actions/reservationActions"
import Select from 'react-select';
import { getDoctors } from "../redux/actions/eventActions";

export const NewRequest = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [saveError, setSaveError] = useState(false);
    const [description, setDescription] = useState('');
    const [name, setName] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorPhoneNumber, setErrorPhoneNumber] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorName, setErrorName] = useState('');
    const id = useSelector(state=> state.user.id);
    const users = useSelector(state => state.event.events);
    const restaurant = useSelector(state => state.restaurant.restaurant);
    const [selectedValue, setSelectedValue] = useState();
    const options = []
    var role = 1;

    useEffect(() => {
      
            dispatch(getDoctors("doctors"));
      
   
    },[users]);
    
    users.forEach(element => {
        options.push({value:element["id"], label: element["name"]})
    });

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
                <div style={{ float: "left", display: "flex", marginLeft: "30px", marginTop: "8px" }}>
                    {/* <img src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-amber-orange-solid-color-background.jpg"
                        loading="lazy"
                        style={imageLogo}
                        alt="" /> */}
                    <strong style={{ flex: 1, color: "white", marginLeft: "2px" }}>MojDoktor</strong>
                </div>
                <div style={divRight}>
                    <p style={{ color: "white", fontSize: "10pt"}} onClick={() => { dispatch(signOut()); navigate('/login')}}>LOG OUT</p>
                </div>
                <div style={divRight}>
                    <p style={{ color: "white", fontSize: "10pt" }} onClick={() => {navigate('/userProfile');}}>MY PROFILE</p>
                </div>

          
                <div style={divRight}>
                    <p style={{ color: "white",fontSize: "10pt" }} onClick={() => {navigate('/newRequest');}}>NEW REQUEST</p>
                </div>
                <div style={divRight}>
                    <p style={{ color: "white",fontSize: "10pt" }} onClick={() => {navigate('/myRequest');}}>MY REQUESTS</p>
                </div>
                
            </div>
            <div style={{ borderBottom:"2px solid red" , marginTop:"3%", marginLeft:'1%', marginRight:'1%' }}><p  style={{ width: '10rem', marginBottom:"0px", borderBottom:"2px solid red", color:'red', padding:'2px' }}>New request</p></div>
           
           
            <div style={{justifyContent:'center', alignItems:'center', height: '100vh'}}>

       
                <div style={{float:"right", height:"100%", width: "200px", textAlign: "left", marginRight: "850px", marginTop: "100px", flex: 1 }}>

                    <Request 
                        name={name}
                    
                        
                     
                        description={description}
                        setName={setName}
                        setDescription={setDescription}
                    
                        errorName={errorName}
                 
                        errorPhoneNumber={errorPhoneNumber}
                    ></Request>
             

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
                    if (name.length < 2 || description.length < 5) {
                 
                        if (name.length < 2) {
                            setErrorName("Name has to be at least 2 caracters long.")
                        } else {
                            setErrorName("")
                        }
                        if (description.length < 5) {
                            setErrorPhoneNumber("Phone number has to be valid.")
                        } else {
                            setErrorPhoneNumber("")
                        }
                    }
                     else if (name && description) {
                        dispatch(addRequest(description,  id, selectedValue)).then(() => {
                            // dispatch(getNewEmployee(email)).then((id) => {
                            //     console.log("radi")
                            //     console.log(selectedValue)
                            //     dispatch(setRole(selectedValue, id));
                             alert('Employee added successfully.');
                            // })
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