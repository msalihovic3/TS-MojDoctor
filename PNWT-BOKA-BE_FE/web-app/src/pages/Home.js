import { useNavigate } from "react-router";
import { HomeComponent } from "../components/HomeComponent";
export const Home = () => {
    const navigate = useNavigate();
    const divBackground = {
        width: "1100px",
        backgroundColor: "#183265",
        height: "600px",
        margin: "auto",
        marginTop: "40px",
        border: "3px solid #52527a",
        display: "flex"

    };

    const divTop = {
        borderColor: "red",
        height: "60px",
        backgroundColor: "#78A4C1",
    };

    const divRight = {
        height: "60px",
        width: "150px",
        borderLeft: "3px solid #52527a",
        float: "right"
    }

    const imageLogo = {
        width: "25px",
        height: "25px",
        borderRadius: 7,
        flex: 1
    };

    return (
        <div style={{ backgroundColor: "#78A4C1" }}>
            <div style={divTop}>
                <div style={{ float: "left", display: "flex", marginLeft: "30px", marginTop: "15px" }}>
                    {/* <img src="https://play-lh.googleusercontent.com/2gkOS2Ze0PVQozMXKDQLqp8G4ZMIT9BU0OGlgDZnsgFHVxGeJC5Ref6SLdtZP0xUxfc"
                        loading="lazy"
                        style={imageLogo}
                        alt="" /> */}
                    <strong style={{ flex: 1, color: "white", marginLeft: "2px" }}>MojDoktor</strong>
                </div>
                <div style={divRight}>
                    <p style={{ color: "white" }} onClick={() => {
                            navigate('/login');
                    }}>LOG IN</p>
                </div>
            </div>
            <div style={divBackground}>
                <HomeComponent navigate={() =>  navigate('/signUp')}></HomeComponent>

                <div style={{ flex: 1, height: "100%" }}>
                    <img src="data:image/png;base64,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"
                        loading="lazy"
                        style={{ width: "100%", height: "100%" }}
                        alt="" />
                </div>
            </div>
        </div>
    )
}