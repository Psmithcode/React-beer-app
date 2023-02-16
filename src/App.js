import "./App.css";
import { Component } from "react";
import axios from "axios";
import BeerCard from "./BeerCard";
// import Heart from "react-animated-heart";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arrayOfBeer: [],
      // isLiked: "Like",
    };
  }

  componentDidMount() {
    axios.get("https://api.punkapi.com/v2/beers").then((res) => {
      const arrayOfBeer = res.data;
      this.setState({ arrayOfBeer });
    });
  }

  // handleLike = (index) => {
  //   // this.state.isLiked
  //   //   ? this.setState({ isLiked: "Like" })
  //   //   : this.setState({ isLiked: "Liked" });
  //   console.log("was clicked at index: ", index);
  //   let copyOfBeers = this.state.arrayOfBeer;
  // };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ol>
            {this.state.arrayOfBeer.map((beer, index) => {
              return (
                <BeerCard
                  key={index}
                  index={index}
                  tagline={beer.tagline}
                  first_brewed={beer.first_brewed}
                  name={beer.name}
                  image_url={beer.image_url}
                  abv={beer.abv}
                ></BeerCard>
              );
            })}
          </ol>
        </header>
      </div>
    );
  }
}

export default App;
