export default () =>
    <div role="navigation">
        <nav className="navbar navbar-inverse bg-inverse navbar-toggleable-sm navbar-expand-lg">
            <a href="/" title="House Vault" className="logo navbar-brand"><img
                src="/static/housevault-logo.svg" alt="Logo" width="200"/></a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-md-end" id="navbarSupportedContent">
                <ul className="nav navbar-nav navbar-right">
                    <li><input type="text" id="autocompletetop" className="searchfieldtop"
                               placeholder="Search the vault" aria-label="SEARCH.."
                               aria-describedby="search-vault"/></li>
                    <li><a href="/online-property-valuation" title="Online Property Valuation">Online Property Valuation</a></li>
                    <li><a href="/house-prices" title="Sold Prices">Sold Prices</a></li>
                    <li><a href="/energy-efficiency" title="Energy Efficiency">Energy Efficiency</a></li>
                    <li><a href="/compare" title="Compare">Compare</a></li>
                </ul>
                <ul className="social">
                    <li className="twitter">
                        <a href="https://twitter.com/housevaultuk" target="_blank" title="Twitter">Twitter</a>
                    </li>
                    <li className="facebook">
                        <a href="https://www.facebook.com/housevault/" title="Facebook" target="_blank">Facebook</a>
                    </li>
                    <li className="google-plus">
                        <a href="https://plus.google.com/u/0/114451867287456275940" title="Google plus" target="_blank">Google
                            plus</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>