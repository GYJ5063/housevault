import React, { Component } from 'react';
import {Link} from '../routes';

class AgentTableRow extends Component {
    render() {
        const url = this.props.obj.TrustPilot;
        const website = this.props.obj.Website;
        const pagelink = this.props.obj.Name.replace(/\s+/g, '-').toLowerCase();

        return (
                <tr>
                    <td className="text-center">
                        <Link route={'/online-estate-agent-reviews/' + pagelink}   >
                            <a>
                                {this.props.obj.Name}
                            </a>
                        </Link>

                    </td>                    
                    <td className="text-center">
                        <strong>&pound;{this.props.obj.Cost}</strong><br/>(Incl. VAT)
                    </td>
                    <td className="text-center">
                        <strong>{this.props.obj.SalePriceAchieved * 100}%</strong>
                    </td>
                    <td className="text-center">
                        {this.props.obj.UserRating}<br/>
                        <Link route={'/online-estate-agent-reviews/' + this.props.obj.Name}   >
                            <a target="_blank">Read Reviews</a>
                        </Link>

                    </td>
                    <td className="text-center">
                        <a href={website} target="_blank" className="btn btn-info">Visit Website</a>
                    </td>
                </tr>
                );
    }
}

export default AgentTableRow;