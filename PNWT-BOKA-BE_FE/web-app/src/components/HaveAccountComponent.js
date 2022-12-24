export const HaveAccountComponent = (props) => {
    return (
        <div style={{ marginTop: "20px" }}>
                    <p style={{ textAlign: "left", marginLeft: "20px", fontSize: "10pt", display: "inline" }}>Already have an account?</p>
                    <p style={{ display: "inline", marginRight: "380px", fontSize: "10pt", color: "red" }} onClick={() => props.navigate()}> Log In</p>
                </div>

    );
}