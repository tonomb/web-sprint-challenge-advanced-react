import React, { Component } from "react";
import axios from "axios";

export default class PlantList extends Component {
  // add state with a property called "plants" - initialize as an empty array
  constructor(){
    super();
    this.state={
      plants: [],
      searchTerm: ''
    }
  }

  // when the component mounts:
  //   - fetch data from the server endpoint - http://localhost:3333/plants
  //   - set the returned plants array to this.state.plants
  componentDidMount(){
    axios.get('http://localhost:3333/plants')
      .then(res =>{
        console.log(res.data.plantsData);
        
        this.setState({
          plants: res.data.plantsData
        })
      })
      .catch(err =>{
        console.log(err);
      })
  }

  handleSearch = (e) =>{
    this.setState({
     searchTerm: e.target.value
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.searchTerm !== prevState.searchTerm){
      
      const filteredPlants = this.state.plants.filter( plants =>{
       return plants.name.includes(this.state.searchTerm)
         
    })
    
    this.setState({
        plants: filteredPlants
             })
      
      console.log(filteredPlants);
      
    }
  }

  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  render() {
    return (
      <>
      <form className='search-form'>
        <input 
          type='text'
          placeholder='Search Plants'
          onChange={this.handleSearch}></input>
        <button>Search</button>
      </form>
      <main className="plant-list">
        {this.state?.plants?.map((plant) => (
          <div className="plant-card" key={plant.id}>
            <img className="plant-image" src={plant.img} alt={plant.name} />
            <div className="plant-details">
              <h2 className="plant-name">{plant.name}</h2>
              <p className="plant-scientific-name">{plant.scientificName}</p>
              <p>{plant.description}</p>
              <div className="plant-bottom-row">
                <p>${plant.price}</p>
                <p>☀️ {plant.light}</p>
                <p>💦 {plant.watering}x/month</p>
              </div>
              <button
                className="plant-button"
                onClick={() => this.props.addToCart(plant)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </main>
      </>
    );
  }
}
