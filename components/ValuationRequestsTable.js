import { Table } from 'reactstrap';
import moment from 'moment';
export default  (props) => {

  // Build each row
  const rows = props.requests.map((r) => {
    return (
      <tr>
        <th scope="row">{ moment(r.createdAt,"x").format('DD MMMM YYYY')}</th>
        <td>{r.first_name}</td>
        <td>{r.last_name}</td>
        <td>{r.phone_number}</td>
        <td>&pound;{r.sales_valuation}</td>
        <td>&pound;{r.rental_valuation}</td>
        <td>View record</td>
      </tr>
    )
  })

  return (
        <Table striped>
          <thead>
            <tr>
              <th>Date completed</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Sales valuation</th>
              <th>Rental valuation</th>
              <th>Link to record</th>
            </tr>
          </thead>
          <tbody>

            { rows }

          </tbody>
      </Table>
  )
}
