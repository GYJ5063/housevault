import React from "react";

export default (props) => (
    <div className="col-md-6">
        <div className="valuation-chart-card  mb-3  text-left w-100">
            <div className="card-body">{props.children}</div>
        </div>
    </div>
);
