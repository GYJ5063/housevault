import React from "react";
import _ from "lodash";
import {Doughnut, Bar} from 'react-chartjs-2';
class CensusHealth extends React.Component {

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

        fetch('https://www.nomisweb.co.uk/api/v01/dataset/NM_617_1.jsonstat.json?geography=' + areacode + '&rural_urban=0&measures=20100&_=58527')
            .then(function (response) {
                return response.json();
            }).then(function (census) {
            let values = census.value;
            let keys = Object.values(census.dimension.cell.category.label);
            let table = [];

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
            'Very good health': _.get(data,'Very good health'),
            'Good health': _.get(data,'Good health'),
            'Fair health': _.get(data,'Fair health'),
            'Bad health': _.get(data,'Bad health'),
            'Very Bad health': _.get(data,'Very bad health'),
        };

        return census;
    }

    render() {

        let census = this.formatData();

        const options = {
            title: {
                display:true,
                text: 'Health'
            },
            legend: {
                display:true,
                position: 'bottom',

            }};

        const d = {'labels': _.keys(census), datasets: [
                {
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



export default CensusHealth;