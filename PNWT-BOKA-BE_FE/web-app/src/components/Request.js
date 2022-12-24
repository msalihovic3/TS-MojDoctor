export const Request = (props) => {

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
         
       
            <input type="description" name="text" placeholder="Description" style={inputField2} value={props.description} onChange={(e) => {props.setDescription(e.target.value); }}></input>
            {props.errorPhoneNumber && <div style={{
                float:"right",  color: 'white', marginRight: "-90px", marginTop: "3px"}}><small>{props.errorPhoneNumber}</small>
                </div>}


    </div>
        );
}
  