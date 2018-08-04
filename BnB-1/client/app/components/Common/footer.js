import React from 'react';

const Footer = () => (
  <footer id="footer" className="footer-main-block">
    <div className="container">
      <div className="footer-block">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="about-widget footer-widget">
              <div className="footer-logo">
                <img src="images/logo-footer.png" alt="footer-logo"/>
              </div>
              <p>Mea wisi ponderum ne. Mei no omnis fabulas. Mea agam oratio indoctum an, nec errem possim ceteros at. No duis vulputate scripserit per, nam nibh populo diceret ad. Per luptatum imperdiet te, affert latine democritum per cu.</p>
              <a href="#" className="btn read-more" title="read more"><i className="fa fa-chevron-circle-right" aria-hidden="true"></i> Read More</a>
              <div className="footer-social">
                <ul>
                  <li><a href="https://www.facebook.com/" target="_blank" title="facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                  <li><a href="https://twitter.com/" target="_blank" title="twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                  <li><a href="https://plus.google.com/" target="_blank" title="google plus"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                  <li><a href="https://www.instagram.com/" target="_blank" title="instagram"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                  <li><a href="https://www.behance.net/" target="_blank" title="behance"><i className="fa fa-behance" aria-hidden="true"></i></a></li>
                  <li><a href="https://linkedin.com/" target="_blank" title="linkedin"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-3">
            <div className="useful-link-widget footer-widget">
              <h5 className="widget-heading">Useful Links</h5>
              <ul>
                <li><a href="#" title="search">Search</a></li>
                <li><a href="about-us.html" title="about">About</a></li>
                <li><a href="#" title="typo">Typo</a></li>
                <li><a href="blog.html" title="blog">Blog</a></li>
                <li><a href="wishlist.html" title="wishlist">Wish List</a></li>
                <li><a href="faq.html" title="faq">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-2 col-sm-3">
            <div className="myaccount-widget footer-widget">
              <h5 className="widget-heading">My Account</h5>
              <ul>
                <li><a href="my-account.html" title="my account">My Account</a></li>
                <li><a href="deals.html" title="personal Information">Personal Information</a></li>
                <li><a href="address.html" title="address">Address</a></li>
                <li><a href="#" title="discount">Discount</a></li>
                <li><a href="order-history.html" title="order history">Order History</a></li>
                <li><a href="#" title="payment">Payment</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="contact-widget footer-widget">
              <h5 className="widget-heading">Contact Info</h5>
              <form className="contact-form" action="#">
                <div className="form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Name"/>
                  <i className="fa fa-user" aria-hidden="true"></i>
                </div>
                <div className="form-group">
                  <input type="text" name="email" className="form-control" id="email" placeholder="info@origano.com"/>
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </div>
                <div className="form-group">
                  <textarea name="message" id="message" placeholder="Message"></textarea>
                </div>
                <button type="submit" className="btn btn-default">Send Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <div className="copyright-block">
        <div className="row">
          <div className="col-md-8">
            <div className="copyright-text">
              <p>Copyright 2017 <a href="index.html" title="Origano">Origano</a> | All Right Reserved | Designed By <a href="#" target="_blank" title="Media City">Media City</a></p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-menu">
              <ul>
                <li><a href="privacy-policy.html" title="privacy policy">Privacy Policy</a></li>
                <li><a href="terms.html" title="terms and condition">Term &amp; Condition</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
