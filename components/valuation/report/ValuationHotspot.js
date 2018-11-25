const ValuationHotspot = (props) => {
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

            `
        }
        </style>
        <div className="row">
            <div className="col text-center">
                <h2>{props.title}</h2>
                <h3>{props.value}</h3>
            </div>
        </div>

    </div>
}
export default ValuationHotspot;