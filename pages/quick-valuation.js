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
            //report: {},
            report: { "selling_results": { "predict_results": { "predict_price": 331500, "probability": 0.646, "exist_in_epc": false, "predict_price_low": 287500, "band": 0.133, "address_1": "No Data", "predict_price_up": 375500, "lat": 51.63916499, "lng": -1.86261753, "confidence_level": 6 }, "sales_history_analyze": { "1": { "sold_date": "2017-03-31", "price_chage_percent": 0.326, "sold_price": 250000, "price_change": 81500 } }, "query_info": { "address_id": 24868766, "number_habitable_rooms": 5, "built_from": "Semi-Detached", "total_floor_area": 100, "wall_type": "cavity wall", "property_type": "House" }, "local_property_type_statistic": { "Flat_average_value": 0, "Semi_Detached_num_ratio": 0.161, "Terrace_average_size": 73, "Detached_average_size": 116, "Terrace_per_size_value": 3283, "Detached_per_size_value": 3692, "Flat_average_size": 0, "Flat_num_ratio": 0, "Detached_average_value": 428000, "Terrace_num_ratio": 0.097, "Detached_num_ratio": 0.742, "Flat_per_size_value": 0, "Semi_Detached_average_size": 77, "Terrace_average_value": 239500, "Semi_Detached_average_value": 258500, "Semi_Detached_per_size_value": 3357 }, "comparable_properties": { "0": { "sold_date": "2017-11-24", "distance": 0, "address_id": 24868810, "current_valuation": 249500, "sold_price": 245000, "rooms": 5, "lat": 51.63916499, "address_1": "92 Deansfield", "lng": -1.86261753, "size": 84, "house_type_out": "Semi-Detached House", "postcode": "SN6 6BW" }, "1": { "sold_date": "2015-10-01", "distance": 0, "address_id": 24868793, "current_valuation": 263000, "sold_price": 228000, "rooms": 4, "lat": 51.63916499, "address_1": "75 Deansfield", "lng": -1.86261753, "size": 69, "house_type_out": "Semi-Detached House", "postcode": "SN6 6BW" }, "2": { "sold_date": "2015-05-06", "distance": 0, "address_id": 24868790, "current_valuation": 251500, "sold_price": 205000, "rooms": 5, "lat": 51.63916499, "address_1": "72 Deansfield", "lng": -1.86261753, "size": 78, "house_type_out": "Semi-Detached House", "postcode": "SN6 6BW" }, "3": { "sold_date": "2014-08-08", "distance": 0, "address_id": 24868808, "current_valuation": 290000, "sold_price": 229950, "rooms": 6, "lat": 51.63916499, "address_1": "90 Deansfield", "lng": -1.86261753, "size": 95, "house_type_out": "Semi-Detached House", "postcode": "SN6 6BW" }, "4": { "sold_date": "2016-12-15", "distance": 116, "address_id": 24868684, "current_valuation": 314000, "sold_price": 290000, "rooms": 5, "lat": 51.63865421, "address_1": "61 Deansfield", "lng": -1.86409297, "size": 96, "house_type_out": "Detached House", "postcode": "SN6 6BP" }, "5": { "sold_date": "2016-10-06", "distance": 116, "address_id": 24868641, "current_valuation": 337500, "sold_price": 315000, "rooms": 7, "lat": 51.63865421, "address_1": "22 Deansfield", "lng": -1.86409297, "size": 98, "house_type_out": "Detached House", "postcode": "SN6 6BP" }, "6": { "sold_date": "2016-05-20", "distance": 116, "address_id": 24868639, "current_valuation": 305000, "sold_price": 275000, "rooms": 4, "lat": 51.63865421, "address_1": "20 Deansfield", "lng": -1.86409297, "size": 79, "house_type_out": "Detached House", "postcode": "SN6 6BP" }, "7": { "sold_date": "2016-03-08", "distance": 116, "address_id": 24868681, "current_valuation": 272500, "sold_price": 245000, "rooms": 6, "lat": 51.63865421, "address_1": "59 Deansfield", "lng": -1.86409297, "size": 115, "house_type_out": "Detached House", "postcode": "SN6 6BP" }, "8": { "sold_date": "2016-05-20", "distance": 116, "address_id": 24868657, "current_valuation": 416000, "sold_price": 375000, "rooms": 7, "lat": 51.63865421, "address_1": "37 Deansfield", "lng": -1.86409297, "size": 135, "house_type_out": "Detached House", "postcode": "SN6 6BP" }, "9": { "sold_date": "2015-12-21", "distance": 0, "address_id": 24868780, "current_valuation": 331000, "sold_price": 290000, "rooms": 5, "lat": 51.63916499, "address_1": "62 Deansfield", "lng": -1.86261753, "size": 112, "house_type_out": "Detached House", "postcode": "SN6 6BW" }, "10": { "sold_date": "2015-06-23", "distance": 116, "address_id": 24868645, "current_valuation": 284500, "sold_price": 235000, "rooms": 4, "lat": 51.63865421, "address_1": "26 Deansfield", "lng": -1.86409297, "size": 73, "house_type_out": "Detached House", "postcode": "SN6 6BP" } }, "regional_price_10y": { "index_36": 261000, "index_37": 266500, "index_34": 261500, "index_35": 255000, "index_32": 249000, "index_33": 251000, "index_30": 242000, "index_31": 243500, "index_18": 211000, "index_19": 207000, "index_12": 208000, "index_38": 274000, "index_39": 272000, "index_13": 203500, "index_14": 209000, "index_10": 212000, "index_15": 206000, "index_16": 207500, "index_17": 208500, "regional_name": "Wiltshire", "index_29": 230000, "index_28": 225500, "index_11": 207500, "index_20": 205500, "index_23": 214500, "index_22": 213500, "index_25": 214500, "index_24": 212000, "index_41": 277500, "index_40": 270500, "area_code": "E06000054", "index_21": 208500, "index_8": 205500, "index_9": 208500, "index_6": 195500, "index_7": 200500, "index_4": 188000, "index_5": 186500, "index_2": 212000, "index_3": 194500, "index_1": 216500, "index_27": 224000, "index_26": 227000 }, "regional_housetype_price_10y": { "TerracedPrice": { "index_10": 166000, "index_11": 162500, "index_12": 162500, "index_13": 160000, "index_14": 164000, "index_15": 161000, "index_16": 163000, "index_17": 164500, "index_18": 166500, "index_19": 163500, "index_34": 205000, "index_38": 213500, "index_39": 212000, "index_35": 198500, "index_32": 194500, "index_33": 197500, "index_30": 190000, "index_31": 191000, "index_29": 181000, "index_28": 176500, "index_21": 165000, "index_20": 162000, "index_23": 169000, "index_22": 168500, "index_25": 169500, "index_24": 166500, "index_27": 176000, "index_26": 179000, "index_36": 203000, "index_8": 161500, "index_9": 164500, "index_6": 154000, "index_7": 158500, "index_4": 147000, "index_5": 147000, "index_2": 166000, "index_3": 152500, "index_1": 170500, "index_37": 207500, "index_41": 217000, "index_40": 210500 }, "FlatPrice": { "index_10": 118500, "index_11": 117000, "index_12": 117000, "index_13": 115000, "index_14": 116500, "index_15": 115000, "index_16": 115000, "index_17": 116000, "index_18": 116000, "index_19": 114000, "index_34": 141500, "index_38": 149500, "index_39": 147500, "index_35": 138500, "index_32": 134500, "index_33": 136000, "index_30": 130500, "index_31": 130500, "index_29": 124500, "index_28": 123000, "index_21": 114500, "index_20": 112500, "index_23": 117000, "index_22": 116500, "index_25": 117000, "index_24": 115500, "index_27": 122000, "index_26": 122500, "index_36": 142500, "index_8": 117000, "index_9": 119000, "index_6": 114500, "index_7": 116500, "index_4": 114500, "index_5": 111500, "index_2": 127500, "index_3": 117500, "index_1": 131000, "index_37": 146500, "index_41": 148000, "index_40": 146000 }, "SemiDetachedPrice": { "index_10": 201500, "index_11": 197500, "index_12": 196500, "index_13": 193500, "index_14": 199000, "index_15": 196500, "index_16": 198000, "index_17": 199000, "index_18": 201000, "index_19": 197000, "index_34": 251000, "index_38": 263000, "index_39": 262000, "index_35": 244500, "index_32": 239500, "index_33": 241000, "index_30": 232000, "index_31": 233500, "index_29": 221000, "index_28": 216000, "index_21": 199000, "index_20": 196000, "index_23": 205000, "index_22": 203500, "index_25": 205500, "index_24": 203000, "index_27": 214500, "index_26": 217000, "index_36": 250000, "index_8": 195500, "index_9": 198000, "index_6": 185500, "index_7": 190500, "index_4": 177500, "index_5": 177000, "index_2": 200500, "index_3": 184500, "index_1": 205000, "index_37": 255500, "index_41": 268500, "index_40": 260500 }, "DetachedPrice": { "index_10": 319000, "index_11": 312500, "index_12": 314500, "index_13": 305500, "index_14": 315500, "index_15": 311000, "index_16": 311500, "index_17": 313000, "index_18": 317500, "index_19": 311000, "index_34": 394500, "index_38": 414000, "index_39": 412000, "index_35": 387500, "index_32": 377000, "index_33": 378000, "index_30": 365000, "index_31": 368000, "index_29": 346500, "index_28": 340000, "index_21": 312500, "index_20": 309000, "index_23": 322500, "index_22": 321000, "index_25": 321000, "index_24": 319000, "index_27": 337500, "index_26": 341500, "index_36": 396000, "index_8": 307500, "index_9": 310500, "index_6": 291000, "index_7": 298000, "index_4": 280500, "index_5": 275500, "index_2": 315500, "index_3": 289000, "index_1": 319500, "index_37": 402000, "index_41": 420000, "index_40": 411000 } }, "predict_price_10y": { "index_10": 248500, "index_11": 244000, "index_12": 243000, "index_13": 239000, "index_14": 246000, "index_15": 242500, "index_16": 245000, "index_17": 245500, "index_18": 248000, "index_19": 243500, "index_34": 310000, "index_38": 325000, "index_39": 324000, "index_35": 302500, "index_27": 265000, "index_32": 296000, "index_33": 298000, "index_30": 286500, "index_31": 288500, "index_29": 273000, "index_28": 267000, "index_21": 246000, "index_20": 242500, "index_23": 253500, "index_22": 251500, "index_25": 254000, "index_24": 251000, "index_36": 309000, "index_40": 321500, "index_37": 316000, "index_8": 241500, "index_9": 245000, "index_6": 229000, "index_7": 235500, "index_4": 219500, "index_5": 219000, "index_2": 248000, "index_3": 228000, "index_1": 253500, "index_41": 331500, "index_26": 268500 } }, "rental_results": { "rental_comparable_properties": { "0": { "distance": 0.578, "available_from": "Available from 10th Nov 2018", "display_address": "Hallsfield Cricklade Swindon SN6", "log": -1.8637, "price": 1285, "num_beds": 4, "num_baths": 2, "lat": 51.6443, "front_image_url": "https://lid.zoocdn.com/354/255/af7abc6bce2ba13ec53dd867b30857e97309995c.jpg", "property_type": "detached", "furnished_state": "unfurnished" }, "1": { "distance": 1.708, "available_from": "Available from 15th May 2018", "display_address": "Cricklade Swindon SN6", "log": -1.8719, "price": 2695, "num_beds": 5, "num_baths": 2, "lat": 51.6249, "front_image_url": "https://lid.zoocdn.com/354/255/4d59f5e3344c39e3ca17307ff21e8b5edce59f7e.jpg", "property_type": "detached", "furnished_state": "unfurnished" }, "2": { "distance": 2.096, "available_from": "Available from 15th Sep 2018", "display_address": "Collett Place Latton Swindon SN6", "log": -1.8685, "price": 2250, "num_beds": 4, "num_baths": 2, "lat": 51.6576, "front_image_url": "https://lid.zoocdn.com/354/255/3d548b1a5c33a1743dc21f3108932cf65e26f52e.jpg", "property_type": "detached", "furnished_state": "unfurnished" }, "3": { "distance": 4.319, "available_from": "Available from 24th Oct 2018", "display_address": "Boatman Close Swindon SN25", "log": -1.8372, "price": 1200, "num_beds": 4, "num_baths": 2, "lat": 51.6037, "front_image_url": "https://lid.zoocdn.com/354/255/be9077b8fd6c9f636ab17ea63006593e75be08af.jpg", "property_type": "house", "furnished_state": "unfurnished" }, "4": { "distance": 4.41, "available_from": "Available from 20th Oct 2018", "display_address": "Ulysses Road Swindon SN25", "log": -1.8342, "price": 1050, "num_beds": 4, "num_baths": 0, "lat": 51.6037, "front_image_url": "https://lid.zoocdn.com/354/255/f2ae02b8b2f1546f36584e6554b48c3e0b6038d2.jpg", "property_type": "town_house", "furnished_state": "unfurnished" }, "5": { "distance": 4.463, "available_from": "Available from 29th Oct 2018", "display_address": "Jason Close Swindon SN25", "log": -1.8367, "price": 725, "num_beds": 2, "num_baths": 1, "lat": 51.6024, "front_image_url": "https://lid.zoocdn.com/354/255/a7bf35e88477eb5f9a6605fe670345701748d63e.jpg", "property_type": "house", "furnished_state": "unfurnished" }, "6": { "distance": 4.887, "available_from": "Available from 29th Nov 2018", "display_address": "Treforest Close Swindon SN25", "log": -1.8274, "price": 1300, "num_beds": 4, "num_baths": 2, "lat": 51.601, "front_image_url": "https://lid.zoocdn.com/354/255/5cbf1988c549b69035e8f5b2555586bece9605d9.jpg", "property_type": "house", "furnished_state": "unfurnished" }, "7": { "distance": 4.966, "available_from": "Available from 5th Nov 2018", "display_address": "High Road Ashton Keynes Swindon SN6", "log": -1.9342, "price": 750, "num_beds": 2, "num_baths": 1, "lat": 51.6437, "front_image_url": "https://lid.zoocdn.com/354/255/c204d5e39776f481743335f5b0e47aeee5574b23.jpg", "property_type": "detached", "furnished_state": "unfurnished" }, "8": { "distance": 4.99, "available_from": "Available from 23rd Oct 2018", "display_address": "Birkdale Close Swindon SN25", "log": -1.8213, "price": 675, "num_beds": 2, "num_baths": 1, "lat": 51.6024, "front_image_url": "https://lid.zoocdn.com/354/255/c3f918b5e2b08a37f1009e25927eedf7f4299026.jpg", "property_type": "house", "furnished_state": "unfurnished" }, "9": { "distance": 5.11, "available_from": "Available from 9th Aug 2018", "display_address": "Dyson Road Redhouse Swindon SN25", "log": -1.8127, "price": 1200, "num_beds": 5, "num_baths": 2, "lat": 51.6052, "front_image_url": "https://lid.zoocdn.com/354/255/23e70fcaa2407b8290ede2a2e9351c9e3486d8ad.jpg", "property_type": "town_house", "furnished_state": "unfurnished" } }, "rental_predict_price": 1025 } },
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
                                        <ValuationReport valuation={this.state.report}/>
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
