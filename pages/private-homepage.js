import React, {Component} from 'react';
import ValuationRequestsTable from '../components/ValuationRequestsTable'
import { Container, Row, Column } from 'reactstrap'
import '../styles/private-homepage.scss'


const testRequests = [
  {
    first_name: "first",
    last_name: "last",
    email: "firs@last.com",
    phone_number: "12345",
    sales_valuation: 317000,
    rental_valuation: 1025,
    report_id: "12560ec0-f22d-11e8-ad5f-7dd96ea91359",
    createdAt: "1543313603000",
    updatedAt: "1543313603000"
  },
    {
        first_name: "first",
        last_name: "last",
        email: "firs@last.com",
        phone_number: "12345",
        sales_valuation: 317000,
        rental_valuation: 1025,
        report_id: "12560ec0-f22d-11e8-ad5f-7dd96ea91359",
        createdAt: "1543313603000",
        updatedAt: "1543313603000"
    },
    {
        first_name: "first",
        last_name: "last",
        email: "firs@last.com",
        phone_number: "12345",
        sales_valuation: 317000,
        rental_valuation: 1025,
        report_id: "12560ec0-f22d-11e8-ad5f-7dd96ea91359",
        createdAt: "1543313603000",
        updatedAt: "1543313603000"
    },

]


class PrivateHomepage extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
          <div className='homepage-container'>
            <h3>Welcome! This is the private hompage.</h3>
            <div className='requests-table'>
              <ValuationRequestsTable requests={testRequests}/>
            </div>
          </div>
        );
    }
}


export default PrivateHomepage;
