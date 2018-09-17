import React from "react";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Table,
         Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import fetch from "isomorphic-fetch";
import PropertyMenu from "../components/PropertyMenu";
import _ from "lodash"
import moment from "moment";
import Layout from '../components/Layout';
import GoogleMapsWithMarkerClusterer from "../components/GoogleMapsWithMarkerClusterer";

class Crime extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          dropdownOpen: false,
          markers: this.props.markers,
          month: this.props.month,
          crimes: this.props.crimes,
          activeTab: null,
          visibleMarkers: this.props.markers,
          totalCrimeCount: this.props.totalCrimeCount,
          categoriesToDisplay: {
            "Anti social behaviour": "\uf5bd",
            "Criminal damage arson": "\uf06d",
            "Other theft": "\uf21c",
            "Public order": "\uf24e",
            "Violent crime": "\uf0f9"
          },
          categoriesIconData: {
            "Anti social behaviour": "M224 32c0-17.67-14.33-32-32-32h-64c-17.67 0-32 14.33-32 32v96h128V32zm256 96c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32zm-256 32H96c-53.02 0-96 42.98-96 96v224c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32V256c0-53.02-42.98-96-96-96zm-64 256c-44.18 0-80-35.82-80-80s35.82-80 80-80 80 35.82 80 80-35.82 80-80 80zM480 96c17.67 0 32-14.33 32-32s-14.33-32-32-32-32 14.33-32 32 14.33 32 32 32zm-96 32c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32zm-96-96c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32zm96 0c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32zm96 192c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z",
            "Criminal damage arson": "M216 23.858c0-23.802-30.653-32.765-44.149-13.038C48 191.851 224 200 224 288c0 35.629-29.114 64.458-64.85 63.994C123.98 351.538 96 322.22 96 287.046v-85.51c0-21.703-26.471-32.225-41.432-16.504C27.801 213.158 0 261.332 0 320c0 105.869 86.131 192 192 192s192-86.131 192-192c0-170.29-168-193.003-168-296.142z",
            "Other theft": "M512.949 192.003c-14.862-.108-29.14 2.322-42.434 6.874L437.589 144H520c13.255 0 24-10.745 24-24V88c0-13.255-10.745-24-24-24h-45.311a24 24 0 0 0-17.839 7.945l-37.496 41.663-22.774-37.956A24 24 0 0 0 376 64h-80c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h66.411l19.2 32H227.904c-17.727-23.073-44.924-40-99.904-40H72.54c-13.455 0-24.791 11.011-24.536 24.464C48.252 141.505 58.9 152 72 152h56c24.504 0 38.686 10.919 47.787 24.769l-11.291 20.529c-13.006-3.865-26.871-5.736-41.251-5.21C55.857 194.549 1.565 249.605.034 317.021-1.603 389.076 56.317 448 128 448c59.642 0 109.744-40.794 123.953-96h84.236c13.673 0 24.589-11.421 23.976-25.077-2.118-47.12 17.522-93.665 56.185-125.026l12.485 20.808c-27.646 23.654-45.097 58.88-44.831 98.179.47 69.556 57.203 126.452 126.758 127.11 71.629.678 129.839-57.487 129.234-129.099-.588-69.591-57.455-126.386-127.047-126.892zM128 400c-44.112 0-80-35.888-80-80s35.888-80 80-80c4.242 0 8.405.341 12.469.982L98.97 316.434C90.187 332.407 101.762 352 120 352h81.297c-12.37 28.225-40.56 48-73.297 48zm388.351-.116C470.272 402.337 432 365.554 432 320c0-21.363 8.434-40.781 22.125-55.144l49.412 82.352c4.546 7.577 14.375 10.034 21.952 5.488l13.72-8.232c7.577-4.546 10.034-14.375 5.488-21.952l-48.556-80.927A80.005 80.005 0 0 1 512 240c45.554 0 82.338 38.273 79.884 84.352-2.16 40.558-34.974 73.372-75.533 75.532z",
            "Public order": "M256 336h-.02c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0C-2.06 328.75.02 320.33.02 336H0c0 44.18 57.31 80 128 80s128-35.82 128-80zM128 176l72 144H56l72-144zm511.98 160c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0-87.12 174.26-85.04 165.84-85.04 181.51H384c0 44.18 57.31 80 128 80s128-35.82 128-80h-.02zM440 320l72-144 72 144H440zm88 128H352V153.25c23.51-10.29 41.16-31.48 46.39-57.25H528c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H383.64C369.04 12.68 346.09 0 320 0s-49.04 12.68-63.64 32H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h129.61c5.23 25.76 22.87 46.96 46.39 57.25V448H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z",
            "Violent crime": "M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm144-248c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48zm176 248c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"
          },
          catDropdownOpen: false
        };
    }
    componentDidMount(){
        this.toggleTab(this.props.firstCategory);
    }
    toggleDropdown() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
    }
    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
        this.filterMarkersByCategory(tab);
    }
    catDropdownToggle(){
        this.setState({
            catDropdownOpen: !this.state.catDropdownOpen
          });
    }
    toggleTabForAll() {
        this.setState({
            activeTab: "All"
        });

        const markers = 
            _.reduce(this.state.crimes, (acc, cur) => acc.concat(cur), [])
            .map(c =>  ({
                lat: parseFloat(c.location.latitude),
                lng: parseFloat(c.location.longitude),
                path: this.state.categoriesIconData[_.capitalize(c.category.replace(/-/g, ' '))]
            }));
        this.setState({
            visibleMarkers: markers
        });
    }
    filterMarkersByCategory(category) {

        const markers = this.state.crimes[category].map(c => ({
            lat: parseFloat(c.location.latitude),
            lng: parseFloat(c.location.longitude),
            path: this.state.categoriesIconData[category]
        }));

        this.setState({
            visibleMarkers: markers
        });
    }
    async selectMonth(month){
        const unProcessedcrimes = await Crime.getCrimes(this.props.lat, this.props.lng, moment(month,"MMMM YYYY").format("YYYY-MM"));
        const { markers, crimes } = Crime.processCrimes(unProcessedcrimes);
        this.setState({
            markers,
            month,
            crimes
        });
    }
    render() {

        return (
            <div className="container property-crime-container">
                <Layout>
                    <PropertyMenu url={this.props.url.pathname} postcode={this.props.property.postcode} number={this.props.property.house_number}/>
                    <div className="container list-page-padding">
                    <div className="row">
                        <div className="col-12">
                            <h4>Crime in {this.props.property.full_address} for {this.state.month}</h4>
                            By month:
                            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={() => this.toggleDropdown()}>
                                <DropdownToggle caret>{this.state.month}</DropdownToggle>
                                <DropdownMenu
                                    modifiers={{
                                        setMaxHeight: {
                                          enabled: true,
                                          order: 890,
                                          fn: (data) => {
                                            return {
                                              ...data,
                                              styles: {
                                                ...data.styles,
                                                overflow: 'auto',
                                                maxHeight: 200,
                                              },
                                            };
                                          },
                                        },
                                      }}
                                >
                                    {
                                        this.props.dates.map((m, i) => (
                                            <DropdownItem onClick={() => this.selectMonth(m)} key={i}>{m}</DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </ButtonDropdown>
                            <Nav className="crime-cat-tab" tabs>
                                <NavItem>
                                    <NavLink
                                        className={this.state.activeTab === "All" ? 'active' : ''}
                                        onClick={() => { this.toggleTabForAll(); }}
                                    >
                                    <i className="fas fa-globe"></i>
                                    {`All (${this.state.totalCrimeCount})`}
                                    </NavLink>
                                </NavItem>
                                {
                                    _.map(this.state.categoriesToDisplay, (val, key) => (
                                        <NavItem key={key}>
                                            <NavLink
                                                className={this.state.activeTab === key ? 'active' : ''}
                                                onClick={() => { this.toggleTab(key); }}
                                            >
                                            <i className="fas">{val}</i>
                                            {`${key} (${this.state.crimes[key].length})`}
                                            </NavLink>
                                        </NavItem>
                                ))}
                            </Nav>
                            <div className="row crime-cat-dropdown-container">
                                <div className="col-2">
                                        Category:
                                </div>
                                <div className="col-10">
                                    <ButtonDropdown isOpen={this.state.catDropdownOpen} toggle={() => this.catDropdownToggle()}>
                                        <DropdownToggle caret color="primary">
                                        <i className="fas">{this.state.categoriesToDisplay[this.state.activeTab]}</i> {this.state.activeTab}
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            {
                                                _.map(this.state.categoriesToDisplay, (val, key) => (
                                                        <DropdownItem
                                                            key={key}
                                                            onClick={() => this.toggleTab(key)}>
                                                        <i className="fas">{val}</i> {key}
                                                    </DropdownItem>
                                                ))
                                            }
                                        </DropdownMenu>
                                    </ButtonDropdown>
                                </div>
                            </div>
                            <GoogleMapsWithMarkerClusterer markers={this.state.visibleMarkers} />
                            <TabContent activeTab={this.state.activeTab}>
                            {
                                _.map(this.state.crimes, (val, key) => (
                                    <TabPane key={key} tabId={key}>
                                        <div className="property-crime-crimes-container">
                                            <Table className="property-crime-crimes-table">
                                                <thead>
                                                <tr>
                                                    <th>Crime Type</th>
                                                    <th>Location</th>
                                                </tr>
                                                </thead>
                                                <tbody >
                                                { val.map((crime, i) => (

                                                        <tr key={i}>
                                                            <td>{_.capitalize(crime.category.replace(/-/g, ' ')) }</td>
                                                            <td>{crime.location.street.name}</td>
                                                        </tr>
                                                ))}
                                                </tbody>
                                            </Table>
                                        </div>
                                    </TabPane>
                            ))}
                            </TabContent>
                    </div>
                        </div>
                    </div>
                </Layout>
            </div>

        );

    }
}

Crime.getCrimes = async function getCrimes(lat, lng, date){
    const baseUrl = `https://data.police.uk/api/crimes-street/all-crime?lat=${lat}&lng=${lng}`;
    const url = date ? baseUrl + `&date=${date}` : baseUrl;
    const crime = await fetch(url);
    const crimes = await crime.json();
    return crimes;
};

Crime.processCrimes = function processCrimes(crimes){
    // as the data set may be large 800+, this method only iterates the collection once
    const processedData = crimes.reduce((acc, crime) => {
        acc.markers.push({ 
            lat: parseFloat(crime.location.latitude), lng: parseFloat(crime.location.longitude)
        });
        const category = _.capitalize(crime.category.replace(/-/g, ' '));

        if (!acc.crimes[category]) {
            acc.crimes[category] = [];
        }
        acc.crimes[category].push(crime);

        if(!acc.firstCategory) {
            acc.firstCategory = category;
        }

        return acc;
    }, { markers: [], crimes: {}, firstCategory: null, totalCrimeCount: crimes.length });

    return processedData;
}

Crime.getInitialProps = async ({ req, query: { postcode, address } }) => {
    const res = await fetch(process.env.BACKEND_URL + "address/" + postcode + "/" + address);
    const json = await res.json();

    const property = json.data;
    const { lat, lng } = property;

    const unProcessedCrimes = await Crime.getCrimes(lat, lng);
    const { crimes, markers, firstCategory, totalCrimeCount } = Crime.processCrimes(unProcessedCrimes);

    const datesReq = await fetch("https://data.police.uk/api/crimes-street-dates");
    const datesWithCrimes = await datesReq.json();
    const dates = datesWithCrimes.map(d => moment(d.date, "YYYY-MM").format("MMMM YYYY"));

    const month = moment(_.first(unProcessedCrimes).month,"YYYY-MM").format("MMMM YYYY");

    return { 
        property, prices: property.prices.data, crimes, month,
        markers, lat, lng, dates, firstCategory, totalCrimeCount
    }
};

export default Crime;