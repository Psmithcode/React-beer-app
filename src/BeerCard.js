import React, { Component } from "react";

class BeerCard extends Component {
  constructor(props) {
    super(props);
    this.setState = {
      isClicked: false,
    };
  }

  render() {
    return (
      <li>
        <img src={this.props.image_url} alt={this.props.name}></img>
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
              console.log(this.props.name);
            }}
          >
            {this.state.isClicked ? "Liked" : "Like"}
          </button>
        </div>
      </li>
    );
  }
}

export default BeerCard;
