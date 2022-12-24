import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDoctors } from '../redux/actions/eventActions';
import {useNavigate, useParams} from "react-router";
import {getUser, signOut} from "../redux/actions/userActions";
import { addNewSolution, getRestaurans , updateRestaurant} from '../redux/actions/restaurantActions';
import { AddSolutions } from "../components/AddSolutions";
import { Button } from "../components/Button";

export const RequestDoctor = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {restaurantId} = useParams();
    console.log(restaurantId)
    const restaurants = useSelector(state => state.restaurant.restaurants);
    const [res, setRes] = useState(restaurants || []);
    const [saveError, setSaveError] = useState(false);
    var [description, setDescription] = useState('');
    var [title, setTitle] = useState('');
    const [errorPhoneNumber, setErrorPhoneNumber] = useState('');
    const [errorName, setErrorName] = useState('');
    var solution=""
    var solutionId=null
    var name=""
    var email=""
    var descriptionRequest=""
    var jmbg=""
    var phoneNumber=""
    useEffect(() => {
      
            dispatch(getRestaurans())
      restaurant=res
        
    },[restaurants]);

    let restaurant = {};

  
    if (restaurants) {  
        restaurant = restaurants.find((item) => item.id === restaurantId);
        console.log(restaurants)
        console.log(restaurant)
        // title =restaurant.solution.title  
        if ( restaurant){
           name=restaurant.user.name
           email=restaurant.user.email
           descriptionRequest=restaurant.description
            jmbg=restaurant.user.jmbg
            phoneNumber=restaurant.user.phoneNumber
            if(restaurant.solution){
        solution =restaurant.solution.description  
        solutionId =restaurant.solution.id  }
    }
    }

    const divTop = {
        height: "40px",

    };


    const imageLogo = {
        width: "25px",
        height: "25px",
        borderRadius: 5,
        flex: 1
    };
    const divRight = {
        height: "40px",
        width: "150px",
        borderLeft: "3px solid #52527a",
        float: "right"
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
                {/* <div style={divRight}>
                    <p style={{ color: "white",fontSize: "10pt",marginTop: "10px"}} onClick={() => {navigate('/restaurants');}}>ALL LOCALS</p>
                </div> */}

            </div>
            <div style={{ borderBottom:"2px solid red" , marginTop:"3%", marginLeft:'1%', marginRight:'1%' }}><p  style={{ width: '10rem', marginBottom:"0px", borderBottom:"2px solid red", color:'red', padding:'2px' }}>Add solution for request</p></div>

            <div style={{ height: '95vh',  display: 'flex', justifyContent:'space-between', marginLeft:"10%", paddingTop:'5%'}}>
            <Card style={{ width: '80rem' , height:'80%',  marginLeft:"2%" }} >
               <Card.Body>
                   
                    <Card.Title>{"Patient: "+name}</Card.Title>
                    <Card.Text>
                    {"Email: "+email}
                    </Card.Text>
                    <Card.Text>
                    {"Phone: "+phoneNumber}
                    </Card.Text>
                    <Card.Text>
                    {"JMBG: "+jmbg}
                    </Card.Text>
                    <h6>{"Description: "+ descriptionRequest} </h6>
                    <h6>{"Solution: "+ solution} </h6>
               <div style={{  marginLeft: "8%" }}>
                        <div style={{  textAlign: "left",  marginTop: "10px" }}>

                            <AddSolutions 
                                title={title}
                                description={description}
                                setTitle={setTitle}
                                setDescription={setDescription}
                            
                                errorName={errorName}
                        
                                errorPhoneNumber={errorPhoneNumber}
                            ></AddSolutions>


                        <div> 


                        <Button text="SAVE NEW SOLUTION" style={{marginTop: "30px", marginLeft: "38vh", width:"30%", borderRadius:"1px", height:"5vh", color:"white"}} onClick={() => {
                           
                            if (title.length < 2 || description.length < 5) {
                        
                                if (title.length < 2) {
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
                            else if ( solution && title && description) {
                                console.log("okkk")
                                console.log(title)
                                console.log(solution)
                                dispatch(updateRestaurant(   description,
                                    title,
                                    restaurantId, solutionId)).then(() => {
                                    restaurant = dispatch(getRestaurans)
                                     alert('Employee added successfully.');
                                    // })
                                }).catch(() => setSaveError("Something went wrong. Employee can't be created."))
                            } else{
                                dispatch(addNewSolution(description,  title, restaurantId)).then(() => {
                              
                                     alert('Solution added successfully.');
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
                    </Card.Body>

 
            </Card>

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
export default RequestDoctor;