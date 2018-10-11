import React, {Component} from 'react';
import ValuationRequestsTable from '../components/ValuationRequestsTable'
import { Container, Row, Column } from 'reactstrap'
import '../styles/private-homepage.scss'


const testRequests = [
  {
    date: 'test',
    name: 'name',
    email: 'email',
    phone: 'phone',
    salesVal: 'salesVal',
    rentalVal: 'rentalVal',
    link: 'link'
  },
  {
    date: 'test',
    name: 'name',
    email: 'email',
    phone: 'phone',
    salesVal: 'salesVal',
    rentalVal: 'rentalVal',
    link: 'link'
  },
  {
    date: 'test',
    name: 'name',
    email: 'email',
    phone: 'phone',
    salesVal: 'salesVal',
    rentalVal: 'rentalVal',
    link: 'link'
  }
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
