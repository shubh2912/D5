import React, { Component } from 'react';
import './QuickSearchTile.css';

class QuickSearchTile extends Component {
    render() {
        return (<div className='quick-search-tile-container row'>
            <div className='col-sm-5 image-container' >
                <img src={this.props.banner} />
            </div>
            <div className='col-sm-7 content-bar' >
                <div className='content-heading row' >{this.props.heading}</div>
                <div className='content-text row' >{this.props.content}</div>
            </div>
        </div>
        );
    }
}

export default QuickSearchTile;
