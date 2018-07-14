import React from "react";
import _ from "lodash";
import {Doughnut, Bar} from 'react-chartjs-2';

class CensusEthnicGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            propertyDataLoading: false,
            census: []
        }
    }

    componentDidMount() {
        this.getCensusGraphs(this.props.areacode);
    }

    getCensusGraphs(areacode) {
        this.setState({propertyGraphsLoading: true});
        let self = this;

        fetch('http://www.nomisweb.co.uk/api/v01/dataset/NM_608_1.jsonstat.json?geography=' + areacode + '&rural_urban=0&measures=20100&_=58527')
            .then(function (response) {
                return response.json();
            }).then(function (census) {
            let values = census.value;
            let keys = Object.values(census.dimension.cell.category.label);
            let table = [];
            let arr = [];

            _.each(keys, function (k, i) {
                table[k] = values[i];
            });

            self.setState(prevState => ({
                propertyGraphsLoading: false,
                census: table,

            }));
        });
    }

    formatData() {

        let data = this.state.census;

        let census = {
            'White': _.get(data,'White') + _.get(data,'White: English/Welsh/Scottish/Northern Irish/British') + _.get(data,'White: Gypsy or Irish Traveller') +  _.get(data,'White: Irish') + _.get(data,'White: Other White'),
            'Mixed Ethnicity': _.get(data,'Mixed/multiple ethnic groups') + _.get(data,'Mixed/multiple ethnic groups: Other Mixed') + _.get(data,'Mixed/multiple ethnic groups: White and Asian') + _.get(data,'Mixed/multiple ethnic groups: White and Black African') + _.get(data,'Mixed/multiple ethnic groups: White and Black Caribbean'),
            'Asian': _.get(data,'Asian/Asian British') + _.get(data,'Asian/Asian British: Bangladeshi') + _.get(data,'Asian/Asian British: Chinese') + _.get(data,'Asian/Asian British: Indian') + _.get(data,'Asian/Asian British: Other Asian') + _.get(data,'Asian/Asian British: Pakistani'),
            'Black' : _.get(data,'Black/African/Caribbean/Black British') + _.get(data,'Black/African/Caribbean/Black British: African') + _.get(data,'Black/African/Caribbean/Black British: Caribbean') + _.get(data,'Black/African/Caribbean/Black British: Other Black'),
            'Other' : _.get(data,'Other ethnic group') + _.get(data,'Other ethnic group: Any other ethnic group') + _.get(data,'Other ethnic group: Arab')
        };

        return census;
    }

    render() {

        let census = this.formatData();

        const options = {
            title: {
                display:true,
                text: 'Ethnic Group'
            },
            legend: {
                display:true,
                position: 'bottom',

            }};

        const d = {'labels': _.keys(census), datasets: [
                {
                    label: this.props.label,
                    data: _.values(census),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                    ],}]
        };
        return (
            <div>
                <div className="row">
                    {/*<div className="col">*/}
                        {/*<div className="table-responsive">*/}
                            {/*<table className="table">*/}
                                {/*<tbody>*/}
                                {/*{ this.props.data.map( ( item ) => (*/}
                                    {/*<tr key={ item.key } >*/}
                                        {/*<td>{item.key}</td>*/}
                                        {/*<td className="text-right">{item.value}</td>*/}
                                    {/*</tr>*/}
                                {/*) ) }*/}
                                {/*</tbody>*/}
                            {/*</table>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    <div className="col">
                        {(this.props.type === 'Bar') ? <Bar data={d} options={options} /> : <Doughnut data={d} options={options} />}
                    </div>
                </div>
            </div>
            );
    }
}



export default CensusEthnicGroup;