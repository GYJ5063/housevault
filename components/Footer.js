export default () =>
<footer>
    <div className="container">
        <div className="row col-md-12">
            <div className="col-md-6 row">
                <div className="input-group">
                    <input type="text" id="autocomplete-footer" className="form-control searchfield"
                           placeholder="SEARCH THE VAULT" aria-label="SEARCH THE VAULT" aria-describedby="search-vault" />
                        <div className="input-group-append">
                            <button className="btn btn-danger" type="submit">Go</button>
                        </div>
                </div>
                <div className="col-md-4 footer-links padding-left-0">
                    <h4>Features? </h4>
                    <ul>
                        <li><a href="#">House Valuation</a></li>
                        <li><a href="#">Energy rating prediction</a></li>
                        <li><a href="#">Broadband Quality</a></li>
                        <li><a href="#">Crime statistics</a></li>
                        <li><a href="#">More here?</a></li>
                    </ul>
                </div>
                <div className="col-md-4 footer-links">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="/about-us">About us</a></li>
                        <li><a href="#">More stuff here</a></li>
                        <li><a href="#">Other info</a></li>
                    </ul>
                </div>
                <div className="col-md-4 footer-links">
                    <h4>Contact us</h4>
                    <ul>
                        <li><a href="#">Email</a></li>
                        <li><a href="#">Phone?</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-md-1">
            </div>
            <div className="col-md-5 subscribe-section">
                <h4>Get updates from housevault</h4>
                <input type="text" name="name" id="name" placeholder="Name:" className="subscribefield"/>
                <input type="email" name="email" id="email" placeholder="Email:" className="subscribefield"/>
                <input type="submit" value="Submit" className="subscribe-submit" id="subscribeajaxSubmit"/>
            </div>
        </div>
        <div className="row col-md-12">
            <p className="copyright">© Housevault Ltd. All rights reserved</p>
        </div>
    </div>
    <div className="col-md-12 blank-footer">
    </div>
</footer>