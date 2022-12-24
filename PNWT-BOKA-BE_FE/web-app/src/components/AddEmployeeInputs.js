export const AddEmployeeInputs = (props) => {

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
    
    return (
    <div >
              
            <input refs="name" type="text" size="30" placeholder="Name" style={inputField1} value={props.name} onChange={(e) => {props.setName(e.target.value); }} />
            {props.errorName && <div style={{
                float:"right",  color: 'white', marginRight: "-155px", marginTop: "3px"}}><small>{props.errorName}</small>
                </div>}
            <input refs="email" type="text" size="30" placeholder="Email" style={inputField2} value={props.email} onChange={(e) => {props.setEmail(e.target.value); }} />
            {props.errorEmail && <div style={{
                float:"right",  color: 'white', marginRight: "-45px", marginTop: "3px"}}><small>{props.errorEmail}</small>
                </div>}
            <input type="password" name="password" placeholder="Password" style={inputField2} value={props.password} onChange={(e) => {props.setPassword(e.target.value); }}></input>
            {props.errorPassword && <div style={{
                float:"right",  color: 'white', marginRight: "-180px", marginTop: "3px"}}><small>{props.errorPassword}</small>
                </div>}
            <input type="phoneNumber" name="text" placeholder="Phone number" style={inputField2} value={props.phoneNumber} onChange={(e) => {props.setPhoneNumber(e.target.value); }}></input>
            {props.errorPhoneNumber && <div style={{
                float:"right",  color: 'white', marginRight: "-90px", marginTop: "3px"}}><small>{props.errorPhoneNumber}</small>
                </div>}


    </div>
        );
}
  