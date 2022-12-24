import { Card, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers} from '../redux/actions/eventActions';
import { useNavigate } from "react-router";
import { signOut } from "../redux/actions/userActions";
import { deleteUser, getRequestsAllGuest } from '../redux/actions/reservationActions';

export const AllUsers = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const events = useSelector(state => state.event.events);
    const idRestaurant = useSelector(state => state.user.idRestaurant);
    useEffect(() => {
        
            dispatch(getUsers());
      
   
    },[]);

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


    const names = []
  
    events.forEach((data) => {

            names.push(<Card  style={{ backgroundColor:"#f9f9f9",
            width: '60rem' , height:'24vh',  marginRight:"2%", paddingLeft:"2%", paddingBottom:"2%", borderRadius:"10px" , marginTop:"1%",  }} >
            <Row>
                <Col sm={8}  ><Card.Title style={{ margin:'15px',textAlign:"left"}} ><b> Name: {data.name}</b></Card.Title>
                <Card.Text style={{ margin:'15px',textAlign:"left"}}>  Role: {data.roles[0].name}
                    </Card.Text>
                    <Card.Text style={{ margin:'15px',textAlign:"left"}}> <Row>< Col style={{ borderRight: "3px solid #52527a",}} sm={4} >Email {data.email} </Col> < Col style={{ borderRight: "3px solid #52527a",
        }} sm={3} >JMBG: {data.jmbg} </Col>  <Col sm={4} >Phone: {data.phoneNumber}</Col></Row>
                    </Card.Text>
                   
                </Col>
                <Col sm={2} style={{ marginTop:'60px'}}>
                    <Row style={{ marginLeft:'10px'}} > <label style={{ borderBottom:'2px solid black',paddingBottom:'20px' }} onClick={() => {
                       dispatch(deleteUser(data.id)).then(() => {
                        dispatch(getUsers());
                       }).catch(() => {});
                    }}>DELETE</label></Row>
                </Col>
            </Row>
        </Card>)
    

    })

    const names1 = []

   

    return (
        <div style={{ backgroundColor:"#78A4C1",  height:'100vh'}}>
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
            <div style={{ borderBottom:"2px solid red" , marginTop:"3%", marginLeft:'1%', marginRight:'1%' }}><p  style={{ width: '10rem', marginBottom:"0px", borderBottom:"2px solid red", color:'red', padding:'2px' }}>All users</p></div>
       
            <div   style={{
                    opacity: '0.7',
                    padding: '10px',
                    backgroundColor: 'inherit',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    }}>
                    {names}
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
export default AllUsers;