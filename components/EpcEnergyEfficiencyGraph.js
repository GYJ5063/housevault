export default (props) =>
    <div className="panel panel-default">
        <div className="panel-heading">
            Energy Efficiency Rating
        </div>
        <div className="panel-body">
            <table className="data-list efficiency" cellPadding="0" cellSpacing="0">
                <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Current</th>
                    <th>Potential</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="info">Very energy efficient. Lower running costs.</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td>
                                        <span className="energy-bar a"><span
                                            className="en-num plus">(92 plus)</span> <span
                                            className="grade">A</span></span>
                    </td>
                    <td>{(props.epc.current_energy_efficiency > 91) ? <span className="leaf a">{props.epc.current_energy_efficiency}</span> : '' }</td>
                    <td>{(props.epc.potential_energy_efficiency > 91) ? <span className="leaf a">{props.epc.potential_energy_efficiency}</span> : '' }</td>
                </tr>
                <tr>
                    <td>
                                        <span className="energy-bar b"><span
                                            className="en-num plus">(81-91)</span> <span
                                            className="grade">B</span></span>
                    </td>
                    <td>{(props.epc.current_energy_efficiency >= 81 && props.epc.current_energy_efficiency  <= 91) ? <span className="leaf b">{props.epc.current_energy_efficiency}</span> : '' }</td>
                    <td>{(props.epc.potential_energy_efficiency >= 81 && props.epc.potential_energy_efficiency  <= 91) ? <span className="leaf b">{props.epc.potential_energy_efficiency}</span> : '' }</td>
                </tr>
                <tr>
                    <td>
                                        <span className="energy-bar c"><span
                                            className="en-num plus">(69-80)</span> <span
                                            className="grade">C</span></span>
                    </td>
                    <td>{(props.epc.current_energy_efficiency >= 69 && props.epc.current_energy_efficiency  <= 80) ? <span className="leaf c">{props.epc.current_energy_efficiency}</span> : '' }</td>
                    <td>{(props.epc.potential_energy_efficiency >= 69 && props.epc.potential_energy_efficiency  <= 80) ? <span className="leaf c">{props.epc.potential_energy_efficiency}</span> : '' }</td>
                </tr>
                <tr>
                    <td>
                                        <span className="energy-bar d"><span
                                            className="en-num plus">(55-68)</span> <span
                                            className="grade">D</span></span>
                    </td>
                    <td>{(props.epc.current_energy_efficiency >= 55 && props.epc.current_energy_efficiency  <= 68) ? <span className="leaf d">{props.epc.current_energy_efficiency}</span> : '' }</td>
                    <td>{(props.epc.potential_energy_efficiency >= 55 && props.epc.potential_energy_efficiency  <= 68) ? <span className="leaf d">{props.epc.potential_energy_efficiency}</span> : '' }</td>
                </tr>
                <tr>
                    <td>
                                        <span className="energy-bar e"><span
                                            className="en-num plus">(39-54)</span> <span
                                            className="grade">E</span></span>
                    </td>
                    <td>{(props.epc.current_energy_efficiency >= 39 && props.epc.current_energy_efficiency  <= 54) ? <span className="leaf e">{props.epc.current_energy_efficiency}</span> : '' }</td>
                    <td>{(props.epc.potential_energy_efficiency >= 39 && props.epc.potential_energy_efficiency  <= 54) ? <span className="leaf e">{props.epc.potential_energy_efficiency}</span> : '' }</td>
                </tr>
                <tr>
                    <td>
                                        <span className="energy-bar f"><span
                                            className="en-num plus">(21-38)</span> <span
                                            className="grade">F</span></span>
                    </td>
                    <td>{(props.epc.current_energy_efficiency >= 21 && props.epc.current_energy_efficiency  <= 38) ? <span className="leaf f">{props.epc.current_energy_efficiency}</span> : '' }</td>
                    <td>{(props.epc.potential_energy_efficiency >= 21 && props.epc.potential_energy_efficiency  <= 38) ? <span className="leaf f">{props.epc.potential_energy_efficiency}</span> : '' }</td>
                </tr>
                <tr>
                    <td>
                                        <span className="energy-bar g"><span
                                            className="en-num plus">(1-20)</span> <span
                                            className="grade">G</span></span>
                    </td>
                    <td>{(props.epc.current_energy_efficiency <= 20) ? <span className="leaf g">{props.epc.current_energy_efficiency}</span> : '' }</td>
                    <td>{(props.epc.potential_energy_efficiency <= 20) ? <span className="leaf g">{props.epc.potential_energy_efficiency}</span> : '' }</td>
                </tr>
                <tr>
                    <td className="info">Not energy efficient. High running cost</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>