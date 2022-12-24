import { Button } from "../components/Button";

export const HomeComponent = (props) => {
    return (
    <div >
              
              <div style={{ height: "80%", width: "300px", borderRight: "3px solid #52527a", textAlign: "left", marginLeft: "100px", flex: 1 }}>

                <h6 style={{ marginTop: "40%", color: "white" }}>Zdravo!</h6>
                <h1 style={{ color: "white", marginBottom: "2px" }}>MojDoktor</h1>
                <h5 style={{ color: "white", marginTop: "2px", marginBottom: "40px" }}>Dobro dosli na nasu stranicu<br></br> zelimo vam ugodno koristenje</h5>
                <Button text="Sign Up" style={{ marginLeft: "0%" }} onClick={() => {
                       props.navigate();
                }}></Button>


</div>

    </div>
    );
}
  