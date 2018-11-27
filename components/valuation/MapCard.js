import React from "react";

export default (props) => (
    <div className="col-md-6">
        <div className="card valuation-chart-card  mb-3  text-left w-100 h-100">
            <div className="card-header text-white bg-info">{props.title}</div>
            <div className="card-body">{props.children}</div>
        </div>
    </div>
);
