import React, { Component } from 'react';
import queryString from 'query-string'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './ItemDetails.css';
import itemDetail from './Item';


class Details extends Component {
    constructor() {
        super();
        this.state = {
            restaurantDetail: null
        }
    }

    componentDidMount() {
        const values = queryString.parse(this.props.location.search)
        const restuarantId = values.restaurant;
        this.setState({ restaurantDetail: itemDetail })
    }

    render() {
        const { restaurantDetail } = this.state;
        return (
            <React.Fragment>
                {restaurantDetail && <div>
                    <img className="image-containers" src={restaurantDetail.thumb[0]}></img>
                    <div className="heading">{restaurantDetail.name}</div>
                    <Tabs>
                        <TabList>
                            <Tab><span className="overview">Overview</span></Tab>
                            <Tab><span className="overview">Contact</span></Tab>
                        </TabList>

                        <TabPanel>
                            <div>
                                <div className="about">About this Place</div>
                                <br />
                                <div className="cuisine">Cuisine</div>
                                <div className="bakery">{restaurantDetail.Cuisine}</div>
                                <br />
                                <div className="cuisine">Average Cost</div>
                                <div className="bakery">{`₹${restaurantDetail.min_price} for two people(approx).`}</div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div>
                                <div className="phone-number">Phone Number</div>
                                <div className="pdigit">{restaurantDetail.contact_number}</div>
                                <br />
                                <div className="bheader">{restaurantDetail.name}</div>
                                <div className="address">{restaurantDetail.address}</div>
                            </div>
                        </TabPanel>
                    </Tabs>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br />
                </div>}
            </React.Fragment>
        )
    }
}

export default Details;