import React from "react";

export default (props) => (
    <div className="col-lg-12 tags p-b-2">
        <div className="card hero-chart-card  mb-3  text-left w-100 h-100">
            <div className="card-body">{props.children}</div>
        </div>
    </div>
);
