
import './footer.css'
function Footer() {
    return (
        <footer class="site-footer">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6">
                        <h6>About</h6>
                        <p class="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>

                    <div class="col-xs-6 col-md-3">
                        <h6>Categories</h6>
                        <ul class="footer-links">
                            <li><a>Category one</a></li>
                            <li><a>Category two</a></li>
                            <li><a>Category three</a></li>
                            <li><a>Category four</a></li>
                        </ul>
                    </div>

                    <div class="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul class="footer-links">
                            <li><a>About Us</a></li>
                            <li><a>About smartData</a></li>
                            <li><a>Privacy policy</a></li>
                            <li><a>Sitemap</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-sm-6 col-xs-12">
                        <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by
                            <a> smartData enterprise</a>.
                        </p>
                    </div>

                    <div class="col-md-4 col-sm-6 col-xs-12">
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
