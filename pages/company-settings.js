import React from 'react';

import { compose, graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { SketchPicker } from 'react-color';

import FormValidator from "../components/FormValidator";
import Layout from '../components/Layout';

const GET_COMPANY_DETAILS = gql`
    query companyById($id: Int!) {
        companyById(id: $id) {
            id,
            logo,
            website_url,
            valuation_url,
            primary_colour,
            secondary_colour,
            name,
            telephone,
            meta_description
        }
    }
`;

const updateCompanyMutator = gql`
    mutation updateCompany($id: Int!, $name: String, $telephone: String, $primary_colour: String, $secondary_colour: String,
                           $website_url: String, $valuation_url: String, $page_title: String, $meta_description: String) {
        updateCompany(id: $id, name: $name, telephone: $telephone, primary_colour: $primary_colour, secondary_colour: $secondary_colour,
                      website_url: $website_url, valuation_url: $valuation_url, page_title: $page_title, meta_description: $meta_description) {
            id,
            logo,
            website_url,
            valuation_url,
            primary_colour,
            secondary_colour,
            name,
            telephone,
            meta_description
        }
    }
`;


class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.validator = new FormValidator([
            {
                field: 'name',
                method: 'isEmpty',
                validWhen: false,
                message: 'Name is required.'
            },
            {
                field: 'meta_description',
                method: 'isEmpty',
                validWhen: false,
                message: 'Description is required.'
            },
            {
                field: 'telephone',
                method: 'isEmpty',
                validWhen: false,
                message: 'Telephone is required.'
            },
            {
                field: 'website_url',
                method: 'isEmpty',
                validWhen: false,
                message: 'Website url is required.'
            },
            {
                field: 'valuation_url',
                method: 'isEmpty',
                validWhen: false,
                message: 'Valuation url is required.'
            },
        ]);
        this.state = {
            id: '',
            name: '',
            logo: '',
            meta_description: '',
            primary_colour: '',
            secondary_colour: '',
            telephone: '',
            website_url: '',
            valuation_url: '',
            submitted: false,
            validation: this.validator.valid()
        };

        this.handleChange = this.handleChange.bind(this);
        this.updateCompany = this.updateCompany.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if(this.props != nextProps && !nextProps.data.loading && !nextProps.data.error){
            const newState = Object
                .keys(nextProps.data.companyById)
                .reduce((acc, cur) => {
                    if(this.state.hasOwnProperty(cur)){
                        acc[cur] = nextProps.data.companyById[cur];
                    }
                    return acc;
                }, {});

            this.setState(newState);
        }
    }
    updateCompany(e){
        e.preventDefault();

        const validation = this.validator.validate(this.state);
        this.setState({ validation });

        if (validation.isValid) {
            this.props.updateCompanyMutator({
                variables: {
                    id: this.state.id,
                    name: this.state.name,
                    page_title: this.state.page_title,
                    primary_colour: this.state.primary_colour,
                    secondary_colour: this.state.secondary_colour,
                    telephone: this.state.telephone,
                    valuation_url: this.state.valuation_url,
                    website_url: this.state.website_url,
                    meta_description: this.state.meta_description
                }
            })
            .then(res => console.log(res))
            .catch(err => console.error(err));
        }

    }
    handleChange (e) {
        let newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }
    handleColourChange(colour, property_name){
        const newState = {};
        newState[property_name] = colour.hex.substring(1);
        this.setState(newState);
    }
    render() {
        if(this.props.data.error) return this.props.data.error.message;
        let validation = this.submitted ?
        this.validator.validate(this.state) :
        this.state.validation;
        return (
            <Layout>
                <div>
                    <form onSubmit={() => {}}>
                        <div className="form-group">
                            <span id="name" className=" errText">{validation.name.message}</span>
                            <br />
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" value={this.state.name} className="form-control" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <span id="meta_description" className=" errText">{validation.meta_description.message}</span>
                            <br />
                            <label htmlFor="meta_description">Description</label>
                            <textarea name="meta_description" id="meta_description" value={this.state.meta_description} className="form-control" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <span id="telephone" className=" errText">{validation.telephone.message}</span>
                            <br />
                            <label htmlFor="telephone">Telephone</label>
                            <input type="text" name="telephone" id="telephone" value={this.state.telephone} className="form-control" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <span id="website_url" className=" errText">{validation.website_url.message}</span>
                            <br />
                            <label htmlFor="website_url">Website url</label>
                            <input type="text" name="website_url" id="website_url" value={this.state.website_url} className="form-control" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <span id="valuation_url" className=" errText">{validation.valuation_url.message}</span>
                            <br />
                            <label htmlFor="valuation_url">Vauation url</label>
                            <input type="text" name="valuation_url" id="valuation_url" value={this.state.valuation_url} className="form-control" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="primary_colour">Primary Colour</label>
                            <SketchPicker color={this.state.primary_colour} onChangeComplete={(colour) => {this.handleColourChange(colour, 'primary_colour')}} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="primary_colour">Secondary Colour</label>
                            <SketchPicker color={this.state.secondary_colour} onChangeComplete={(colour) => {this.handleColourChange(colour, 'secondary_colour')}} />
                        </div>

                        <button onClick={this.updateCompany}>Update</button>
                    </form>
                </div>
            </Layout>
        );
    }
}

Settings.getInitialProps = async ({ query: { id }}) => {
    // this is passed to the graphql HOC,
    // name the variables the same as what the query is expecting
    return { id: parseInt(id) };
};

export default compose(
    graphql(GET_COMPANY_DETAILS, { options: { ssr: false } }),
    graphql(updateCompanyMutator, { name: 'updateCompanyMutator' , options: { ssr: false }})
)(Settings);