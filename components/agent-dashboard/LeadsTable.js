import { Table } from 'reactstrap';
import React from "react";
import moment from "moment";
import withPermission from '../access-control/withPermission';


const columns = [{
    dataField: 'first_name',
    text: 'First Name',
    sort: true
}, {
    dataField: 'last_name',
    text: 'Last Name',
    sort: true
}, {
    dataField: 'phone_number',
    text: 'Number Valuation'
}, {
    dataField: 'email',
    text: 'Email'
}, {
    dataField: 'sales_valuation',
    text: 'Sales Valuation'
}, {
    dataField: 'rental_valuation',
    text: 'Rental Valuation'
}, {
    dataField: 'createdAt',
    text: 'Created'
}, {
    dataField: 'report_id',
    text: 'Full Report'
}];

class LeadsTable extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Table hover responsive>
                <thead>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Sales valuation</th>
                <th>Rental valuation</th>
                <th>Created</th>
                <th>Full Report</th>
                </thead>
                <tbody>

                {
                    this.props.data.leads.map(l =>  (
                        <tr>
                            <td scope="row">{l.first_name}</td>
                            <td>{l.last_name}</td>
                            <td>{l.phone_number}</td>
                            <td>{l.email}</td>
                            <td>{l.sales_valuation.toLocaleString()}</td>
                            <td>{l.rental_valuation.toLocaleString()}</td>
                            <td>{moment.utc(parseInt(l.createdAt)).format('DD MMM YYYY')}</td>
                            <td><a href={"./report/"+l.report_id}>Report</a></td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        );
    }
}

export default withPermission(LeadsTable);