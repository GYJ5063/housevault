import React from "react";

export default (props) => (
    <div className="col-md-4 tags p-b-2">
        <div className="card hero-chart-card  mb-3  text-center">
            <div className="card-body">{props.children}</div>
        </div>
    </div>
);
