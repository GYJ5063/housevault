import BootstrapTable from 'react-bootstrap-table-next';
import React from "react";

const link = 'report_id';
const columns = [{
    dataField: 'id',
    text: 'ID',
    hidden: true,
}, {
    dataField: 'first_name',
    text: 'First Name',
}, {
    dataField: 'last_name',
    text: 'Last Name',
}, {
    dataField: 'phone_number',
    text: 'Number Valuation'
}, {
    dataField: 'email',
    text: 'Email'
}, {
    dataField: 'sales_valuation',
    text: 'Sales Valuation',
    sort: true
}, {
    dataField: 'rental_valuation',
    text: 'Rental Valuation'
}, {
    dataField: 'createdAt',
    text: 'Created',
    sort: true
}, {
    dataField: `${'report_id'}`,
    text: 'Full Report'
}];


export default (props) => <BootstrapTable keyField='id' data={ props.data } columns={ columns } />;