const Sidebar = (props) => {
    return  <div >
        <a href={props.company.website_url} ><img src={props.company.logo} /></a>
        <ul className="list-unstyled">
            <li>Overview</li>
            <li>Property Performance</li>
            <li>Sold Comparables</li>
            <li>Rental Comparables</li>
            <li>Local Property Factors</li>
        </ul>
    </div>
}
export default Sidebar;