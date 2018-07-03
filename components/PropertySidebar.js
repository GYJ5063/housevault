import {Link} from '../routes';
export default (props) =>
    <div className="col-3">
        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
             aria-orientation="vertical">
            <Link route={"/property/"+props.postcode+"/"+props.number}>
                <a className={ ((props.url === '/property') ? 'active' : null) + " nav-link"} >Property Profile </a>
            </Link>
            <Link route={"/property/"+props.postcode+"/"+props.number +"/sold-prices"}>
            <a className={ ((props.url === '/sold-prices') ? 'active' : null) + " nav-link"}>Sold Prices</a>
            </Link>
            <Link route={"/property/"+props.postcode+"/"+props.number +"/epc"}>
            <a className={ ((props.url === '/epc') ? 'active' : null) + " nav-link"}>Energy Rating</a>
            </Link>
            <Link route={"/property/"+props.postcode+"/"+props.number +"/local-area"}>
                <a className={ ((props.url === '/local-area') ? 'active' : null) + " nav-link"}>Local Area</a>
            </Link>
            <Link route={"/property/"+props.postcode+"/"+props.number +"/people"}>
                <a className={ ((props.url === '/people') ? 'active' : null) + " nav-link"}>People</a>
            </Link>
            <Link route={"/property/"+props.postcode+"/"+props.number +"/property-stats"}>
                <a className={ ((props.url === '/property-stats') ? 'active' : null) + " nav-link"}>Property Stats</a>
            </Link>
            <Link route={"/property/"+props.postcode+"/"+props.number +"/culture"}>
                <a className={ ((props.url === '/culture') ? 'active' : null) + " nav-link"}>Culture</a>
            </Link>
            <Link route={"/property/"+props.postcode+"/"+props.number +"/crime"}>
                <a className={ ((props.url === '/crime') ? 'active' : null) + " nav-link"}>Crime</a>
            </Link>

        </div>
    </div>
