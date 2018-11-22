import StreetView from "../StreetView";
import {Bar, HorizontalBar, Line, Pie} from "react-chartjs-2";
import moment from "moment";
import { Table } from 'reactstrap';
import ComparablePropertyCard from "../../components/valuation/ComparablePropertyCard";
import ComparableRentalCard from "../../components/valuation/ComparableRentalCard";
import GraphCard from "../../components/valuation/GraphCard";
import MapCard from "../../components/valuation/MapCard";
import _ from "lodash";
import React from "react";
import RentalComparables from "./RentalComparables";
import WideGraphCard from "./WideGraphCard";
import HeroCard from "./HeroCard";
import Navbar from "./NavHeadCard";
import StarRating from "./StarRating";

class ValuationReport extends React.Component {
    constructor (props) {
        super(props);
    }
    getValuesForLine(regPriceTenYear, predictPriceTenYear, natPriceTenYear, gdpPriceTenYear){ //takes an arr
        // repeat this for each element and create { currentPrice: 1, price: [1,2,3]}
        const keys = Object.keys(regPriceTenYear);
        // filter out empty values
        const prices = keys
            .map((k, i) => regPriceTenYear[`index_${++i}`])
            .filter(v => v);
        const currentPrice = regPriceTenYear['index_41'];

        const keys2 = Object.keys(predictPriceTenYear);
        // filter out empty values
        const prices2 = keys2
            .map((k, i) => predictPriceTenYear[`index_${++i}`])
            .filter(v => v);
        const currentPrice2 = predictPriceTenYear['index_41'];
        const keys3 = Object.keys(natPriceTenYear);

        // filter out empty values
        const prices3 = keys3
            .map((k, i) => natPriceTenYear[`index_${++i}`])
            .filter(v => v);
        const currentPrice3 = natPriceTenYear['index_41'];

        const data = {
            labels: this.createMonthLabels(prices),
            datasets: [
                {
                    label: `Current Valuation: £${currentPrice}`,
                    maintainAspectRatio: false,
                    fill: 1,
                    lineTension: 0.1,
                    backgroundColor: '#c9eaa8',
                    borderColor: '#1fe45f',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    borderWidth: 5,
                    pointBorderColor: '#1fe45f',
                    pointBackgroundColor: '#1fe45f',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: '#1fe45f',
                    pointHoverBorderColor: '#1fe45f',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: prices,
                    yAxisID: 'y-axis-1'
                },
                {
                    label: `Local Area: £${currentPrice2}`,
                    maintainAspectRatio: false,
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: '#1fa4e4',
                    borderColor: '#1fa4e4',
                    borderCapStyle: 'butt',
                    borderDash: [1],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: '#1fa4e4',
                    pointBackgroundColor: '#1fa4e4',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: '#1fa4e4',
                    pointHoverBorderColor: '#1fa4e4',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: prices2,
                    yAxisID: 'y-axis-1'
                },
                {
                    label: `National: £${currentPrice3}`,
                    maintainAspectRatio: false,
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: '#e49914',
                    borderColor: '#e49914',
                    borderCapStyle: 'butt',
                    borderDash: [1],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: '#e49914',
                    pointBackgroundColor: '#e49914',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: '#e49914',
                    pointHoverBorderColor: '#e49914',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: prices3,
                    yAxisID: 'y-axis-1'
                },
                {
                    label: `GDP`,
                    maintainAspectRatio: false,
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: '#090be4',
                    borderColor: '#090be4',
                    borderCapStyle: 'butt',
                    borderDash: [1],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: '#090be4',
                    pointBackgroundColor: '#090be4',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: '#090be4',
                    pointHoverBorderColor: '#090be4',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [1.6,-1.1,-4.1,-3.7,-2.3,-0.7,2.2,3.9,3.2,3.8,5.1,2.9,3.1,3.3,1.5,2.3,4.5,3.8,3.7,4.4,3.6,4.1,4.8,5.6,4.6,3.9,3.0,3.2,2.3,2.8,3.9,3.0,3.8,4.9,4.2,3.8,3.8,3.4,2.9,3.2,3.6],
                    yAxisID: 'y-axis-2'
                }
            ]
        };
        return data;
    }
        getValuesForLine2(detachedValue, semiValue, terraceValue, flatValue){
        const keys = Object.keys(detachedValue);
        const prices = keys
            .map((k, i) => detachedValue[`index_${++i}`])
            .filter(v => v);
        const currentPrice = detachedValue['index_41'];
        console.log(prices);
        const keys2 = Object.keys(semiValue);
        const prices2 = keys2
            .map((k, i) => semiValue[`index_${++i}`])
            .filter(v => v);
        const currentPrice2 = semiValue['index_41'];
        console.log(prices2);
        const keys3 = Object.keys(terraceValue);
        // filter out empty values
        const prices3 = keys3
            .map((k, i) => terraceValue[`index_${++i}`])
            .filter(v => v);
        const currentPrice3 = terraceValue['index_41'];
        const keys4 = Object.keys(flatValue);
        const prices4 = keys4
            .map((k, i) => flatValue[`index_${++i}`])
            .filter(v => v);
        const currentPrice4 = flatValue['index_41'];

        console.log(prices3);
        const data = {
            labels: this.createMonthLabels(prices),
            datasets: [
                {
                    label: `Detached: £${currentPrice}`,
                    maintainAspectRatio: false,
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: '#1fe45f',
                    borderColor: '#1fe45f',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: '#1fe45f',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: '#1fe45f',
                    pointHoverBorderColor: '#1fe45f',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: prices
                },
                {
                    label: `Semi-Detached: £${currentPrice2}`,
                    maintainAspectRatio: false,
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: '#1fa4e4',
                    borderColor: '#1fa4e4',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: '#1fa4e4',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: '#1fa4e4',
                    pointHoverBorderColor: '#1fa4e4',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: prices2
                },
                {
                    label: `Terraced: £${currentPrice2}`,
                    maintainAspectRatio: false,
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: '#e41fa4',
                    borderColor: '#e41fa4',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: '#e41fa4',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: '#e41fa4',
                    pointHoverBorderColor: '#e41fa4',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: prices3
                },
                {
                    label: `Flats & Apartments: £${currentPrice2}`,
                    maintainAspectRatio: false,
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: '#EEB029',
                    borderColor: '#EEB029',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: '#EEB029',
                    pointBackgroundColor: '#EEB029',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: '#EEB029',
                    pointHoverBorderColor: '#EEB029',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: prices4
                }
            ]
        };
        return data;
    }
    createMonthLabels(){
        let startPeriod = moment().subtract(123, 'months');
        const dateLabels = [];
        for (let i=0;i<41;i++){
            const increasedPeriod = startPeriod.add(3, 'months');
            dateLabels.push(increasedPeriod.format('MMM YY'));
        }
        return dateLabels
    }


getValuesForPie(target, suffix){
        const types = ['Detached', 'Semi_Detached', 'Terrace', 'Flat'];
        const data = types.map(t => target[`${t}_${suffix}`]);
        return {
            labels: ['Detached', 'Semi Detached', 'Semi Terrace', 'Flat'],
            datasets: [
                {
                    data: data,
                    maintainAspectRatio: false,
                    backgroundColor: [
                        '#1fe45f',
                        '#1fa4e4',
                        '#e41fa4',
                        '#EEB029'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                    ]
                }
            ]
        };
    }

getValuesForType(target, suffix, label) {
        const types = ['Detached', 'Semi_Detached', 'Terrace', 'Flat'];
        const data = types.map(t => target[`${t}_${suffix}`]);
        return {
            labels: ['Detached', 'Semi Detached', 'Terrace', 'Flat'],
            datasets: [
                {
                    label: `${label}`,
                    maintainAspectRatio: false,
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: data
                }
            ]
        };
    }

    render() {
        console.log(this.props.address);
        {/* const { sellingResults,rentalResult } = this.props.valuation */}
        const marker = {lng: _.toNumber(this.props.valuation.selling_results.predict_results.lng.toString()), lat: _.toNumber(this.props.valuation.selling_results.predict_results.lat.toString()) };
        const graphOptions = {
            responsive: true,
            hoverMode: 'index',
            stacked: false,
            title: {
                display: true,
                text: 'Chart.js Line Chart - Multi Axis'
            },
            scales: {
                yAxes: [{
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                }, {
                    type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',

                    // grid line settings
                    gridLines: {
                        drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                }],
            }
        };
        return (
    <div className="container" id='overview'>
      <div className="valuation">
       <div className="col-12">
        <div className="card" id="fixedHeroNav">
           <div className="row hero-result-head">
               <div className="column col-sm-12 col-md-4">
                   <h4>Rental Value</h4>
                   <h2>{'£'+(this.props.valuation.rental_results.rental_predict_price).toLocaleString()+' pcm'}</h2>
               </div>
               <div className="column col-sm-12 col-md-4">
                   <h4>Current Capital Value</h4>
                   <h2>{'£'+(this.props.valuation.selling_results.predict_results.predict_price).toLocaleString()}</h2>
               </div>
               <div className="column col-sm-12 col-md-4">
                   <StarRating rating={(this.props.valuation.selling_results.predict_results.confidence_level*.7)} />
               </div>
           </div>
           <div className="card">
                <Navbar />
          </div>
         </div>
        <div className="card" id="valuation-card">
            <div className="card-body">
            <React.Fragment>
                <div className="row">
                <div className="col-md-12">
                    <h3>Your Property {this.props.address.building_number} {this.props.address.building_name} {this.props.address.thoroughfare} {this.props.address.postcode}</h3>
                    <p>This exclusive report provides a unique up-to-date insight into
                       the value of your property and analysis of the local market,
                       for {this.props.address.building_number} {this.props.address.building_name} {this.props.address.thoroughfare} {this.props.address.town} {this.props.address.postcode}</p>
                </div>
                <div className="col-md-6">
                 <div className="card-deck heading-center ml-2 mt-2">
                         <div className="card">
                           <h3>House Type</h3>
                           <br />
                           <i className="fas fa-home val-logo-awesome" ></i>
                           <br />
                           <h4>{this.props.valuation.selling_results.query_info.built_from} {this.props.valuation.selling_results.query_info.property_type}</h4>
                         </div>
                          <div className="card">
                                <h3>Bedrooms</h3>
                                <br />
                                <i className="fas fa-bed val-logo-awesome" ></i>
                                <br />
                                <h4>{this.props.valuation.selling_results.query_info.num_bedrooms}</h4>
                           </div>
                 </div>
                     <div className="card-deck heading-center ml-2">
                          <div className="card">
                                <h3>Receptions</h3>
                                <br />
                                <i className="fas fa-couch val-logo-awesome"></i>
                                <br />
                                <h4>{this.props.valuation.selling_results.query_info.num_receptionrooms}</h4>
                           </div>
                          <div className="card">
                                <h3>Space</h3>
                                <br />
                                <i className="fas fa-tape val-logo-awesome"></i>
                                <br />
                                <h4>{this.props.valuation.selling_results.query_info.total_floor_area} sqm</h4>
                       </div>
                 </div>
                </div>
                <div className="col-md-6 mt-3">
                    <div className="card agent-cta">
                        <br />
                        <StreetView
                            isMarkerShown={this.props.isMarkerShown}
                            onMarkerClick={this.handleMarkerClick}
                            markerPosition={marker}
                            zoom={2}
                        />
                    </div>
                    </div>
                </div>
                <div className="card-deck heading-center mr-2 ml-2 mt-5 mb-5">
                    <div className="card mt-150">
                         <h4>Estimated Valuation</h4>
                         <i className="fas fa-home val-logo-awesome"></i>
                         <h2>{'£'+(this.props.valuation.selling_results.predict_results.predict_price).toLocaleString()}</h2>
                    </div>
                    <div className="card cardSpace">
                        <h4>Estimated Value Range</h4>
                        <i className="fas fa-chart-line val-logo-awesome"></i>
                        <h2>{'£'+((this.props.valuation.selling_results.predict_results.predict_price)*.95).toLocaleString()} to {'£'+((this.props.valuation.selling_results.predict_results.predict_price)*1.05).toLocaleString()}</h2>
                    </div>
                    <div className="card cardSpace">
                         <h4>Change Over 12 Months</h4>
                         <i className="fas fa-home val-logo-awesome"></i>
                         <h2>{'£'+((this.props.valuation.selling_results.predict_price_10y.index_41)-(this.props.valuation.selling_results.predict_price_10y.index_37)).toLocaleString()}</h2>
                    </div>
                </div>
                <div className="card-deck heading-center mr-2 ml-2 mb-5">
                    <div className="card">
                        <h4>Rental Value</h4>
                        <i className="fas fa-home val-logo-awesome"></i>
                        <h2>{'£'+(this.props.valuation.rental_results.rental_predict_price.toLocaleString())+' pcm'}</h2>
                    </div>
                    <div className="card">
                        <h4>Rental Yield</h4>
                        <i className="fas fa-home val-logo-awesome"></i>
                        <h2>{(((this.props.valuation.rental_results.rental_predict_price *12)/(this.props.valuation.selling_results.predict_results.predict_price))*100).toFixed(1) + '%'}</h2>
                    </div>
                    <div className="card">
                        <StarRating rating={(this.props.valuation.selling_results.predict_results.confidence_level*.7)} />
                        <h2>{(this.props.valuation.selling_results.predict_results.confidence_level/8)*100}% Reliability</h2>
                    </div>
                </div>

                <div className="row" id="propertyPerformance">
                    <div className="col-12 text-left">
                        <h2 className='mt-3'>Property Performance</h2>
                        <p>Thank you for requesting our property valuation report. Please note that whilst we believe our accuracy is industry leading, no AVM can fully replace a
                            real home visit due to unknown factors such as the precise property condition. With the disclaimer
                            sorted we have created the following report based on your submitted information.</p>
                        <p>The first section will look at your property and then compare to other homes in the local area. Finally we will look at which factors are likely to have the most influence on your properties valuation.</p>
                        <p>Your properties current market value is <strong>{'£'+(this.props.valuation.selling_results.predict_results.predict_price).toLocaleString()}</strong> compared
                            to a local average of price <strong>{'£'+(this.props.valuation.selling_results.regional_price_10y.index_41.toLocaleString())}</strong> and the national average of
                            {' '}<strong>{'£'+(this.props.valuation.selling_results.national_avg_price_10y.index_41.toLocaleString())}</strong>. We calculate local and national valuations
                            by averaging the achieved sales prices over the last 3 months from land registry. Whilst not perfect this gives a good indication of how your properties
                            performing compared to others locally and nationally.</p>
                        <p>The main factors affecting the difference is simply down to supply and demand with the quality of schooling, transport, commuting distance and crime levels
                            having the largest impact.
                        </p>
                        <WideGraphCard>
                            <Line
                                options={graphOptions}
                                data={this.getValuesForLine(this.props.valuation.selling_results.predict_price_10y,this.props.valuation.selling_results.regional_price_10y,this.props.valuation.selling_results.national_avg_price_10y)} />
                        </WideGraphCard>
                        <p>The interactive graph above shows the valuation changes over the last 10 years with the green line representing the subject property. You'll notice the value follows a
                            similar trend to national averages however you can see some notable differences during some periods.</p>
                        <p>Macro Economic factor events such as Government or Global financial influences will raise or lower all valuations nationwide, however some properties will outperform the norm.</p>
                    </div>
                </div>



                <div>
                    {
                        _.isEmpty(this.props.valuation.selling_results.sales_history_analyze[1]) ? null : (
                            <React.Fragment>
                                <h2 className='mt-3'>Historic Sales Data</h2>
                                <div className="card">
                                    <div className="card-body">

                                        <Table>
                                            <thead>
                                            <tr>
                                                <th>Last Sold Date</th>
                                                <th>Last Sold Price</th>
                                                <th>Total Growth (£)</th>
                                                <th>Total Return (%)</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                _.map(this.props.valuation.selling_results.sales_history_analyze, (val, key) => (
                                                    <tr key={key}>
                                                        <td>{moment(val.sold_date).format('Do MMM YYYY')}</td>
                                                        <td>£{val.sold_price.toLocaleString()}</td>
                                                        <td>£{val.price_change.toLocaleString()}</td>
                                                        <td>{(val.price_chage_percent*100).toFixed(1)+'%'}</td>
                                                    </tr>
                                                ))
                                            }
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    }
                </div>
                <div id="comparableSoldCards">
                    {
                        _.isEmpty(this.props.valuation.selling_results.comparable_properties[1]) ? null : (
                            <div>
                                <div className="col-12 text-left">
                                    <h2 className='mt-3'>Comparable Sold Properties</h2>
                                    <p>Our online valuation works by finding a range of local properties that we believe are similar to your enquiry. We asses a number of factors
                                        before choosing a comparable such as distance from your enquiry, number of bedrooms, size, property type & sales history before selecting
                                        the best fitting comparables to use - this is the same process used by the majority of professional surveyors.</p>
                                    <p>We have found the following 6 properties to be the most similar to your search, with a full list of comparables listed further down this report</p>
                                </div>
                                <div className="card-deck">
                                    {
                                        _.map(this.props.valuation.selling_results.comparable_properties, (cp, i) => (
                                            <ComparablePropertyCard property={cp} key={i}/>
                                        )).slice(0,6)
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
                <div id="comparableRentalCards">
                    {
                        _.isEmpty(this.props.valuation.rental_results.rental_comparable_properties[0]) ? null : (
                            <div>
                                <div className="col-12 text-left">
                                    <h2 className='mt-3'>Comparable Rental Properties</h2>
                                    <p>We have found the following 6 properties to be the most similar to your search, with a full list of comparables listed further down this report</p>
                                </div>
                                <div className="card-deck">
                                    {
                                        _.map(this.props.valuation.rental_results.rental_comparable_properties, (cp, i) => (
                                            <ComparableRentalCard property={cp} key={i}/>
                                        )).slice(0,6)
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>

                <div className="mag-content">
                <div id="localPropertyInfo">
                    {
                        !this.props.valuation.selling_results.local_property_type_statistic ? null : (
                            <div className="row">
                                    <h2 className='mt-3'>Local Property Value Factors</h2>
                                    <p>This section of the report digs a little deeper into the local area surrounding the subject property. We have collated data on average
                                        property sizes, market values & property types. Our local research shows that the internal property size typically has the largest affect
                                        on market value which is why we also calculate the average value per square meter. If the subject property is outside these 'norms' it normally
                                        results in a positive/negative effect on the value.</p>
                                <div className="col-md-6">
                                    <Pie data={this.getValuesForPie(this.props.valuation.selling_results.local_property_type_statistic, 'num_ratio')} />
                                </div>
                                <div className="col-md-6">
                                    <h4>Ratio of property types in area</h4>
                                    <p>The ratio of property types can give a good indication of affluence and demographics of an area. Rural affluent locations such as the South East, for example, typically have an above average percentage of Detached homes compared to flats. The ratio can also give an indication of possible demand.</p>
                                    <p>Buying a terrace property in an area mainly comprising of terrace-houses means your home value is directly linked to average increases in an area. Whereas buying a detached home, even at a premium, could see demand push the values up faster even without any local changes.</p>
                                </div>
                                <br />
                                 <div className="col-md-6">
                                    <HorizontalBar data={this.getValuesForType(this.props.valuation.selling_results.local_property_type_statistic, 'average_value', 'Average Value (£)')} />
                                </div>
                                <div className="col-md-6">
                                    <h4>Value Based on Property Type</h4>
                                    <p>One of the easiest comparisons to make against your home is against average property values in your area. We break this down further by property-type because it gives a much clearer picture of the difference between houses on a street. Detached homes typically command a premium of at least 10% for two specific reasons. Detached houses are typically larger and are in lower supply, which in turn creates a demand premium.</p>
                                </div>
                                <br />
                                <div className="col-md-6">
                                    <h4>Average Property Size</h4>
                                    <p>Using this graph allows you to compare this property to the averages in your area based on property-type. We separate them because the UK market has historically placed more weight of property-type than actual size. Comparing your property size to the average gives us a strong indication on the value and demand for your home. All things being equal if your home is larger than the local average then you will see increased demand and value. If you're looking to buy or rent then you will have a much clearer picture after comparing like for like properties.</p>
                                </div>
                                <div className="col-md-6">
                                    <Bar data={this.getValuesForType(this.props.valuation.selling_results.local_property_type_statistic, 'average_size', 'Average Size (m2)')} />
                                </div>
                                <br />
                                <div className="col-md-6">
                                    <h4>Price per Square Meter</h4>
                                    <p>Comparing the value per square meter of a property is one of the best statistical methods and gives good insight for seeing possible trends and changes in the market. We have split the £/sqm value based on property type because as you'll see above there are significant variations depending on the property type. Detached homes typically command a 10%+ premium over semi-detached homes on the same street. This varies depending on location and supply of different house types. £2,500sqm is the average value across the UK.</p>
                                </div>
                                <div className="col-md-6">
                                    <Bar data={this.getValuesForType(this.props.valuation.selling_results.local_property_type_statistic, 'per_size_value', 'Value per Square Meter')} />
                                </div>
                                <br />
                                <WideGraphCard title={'Average Property Type Values (10 years)'}>
                                    <Line data={this.getValuesForLine2(this.props.valuation.selling_results.regional_housetype_price_10y.DetachedPrice,this.props.valuation.selling_results.regional_housetype_price_10y.SemiDetachedPrice,this.props.valuation.selling_results.regional_housetype_price_10y.TerracedPrice,this.props.valuation.selling_results.regional_housetype_price_10y.FlatPrice)} />
                                </WideGraphCard>
                            </div>
                        )
                    }
                </div>
                </div>
            </React.Fragment>
            </div>
        </div>
      </div>
    </div>
    </div>
        );
    }
};
export default (ValuationReport);