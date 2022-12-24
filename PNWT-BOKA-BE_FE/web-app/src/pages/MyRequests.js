
import { useSelector } from 'react-redux';
import { Card ,Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from "react-router";
import { signOut } from '../redux/actions/userActions'
import { declineReservation, getRequestsAllGuest } from '../redux/actions/reservationActions';


export const MyRequests = () =>  {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const reservations =useSelector(state => state.reservation.reservationsGuest);
    const id = useSelector(state=> state.user.id);

    useEffect(() => {
      
            dispatch(getRequestsAllGuest(id)); 
        

    },[reservations]);

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

    const names = [];
    reservations.forEach((res) => {

        var title = "";
    

        var state = "NA CEKANJU"
        var solution =""
        if( res.solution){
            state = "DONE"
            solution =res.solution.description
        }
        names.push( <Card  style={{ backgroundColor:"#f9f9f9",
            width: '60rem' , height:'18vh',  marginRight:"2%", borderRadius:"10px" , marginTop:"1%",  }} >
            <Row>
                <Col sm={8}  ><Card.Title style={{ margin:'15px',textAlign:"left"}} ><b> Description: {res.description} </b></Card.Title>
                    <Card.Text style={{ margin:'15px',textAlign:"left"}}> Status: {state}
                    </Card.Text>
                    <Card.Text style={{ margin:'15px',textAlign:"left"}}>  Solution: {solution}
                    </Card.Text>
                </Col>
           
            </Row>
        </Card>)
    })

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
                <div style={{ borderBottom:"2px solid red" , marginTop:"3%", marginLeft:'1%', marginRight:'1%' }}><p  style={{ width: '10rem', marginBottom:"0px", borderBottom:"2px solid red", color:'red', padding:'2px' }}>My requests</p></div>

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
            </Col>
        </div>
    )
}
export default MyRequests;