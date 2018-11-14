import React from "react";
import ValuationForm from '../components/forms/ValuationForm'
import "../styles/valuation.scss";
import ValuationReport from "../components/valuation/ValuationReport";
import _ from "lodash";
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';


class QuickValuation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            report: {},
            //report: { "selling_results": { "predict_results": { "predict_price": 165500, "probability": 0.668, "exist_in_epc": true, "predict_price_low": 138500, "band": 0.163, "predict_price_up": 192500, "lat": 51.67170434, "lng": -3.87740098, "confidence_level": 6 }, "regional_price_5y": { "index_10": 128500, "index_11": 130500, "index_12": 127500, "index_13": 133000, "index_14": 133000, "index_15": 131500, "index_16": 134000, "index_17": 134000, "index_18": 135000, "index_19": 134500, "index_30": 145500, "index_31": 144500, "index_29": 144500, "index_28": 143000, "index_21": 137000, "index_20": 138000, "index_23": 137500, "index_22": 138000, "index_25": 140000, "index_24": 138500, "index_27": 143500, "regionname": "Swansea", "area_code": "W06000011", "index_8": 133500, "index_9": 131500, "index_6": 127500, "index_7": 132500, "index_4": 127000, "index_5": 130500, "index_2": 126500, "index_3": 125500, "index_1": 123500, "index_26": 144000 }, "local_property_type_statistic": { "Flat_average_value": 0, "Terrace_average_size": 77, "Detached_average_size": 101, "Terrace_average_value": 50000, "Terrace_per_size_value": 654, "Detached_per_size_value": 1754, "Flat_average_size": 0, "Flat_per_size_value": 0, "Flat_num_ratio": 0, "Semi_Detached_average_value": 129500, "Detached_num_ratio": 0.408, "Terrace_num_ratio": 0.014, "Semi_Detached_average_size": 74, "Semi_Detached_num_ratio": 0.577, "Detached_average_value": 177000, "Semi_Detached_per_size_value": 1750 }, "comparable_properties": { "1": { "sold_date": "2017-03-31", "address_id": 23322095, "current_valuation": 136500, "lat": 51.669258, "sold_price": 128500, "rooms": 5, "distance_to_query_property": 274, "house_type": "Semi-Detached House", "lng": -3.877965, "size": 73, "postcode": "SA7 9LY", "address_1": "2, Heol Cae Rhosyn" }, "2": { "sold_date": "2015-03-11", "address_id": 23321921, "current_valuation": 122000, "lat": 51.669159, "sold_price": 108500, "rooms": 5, "distance_to_query_property": 306, "house_type": "Semi-Detached House", "lng": -3.879103, "size": 80, "postcode": "SA7 9LR", "address_1": "31, Lon Ogwen" }, "3": { "sold_date": "2011-11-11", "address_id": 23320593, "current_valuation": 144000, "lat": 51.672732, "sold_price": 124995, "rooms": 5, "distance_to_query_property": 117, "house_type": "Semi-Detached House", "lng": -3.877776, "size": 75, "postcode": "SA7 9EB", "address_1": "6, Haul Fryn" }, "4": { "sold_date": "2012-10-26", "address_id": 23322037, "current_valuation": 138500, "lat": 51.669625, "sold_price": 116500, "rooms": 4, "distance_to_query_property": 334, "house_type": "Semi-Detached House", "lng": -3.880901, "size": 84, "postcode": "SA7 9LU", "address_1": "46, Heol Dulais" }, "5": { "sold_date": "2016-07-08", "address_id": 23320571, "current_valuation": 174000, "lat": 51.672732, "sold_price": 163000, "rooms": 5, "distance_to_query_property": 117, "house_type": "Detached House", "lng": -3.877776, "size": 88, "postcode": "SA7 9EB", "address_1": "14, Haul Fryn" }, "6": { "sold_date": "2015-10-09", "address_id": 23320551, "current_valuation": 269000, "lat": 51.671704, "sold_price": 245000, "rooms": 6, "distance_to_query_property": 0, "house_type": "Detached House", "lng": -3.877401, "size": 176, "postcode": "SA7 9DY", "address_1": "43a, Smiths Road" }, "7": { "sold_date": "2015-07-17", "address_id": 23320577, "current_valuation": 180500, "lat": 51.672732, "sold_price": 164000, "rooms": 7, "distance_to_query_property": 117, "house_type": "Detached House", "lng": -3.877776, "size": 119, "postcode": "SA7 9EB", "address_1": "20, Haul Fryn" }, "8": { "sold_date": "2016-06-30", "address_id": 23320580, "current_valuation": 352500, "lat": 51.672732, "sold_price": 327500, "rooms": 9, "distance_to_query_property": 117, "house_type": "Detached House", "lng": -3.877776, "size": 231, "postcode": "SA7 9EB", "address_1": "24, Haul Fryn" }, "9": { "sold_date": "2014-10-31", "address_id": 23320602, "current_valuation": 332000, "lat": 51.672732, "sold_price": 300500, "rooms": 8, "distance_to_query_property": 117, "house_type": "Detached House", "lng": -3.877776, "size": 197, "postcode": "SA7 9EB", "address_1": "43a, Haul Fryn" }, "10": { "sold_date": "2017-03-06", "address_id": 23322045, "current_valuation": 245000, "lat": 51.669625, "sold_price": 233500, "rooms": 6, "distance_to_query_property": 334, "house_type": "Detached House", "lng": -3.880901, "size": 119, "postcode": "SA7 9LU", "address_1": "58, Heol Dulais" }, "11": { "sold_date": "2012-10-19", "address_id": 23320533, "current_valuation": 201500, "lat": 51.671704, "sold_price": 170000, "rooms": 7, "distance_to_query_property": 0, "house_type": "Detached House", "lng": -3.877401, "size": 148, "postcode": "SA7 9DY", "address_1": "59, Smiths Road" } }, "sales_history_analyze": { "0": {} }, "regional_housetype_price_5y": { "DetachedPrice": { "index_10": 202000, "index_11": 204500, "index_12": 200000, "index_13": 209000, "index_14": 209000, "index_15": 207500, "index_16": 211500, "index_17": 211500, "index_18": 213000, "index_19": 211500, "index_30": 230500, "index_31": 227500, "index_29": 229000, "index_28": 226500, "index_21": 216000, "index_20": 217000, "index_23": 218000, "index_22": 219500, "index_25": 221000, "index_24": 219500, "index_27": 227000, "index_26": 227000, "index_8": 208500, "index_9": 206000, "index_6": 199500, "index_7": 206500, "index_4": 199000, "index_5": 204000, "index_2": 197000, "index_3": 197000, "index_1": 193000 }, "TerracedPrice": { "index_10": 104500, "index_11": 106000, "index_12": 103500, "index_13": 108500, "index_14": 108500, "index_15": 106500, "index_16": 108500, "index_17": 108500, "index_18": 109500, "index_19": 109500, "index_30": 117500, "index_31": 116500, "index_29": 116500, "index_28": 115000, "index_21": 110500, "index_20": 112500, "index_23": 111000, "index_22": 111000, "index_25": 113000, "index_24": 111500, "index_27": 116000, "index_26": 116500, "index_8": 109000, "index_9": 107500, "index_6": 104000, "index_7": 108000, "index_4": 103000, "index_5": 106000, "index_2": 103500, "index_3": 102500, "index_1": 101000 }, "SemiDetachedPrice": { "index_10": 132000, "index_11": 133500, "index_12": 130500, "index_13": 136500, "index_14": 137000, "index_15": 134500, "index_16": 137500, "index_17": 138000, "index_18": 138500, "index_19": 138000, "index_30": 150000, "index_31": 149000, "index_29": 149000, "index_28": 147500, "index_21": 140500, "index_20": 141500, "index_23": 141000, "index_22": 142000, "index_25": 143500, "index_24": 141500, "index_27": 147500, "index_26": 148000, "index_8": 137000, "index_9": 135000, "index_6": 130500, "index_7": 135500, "index_4": 130000, "index_5": 133500, "index_2": 129000, "index_3": 128500, "index_1": 126500 }, "FlatPrice": { "index_10": 83500, "index_11": 85000, "index_12": 83000, "index_13": 86500, "index_14": 86000, "index_15": 84500, "index_16": 86000, "index_17": 86000, "index_18": 87000, "index_19": 87000, "index_30": 93500, "index_31": 92500, "index_29": 94000, "index_28": 93000, "index_21": 89000, "index_20": 89500, "index_23": 90000, "index_22": 90000, "index_25": 92500, "index_24": 91000, "index_27": 94000, "index_26": 95000, "index_8": 86000, "index_9": 85000, "index_6": 83000, "index_7": 86000, "index_4": 83000, "index_5": 85500, "index_2": 82500, "index_3": 82000, "index_1": 81000 } }, "predict_price_5y": { "index_10": 146500, "index_11": 148500, "index_12": 144500, "index_13": 151500, "index_14": 151500, "index_15": 149500, "index_16": 152500, "index_17": 153000, "index_18": 154000, "index_19": 153000, "index_30": 166000, "index_31": 165500, "index_29": 165000, "index_28": 163500, "index_21": 156000, "index_20": 157000, "index_23": 156500, "index_22": 157500, "index_25": 159500, "index_24": 157000, "index_27": 163500, "index_26": 164000, "index_8": 152000, "index_9": 149500, "index_6": 145000, "index_7": 150500, "index_4": 144500, "index_5": 148000, "index_2": 143000, "index_3": 142500, "index_1": 140500 } }, "rental_results": { "reantal_comparable_properties": { "0": { "distance": 0.222, "available_from": "Available from 11th Oct 2018", "display_address": "Birchgrove Road, Birchgrove, Swansea", "log": -3.8750269999999998, "price": 1000, "num_beds": 4, "num_baths": 3, "lat": 51.673058000000005, "property_type": "detached", "furnished_state": "unfurnished" }, "1": { "distance": 0.41, "available_from": "Available from 1st Aug 2018", "display_address": "Heol Dulais, Birchgrove, Swansea", "log": -3.8764260000000004, "price": 550, "num_beds": 2, "num_baths": 1, "lat": 51.668071999999995, "property_type": "semi_detached", "furnished_state": "Unknown" }, "2": { "distance": 0.681, "available_from": "Available from 2nd Nov 2018", "display_address": "Ffordd Scott, The Fairways, Birchgrove, Swansea SA7", "log": -3.881757, "price": 525, "num_beds": 2, "num_baths": 1, "lat": 51.666206, "property_type": "terraced", "furnished_state": "unfurnished" }, "3": { "distance": 0.795, "available_from": "Available from 17th Dec 2018", "display_address": "Erw Werdd, Birchgrove, Swansea SA7", "log": -3.88705, "price": 650, "num_beds": 3, "num_baths": 1, "lat": 51.675608000000004, "property_type": "semi_detached", "furnished_state": "unfurnished" }, "4": { "distance": 1.078, "available_from": "Available Immediately", "display_address": "Bronwydd, Birchgrove, Swansea SA7", "log": -3.8658230000000002, "price": 525, "num_beds": 2, "num_baths": 0, "lat": 51.665192, "property_type": "end_terrace", "furnished_state": "unfurnished" }, "5": { "distance": 1.095, "available_from": "Available from 31st Oct 2018", "display_address": "Lon Carrig Bica, Birchgrove SA7", "log": -3.866307, "price": 460, "num_beds": 1, "num_baths": 1, "lat": 51.664663, "property_type": "semi_detached", "furnished_state": "unfurnished" }, "6": { "distance": 1.253, "available_from": "Available Immediately", "display_address": "Heol Barcud, Birchgrove SA7", "log": -3.8689489999999997, "price": 525, "num_beds": 2, "num_baths": 0, "lat": 51.661735, "property_type": "semi_detached", "furnished_state": "Unknown" }, "7": { "distance": 1.648, "available_from": "Available from 28th Nov 2018", "display_address": "Tawe Road, Llansamlett, Swansea SA7", "log": -3.893992, "price": 700, "num_beds": 4, "num_baths": 0, "lat": 51.661045, "property_type": "detached", "furnished_state": "unfurnished" }, "8": { "distance": 1.77, "available_from": "Available from 12th Nov 2018", "display_address": "Maes Y Dderwen, Llansamlet, Swansea SA7", "log": -3.879608, "price": 500, "num_beds": 2, "num_baths": 0, "lat": 51.655854, "property_type": "bungalow", "furnished_state": "unfurnished" }, "9": { "distance": 2.085, "available_from": "Available from 1st Jan 1970", "display_address": "12 Heol Ffranc, Skewen", "log": -3.862714, "price": 595, "num_beds": 3, "num_baths": 1, "lat": 51.655322999999996, "property_type": "bungalow", "furnished_state": "unfurnished" } }, "reantal_predict_results": 630 } },
            valuation: {},
        };
        this.showReport = this.showReport.bind(this);
        this.setValuationFormData = this.setValuationFormData.bind(this);
    }
    showReport(report) {
        this.setState({report:report});
    }

    setValuationFormData(valuation) {
        this.setState({valuation:valuation});
    }

    render() {

     return (
         <React.Fragment>
                <div className="row  ">
                    {(_.isEmpty(this.state.report)) ?
                        <div className="col-4">
                            <div className="card valuation-card">
                                <div className="card-body">
                                    <ValuationForm report={this.showReport}/>
                                </div>

                            </div>
                        </div>
                        :
                        <div className="container">
                        <div className="valuation">
                            <div className="col-12">
                                <div className="card ">
                                    <div className="card-body">
                                        <h1>Your valuation is on its way</h1>
                                        <ValuationReport valuation={this.state.report.selling_results}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    }
                </div>
         </React.Fragment>
     );
    }
}


export default QuickValuation;
