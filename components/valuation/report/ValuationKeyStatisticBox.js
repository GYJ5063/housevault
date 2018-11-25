const ValuationKeyStatisticBox = (props) => {
    return  <div >
        <style jsx> {
            `
            h2 {
                font-size:1rem;
            }
            h3 {
                font-size:2rem;
                font-weight:600;
            }
            .stat-box {
                border: 1px solid #e7e7e7;
                height:150px;
            }
            .side-panel {
                background:#D44280;
                text-align:center;

            }
            .icon {
                margin-top:25%;
                color:#ffffff;
                font-size:4rem;
             }

            `
        }
        </style>
        <div className="row stat-box">
            <div className="col side-panel">
                <i className={props.icon + " icon"} />
            </div>
            <div className="col ">
                <h2>{props.title}</h2>
                <h3>{props.value}</h3>
            </div>
        </div>

    </div>
}
export default ValuationKeyStatisticBox;