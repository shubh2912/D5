import React, { Component } from 'react';
import './QuickSearch.css';
import QuickSearchTile from "../QuickSearchTile/QuickSearchTile";

class QuickSearch extends Component {
    render() {
        return (<div className='quick-search-container container-fluid '>
            <div className='container'>
                <div className='quick-search-heading row'>Quick Searches</div>
                <div className='quick-search-subheading row'>Discover restaurants by type of meal</div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <QuickSearchTile heading='Breakfast' banner="assets/breakfast.png" content='Start your day with exclusive breakfast options' />
                    </div>
                    <div className='col-sm-4'>
                        <QuickSearchTile heading='Lunch' banner="assets/lunch.png" content='Start your day with exclusive breakfast options' />
                    </div>
                    <div className='col-sm-4'>
                        <QuickSearchTile heading='Snacks' banner="assets/snacks.png" content='Start your day with exclusive breakfast options' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-4'>
                        <QuickSearchTile heading='Dinner' banner="assets/dinner.png" content='Start your day with exclusive breakfast options' />
                    </div>
                    <div className='col-sm-4'>
                        <QuickSearchTile heading='Drinks' banner="assets/drinks.png" content='Start your day with exclusive breakfast options' />
                    </div>
                    <div className='col-sm-4'>
                        <QuickSearchTile heading='Nightlife' banner="assets/nightlife.png" content='Start your day with exclusive breakfast options' />
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default QuickSearch;
