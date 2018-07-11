import fetch from "isomorphic-fetch";
import React from "react";
import _ from "lodash";

class ChartTable extends React.Component {

    render() {

        if (_.isEmpty(this.props.list)) {
            return 'Loading';
        }

        return (
            <div className="table-responsive">
                <table className="table">
                    <tbody>
                        { this.props.list.map( ( item ) => (
                            <tr key={ item.id } >
                                <td>{item.key}</td>
                                <td className="text-right">{item.value}</td>
                            </tr>
                        ) ) }
                    </tbody>
                </table>
            </div>
            );
    }
}



export default ChartTable;