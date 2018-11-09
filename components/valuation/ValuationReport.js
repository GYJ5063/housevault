import StreetView from "../StreetView";
import {Bar, HorizontalBar, Line, Pie} from "react-chartjs-2";
import moment from "moment";
import { Table } from 'reactstrap';
import ComparablePropertyCard from "../../components/valuation/ComparablePropertyCard"
import GraphCard from "../../components/valuation/GraphCard"
import _ from "lodash";
import React from "react";

class ValuationReport extends React.Component {
    constructor (props) {
        super(props);
    }
    getValuesForType(target, suffix, label) {
        const types = ['Detached', 'Flat', 'Semi_Detached', 'Terrace'];
        const data = types.map(t => target[`${t}_${suffix}`]);
        return {
            labels: ['Detached', 'Flat', 'Semi Detached', 'Terrace'],
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
    getValuesForLine(regPriceFiveYear){
        const keys = Object.keys(regPriceFiveYear);
        // filter out empty values
        const prices = keys
            .map((k, i) => regPriceFiveYear[`index_${++i}`])
            .filter(v => v);
        const currentPrice = regPriceFiveYear['index_31'];
        const data = {
            labels: this.createMonthLabels(prices),
            datasets: [
                {
                    label: `Current Price ${currentPrice}`,
                    maintainAspectRatio: false,
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: prices
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
        const types = ['Detached', 'Flat', 'Semi_Detached', 'Terrace'];
        const data = types.map(t => target[`${t}_${suffix}`]);
        return {
            labels: ['Detached', 'Flat', 'Semi Detached', 'Terrace'],
            datasets: [
                {
                    data: data,
                    maintainAspectRatio: false,
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
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
                    <GraphCard title={'Property Overview'}>
                        <h3>Current Capital Value</h3>
                        <h4>{'£'+(this.props.valuation.predict_results.predict_price).toLocaleString()}</h4>
                        <h3>Rental Value</h3>
                        <h4>{'£'+(this.props.valuation.predict_results.predict_price * 0.055 / 12).toFixed(0)+' per month | £'+(this.props.valuation.predict_results.predict_price * 0.055 / 52).toFixed(0)+' per week'}</h4>
                        <h3>Investment Yield</h3>
                        <h4>5.5%</h4>
                        <h3>12 Month Capital Growth</h3>
                        <h4>{(((this.props.valuation.predict_price_5y.index_31)-(this.props.valuation.predict_price_5y.index_30))/(this.props.valuation.predict_price_5y.index_30)*100).toFixed(1)+'%'}</h4>
                    </GraphCard>
                    <GraphCard title={'Property Street View'}>
                        <div className="streeview">
                            <StreetView
                                isMarkerShown={this.props.isMarkerShown}
                                onMarkerClick={this.handleMarkerClick}
                                markerPosition={marker}
                                zoom={2}
                            />
                        </div>
                    </GraphCard>
                </div>

                <div >
                    {
                        _.isEmpty(this.props.valuation.comparable_properties[1]) ? null : (
                            <div>
                                <div className="col-12 text-left">
                                    <h2 className='mt-3'>Comparable Properties</h2>
                                    <p>The accuracy of an automated valuation will vary according to a number of factors. The best method of calculating a valuation is by looking at comparable properties in the local area. Our report takes this information and takes over 100 external factors to predict a valuation.</p>
                                    <p>Below you will see the comparable properties we believe are the most significant in estimating your property valuation. Whilst sold prices on a street are important we look at a much wider range of factors to collect the local properties most suited to use as supporting evidence.</p>
                                    <p>Each property tile below shows the current market valuation, distance from the subject property, address & property characteristics. A full list of comparables can be found at the end of this report</p>
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
                        <h2 className='mt-3'>Property Performance V Regional Average</h2>
                    </div>
                    <GraphCard title={'This properties market value over 5 years'}>
                        <Line data={this.getValuesForLine(this.props.valuation.predict_price_5y)} />
                    </GraphCard>
                    <GraphCard title={'Regional 5 Year Price Prediction'}>
                        <Line data={this.getValuesForLine(this.props.valuation.regional_price_5y)} />
                    </GraphCard>
                </div>

                <div className="row">
                    <div className="col-12 text-left">
                        <h2 className='mt-3'>Regional Values Based on Property Type</h2>
                    </div>

                    {
                        _.map(this.props.valuation.regional_housetype_price_5y, (ht, i) => (
                            <GraphCard title={i.replace("Price", " Price")}  key={i}>
                                <Line data={this.getValuesForLine(ht)} />
                            </GraphCard>
                        ))
                    }

                </div>
                {
                    _.isEmpty(this.props.valuation.sales_history_analyze[1]) ? null : (
                        <React.Fragment>
                            <h2 className='mt-3'>Sales History Analyze</h2>
                            <div className="card">
                                <div className="card-body">

                                    <Table>
                                        <thead>
                                        <tr>
                                            <th>Price Change Percentage</th>
                                            <th>Price Change</th>
                                            <th>Sold Date</th>
                                            <th>Sold Price</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            _.map(this.props.valuation.sales_history_analyze, (val, key) => (
                                                <tr key={key}>
                                                    <td>{val.price_chage_percent}%</td>
                                                    <td>£{val.price_change.toLocaleString()}</td>
                                                    <td>{moment(val.sold_date).format('Do MMM YYYY')}</td>
                                                    <td>£{val.sold_price.toLocaleString()}</td>
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
                                                    <th>Current Valuation</th>
                                                    <th>Distance to valuated property</th>
                                                    <th>House Type</th>
                                                    <th>Postcode</th>
                                                    <th>Rooms</th>
                                                    <th>Size</th>
                                                    <th>Sold Date</th>
                                                    <th>Sold Price</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                    _.map(this.props.valuation.comparable_properties, (cp, i) => (

                                                        <tr key={i}>
                                                            <td>{cp.address_1}</td>
                                                            <td>£{cp.current_valuation.toLocaleString()}</td>
                                                            <td>{cp.distance_to_query_property}</td>
                                                            <td>{cp.house_type}</td>
                                                            <td>{cp.postcode}</td>
                                                            <td>{cp.rooms}</td>
                                                            <td>{cp.size}</td>
                                                            <td>{moment(cp.sold_date).format('DD-MM-YYYY')}</td>
                                                            <td>£{cp.sold_price.toLocaleString()}</td>
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