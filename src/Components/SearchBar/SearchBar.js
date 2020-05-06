import React, { Component } from 'react';
import './SearchBar.css';
import { AsyncTypeahead, Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { withRouter } from "react-router-dom";

class SearchBar extends Component {
    state = {
        selected: [],
        isLoading: false,
        options: []
    };

    onRestaurantSelect = (selected) => {
        this.setState({ 'selectedRestaurant': selected });
        this.props.history.push(`restaurantdetailspage/?restaurant=${selected[0].id}`);
    }

    renderDropdownChildren = (option) => {
        return <div className=" logo-container row">
            <div className="logo-container col-sm-1">
                <img className='restaurant-logo' src={option.logo} />
            </div>
            <div className="address-container col-sm-11">
                <div className="row restaurant-name">{option.name}</div>
                <div className="row">{option.address}</div>
            </div>
        </div>
    }
    render() {
        return (<div className='search-container container-fluid'>
            <div className='logo row'>e!</div>
            <div className='search-heading row'>Find the best restaurants, cafe's and bars</div>
            <div className='search-controller row'>
                <div className='search-location col-sm'>
                    <Typeahead
                        {...this.state.selectedLocation}
                        labelKey={(option) => `${option.name}, ${option.city}`}
                        id="basic-example"
                        onChange={(selected) => this.setState({ 'selectedLocation': selected })}
                        minLength={3}
                        options={this.props.locationList}
                        placeholder="Please type a location"
                    />
                </div>
                <div className='search-restaurant col-sm'>
                    <AsyncTypeahead
                        {...this.state.selectedRestaurant}
                        labelKey="name"
                        id="basic-example"
                        onChange={this.onRestaurantSelect}
                        minLength={3}
                        onSearch={this.props.onTypeAhead}
                        options={this.props.restaurantList}
                        placeholder="Search for restaurants"
                        renderMenuItemChildren={(option, props, index) => {
                            return this.renderDropdownChildren(option);
                        }}
                    />
                </div>
            </div>
        </div>
        );
    }
}

export default withRouter(SearchBar);
