import { Table } from 'reactstrap';
import React from "react";

export default (props) => {



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
                props.leads.map((aLead) => (
                    <tr>
                        <td scope="row">{aLead.first_name}</td>
                        <td>{aLead.last_name}</td>
                        <td>{aLead.phone_number}</td>
                        <td>{aLead.email}</td>
                        <td>£{aLead.sales_valuation.toLocaleString()}</td>
                        <td>£{aLead.rental_valuation.toLocaleString()}</td>
                        <td>{aLead.createdAt}</td>
                        <td><a href={"./report/"+aLead.report_id}>Report</a></td>
                    </tr>
                ))
            }

            </tbody>
        </Table>
    )
}