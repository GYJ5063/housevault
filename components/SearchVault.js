import React, {Component} from 'react';
import {Router} from '../routes';
class SearchVault extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            search_keyword: "",
            search_status: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({search_keyword: e.target.value});
    }
    handleSubmit(e) {
        e.preventDefault();

        this.setState({
            search_keyword: this.state.search_keyword,
            search_status: 'Searching...'
        });

        let postcode = this.state.search_keyword;
        
        let url_postcode = process.env.BACKEND_URL + "postcode-exist/" + postcode;

        fetch(url_postcode)
            .then(res => res.json())
            .then(
                (status) => {
                    console.log(status);
                    if(status) {
                        this.setState({
                            search_status: 'Found it, redirecting...'
                        })

                        Router.pushRoute('/postcode/' + postcode);
                    } else {
                        this.setState({
                            search_status: 'Invalid postcode'
                        })
                    }
                },
                (error) => {
                    this.setState({
                        search_status: 'Invalid postcode'
                    })

                }
            )
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="input-group">
                    <input type="text" id="autocomplete-future" className="form-control searchfield"
                           placeholder="SEARCH THE VAULT" aria-label="SEARCH THE VAULT"
                           aria-describedby="search-vault" value={ this.state.search_keyword } onChange={ this.handleChange.bind(this) }/>
                    <div className="input-group-append">
                        <button className="btn btn-danger" type="submit">Go</button>
                    </div>
                </div>
                <input name="street_number" type="hidden" className="field" id="street_number"
                       disabled="true"/>
                <input name="route" type="hidden" className="field" id="route" disabled="true"/>
                <input name="locality" type="hidden" className="field" id="locality"
                       disabled="true"/>
                <input name="postal_code" type="hidden" className="field" id="postal_code"
                       disabled="true"/>
                <input name="administrative_area_level_1" type="hidden" className="field"
                       id="administrative_area_level_1" disabled="true"/>
                <input name="country" type="hidden" className="field" id="country" disabled="true"/>
            </form>
        );
    }
}
export default SearchVault;