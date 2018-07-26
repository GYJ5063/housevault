import React, { Component } from 'react';

class CompanyTableRow extends Component {
    render() {
        const ourReview = this.props.obj.Our_Review;
        const url = this.props.obj.Trustpilot;
        const website = this.props.obj.Website;
        return (
                <tr>
                    <td className="text-center">
                        {this.props.obj.Company}
                    </td>
                    <td className="text-center">                        
                        <a href={ourReview} target="_blank">{this.props.obj.Company}</a>
                    </td>
                    <td className="text-center">
                        {this.props.obj.User_Rating}<br/> 
                        <a href={url} target="_blank">Read Reviews</a>
                    </td>
                    <td className="text-center">
                        <a href={website} target="_blank" className="btn btn-info">Visit Website</a>
                    </td>
                    <td className="text-center">
                        {(this.props.obj.Real_Cash_Buyers === 'Yes') ? <span className="glyphicon glyphicon-ok"></span> : <span className="glyphicon glyphicon-remove"></span>} 
                    </td>
                </tr>
                );
    }
}

export default CompanyTableRow;