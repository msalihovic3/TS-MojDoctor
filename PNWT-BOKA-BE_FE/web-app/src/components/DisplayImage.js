import React, { Component } from "react";

export class DisplayImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };
  }


  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img)
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <img src={this.state.image} style={{ width: "250px", height: "250px"}} />
            <input type="file" name="myImage"  onChange={this.onImageChange}  style={{ font: '600 12px system-ui', backgroundColor: '#FF8C00'}}/>
          </div>
        </div>
      </div>
    );
  }
}