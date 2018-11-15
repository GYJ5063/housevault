import React from "react";
import ValuationForm from '../components/forms/ValuationForm'
import "../styles/valuation.scss";
import ValuationReport from "../components/valuation/ValuationReport";
import _ from "lodash";

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


class QuickValuation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            //report: {},
            report: {"selling_results":{"predict_results":{"predict_price":171000,"probability":0.676,"exist_in_epc":false,"predict_price_low":147500,"band":0.137,"predict_price_up":194500,"lat":51.56112407,"lng":-1.78680124,"confidence_level":6},"query_info":{"address_id":24779881,"number_habitable_rooms":4,"built_from":"Semi-Detached","total_floor_area":100,"wall_type":"brick","property_type":"House"},"regional_price_5y":{"index_10":170000,"index_11":169500,"index_12":170500,"index_13":175500,"index_14":180000,"index_15":183500,"index_16":190000,"index_17":191500,"index_18":194500,"index_19":200500,"index_30":217000,"index_31":217000,"index_29":216500,"index_28":216500,"index_21":203500,"index_20":202000,"index_23":204500,"index_22":202000,"index_25":208000,"index_24":206000,"index_27":211500,"regionname":"Swindon","area_code":"E06000030","index_8":164500,"index_9":167000,"index_6":157000,"index_7":160000,"index_4":155000,"index_5":155500,"index_2":152500,"index_3":154000,"index_1":149500,"index_26":211500},"local_property_type_statistic":{"Flat_average_value":118000,"Terrace_average_size":0,"Detached_average_size":0,"Terrace_average_value":0,"Terrace_per_size_value":0,"Detached_per_size_value":0,"Flat_average_size":60,"Flat_per_size_value":1970,"Flat_num_ratio":1,"Semi_Detached_average_value":0,"Detached_num_ratio":0,"Terrace_num_ratio":0,"Semi_Detached_average_size":0,"Semi_Detached_num_ratio":0,"Detached_average_value":0,"Semi_Detached_per_size_value":0},"comparable_properties":{"1":{"sold_date":"2015-08-06","address_id":24779288,"current_valuation":208500,"lat":51.563193,"sold_price":175000,"rooms":5,"distance_to_query_property":232,"house_type":"Maisonette","lng":-1.787296,"size":140,"postcode":"SN1 1BE","address_1":"18 Linden Court"},"2":{"sold_date":"2016-10-14","address_id":24779272,"current_valuation":131000,"lat":51.563193,"sold_price":125000,"rooms":3,"distance_to_query_property":232,"house_type":"Flat","lng":-1.787296,"size":77,"postcode":"SN1 1BE","address_1":"1 Linden Court"},"3":{"sold_date":"2016-01-29","address_id":24779284,"current_valuation":173000,"lat":51.563193,"sold_price":153750,"rooms":3,"distance_to_query_property":232,"house_type":"Flat","lng":-1.787296,"size":83,"postcode":"SN1 1BE","address_1":"17 Linden Court"},"4":{"sold_date":"2014-08-27","address_id":24779277,"current_valuation":160000,"lat":51.563193,"sold_price":123000,"rooms":3,"distance_to_query_property":232,"house_type":"Flat","lng":-1.787296,"size":94,"postcode":"SN1 1BE","address_1":"6 Linden Court"},"5":{"sold_date":"2014-04-04","address_id":24779289,"current_valuation":155500,"lat":51.563193,"sold_price":115000,"rooms":3,"distance_to_query_property":232,"house_type":"Flat","lng":-1.787296,"size":73,"postcode":"SN1 1BE","address_1":"19 Linden Court"},"6":{"sold_date":"2014-09-08","address_id":24779927,"current_valuation":113500,"lat":51.561124,"sold_price":88000,"rooms":2,"distance_to_query_property":0,"house_type":"Flat","lng":-1.786801,"size":69,"postcode":"SN1 1LX","address_1":"77, David Murray John Tower"},"7":{"sold_date":"2017-09-15","address_id":24779543,"current_valuation":95000,"lat":51.564672,"sold_price":95000,"rooms":2,"distance_to_query_property":423,"house_type":"Flat","lng":-1.784592,"size":50,"postcode":"SN1 1EB","address_1":"5 Wellington House"},"8":{"sold_date":"2017-06-09","address_id":24779570,"current_valuation":107500,"lat":51.564672,"sold_price":105500,"rooms":2,"distance_to_query_property":423,"house_type":"Flat","lng":-1.784592,"size":47,"postcode":"SN1 1EB","address_1":"33 Wellington House"},"9":{"sold_date":"2017-03-27","address_id":24779564,"current_valuation":109000,"lat":51.564672,"sold_price":105000,"rooms":2,"distance_to_query_property":423,"house_type":"Flat","lng":-1.784592,"size":57,"postcode":"SN1 1EB","address_1":"27 Wellington House"},"10":{"sold_date":"2017-01-20","address_id":24779554,"current_valuation":113500,"lat":51.564672,"sold_price":108000,"rooms":2,"distance_to_query_property":423,"house_type":"Flat","lng":-1.784592,"size":52,"postcode":"SN1 1EB","address_1":"17 Wellington House"},"11":{"sold_date":"2016-07-20","address_id":24779586,"current_valuation":98500,"lat":51.564672,"sold_price":92500,"rooms":2,"distance_to_query_property":423,"house_type":"Flat","lng":-1.784592,"size":46,"postcode":"SN1 1EB","address_1":"49 Wellington House"}},"sales_history_analyze":{"0":{}},"regional_housetype_price_5y":{"DetachedPrice":{"index_10":288500,"index_11":287500,"index_12":289500,"index_13":297500,"index_14":305500,"index_15":313000,"index_16":324500,"index_17":327000,"index_18":331500,"index_19":340500,"index_30":374000,"index_31":372000,"index_29":372000,"index_28":371000,"index_21":348000,"index_20":344000,"index_23":351500,"index_22":348000,"index_25":354500,"index_24":353500,"index_27":362500,"index_26":360500,"index_8":278000,"index_9":283000,"index_6":266000,"index_7":270000,"index_4":263500,"index_5":264000,"index_2":258000,"index_3":262500,"index_1":253000},"TerracedPrice":{"index_10":148000,"index_11":147500,"index_12":148000,"index_13":153000,"index_14":157500,"index_15":160000,"index_16":165500,"index_17":166500,"index_18":169500,"index_19":175000,"index_30":187500,"index_31":188500,"index_29":187000,"index_28":187000,"index_21":176500,"index_20":176000,"index_23":176500,"index_22":174500,"index_25":179500,"index_24":177500,"index_27":183000,"index_26":183500,"index_8":144000,"index_9":146000,"index_6":137000,"index_7":140000,"index_4":135000,"index_5":135500,"index_2":133500,"index_3":134500,"index_1":131000},"SemiDetachedPrice":{"index_10":183000,"index_11":182500,"index_12":183500,"index_13":189500,"index_14":194500,"index_15":198000,"index_16":205500,"index_17":207500,"index_18":210500,"index_19":216500,"index_30":236000,"index_31":237000,"index_29":235000,"index_28":235000,"index_21":220000,"index_20":218500,"index_23":221000,"index_22":219000,"index_25":225000,"index_24":222500,"index_27":229000,"index_26":229000,"index_8":177000,"index_9":179500,"index_6":169000,"index_7":172500,"index_4":167000,"index_5":167500,"index_2":164000,"index_3":165500,"index_1":160500},"FlatPrice":{"index_10":112500,"index_11":112500,"index_12":113000,"index_13":116000,"index_14":118500,"index_15":120500,"index_16":124500,"index_17":125500,"index_18":128000,"index_19":132500,"index_30":142500,"index_31":141500,"index_29":143000,"index_28":142500,"index_21":134500,"index_20":133500,"index_23":136000,"index_22":134000,"index_25":139000,"index_24":137500,"index_27":140500,"index_26":141500,"index_8":108500,"index_9":110500,"index_6":104500,"index_7":106500,"index_4":103000,"index_5":104000,"index_2":101500,"index_3":102000,"index_1":100000}},"predict_price_5y":{"index_10":132000,"index_11":132000,"index_12":132500,"index_13":137000,"index_14":140500,"index_15":143000,"index_16":148500,"index_17":150000,"index_18":152000,"index_19":156500,"index_30":170500,"index_31":171000,"index_29":170000,"index_28":170000,"index_21":159000,"index_20":157500,"index_23":159500,"index_22":158000,"index_25":162500,"index_24":160500,"index_27":165500,"index_26":165500,"index_8":128000,"index_9":129500,"index_6":122500,"index_7":124500,"index_4":121000,"index_5":121000,"index_2":118500,"index_3":119500,"index_1":116000}},"rental_results":{"reantal_comparable_properties":{"0":{"distance":0.303,"available_from":"Available Immediately","display_address":"Chester Street, Swindon, Wiltshire SN1","log":-1.790529,"price":750,"num_beds":2,"num_baths":1,"lat":51.559698,"property_type":"terraced","furnished_state":"unfurnished"},"1":{"distance":0.31,"available_from":"Available from 29th Oct 2018","display_address":"Newhall Street, Swindon SN1","log":-1.7860779999999998,"price":500,"num_beds":1,"num_baths":2,"lat":51.558377,"property_type":"terraced","furnished_state":"furnished"},"2":{"distance":0.332,"available_from":"Available from 13th Oct 2018","display_address":"Stanier Street, Swindon SN1","log":-1.7852849999999998,"price":725,"num_beds":2,"num_baths":1,"lat":51.558295,"property_type":"house","furnished_state":"unfurnished"},"3":{"distance":0.4,"available_from":"Available from 29th Oct 2018","display_address":"Morse Street, Swindon SN1","log":-1.787236,"price":700,"num_beds":2,"num_baths":1,"lat":51.557534000000004,"property_type":"terraced","furnished_state":"unfurnished"},"4":{"distance":0.4,"available_from":"Available from 15th Nov 2018","display_address":"Morse Street, Swindon SN1","log":-1.787236,"price":775,"num_beds":2,"num_baths":1,"lat":51.557534000000004,"property_type":"terraced","furnished_state":"unfurnished"},"5":{"distance":0.46,"available_from":"Available from 6th Aug 2017","display_address":"Dryden Street, Swindon SN1","log":-1.7895450000000002,"price":750,"num_beds":2,"num_baths":1,"lat":51.557359000000005,"property_type":"terraced","furnished_state":"unfurnished"},"6":{"distance":0.472,"available_from":"Available from 7th Aug 2018","display_address":"Room 4, Curtis Street, Swindon SN1","log":-1.790841,"price":420,"num_beds":1,"num_baths":1,"lat":51.557703000000004,"property_type":"terraced","furnished_state":"furnished"},"7":{"distance":0.472,"available_from":"Available from 26th Oct 2017","display_address":"Curtis Street, Swindon SN1","log":-1.790841,"price":400,"num_beds":1,"num_baths":1,"lat":51.557703000000004,"property_type":"terraced","furnished_state":"furnished"},"8":{"distance":0.472,"available_from":"Available from 20th Sep 2018","display_address":"Curtis Street, Swindon SN1","log":-1.790841,"price":420,"num_beds":1,"num_baths":2,"lat":51.557703000000004,"property_type":"terraced","furnished_state":"furnished"},"9":{"distance":0.472,"available_from":"Available from 20th Sep 2018","display_address":"Room 2, Curtis Street, Town Centre, Swindon, Wiltshire SN1","log":-1.790841,"price":365,"num_beds":1,"num_baths":2,"lat":51.557703000000004,"property_type":"terraced","furnished_state":"furnished"}},"reantal_predict_results":690}},
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
