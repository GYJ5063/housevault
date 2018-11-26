import React from "react";
import ValuationForm from '../components/forms/ValuationForm'
import "../styles/valuation.scss";
import ValuationReport from "../components/valuation/ValuationReport";
import _ from "lodash";
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { Query } from "react-apollo";

const GET_COMPANY_DETAILS = gql`
      {
          companyByValuationURL(valuation_url: "https://valuation.bettermove.co.uk") {
            id,
            logo,
            website_url,
            primary_colour,
            name,
            telephone,
            meta_description
     
          }
    }
`;
class QuickValuation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            //report: {},
            //address: {},
            //company: {},

            company: { "id": 2, "logo": "https://www.bettermove.co.uk/wp-content/uploads/2018/07/tel-logo-2.png", "website_url": "https://bettermove.co.uk", "primary_colour": "CE3A75", "secondary_colour": "423655", "name": "bettermove", "telephone": "123123", "meta_description": "buy houses!" },
            address: { "id": 24868766, "building_name": "", "building_number": 102, "thoroughfare": "Deansfield", "town": "SWINDON", "postcode": "SN6 6BW" },
            report: { "selling_results": { "predict_results": { "predict_price": 306000, "probability": 0.646, "exist_in_epc": true, "predict_price_low": 265000, "band": 0.134, "address_1": "62 Deansfield", "predict_price_up": 347000, "lat": 51.63916499, "lng": -1.86261753, "confidence_level": 6 }, "sales_history_analyze": { "1": { "sold_date": "2015-12-21", "price_chage_percent": 0.055, "sold_price": 290000, "price_change": 16000 }, "2": { "sold_date": "1999-11-10", "price_chage_percent": 1.448, "sold_price": 125000, "price_change": 181000 } }, "query_info": { "address_id": 24868780, "num_bedrooms": 3, "built_from": "Detached", "total_floor_area": 100, "wall_type": "cavity wall", "property_type": "House", "num_receptionrooms": 2 }, "local_property_type_statistic": { "Flat_average_value": 0, "Semi_Detached_num_ratio": 0.161, "Terrace_average_size": 73, "Detached_average_size": 116, "Terrace_per_size_value": 3323, "Detached_per_size_value": 3768, "Flat_average_size": 0, "Flat_num_ratio": 0, "Detached_average_value": 437000, "Terrace_num_ratio": 0.097, "Detached_num_ratio": 0.742, "Flat_per_size_value": 0, "Semi_Detached_average_size": 77, "Terrace_average_value": 242500, "Semi_Detached_average_value": 261500, "Semi_Detached_per_size_value": 3398 }, "national_avg_price_10y": { "index_10": 183647, "index_11": 180724, "index_12": 182257, "index_13": 184377, "index_14": 182186, "index_15": 181309, "index_16": 185093, "index_17": 187252, "index_18": 185821, "index_19": 185002, "index_34": 242360, "index_38": 251860, "index_39": 251387, "index_35": 243360, "index_32": 237342, "index_33": 241736, "index_30": 229452, "index_31": 233255, "index_29": 226362, "index_28": 218778, "index_21": 193484, "index_20": 189025, "index_23": 198058, "index_22": 195032, "index_25": 213145, "index_24": 205770, "index_27": 214225, "index_26": 213618, "index_36": 247985, "index_8": 184363, "index_9": 187366, "index_6": 179383, "index_7": 181519, "index_4": 168870, "index_5": 175698, "index_2": 175203, "index_3": 166516, "index_1": 188049, "index_37": 252466, "index_41": 258865, "index_40": 253240 }, "comparable_properties": { "0": { "sold_date": "2016-12-15", "distance": 116, "address_id": 24868684, "current_valuation": 320500, "sold_price": 290000, "rooms": 5, "lat": 51.63865421, "address_1": "61 Deansfield", "lng": -1.86409297, "size": 96, "house_type_out": "Detached House", "postcode": "SN6 6BP" }, "1": { "sold_date": "2016-10-06", "distance": 116, "address_id": 24868641, "current_valuation": 344500, "sold_price": 315000, "rooms": 7, "lat": 51.63865421, "address_1": "22 Deansfield", "lng": -1.86409297, "size": 98, "house_type_out": "Detached House", "postcode": "SN6 6BP" }, "2": { "sold_date": "2016-05-20", "distance": 116, "address_id": 24868639, "current_valuation": 311500, "sold_price": 275000, "rooms": 4, "lat": 51.63865421, "address_1": "20 Deansfield", "lng": -1.86409297, "size": 79, "house_type_out": "Detached House", "postcode": "SN6 6BP" }, "3": { "sold_date": "2016-03-08", "distance": 116, "address_id": 24868681, "current_valuation": 278500, "sold_price": 245000, "rooms": 6, "lat": 51.63865421, "address_1": "59 Deansfield", "lng": -1.86409297, "size": 115, "house_type_out": "Detached House", "postcode": "SN6 6BP" }, "4": { "sold_date": "2016-05-20", "distance": 116, "address_id": 24868657, "current_valuation": 424500, "sold_price": 375000, "rooms": 7, "lat": 51.63865421, "address_1": "37 Deansfield", "lng": -1.86409297, "size": 135, "house_type_out": "Detached House", "postcode": "SN6 6BP" }, "6": { "sold_date": "2015-06-23", "distance": 116, "address_id": 24868645, "current_valuation": 290500, "sold_price": 235000, "rooms": 4, "lat": 51.63865421, "address_1": "26 Deansfield", "lng": -1.86409297, "size": 73, "house_type_out": "Detached House", "postcode": "SN6 6BP" }, "7": { "sold_date": "2015-05-15", "distance": 116, "address_id": 24868628, "current_valuation": 305500, "sold_price": 245000, "rooms": 4, "lat": 51.63865421, "address_1": "10 Deansfield", "lng": -1.86409297, "size": 81, "house_type_out": "Detached House", "postcode": "SN6 6BP" }, "8": { "sold_date": "2014-07-02", "distance": 116, "address_id": 24868656, "current_valuation": 356000, "sold_price": 270000, "rooms": 7, "lat": 51.63865421, "address_1": "36 Deansfield", "lng": -1.86409297, "size": 104, "house_type_out": "Detached House", "postcode": "SN6 6BP" }, "9": { "sold_date": "2014-03-28", "distance": 116, "address_id": 24868660, "current_valuation": 436500, "sold_price": 325000, "rooms": 6, "lat": 51.63865421, "address_1": "4 Deansfield", "lng": -1.86409297, "size": 147, "house_type_out": "Detached House", "postcode": "SN6 6BP" }, "10": { "sold_date": "2013-07-25", "distance": 116, "address_id": 24868649, "current_valuation": 438000, "sold_price": 315000, "rooms": 5, "lat": 51.63865421, "address_1": "3 Deansfield", "lng": -1.86409297, "size": 133, "house_type_out": "Detached House", "postcode": "SN6 6BP" } }, "regional_price_10y": { "index_36": 266500, "index_37": 273500, "index_34": 255000, "index_35": 261000, "index_32": 251000, "index_33": 261500, "index_30": 243500, "index_31": 249000, "index_18": 207000, "index_19": 205500, "index_12": 203500, "index_38": 271500, "index_39": 271000, "index_13": 209000, "index_14": 206000, "index_10": 207500, "index_15": 207500, "index_16": 208500, "index_17": 211000, "regional_name": "Wiltshire", "index_29": 242000, "index_28": 230000, "index_11": 208000, "index_20": 208500, "index_23": 212000, "index_22": 214500, "index_25": 227000, "index_24": 214500, "index_41": 281500, "index_40": 275500, "area_code": "E06000054", "index_21": 213500, "index_8": 208500, "index_9": 212000, "index_6": 200500, "index_7": 205500, "index_4": 186500, "index_5": 195500, "index_2": 194500, "index_3": 188000, "index_1": 212000, "index_27": 225500, "index_26": 224000 }, "regional_housetype_price_10y": { "TerracedPrice": { "index_10": 162500, "index_11": 162500, "index_12": 160000, "index_13": 164000, "index_14": 161000, "index_15": 163000, "index_16": 164500, "index_17": 166500, "index_18": 163500, "index_19": 162000, "index_34": 198500, "index_38": 211500, "index_39": 210500, "index_35": 203000, "index_32": 197500, "index_33": 205000, "index_30": 191000, "index_31": 194500, "index_29": 190000, "index_28": 181000, "index_21": 168500, "index_20": 165000, "index_23": 166500, "index_22": 169000, "index_25": 179000, "index_24": 169500, "index_27": 176500, "index_26": 176000, "index_36": 207500, "index_8": 164500, "index_9": 166000, "index_6": 158500, "index_7": 161500, "index_4": 147000, "index_5": 154000, "index_2": 152500, "index_3": 147000, "index_1": 166000, "index_37": 213500, "index_41": 219500, "index_40": 215000 }, "FlatPrice": { "index_10": 117000, "index_11": 117000, "index_12": 115000, "index_13": 116500, "index_14": 115000, "index_15": 115000, "index_16": 116000, "index_17": 116000, "index_18": 114000, "index_19": 112500, "index_34": 138500, "index_38": 147500, "index_39": 146500, "index_35": 142500, "index_32": 136000, "index_33": 141500, "index_30": 130500, "index_31": 134500, "index_29": 130500, "index_28": 124500, "index_21": 116500, "index_20": 114500, "index_23": 115500, "index_22": 117000, "index_25": 122500, "index_24": 117000, "index_27": 123000, "index_26": 122000, "index_36": 146500, "index_8": 119000, "index_9": 118500, "index_6": 116500, "index_7": 117000, "index_4": 111500, "index_5": 114500, "index_2": 117500, "index_3": 114500, "index_1": 127500, "index_37": 149500, "index_41": 148500, "index_40": 148000 }, "SemiDetachedPrice": { "index_10": 197500, "index_11": 196500, "index_12": 193500, "index_13": 199000, "index_14": 196500, "index_15": 198000, "index_16": 199000, "index_17": 201000, "index_18": 197000, "index_19": 196000, "index_34": 244500, "index_38": 261500, "index_39": 260500, "index_35": 250000, "index_32": 241000, "index_33": 251000, "index_30": 233500, "index_31": 239500, "index_29": 232000, "index_28": 221000, "index_21": 203500, "index_20": 199000, "index_23": 203000, "index_22": 205000, "index_25": 217000, "index_24": 205500, "index_27": 216000, "index_26": 214500, "index_36": 255500, "index_8": 198000, "index_9": 201500, "index_6": 190500, "index_7": 195500, "index_4": 177000, "index_5": 185500, "index_2": 184500, "index_3": 177500, "index_1": 200500, "index_37": 263000, "index_41": 271500, "index_40": 265500 }, "DetachedPrice": { "index_10": 312500, "index_11": 314500, "index_12": 305500, "index_13": 315500, "index_14": 311000, "index_15": 311500, "index_16": 313000, "index_17": 317500, "index_18": 311000, "index_19": 309000, "index_34": 387500, "index_38": 411000, "index_39": 411000, "index_35": 396000, "index_32": 378000, "index_33": 394500, "index_30": 368000, "index_31": 377000, "index_29": 365000, "index_28": 346500, "index_21": 321000, "index_20": 312500, "index_23": 319000, "index_22": 322500, "index_25": 341500, "index_24": 321000, "index_27": 340000, "index_26": 337500, "index_36": 402000, "index_8": 310500, "index_9": 319000, "index_6": 298000, "index_7": 307500, "index_4": 275500, "index_5": 291000, "index_2": 289000, "index_3": 280500, "index_1": 315500, "index_37": 413500, "index_41": 428500, "index_40": 417500 } }, "predict_price_10y": { "index_10": 223000, "index_11": 224500, "index_12": 218000, "index_13": 225000, "index_14": 222000, "index_15": 222500, "index_16": 223500, "index_17": 226500, "index_18": 222000, "index_19": 220500, "index_34": 276500, "index_38": 293500, "index_39": 293500, "index_35": 282500, "index_27": 243000, "index_32": 269500, "index_33": 281500, "index_30": 262500, "index_31": 269000, "index_29": 260500, "index_28": 247500, "index_21": 229000, "index_20": 223000, "index_23": 227500, "index_22": 230000, "index_25": 243500, "index_24": 229000, "index_36": 287000, "index_40": 298000, "index_37": 295000, "index_8": 221500, "index_9": 228000, "index_6": 212500, "index_7": 219500, "index_4": 196500, "index_5": 207500, "index_2": 206000, "index_3": 200000, "index_1": 225500, "index_41": 306000, "index_26": 240500 } }, "rental_results": { "rental_comparable_properties": { "0": { "distance": 0.578, "available_from": "Available from 10th Nov 2018", "display_address": "Hallsfield Cricklade Swindon SN6", "image_path": "id_164442.png", "price": 1285, "num_beds": 4, "num_baths": 2, "lat": 51.6443, "house_id": "164442", "front_image_url": "https://lid.zoocdn.com/354/255/af7abc6bce2ba13ec53dd867b30857e97309995c.jpg", "property_type": "detached", "lng": "-1.8637", "furnished_state": "unfurnished" }, "1": { "distance": 1.708, "available_from": "Available from 15th May 2018", "display_address": "Cricklade Swindon SN6", "image_path": "id_161969.png", "price": 2695, "num_beds": 5, "num_baths": 2, "lat": 51.6249, "house_id": "161969", "front_image_url": "https://lid.zoocdn.com/354/255/4d59f5e3344c39e3ca17307ff21e8b5edce59f7e.jpg", "property_type": "detached", "lng": "-1.871949", "furnished_state": "unfurnished" }, "2": { "distance": 2.096, "available_from": "Available from 15th Sep 2018", "display_address": "Collett Place Latton Swindon SN6", "image_path": "id_164434.png", "price": 2250, "num_beds": 4, "num_baths": 2, "lat": 51.6576, "house_id": "164434", "front_image_url": "https://lid.zoocdn.com/354/255/3d548b1a5c33a1743dc21f3108932cf65e26f52e.jpg", "property_type": "detached", "lng": "-1.8685459999999998", "furnished_state": "unfurnished" }, "3": { "distance": 4.319, "available_from": "Available from 24th Oct 2018", "display_address": "Boatman Close Swindon SN25", "image_path": "id_167633.png", "price": 1200, "num_beds": 4, "num_baths": 2, "lat": 51.6037, "house_id": "167633", "front_image_url": "https://lid.zoocdn.com/354/255/be9077b8fd6c9f636ab17ea63006593e75be08af.jpg", "property_type": "house", "lng": "-1.8371819999999999", "furnished_state": "unfurnished" }, "4": { "distance": 4.41, "available_from": "Available from 20th Oct 2018", "display_address": "Ulysses Road Swindon SN25", "image_path": "id_163137.png", "price": 1050, "num_beds": 4, "num_baths": 0, "lat": 51.6037, "house_id": "163137", "front_image_url": "https://lid.zoocdn.com/354/255/f2ae02b8b2f1546f36584e6554b48c3e0b6038d2.jpg", "property_type": "town_house", "lng": "-1.834207", "furnished_state": "unfurnished" }, "5": { "distance": 4.463, "available_from": "Available from 29th Oct 2018", "display_address": "Jason Close Swindon SN25", "image_path": "id_169341.png", "price": 725, "num_beds": 2, "num_baths": 1, "lat": 51.6024, "house_id": "169341", "front_image_url": "https://lid.zoocdn.com/354/255/a7bf35e88477eb5f9a6605fe670345701748d63e.jpg", "property_type": "house", "lng": "-1.836652", "furnished_state": "unfurnished" }, "6": { "distance": 4.887, "available_from": "Available from 29th Nov 2018", "display_address": "Treforest Close Swindon SN25", "image_path": "id_169342.png", "price": 1300, "num_beds": 4, "num_baths": 2, "lat": 51.601, "house_id": "169342", "front_image_url": "https://lid.zoocdn.com/354/255/5cbf1988c549b69035e8f5b2555586bece9605d9.jpg", "property_type": "house", "lng": "-1.827431", "furnished_state": "unfurnished" }, "7": { "distance": 4.966, "available_from": "Available from 5th Nov 2018", "display_address": "High Road Ashton Keynes Swindon SN6", "image_path": "id_166003.png", "price": 750, "num_beds": 2, "num_baths": 1, "lat": 51.6437, "house_id": "166003", "front_image_url": "https://lid.zoocdn.com/354/255/c204d5e39776f481743335f5b0e47aeee5574b23.jpg", "property_type": "detached", "lng": "-1.9341830000000002", "furnished_state": "unfurnished" }, "8": { "distance": 4.99, "available_from": "Available from 23rd Oct 2018", "display_address": "Birkdale Close Swindon SN25", "image_path": "id_167655.png", "price": 675, "num_beds": 2, "num_baths": 1, "lat": 51.6024, "house_id": "167655", "front_image_url": "https://lid.zoocdn.com/354/255/c3f918b5e2b08a37f1009e25927eedf7f4299026.jpg", "property_type": "house", "lng": "-1.821261", "furnished_state": "unfurnished" }, "9": { "distance": 5.11, "available_from": "Available from 9th Aug 2018", "display_address": "Dyson Road Redhouse Swindon SN25", "image_path": "id_163111.png", "price": 1200, "num_beds": 5, "num_baths": 2, "lat": 51.6052, "house_id": "163111", "front_image_url": "https://lid.zoocdn.com/354/255/23e70fcaa2407b8290ede2a2e9351c9e3486d8ad.jpg", "property_type": "town_house", "lng": "-1.812745", "furnished_state": "unfurnished" } }, "rental_predict_price": 1025 } },
            valuation: {}

        };
        this.showReport = this.showReport.bind(this);
        this.setValuationFormData = this.setValuationFormData.bind(this);
    }
    showReport(report, address, company) {
        this.setState({report, address, company});
    }

    setValuationFormData(valuation) {
        this.setState({valuation:valuation});
    }
    renderCompanyLogo(company) {

        if(company.website_url != null && company.logo != null ) {
            return (
                <a href={company.website_url} ><img src={company.logo} /></a>
            )
        }
    }

    render() {

     return (
         <React.Fragment>
            <div className="row ">
                <Query query={GET_COMPANY_DETAILS}>
                    {({ loading, error, data }) => {
                     if (loading) return "Loading...";
                     if (error) return `Error! ${error.message}`;
                     return (

                 (_.isEmpty(this.state.report)) ?
                    <div className="col-4">
                        <div className="card valuation-card">
                            <div className="card-body">
                                {this.renderCompanyLogo(data.companyByValuationURL)}
                                <h1>Free Instant Online Valuation</h1>
                                <p>We offer instant online valuations, simply enter your post code below for an indication of what your property is worth.</p>
                                <ValuationForm report={this.showReport}/>
                                </div>
                            </div>
                        </div>
                        :
                                        <ValuationReport valuation={this.state.report} address={this.state.address} company={this.state.company}/>
                                    )
                    }
                    }
                 </Query>
                </div>
         </React.Fragment>
     );
    }
}




export default  compose(
    graphql(GET_COMPANY_DETAILS)
)(QuickValuation);
