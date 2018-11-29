import { Table } from 'reactstrap';
import React from "react";

export default (props) => {

    // Build each row
    const rows = props.requests.map((r) => {
        return (
            <tr>
                <th scope="row">{r.first_name}</th>
                <td>{r.last_name}</td>
                <td>{r.phone_number}</td>
                <td>{r.email}</td>
                <td>{r.sales_valuation.toLocaleString()}</td>
                <td>{r.rental_valuation.toLocaleString()}</td>
                <td>{r.createdAt}</td>
                <td><a href={"./report/"+r.report_id}>Report</a></td>
            </tr>
        )
    })

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

            { rows }

            </tbody>
        </Table>
    )
}