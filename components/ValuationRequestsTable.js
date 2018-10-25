import { Table } from 'reactstrap';

export default (props) => {

  // Build each row
  const rows = props.requests.map((r) => {
    return (
      <tr>
        <th scope="row">{r.date}</th>
        <td>{r.first_name}</td>
        <td>{r.last_name}</td>
        <td>{r.phone_number}</td>
        <td>{r.sales_valuation}</td>
        <td>{r.rental_valuation}</td>
        <td>{r.link}</td>
      </tr>
    )
  })

  return (
        <Table>
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
