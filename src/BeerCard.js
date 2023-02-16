import React, { Component } from "react";
// import axios from "axios";
// import { useState } from "react";
// import Heart from "react-animated-heart";
class BeerCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
  }

  // const [isClick, setClick] = useState(false);
  render() {
    return (
      <li
        style={{
          listStyle: "none",
          display: "flex",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <img
          style={{ height: "200px" }}
          src={this.props.image_url}
          alt={this.props.name}
        ></img>
        <div>
          <p>{this.props.name}</p>
          <p>{this.props.tagline}</p>
          <p>{this.props.first_brewed}</p>
          <p>{this.props.abv}</p>
          <button
            onClick={() => {
              this.setState({
                isClicked: !this.state.isClicked,
              });
            }}
          >
            {this.state.isClicked === true ? "Liked" : "Like"}
          </button>
        </div>
      </li>
    );
  }
}

export default BeerCard;
