
import { useSelector } from 'react-redux';
import { Card ,Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from "react-router";
import { signOut } from '../redux/actions/userActions'
import { declineReservation, getReservationsGuest } from '../redux/actions/reservationActions';

import {  getRoles } from '../redux/actions/eventActions';

export const Roles = () =>  {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const events = useSelector(state => state.event.eventsByRestaurant);
    const reservations =useSelector(state => state.reservation.reservationsGuest);
    const roles =useSelector(state => state.roles);
    const id = useSelector(state=> state.user.id);



    const divTop = {

        height: "45px",

    };

    const divRight = {
        height: "40px",
        width: "150px",
        borderLeft: "3px solid #52527a",
        float: "right",
        paddingTop: "1%"
    }

    const imageLogo = {
        width: "25px",
        height: "25px",
        borderRadius: 5,
        flex: 1
    };



    return (
        <div style={{ backgroundColor: "#78A4C1",height:"900px", margin:"0px"}}  >

            <Col  style={{ backgroundColor: "#78A4C1", margin:"0px"}}>
                <div style={divTop}>
                    <div style={{ float: "left", display: "flex", marginLeft: "30px", marginTop: "8px" }}>
                        {/* <img src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-amber-orange-solid-color-background.jpg"
                             loading="lazy"
                             style={imageLogo}
                             alt="" /> */}
                        <strong style={{ flex: 1, color: "white", marginLeft: "2px" }}>MojDoktor</strong>
                    </div>
                    <div style={divRight}>
                        <p style={{ color: "white", fontSize: "10pt"}} onClick={() => { dispatch(signOut()); navigate('/login')}} >LOG OUT</p>
                    </div>
                    <div style={divRight}>
                        <p style={{ color: "white",fontSize: "10pt" }} onClick={() => {navigate('/users');}}>ALL USERS</p>
                    </div>
                    <div style={divRight}>
                        <p style={{ color: "white", fontSize: "10pt" }} onClick={() => {navigate('/addEmployee');}}>ADD USER</p>
                    </div>

               
                  
                    <div style={divRight}>
                        <p style={{ color: "white",fontSize: "10pt" }} onClick={() => {navigate('/roles');}}>ALL ROLES</p>
                    </div>

                </div>
                <div style={{ borderBottom:"2px solid #52527a" , marginTop:"3%", marginLeft:'1%', marginRight:'1%' }}><p  style={{ width: '10rem', marginBottom:"0px", borderBottom:"2px solid red", color:'red', padding:'2px' }}>Roles</p></div>

                <div   style={{
                    opacity: '0.7',
                    padding: '10px',
                    backgroundColor: 'inherit',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    }}>
                  <Card  style={{ backgroundColor:"#f9f9f9",
            width: '60rem' , height:'18vh',  marginRight:"2%", borderRadius:"10px" , marginTop:"1%",  }} >
            <Row>
                <Col sm={8}  ><Card.Title style={{ margin:'15px',textAlign:"left"}} ><b> Name of role:</b></Card.Title>
                    <Card.Text style={{ margin:'15px',textAlign:"left"}}> ADMIN
                    </Card.Text>
                    <Card.Text style={{ margin:'15px',textAlign:"left"}}> Permisions: Users list, Patients list, Doctor lists, Add users
                    </Card.Text>
                </Col>
            
            </Row>
            
        </Card>
                </div>
                <div   style={{
                    opacity: '0.7',
                    padding: '10px',
                    backgroundColor: 'inherit',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    }}>
                  <Card  style={{ backgroundColor:"#f9f9f9",
            width: '60rem' , height:'18vh',  marginRight:"2%", borderRadius:"10px" , marginTop:"1%",  }} >
            <Row>
                <Col sm={8}  ><Card.Title style={{ margin:'15px',textAlign:"left"}} ><b> Name of role:</b></Card.Title>
                    <Card.Text style={{ margin:'15px',textAlign:"left"}}> PATIENT
                    </Card.Text>
                    <Card.Text style={{ margin:'15px',textAlign:"left"}}> Permisions:  Request list, Add request, Delete request, Edit request
                    </Card.Text>
                </Col>
            
            </Row>
            
        </Card>
                </div>
                <div   style={{
                    opacity: '0.7',
                    padding: '10px',
                    backgroundColor: 'inherit',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    }}>
                  <Card  style={{ backgroundColor:"#f9f9f9",
            width: '60rem' , height:'18vh',  marginRight:"2%", borderRadius:"10px" , marginTop:"1%",  }} >
            <Row>
                <Col sm={8}  ><Card.Title style={{ margin:'15px',textAlign:"left"}} ><b> Name of role:</b></Card.Title>
                    <Card.Text style={{ margin:'15px',textAlign:"left"}}> DOCROT
                    </Card.Text>
                    <Card.Text style={{ margin:'15px',textAlign:"left"}}> Permisions:  Patients list, Add patients, Add solution, Request list
                    </Card.Text>
                </Col>
            
            </Row>
            
        </Card>
                </div>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                    crossOrigin="anonymous"
                />
            </Col>
        </div>
    )
}
export default Roles;