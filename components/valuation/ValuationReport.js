import StreetView from "../StreetView";
import {Bar, HorizontalBar, Line, Pie} from "react-chartjs-2";
import moment from "moment";
import { Table } from 'reactstrap';
import ComparablePropertyCard from "../../components/valuation/ComparablePropertyCard"
import GraphCard from "../../components/valuation/GraphCard"
import MapCard from "../../components/valuation/MapCard"
import _ from "lodash";
import React from "react";

class ValuationReport extends React.Component {
    constructor (props) {
        super(props);
    }
    getValuesForType(target, suffix, label) {
        const types = ['Detached', 'Semi_Detached', 'Terrace', 'Flat'];
        const data = types.map(t => target[`${t}_${suffix}`]);
        return {
            labels: ['Detached', 'Semi Detached', 'Terrace', 'Flat'],
            datasets: [
                {
                    label: label,
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
    getValuesForLine(regPriceFiveYear, predictPriceFiveYear){ //takes an arr
        // repeat this for each element and create { currentPrice: 1, price: [1,2,3]}
        const keys = Object.keys(regPriceFiveYear);
        // filter out empty values
        const prices = keys
            .map((k, i) => regPriceFiveYear[`index_${++i}`])
            .filter(v => v);
        const currentPrice = regPriceFiveYear['index_31'];
        const keys2 = Object.keys(predictPriceFiveYear);
        // filter out empty values
        const prices2 = keys2
            .map((k, i) => predictPriceFiveYear[`index_${++i}`])
            .filter(v => v);
        const currentPrice2 = predictPriceFiveYear['index_31'];
        const data = {
            labels: this.createMonthLabels(prices),
            datasets: [
                {
                    label: `Current Valuation: £${currentPrice}`,
                    maintainAspectRatio: false,
                    fill: false,
                    lineTension: 0.1,
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
                    label: `Average Local Valuation: £${currentPrice2}`,
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
        const currentPrice = detachedValue['index_31'];
        console.log(prices);
        const keys2 = Object.keys(semiValue);
        const prices2 = keys2
            .map((k, i) => semiValue[`index_${++i}`])
            .filter(v => v);
        const currentPrice2 = semiValue['index_31'];
        console.log(prices2);
        const keys3 = Object.keys(terraceValue);
        // filter out empty values
        const prices3 = keys3
            .map((k, i) => terraceValue[`index_${++i}`])
            .filter(v => v);
        const currentPrice3 = terraceValue['index_31'];
        const keys4 = Object.keys(flatValue);
        const prices4 = keys4
            .map((k, i) => flatValue[`index_${++i}`])
            .filter(v => v);
        const currentPrice4 = flatValue['index_31'];

        console.log(prices3);
        const data = {
            labels: this.createMonthLabels(prices),
            datasets: [
                {
                    label: `Detached: £${currentPrice}`,
                    maintainAspectRatio: false,
                    fill: false,
                    lineTension: 0.1,
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
    createMonthLabels(count){
        let monthNumber = moment().month();

        return count.map(c => {
            const date = moment().month(monthNumber).format('MMMM');
            (monthNumber = monthNumber + 2) % 12;
            return date;
        });
    }
    getValuesForPie(target, suffix){
        const types = ['Detached', 'Semi_Detached', 'Terrace', 'Flat'];
        const data = types.map(t => target[`${t}_${suffix}`]);
        return {
            labels: ['Detached', 'Semi_Detached', 'Semi Terrace', 'Flat'],
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
    render() {
        const marker = {lng: _.toNumber(this.props.valuation.predict_results.lng.toString()), lat: _.toNumber(this.props.valuation.predict_results.lat.toString()) };

        return (
            <div>
            <React.Fragment>

                <div className="row">
                    <div className="col-12 text-left">
                        <h2 className='mt-3'>Property Valuation Report</h2>
                    </div>
                </div>
                    <div className="card-group">
                    <GraphCard title={'Property Overview'}>
                        <h3>Current Capital Value</h3>
                        <h4>{'£'+(this.props.valuation.predict_results.predict_price).toLocaleString()}</h4>
                        <h3>Rental Value</h3> {/*replace placeholder with rental_data API*/}
                        <h4>{'£'+(this.props.valuation.predict_results.predict_price * 0.055 / 12).toFixed(0)+' per month | £'+(this.props.valuation.predict_results.predict_price * 0.055 / 52).toFixed(0)+' per week'}</h4>
                        <h3>Investment Yield</h3> {/*replace placeholder with rental_data API*/}
                        <h4>5.5%</h4>
                        <h3>12 Month Capital Growth</h3>
                        <h4>{(((this.props.valuation.predict_price_5y.index_31)-(this.props.valuation.predict_price_5y.index_25))/(this.props.valuation.predict_price_5y.index_25)*100).toFixed(1)+'%'}</h4>
                    </GraphCard>
                    <MapCard title={'Street View'}>
                        <div className="streeview">
                            <StreetView
                                isMarkerShown={this.props.isMarkerShown}
                                onMarkerClick={this.handleMarkerClick}
                                markerPosition={marker}
                                zoom={2}
                            />
                        </div>
                    </MapCard>
                    </div>

                <div >
                    {
                        _.isEmpty(this.props.valuation.comparable_properties[1]) ? null : (
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
                                        _.map(this.props.valuation.comparable_properties, (cp, i) => (
                                            <ComparablePropertyCard property={cp} key={i}/>
                                        )).slice(0,6)
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
                <div >
                    {
                        _.isEmpty(this.props.valuation.comparable_properties[1]) ? null : (
                            <div>
                                <div className="col-12 text-left">
                                    <h2 className='mt-3'>Comparable Rental Properties</h2>
                                    <p>We have found the following 6 properties to be the most similar to your search, with a full list of comparables listed further down this report</p>
                                </div>
                                <div className="card-deck">
                                    {
                                        _.map(this.props.valuation.comparable_properties, (cp, i) => (
                                            <ComparablePropertyCard property={cp} key={i}/>
                                        )).slice(0,6)
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
                {
                    !this.props.valuation.local_property_type_statistic ? null : (
                        <div className="row">
                            <div className="col-12 text-left">
                                <h2 className='mt-3'>Local Property Value Factors</h2>
                                <p>This section of the report digs a little deeper into the local area surrounding the subject property. We have collated data on average
                                property sizes, market values & property types. Our local research shows that the internal property size typically has the largest affect
                                on market value which is why we also calculate the average value per square meter. If the subject property is outside these 'norms' it normally
                                results in a positive/negative effect on the value.</p>
                            </div>
                            <div className="card-deck">
                                <GraphCard title={'Average Property Size'}>
                                    <Bar data={this.getValuesForType(this.props.valuation.local_property_type_statistic, 'average_size', 'Average Size')} />
                                    <p>Using this graph allows you to compare this property to the averages in your area based on property-type. We separate them because the UK market has historically placed more weight of property-type than actual size. Comparing your property size to the average gives us a strong indication on the value and demand for your home. All things being equal if your home is larger than the local average then you will see increased demand and value. If you're looking to buy or rent then you will have a much clearer picture after comparing like for like properties.</p>
                                </GraphCard>
                                <GraphCard title={'Average Property Value'}>
                                    <HorizontalBar data={this.getValuesForType(this.props.valuation.local_property_type_statistic, 'average_value', 'Average Value')} />
                                    <p>One of the easiest comparisons to make against your home is against average property values in your area. We break this down further by property-type because it gives a much clearer picture of the difference between houses on a street. Detached homes typically command a premium of at least 10% for two specific reasons. Detached houses are typically larger and are in lower supply, which in turn creates a demand premium.</p>
                                </GraphCard>
                                <GraphCard title={'Property Type Ratio'}>
                                    <Pie data={this.getValuesForPie(this.props.valuation.local_property_type_statistic, 'num_ratio')} />
                                    <p>The ratio of property types can give a good indication of affluence and demographics of an area. Rural affluent locations such as the South East, for example, typically have an above average percentage of Detached homes compared to flats. The ratio can also give an indication of possible demand.</p>
                                    <p>Buying a terrace property in an area mainly comprising of terrace-houses means your home value is directly linked to average increases in an area. Whereas buying a detached home, even at a premium, could see demand push the values up faster even without any local changes.</p>
                                </GraphCard>
                                <GraphCard title={'Value per SQM'}>
                                    <Bar data={this.getValuesForType(this.props.valuation.local_property_type_statistic, 'per_size_value', 'Per Size Value')} />
                                    <p>Comparing the value per square meter of a property is one of the best statistical methods and gives good insight for seeing possible trends and changes in the market. We have split the £/sqm value based on property type because as you'll see above there are significant variations depending on the property type. Detached homes typically command a 10%+ premium over semi-detached homes on the same street. This varies depending on location and supply of different house types. £2,500sqm is the average value across the UK.</p>
                                </GraphCard>
                            </div>
                        </div>
                    )
                }
                <div className="row">
                    <div className="col-12 text-left">
                        <h2 className='mt-3'>Property Performance Compared to Regional Average</h2>
                    </div>
                    <GraphCard title={'Property Value Compared to Local Averages (5 years)'}>
                        <Line data={this.getValuesForLine(this.props.valuation.predict_price_5y,this.props.valuation.regional_price_5y)} />
                    </GraphCard>
                    <GraphCard title={'Average Property Type Values (5 years)'}>
                        <Line data={this.getValuesForLine2(this.props.valuation.regional_housetype_price_5y.DetachedPrice,this.props.valuation.regional_housetype_price_5y.SemiDetachedPrice,this.props.valuation.regional_housetype_price_5y.TerracedPrice,this.props.valuation.regional_housetype_price_5y.FlatPrice)} />
                    </GraphCard>
                </div>

                {
                    _.isEmpty(this.props.valuation.sales_history_analyze[1]) ? null : (
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
                                            _.map(this.props.valuation.sales_history_analyze, (val, key) => (
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
                <div className="row">
                    <div className="col">
                        {
                            _.isEmpty(this.props.valuation.comparable_properties[1]) ? null : (
                                <React.Fragment>
                                    <h2 className="mt-3">Comparable Properties</h2>
                                    <div className="card">
                                        <div className="card-body">

                                            <Table>
                                                <thead>
                                                <tr>
                                                    <th>Address</th>
                                                    <th>Postcode</th>
                                                    <th>House Type</th>
                                                    <th>Beds</th>
                                                    <th>Property Size</th>
                                                    <th>Current Value</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                    _.map(this.props.valuation.comparable_properties, (cp, i) => (

                                                        <tr key={i}>
                                                            <td>{cp.address_1}</td>
                                                            <td>{cp.postcode}</td>
                                                            <td>{cp.house_type}</td>
                                                            <td>{(cp.rooms)-2}</td>
                                                            <td>{(cp.size)+' sqm'}</td>
                                                            <td>£{cp.current_valuation.toLocaleString()}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        }
                    </div>
                </div>
            </React.Fragment>
            </div>
        );
    }
};

export default (ValuationReport);