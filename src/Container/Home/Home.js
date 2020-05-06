import React, { Component } from 'react';
import './Home.css';
import SearchBar from "../../Components/SearchBar/SearchBar";
import QuickSearch from "../../Components/QuickSearch/QuickSearch";
import restaurantList from "./RestaurantList";
import locationList from "./LocationList";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            locationList: [],
            restaurantList: []
        }
    }

    onTypeAhead = () => {
        this.setState({ "restaurantList": restaurantList })
    }

    componentDidMount() {
        this.setState({ "locationList": locationList })
    }

    render() {
        return (<div className='home-container'>
            <SearchBar locationList={this.state.locationList} onTypeAhead={this.onTypeAhead} restaurantList={this.state.restaurantList} />
            <QuickSearch />
        </div>
        );
    }
}

export default Home;
