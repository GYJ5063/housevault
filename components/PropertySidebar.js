import {Link} from '../routes';
export default (props) =>
    <div className="col-3">
        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
             aria-orientation="vertical">
            <Link route={"/property/"+props.postcode+"/"+props.number}>
                <a className={ ((props.url === '/property') ? 'active' : null) + " nav-link"} >Property Profile {props.url} </a>
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

            <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill"
               href="#v-pills-settings" role="tab" aria-controls="v-pills-settings"
               aria-selected="false">People</a>
            <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill"
               href="#v-pills-settings" role="tab" aria-controls="v-pills-settings"
               aria-selected="false">Property</a>
            <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill"
               href="#v-pills-settings" role="tab" aria-controls="v-pills-settings"
               aria-selected="false">Culture</a>
            <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill"
               href="#v-pills-settings" role="tab" aria-controls="v-pills-settings"
               aria-selected="false">Crime</a>
        </div>
    </div>
