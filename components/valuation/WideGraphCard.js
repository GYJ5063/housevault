import React from "react";

export default (props) => (
    <div className="col-md-12">
        <div className="card wide-valuation-chart-card  mb-3  text-left w-100 h-100">
            <div className="card-body">{props.children}</div>
        </div>
    </div>
);
