import { Table } from 'reactstrap';

export default (props) => {

  // Build each row
  const rows = props.requests.map((r) => {
    return (
      <tr>
        <th scope="row">{r.date}</th>
        <td>{r.name}</td>
        <td>{r.email}</td>
        <td>{r.phone}</td>
        <td>{r.salesVal}</td>
        <td>{r.rentalVal}</td>
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
