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
                props.leads.map(l =>  (
                    <tr>
                        <th scope="row">{l.first_name}</th>
                        <td>{l.last_name}</td>
                        <td>{l.phone_number}</td>
                        <td>{l.email}</td>
                        <td>{l.sales_valuation.toLocaleString()}</td>
                        <td>{l.rental_valuation.toLocaleString()}</td>
                        <td>{l.createdAt}</td>
                        <td><a href={"./report/"+l.report_id}>Report</a></td>
                    </tr>
                ))
            }
            </tbody>
        </Table>
    )
}