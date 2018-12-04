import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import React from "react";
import moment from "moment";
import withPermission from '../access-control/withPermission';

const { SearchBar } = Search;

function dateFormatter(cell) {
    return (
        <span>{moment.utc(parseInt(cell)).format('DD MMM YYYY')}</span>
    );
}

function isVaildTickCross(cell) {
    if (cell.length > 0) {
          return <i style={{color: 'green'}} className="fas fa-check val-logo-awesome"/>}
    else {
          return <i style={{color: 'red'}} className="fas fa-times val-logo-awesome"/>}
};

function isVaildResultCross(cell) {
    if (cell != null) {
        return <div style={{backgroundColor:'#'+(cell)}} className="btn">Colour</div> }
    else {
        return <i style={{color: 'red'}} className="fas fa-times val-logo-awesome"/>}
};

const columns = [
    {
        dataField: 'id',
        text: 'ID',
    },
    {
        dataField: 'name',
        text: 'Name'
    },
    {
        dataField: 'telephone',
        text: 'Telephone'
    },
    {
        dataField: 'meta_description',
        text: 'Meta Description',
        formatter: isVaildTickCross
    },
    {
        dataField: 'logo',
        text: 'Logo',
        formatter: isVaildTickCross
    },
    {
        dataField: 'website_url',
        text: 'Website Url',
        formatter: isVaildTickCross
    },
    {
        dataField: 'primary_colour',
        text: 'Primary Colour',
        formatter: isVaildResultCross
    },
    {
        dataField: 'secondary_colour',
        text: 'Secondary Colour',
        formatter: isVaildResultCross
    },
    {
        dataField: 'createdAt',
        text: 'Created',
        formatter: dateFormatter,
        sort: true
    }
];

const defaultSorted = [{
    dataField: 'createdAt',
    order: 'desc'
}];

const CompaniesTable = (props) => {
    return (
        <div className='col-md-12'>
            <div>
                <h3>Companies</h3>
                <ToolkitProvider keyField='id' data={props.data.companies} columns={columns} search>
                        {
                            props => (
                                <div>
                                    <SearchBar { ...props.searchProps } />
                                    <hr/>
                                    <BootstrapTable {...props.baseProps} bordered={false} defaultSorted={defaultSorted} pagination={paginationFactory()} hover/>
                                </div>
                            )
                        }
                </ToolkitProvider>
            </div>
        </div>
        )
};

export default withPermission(CompaniesTable);