import React, { Component } from 'react';

class AgentTableRow extends Component {
    render() {
        const url = this.props.obj.TrustPilot;
        const website = this.props.obj.Website;
        return (
                <tr>
                    <td className="text-center">
                        {this.props.obj.Name}
                    </td>                    
                    <td className="text-center">
                        <strong>&pound;{this.props.obj.Cost}</strong><br/>(Incl. VAT)
                    </td>
                    <td className="text-center">
                        <strong>{this.props.obj.SalePriceAchieved * 100}%</strong>
                    </td>
                    <td className="text-center">
                        {this.props.obj.UserRating}<br/> 
                        <a href={url} target="_blank">Read Reviews</a>
                    </td>
                    <td className="text-center">
                        <a href={website} target="_blank" className="btn btn-info">Visit Website</a>
                    </td>
                </tr>
                );
    }
}

export default AgentTableRow;