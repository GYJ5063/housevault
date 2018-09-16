import React, {Component} from "react";
import FormValidator from "../components/FormValidator";
import axios from "axios/index";
import _ from 'lodash';
import { Table } from 'reactstrap';
import { HorizontalBar, Line, Pie } from 'react-chartjs-2';
import moment from 'moment/moment';
import Layout from '../components/Layout'
import StreetView from '../components/StreetView'

class Valuation extends Component {

    constructor(props) {
        super(props);
        this.validator = new FormValidator([
            {
                field: 'postcode',
                method: 'isPostalCode',
                args: ['GB'],
                validWhen: true,
                message: 'Postcode not valid.'
            },
            {
                field: 'building_number',
                method: (field, data) => {
                    if(data.building_name || parseInt(data.building_number)) {
                        return true;
                    }
                    return false;
                },
                validWhen: true,
                message: 'Building number is required if building name is blank.'
            },
            {
                field: 'built_from',
                method: 'isEmpty',
                validWhen: false,
                message: 'Built from is required.'
            },
            {
                field: 'property_type',
                method: 'isEmpty',
                validWhen: false,
                message: 'Property type is required.'
            },
            {
                field: 'wall_type',
                method: 'isEmpty',
                validWhen: false,
                message: 'Wall type is required.'
            },
            {
                field: 'number_habitable_rooms',
                method: 'isEmpty',
                validWhen: false,
                message: 'Number of habitable rooms is required.'
            },
            {
                field: 'total_floor_area',
                method: _.inRange,
                args: [10, 600],
                validWhen: true,
                message: 'Area must be a valid number between 10 and 600.'
            },
            {
                field: 'report',
                method: 'isEmpty',
                validWhen: false,
                message: 'Select if a report is needed.'
            }
        ]);

        this.state = {
            postcode: '',
            building_number: '',
            building_name: '',
            built_from: '',
            property_type: '',
            wall_type: '',
            number_habitable_rooms:'',
            total_floor_area: '',
            isMarkerShown: false,
            //report: 1,
            validation: this.validator.valid(),
            hideLoadingSpinner: true,
           // valuation: {"predict_results":{"predict_price":349500,"probability":0.609,"exist_in_epc":true,"predict_price_low":303000,"band":0.133,"predict_price_up":396500,"lat":51.63916499,"lng":-1.86261753,"confidence_level":6},"regional_price_5y":{"index_10":224000,"index_11":224000,"index_12":225500,"index_13":230000,"index_14":238000,"index_15":242500,"index_16":243500,"index_17":247000,"index_18":251000,"index_19":251000,"area_code":"E06000054","index_31":277500,"regionname":"Wiltshire","index_30":271000,"index_8":221500,"index_9":227500,"index_6":212500,"index_7":214500,"index_4":214500,"index_5":212000,"index_2":209000,"index_3":216500,"index_1":208500,"index_29":270500,"index_28":272000,"index_21":259000,"index_20":258500,"index_23":262000,"index_22":255000,"index_25":266500,"index_24":260000,"index_27":274000,"index_26":275500},"local_property_type_statistic":{"Flat_average_value":0,"Terrace_average_size":73,"Detached_average_size":116,"Terrace_average_value":239500,"Terrace_per_size_value":3283,"Detached_per_size_value":3692,"Flat_average_size":0,"Flat_per_size_value":0,"Flat_num_ratio":0.0,"Semi_Detached_average_value":258500,"Detached_num_ratio":0.742,"Terrace_num_ratio":0.097,"Semi_Detached_average_size":77,"Semi_Detached_num_ratio":0.161,"Detached_average_value":428000,"Semi_Detached_per_size_value":3357},"comparable_properties":{"1":{"address_id":24868684,"current_valuation":314000,"lat":51.638654,"postcode":"SN6 6BP","distance_to_query_property":116,"house_type":"Detached House","lng":-1.864093,"size":96,"sold_date":"2016-12-15","sold_price":290000,"address_1":"61, Deansfield","rooms":5},"2":{"address_id":24868641,"current_valuation":337500,"lat":51.638654,"postcode":"SN6 6BP","distance_to_query_property":116,"house_type":"Detached House","lng":-1.864093,"size":98,"sold_date":"2016-10-06","sold_price":315000,"address_1":"22, Deansfield","rooms":7},"3":{"address_id":24868657,"current_valuation":416000,"lat":51.638654,"postcode":"SN6 6BP","distance_to_query_property":116,"house_type":"Detached House","lng":-1.864093,"size":135,"sold_date":"2016-05-20","sold_price":375000,"address_1":"37, Deansfield","rooms":7},"4":{"address_id":24868681,"current_valuation":272500,"lat":51.638654,"postcode":"SN6 6BP","distance_to_query_property":116,"house_type":"Detached House","lng":-1.864093,"size":115,"sold_date":"2016-03-08","sold_price":245000,"address_1":"59, Deansfield","rooms":6},"5":{"address_id":24868639,"current_valuation":305000,"lat":51.638654,"postcode":"SN6 6BP","distance_to_query_property":116,"house_type":"Detached House","lng":-1.864093,"size":79,"sold_date":"2016-05-20","sold_price":275000,"address_1":"20, Deansfield","rooms":4},"6":{"address_id":24868645,"current_valuation":284500,"lat":51.638654,"postcode":"SN6 6BP","distance_to_query_property":116,"house_type":"Detached House","lng":-1.864093,"size":73,"sold_date":"2015-06-23","sold_price":235000,"address_1":"26, Deansfield","rooms":4},"7":{"address_id":24868628,"current_valuation":299000,"lat":51.638654,"postcode":"SN6 6BP","distance_to_query_property":116,"house_type":"Detached House","lng":-1.864093,"size":81,"sold_date":"2015-05-15","sold_price":245000,"address_1":"10, Deansfield","rooms":4},"8":{"address_id":24868656,"current_valuation":349000,"lat":51.638654,"postcode":"SN6 6BP","distance_to_query_property":116,"house_type":"Detached House","lng":-1.864093,"size":104,"sold_date":"2014-07-02","sold_price":270000,"address_1":"36, Deansfield","rooms":7},"9":{"address_id":24868660,"current_valuation":428000,"lat":51.638654,"postcode":"SN6 6BP","distance_to_query_property":116,"house_type":"Detached House","lng":-1.864093,"size":147,"sold_date":"2014-03-28","sold_price":325000,"address_1":"4, Deansfield","rooms":6},"10":{"address_id":24868649,"current_valuation":429000,"lat":51.638654,"postcode":"SN6 6BP","distance_to_query_property":116,"house_type":"Detached House","lng":-1.864093,"size":133,"sold_date":"2013-07-25","sold_price":315000,"address_1":"3, Deansfield","rooms":5}},"sales_history_analyze":{"1":{"sold_date":"2015-12-21","price_chage_percent":0.036,"sold_price":290000,"price_change":10500},"2":{"sold_date":"1999-11-10","price_chage_percent":1.404,"sold_price":125000,"price_change":175500}},"regional_housetype_price_5y":{"DetachedPrice":{"index_10":337500,"index_11":337500,"index_12":340500,"index_13":346500,"index_14":358000,"index_15":366500,"index_16":368000,"index_17":373500,"index_18":380000,"index_19":378000,"index_30":412000,"index_31":420000,"index_29":410500,"index_28":412000,"index_21":391500,"index_20":389500,"index_23":397000,"index_22":387500,"index_25":402000,"index_24":394000,"index_27":415000,"index_26":415500,"index_8":333000,"index_9":342500,"index_6":319000,"index_7":321000,"index_4":322500,"index_5":319000,"index_2":313500,"index_3":326500,"index_1":312500},"TerracedPrice":{"index_10":176000,"index_11":176000,"index_12":177000,"index_13":181000,"index_14":187000,"index_15":190500,"index_16":191000,"index_17":193000,"index_18":196500,"index_19":197500,"index_30":211000,"index_31":217000,"index_29":210500,"index_28":212000,"index_21":202500,"index_20":203000,"index_23":204000,"index_22":198500,"index_25":207500,"index_24":202000,"index_27":213500,"index_26":215000,"index_8":175000,"index_9":179500,"index_6":167500,"index_7":169500,"index_4":169000,"index_5":167000,"index_2":165500,"index_3":170500,"index_1":165000},"SemiDetachedPrice":{"index_10":214500,"index_11":214500,"index_12":216000,"index_13":221000,"index_14":228500,"index_15":232500,"index_16":233500,"index_17":237500,"index_18":241500,"index_19":241000,"index_30":261000,"index_31":268500,"index_29":260500,"index_28":262000,"index_21":248500,"index_20":247500,"index_23":251000,"index_22":244500,"index_25":255500,"index_24":249000,"index_27":263500,"index_26":264500,"index_8":212500,"index_9":218000,"index_6":203500,"index_7":205500,"index_4":205000,"index_5":203000,"index_2":199500,"index_3":206500,"index_1":199000},"FlatPrice":{"index_10":122000,"index_11":122000,"index_12":122500,"index_13":124500,"index_14":128500,"index_15":130500,"index_16":130500,"index_17":132500,"index_18":135500,"index_19":136000,"index_30":145500,"index_31":148000,"index_29":146500,"index_28":147500,"index_21":140500,"index_20":139500,"index_23":143000,"index_22":138500,"index_25":146500,"index_24":142500,"index_27":149000,"index_26":151000,"index_8":120000,"index_9":123500,"index_6":116000,"index_7":117000,"index_4":117000,"index_5":116000,"index_2":114000,"index_3":117500,"index_1":114500}},"predict_price_5y":{"index_10":281000,"index_11":281000,"index_12":283500,"index_13":288500,"index_14":298000,"index_15":305000,"index_16":306500,"index_17":311000,"index_18":316000,"index_19":314500,"index_30":343000,"index_31":349500,"index_29":342000,"index_28":343000,"index_21":326000,"index_20":324500,"index_23":330500,"index_22":322500,"index_25":335000,"index_24":328000,"index_27":345500,"index_26":346000,"index_8":277000,"index_9":285000,"index_6":265500,"index_7":267500,"index_4":268500,"index_5":265500,"index_2":261000,"index_3":272000,"index_1":260000}}
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.submitted = false;
    }

    delayedShowMarker()  {
        setTimeout(() => {
            this.setState({ isMarkerShown: true })
        }, 3000)
    }

    handleMarkerClick() {
        this.setState({ isMarkerShown: false })
        this.delayedShowMarker()
    }
    componentDidMount() {
        this.delayedShowMarker();
    }

    handleChange (e) {
        let newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    handleSubmit (e, message) {
        e.preventDefault();

        const validation = this.validator.validate(this.state);
        this.setState({ validation });
        this.submitted = true;

        let formData = {
            postcode: this.state.postcode,
            building_number: this.state.building_number,
            building_name: this.state.building_name,
            built_from: this.state.built_from,
            property_type: this.state.property_type,
            wall_type: this.state.wall_type,
            number_habitable_rooms: this.state.number_habitable_rooms,
            total_floor_area: this.state.total_floor_area,
            report: this.state.report
        }

        if (validation.isValid) {
            if(formData.building_name && !formData.building_number){
                formData.building_number = 0;
            }

            this.setState({hideLoadingSpinner: false});
            let self = this;
            let config = {
                headers: {
                    "Authorization": process.env.PRICEPREDICTION_TOKEN
                }
            };

            axios.post(process.env.PRICEPREDICTION_URL, formData, config)
                .then(function (response) {
                    self.setState({ hideLoadingSpinner: true, valuation: response.data });
                })
                .catch(function (error) {
                    self.setState({ hideLoadingSpinner: true});
                    console.error(error);
                });
        }
    }
    createMonthLabels(count){
        let monthNumber = moment().month();

        return count.map(c => {
            const date = moment().month(monthNumber).format('MMMM');
            (monthNumber = monthNumber + 2) % 12;
            return date;
        });
    }
    getValuesForType(target, suffix, label){
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
    prepareVauesForRegional(regionalPrices){

    }

    renderReport(){
       
        if (this.state.report == 1) {
            const marker = {lng: _.toNumber(this.state.valuation.lng), lat: _.toNumber(this.state.valuation.lat) };
            return (
                <React.Fragment>
                    <div className="col">
                        <h2 className='mt-3'>The Property</h2>
                        <div className="streeview">
                            <StreetView
                                isMarkerShown={this.state.isMarkerShown}
                                onMarkerClick={this.handleMarkerClick}
                                markerPosition={marker}
                                zoom={2}
                            />
                        </div>
                    </div>
                    <div >
                        {
                            _.isEmpty(this.state.valuation.comparable_properties[1]) ? null : (
                                <div>
                                    <div className="col-12 text-left">
                                        <h2 className='mt-3'>Comparable Properties</h2>
                                        <p>The accuracy of an automated valuation will vary according to a number of factors. The best method of calculating a valuation is by looking at comparable properties in the local area. Our report takes this information and takes over 100 external factors to predict a valuation.</p>
                                        <p>Below you will see the comparable properties we believe are the most significant in estimating your property valuation. Whilst sold prices on a street are important we look at a much wider range of factors to collect the local properties most suited to use as supporting evidence.</p>
                                        <p>Each property tile below shows the current market valuation, distance from the subject property, address & property characteristics. A full list of comparables can be found at the end of this report</p>
                                    </div>
                                    <div className="card-deck">
                                        {
                                            _.map(this.state.valuation.comparable_properties, (cp, i) => (
                                                <ComparablePropertyCard property={cp} key={i}/>
                                            )).slice(0,6)
                                        }
                                    </div>
                                </div>
                            )
                        }
                    </div>
                        {
                            !this.state.valuation.local_property_type_statistic ? null : (
                                <div className="row">
                                    <div className="col-12 text-left">
                                        <h2 className='mt-3'>Local Property Type Statistic</h2>
                                    </div>
                                    <GraphCard title={'Average Property Size'}>
                                        <HorizontalBar data={this.getValuesForType(this.state.valuation.local_property_type_statistic, 'average_size', 'Average Size')} />
                                    </GraphCard>
                                    <GraphCard title={'Average Property Value'}>
                                        <HorizontalBar data={this.getValuesForType(this.state.valuation.local_property_type_statistic, 'average_value', 'Average Value')} />
                                    </GraphCard>
                                    <GraphCard title={'Property Type Ratio'}>
                                        <Pie data={this.getValuesForPie(this.state.valuation.local_property_type_statistic, 'num_ratio')} />
                                    </GraphCard>
                                    <GraphCard title={'Value per SQM'}>
                                        <HorizontalBar data={this.getValuesForType(this.state.valuation.local_property_type_statistic, 'per_size_value', 'Per Size Value')} />
                                    </GraphCard>
                                </div>
                            )
                        }
                    <div className="row">
                        <div className="col-12 text-left">
                            <h2 className='mt-3'>Property Performance V Regional Average</h2>
                        </div>
                        <GraphCard title={'This properties market value over 5 years'}>
                            <Line data={this.getValuesForLine(this.state.valuation.predict_price_5y)} />
                        </GraphCard>
                        <GraphCard title={'Regional 5 Year Price Prediction'}>
                            <Line data={this.getValuesForLine(this.state.valuation.regional_price_5y)} />
                        </GraphCard>
                    </div>

                    <div className="row">
                        <div className="col-12 text-left">
                            <h2 className='mt-3'>Regional Values Based on Property Type</h2>
                        </div>

                    {
                        _.map(this.state.valuation.regional_housetype_price_5y, (ht, i) => (
                            <GraphCard title={i.replace("Price", " Price")}  key={i}>
                                <Line data={this.getValuesForLine(ht)} />
                            </GraphCard>
                        ))
                    }

                    </div>
                    {
                        _.isEmpty(this.state.valuation.sales_history_analyze[1]) ? null : (
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
                                                    _.map(this.state.valuation.sales_history_analyze, (val, key) => (
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
                                _.isEmpty(this.state.valuation.comparable_properties[1]) ? null : (
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
                                                        _.map(this.state.valuation.comparable_properties, (cp, i) => (

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
            )
        }
    }
    render() {
        let validation = this.submitted ?
            this.validator.validate(this.state) :
            this.state.validation;

        if(!this.state.hideLoadingSpinner) {
            return (
                <div className="container list-page-padding">
                    <div className="row">
                        <div className="col text-center">
                            <i className="fa fa-spinner fa-spin fa-4x"></i>
                        </div>
                    </div>
                </div>
            )
        }
        if(!_.isEmpty(this.state.valuation)) {

            return (
                <div className="container list-page-padding ">
                    <Layout>
                        <h1>Property Valuation</h1>
                        <div className="row">
                            <div className="col-4">
                                <SingleFigureCard name='Price Prediction' value={'£'+this.state.valuation.predict_results.predict_price.toLocaleString()}/>
                            </div>
                            <div className="col-4">
                                <SingleFigureCard name='Price Prediction Low' value={'£'+this.state.valuation.predict_results.predict_price_low.toLocaleString()}/>
                            </div>
                            <div className="col-4">
                                <SingleFigureCard name='Price Prediction High' value={'£'+this.state.valuation.predict_results.predict_price_up.toLocaleString()}/>
                            </div>
                            <div className="col-4">
                                <SingleFigureCard name='Confidence Level' value={this.state.valuation.predict_results.confidence_level}/>
                            </div>
                            <div className="col-4">
                                <SingleFigureCard name='Band' value={this.state.valuation.predict_results.band}/>
                            </div>
                        </div>
                        {
                            this.renderReport(this.state.valuation)
                        }
                    </Layout>
                </div>
                );
        }
        return (
            <div className="container list-page-padding">
                <Layout>

                    <div className="card">
                        <div className="card-body">
                            <h1>Request Valuation</h1>
                            <div className="row">
                                <div className="col">
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="alert alert-danger d-none">
                                            <strong>Whoops!</strong> There were some problems with your input.
                                            <br/>
                                            <ul id="errMsg">
                                            </ul>
                                        </div>

                                        <div className="form-group">
                                            <span id="err_postcode" className="errText">{validation.postcode.message}</span>
                                            <label htmlFor="postcode">Postcode</label>
                                            <input type="text" name="postcode" id="postcode" value={this.state.postcode} className="form-control" placeholder="Postcode" onChange={this.handleChange} />
                                        </div>

                                        <div className="form-group">
                                            <span id="err_building_number" className="errText">{validation.building_number.message}</span>
                                            <label htmlFor="building_number">Building Number</label>
                                            <input type="text" name="building_number" id="building_number" value={this.state.building_number} className="form-control" placeholder="Building number" onChange={this.handleChange} />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="building_name">Building Name</label>
                                            <input type="text" name="building_name" id="building_name" value={this.state.building_name} className="form-control" placeholder="Building Name" onChange={this.handleChange} />
                                            <p style={{ fontSize: 14, marginLeft: 200 }}>Can be left blank if building number is present</p>
                                        </div>

                                        <div className="form-group">
                                            <span id="err_built_from" className="errText">{validation.built_from.message}</span>
                                            <label htmlFor="built_from">Built From</label>
                                            <select name="built_from" className="form-control" id="built_from" onChange={this.handleChange}>
                                                <option value="">Choose Built From</option>
                                                <option value="Enclosed End-Terrace">Enclosed End Terrace</option>
                                                <option value="Enclosed Mid-Terrace">Enclosed Mid Terrace</option>
                                                <option value="End-Terrace">End Terrace</option>
                                                <option value="Mid-Terrace">Mid Terrace</option>
                                                <option value="Semi-Detached">Semi Detached</option>
                                                <option value="Detached">Detached</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <span id="err_property_type" className=" errText">{validation.property_type.message}</span>
                                            <label htmlFor="property_type">Property Type</label>
                                            <select name="property_type" className="form-control" id="property_type" onChange={this.handleChange}>
                                                <option value="">Choose Property Type</option>
                                                <option value="Flat">Flat</option>
                                                <option value="Maisonette">Maisonette</option>
                                                <option value="Bungalow">Bungalow</option>
                                                <option value="House">House</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <span id="err_wall_type" className="errText">{validation.wall_type.message}</span>
                                            <label htmlFor="wall_type">Wall type</label>
                                            <select name="wall_type" className="form-control" id="wall_type" onChange={this.handleChange}>
                                                <option value="">Choose Wall Type</option>
                                                <option value="system">System</option>
                                                <option value="brick">Brick</option>
                                                <option value="cavity wall">Cavity Wall</option>
                                                <option value="timber">Timber</option>
                                                <option value="stone">Stone</option>
                                                <option value="cob">Cob</option>
                                                <option value="unknown">Unknown</option>
                                            </select>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-2">&nbsp;</div>

                                        </div>
                                        <div className="form-group">
                                            <span id="err_number_habitable_rooms" className=" errText">{validation.number_habitable_rooms.message}</span>
                                            <label htmlFor="number_habitable_rooms">Number Habitable Rooms</label>
                                            <select name="number_habitable_rooms" className="form-control" id="number_habitable_rooms" onChange={this.handleChange}>
                                                <option value="">Choose number of habitale rooms</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <span id="err_total_floor_area" className="errText">{validation.total_floor_area.message}</span>
                                            <label htmlFor="total_floor_area">Approximate Size (Between 10 - 600 sqm)</label>
                                            <input type="text" name="total_floor_area" id="total_floor_area" value={this.state.total_floor_area} className="form-control" placeholder="Total Floor Area" onChange={this.handleChange} /><br/>
                                        </div>

                                        <div className="row">


                                        </div>
                                        <div className="form-group">
                                            <span id="err_total_report" className="errText">{validation.report.message}</span>
                                            <label htmlFor="report">Report needed</label>
                                            <select name="report" className="form-control" id="report" onChange={this.handleChange}>
                                                <option value="">Choose if report is required</option>
                                                <option value="1">Yes</option>
                                                <option value="0">No</option>
                                            </select>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm">
                                                <button onClick={this.handleSubmit} className="btn btn-primary pull-right">
                                                    Submit
                                                </button>
                                            </div>

                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
            </div>
        );

    }
}
function ComparablePropertyCard(props) {
    return (
        <div className="card comparable-property-card"  key={props.property.id}  >
            <div className="card-header text-white bg-info mb-3">{props.property.address_1}{', '}{props.property.postcode}</div>
            <div className="card-body">
                <h5 className="card-title text-center">{'Current Market Value'}<br />
                    {'£'}{props.property.current_valuation}</h5>
                {props.property.house_type}{' with '}{props.property.rooms}{' bedrooms and '}{props.property.size}{'sqm of living space was last sold for £'}{props.property.sold_price}{' on the '}{moment(props.property.sold_date).format('Do MMMM YYYY')}{'.'}<br />
            </div>
            <div className="card-footer text-muted"><strong>{'Located '}{props.property.distance_to_query_property}{'m away'}</strong></div>
        </div>
    );
}

function SingleFigureCard(props) {
    return (
        <div className="card">
            <div className="card-body text-center">
                {props.name}<br/>
                <h3>{props.value}</h3>
            </div>
        </div>
    );
}

const GraphCard = (props) => (
    <div className="col-6">
        <div className="card valuation-chart-card  mb-3  text-left w-100">
            <div className="card-header text-white bg-info">{props.title}</div>
            <div className="card-body">{props.children}</div>
        </div>
    </div>
);


export default Valuation;