import { useState } from "react";
export const Button = (props) => {
    const [hover, setHover] = useState(false);
    const style =  {
        display: 'inline-block',
        '-webkit-appearance': 'button',
        padding: '9px 50px 5px',
        cursor: 'default',
        font: '600 12px system-ui',
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
        backgroundColor: 'red',
        borderWidth: 2,
        borderColor: 'red',
        borderRadius: 10,
        width: "50px",
        height: "25px",
        marginLeft: "40%"
      };
      const hoverStyle = {
        backgroundColor: '#EB103C'
      }
    return <div onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={props.onClick} style={{...style, ...props.style, ...(hover ? hoverStyle : null)}} disabled={props.disabled}>{props.text} </div>
}
  