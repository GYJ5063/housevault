export default () =>
        <section role="navigation">
            <nav className="navbar navbar-inverse bg-inverse navbar-toggleable-sm navbar-expand-lg">
                <a href="/" title="House Vault" className="logo navbar-brand"><img
                    src="/static/housevault-logo.gif" alt="Logo" width="200" /></a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-md-end" id="navbarSupportedContent">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="/towns" title="">SEARCH BY TOWN</a></li>
                        <li><a href="/postcodes" title="">SEARCH BY POSTCODE</a></li>
                        <li><a href="/about-us" title="">ABOUT US</a></li>
                        <li><a href="/contact-us" title="">CONTACT US</a></li>
                    </ul>
                    <ul className="social">
                        <li className="twitter"><a href="#" title="Twitter">Twitter</a></li>
                        <li className="facebook"><a href="#" title="Facebook">Facebook</a></li>
                        <li className="google-plus"><a href="#" title="Google plus">Google plus</a></li>
                    </ul>
                </div>
            </nav>
        </section>