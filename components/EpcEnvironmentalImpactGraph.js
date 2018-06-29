export default (props) =>
    <div className="panel panel-default">
        <div className="panel-heading">
            Environmental Impact Rating
        </div>
        <div className="panel-body">
            <table className="data-list impact" cellPadding="0" cellSpacing="0">
                <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Current</th>
                    <th>Potential</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="info">Very environmentally friendly. Lower CO2 emission</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td>
                        <span className="energy-bar a"><span className="en-num">(92 to 100)</span><span className="grade">A</span></span>
                    </td>
                    <td>{(props.epc.environment_impact_current > 91) ? <span className="leaf a">{props.epc.environment_impact_current}</span> : '' }</td>
                    <td>{(props.epc.environment_impact_potential > 91) ? <span className="leaf a">{props.epc.environment_impact_potential}</span> : '' }</td>
                </tr>
                <tr>
                    <td>
                                    <span className="energy-bar b"><span className="en-num">(81 to 91)</span> <span
                                        className="grade">B</span></span>
                    </td>
                    <td>{(props.epc.environment_impact_current >= 81 && props.epc.environment_impact_current <= 91) ? <span className="leaf b">{props.epc.environment_impact_current}</span> : '' }</td>
                    <td>{(props.epc.environment_impact_potential >= 81 && props.epc.environment_impact_potential <= 91) ? <span className="leaf b">{props.epc.environment_impact_potential}</span> : '' }</td>
                </tr>
                <tr>
                    <td>
                                    <span className="energy-bar c"><span className="en-num">(69 to 80)</span> <span
                                        className="grade">C</span></span>
                    </td>
                    <td>{(props.epc.environment_impact_current >= 69 && props.epc.environment_impact_current <= 80) ? <span className="leaf c">{props.epc.environment_impact_current}</span> : '' }</td>
                    <td>{(props.epc.environment_impact_potential >= 69 && props.epc.environment_impact_potential <= 80) ? <span className="leaf c">{props.epc.environment_impact_potential}</span> : '' }</td>
                </tr>
                <tr>
                    <td>
                                    <span className="energy-bar d"><span className="en-num">(55 to 68)</span> <span
                                        className="grade">D</span></span>
                    </td>
                    <td>{(props.epc.environment_impact_current >= 55 && props.epc.environment_impact_current <= 68) ? <span className="leaf d">{props.epc.environment_impact_current}</span> : '' }</td>
                    <td>{(props.epc.environment_impact_potential >= 55 && props.epc.environment_impact_potential <= 68) ? <span className="leaf d">{props.epc.environment_impact_potential}</span> : '' }</td>
                </tr>
                <tr>
                    <td>
                                    <span className="energy-bar e"><span className="en-num">(39 to 54)</span> <span
                                        className="grade">E</span></span>
                    </td>
                    <td>{(props.epc.environment_impact_current >= 39 && props.epc.environment_impact_current <= 54) ? <span className="leaf e">{props.epc.environment_impact_current}</span> : '' }</td>
                    <td>{(props.epc.environment_impact_potential >= 39 && props.epc.environment_impact_potential <= 54) ? <span className="leaf e">{props.epc.environment_impact_potential}</span> : '' }</td>
                </tr>
                <tr>
                    <td>
                                    <span className="energy-bar f"><span className="en-num">(21 to 38)</span> <span
                                        className="grade">F</span></span>
                    </td>
                    <td>{(props.epc.environment_impact_current >= 21 && props.epc.environment_impact_current <= 38) ? <span className="leaf f">{props.epc.environment_impact_current}</span> : '' }</td>
                    <td>{(props.epc.environment_impact_potential >= 21 && props.epc.environment_impact_potential <= 38) ? <span className="leaf f">{props.epc.environment_impact_potential}</span> : '' }</td>
                </tr>
                <tr>
                    <td>
                                    <span className="energy-bar g"><span className="en-num">(1 to 20)</span> <span
                                        className="grade">G</span></span>
                    </td>
                    <td>{(props.epc.environment_impact_current <= 20) ? <span className="leaf g">{props.epc.environment_impact_current}</span> : '' }</td>
                    <td>{(props.epc.environment_impact_potential <= 20) ? <span className="leaf g">{props.epc.environment_impact_potential}</span> : '' }</td>
                </tr>
                <tr>
                    <td className="info">Not environmentally friendly. Higher CO2 emission</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>