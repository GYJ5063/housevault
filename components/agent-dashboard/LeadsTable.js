import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { dateFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import React from "react";
import moment from "moment";

const { SearchBar } = Search;

function priceFormatter(cell) {
    return (
        <span>£{ cell.toLocaleString() }</span>
    );
}

function dateFormatter(cell) {
    return (
        <span>{moment.utc(parseInt(cell)).format('DD MMM YYYY')}</span>
    );
}

function urlFormatter(cell) {
    return (
        <span><a href={"./report/"+cell}>Report</a></span>
    );
}

function emailFormatter(cell) {
    return (
        <span><a href={"mailto:"+cell} target="_top">Send</a></span>
    );
}

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
    text: 'Telephone'
}, {
    dataField: 'email',
    text: 'Email',
    formatter: emailFormatter
}, {
    dataField: 'sales_valuation',
    text: 'Sales Valuation',
    formatter: priceFormatter,
    sort: true
}, {
    dataField: 'rental_valuation',
    text: 'Rental Valuation',
    formatter: priceFormatter,
    sort: true
}, {
    dataField: 'createdAt',
    text: 'Created',
    formatter: dateFormatter,
    sort: true
}, {
    dataField: `${'report_id'}`,
    text: 'Full Report',
    formatter: urlFormatter,
}];

const MyExportCSV = (props) => {
    const handleClick = () => {
        props.onExport();
    };
    return (
        <div style={{textAlign:'right'}}>
            <button className="btn btn-success" onClick={ handleClick }>Download All Leads</button>
        </div>
    );
};

const defaultSorted = [{
    dataField: 'createdAt',
    order: 'desc'
}];

const expandRow = {
    renderer: row => (
        <div>
            <p>Lead Summary</p>
            <ul>
                <li>Address, some report data, etc</li>
                <li>More info</li>
                <li>More info</li>
            </ul>
        </div>
    )
};

export default (props) => {
    return (
        <ToolkitProvider keyField='id' data={props.data} columns={columns} search
                      exportCSV>
                        {
                            props => (
                                <div>
                                    <SearchBar { ...props.searchProps } />
                                    <hr/>
                                    <BootstrapTable {...props.baseProps} bordered={false} defaultSorted={defaultSorted} pagination={paginationFactory()} hover expandRow={ expandRow }/>
                                    <hr/>
                                    <MyExportCSV {...props.csvProps} />
                                </div>
                            )
                        }
        </ToolkitProvider>)
};