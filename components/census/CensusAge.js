 import React from "react";
import _ from "lodash";
import {Doughnut, Bar} from 'react-chartjs-2';

class CensusAge extends React.Component {

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

        fetch('http://www.nomisweb.co.uk/api/v01/dataset/NM_145_1.jsonstat.json?geography=' + areacode + '&rural_urban=0&measures=20100&_=58527')
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
            '0 - 14': _.get(data,'Age 0 to 4') + _.get(data,'Age 5 to 7') + _.get(data,'Age 8 to 9') +  _.get(data,'Age 10 to 14') + _.get(data,'Age 15'),
            '15 - 24': _.get(data,'Age 16 to 17') + _.get(data,'Age 18 to 19') + _.get(data,'Age 20 to 24'),
            '25 - 44': _.get(data,'Age 25 to 29') + _.get(data,'Age 30 to 44'),
            '45 - 64' : _.get(data,'Age 45 to 59') + _.get(data,'Age 60 to 64'),
            '65 +' : _.get(data,'Age 65 to 74') + _.get(data,'Age 75 to 84') + _.get(data,'Age 85 to 89') + _.get(data,'Age 90 and over')
        };

        return census;
    }

    render() {

        let census = this.formatData();

        const options = {
            title: {
                display:true,
                text: 'Age'
            },
            legend: {
                display:true,
                position: 'bottom',

            }};

        const d = {'labels': _.keys(census), datasets: [
                {
                    label: 'Age',
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



export default CensusAge;