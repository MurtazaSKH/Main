import React from 'react';

class ProductDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // determin this
        }
    }

    render() {
        return (
            <div id={'mod'+this.props.modalId} className="uk-modal-container" uk-modal="true">
                {this.props.productDetail.name}
                {/* <div classname="container">
                    <div classname="row">
                        <div classname="col-sm-6">
                            <div classname="product-desc-img">
                                <div style="height:555px;width:555px;" classname="zoomWrapper"><img id="zoom-01" src="images/shop/product-01.jpg" classname="img-responsive" alt="product-desc-1" data-zoom-image="images/shop/product-full-01.jpg" style="position: absolute;" /></div>
                            </div>
                            <div id="gallery-01" classname="product-gallery">
                                <div id="product-gallery-slider" classname="product-gallery-slider owl-carousel owl-theme owl-loaded">




                                    <div classname="owl-stage-outer"><div classname="owl-stage" style="transform: translate3d(-735px, 0px, 0px); transition: all 2s ease 0s; width: 1260px;"><div classname="owl-item cloned" style="width: 100px; margin-right: 5px;"><div classname="item product-gallery-thumb active">
                                        <a href="#" data-image="images/shop/product-01.jpg" data-zoom-image="images/shop/product-full-01.jpg"><img src="images/shop/product-thumb-01.jpg" classname="img-responsive" alt="product-thumb-1" /><div classname="product-gallery-overlay"><span><i classname="fa fa-search"></i></span></div></a>
                                    </div></div><div classname="owl-item" style="width: 100px; margin-right: 5px;"><div classname="item product-gallery-thumb active">
                                        <a href="#" data-image="images/shop/product-01.jpg" data-zoom-image="images/shop/product-full-01.jpg"><img src="images/shop/product-thumb-01.jpg" classname="img-responsive" alt="product-thumb-1" /><div classname="product-gallery-overlay"><span><i classname="fa fa-search"></i></span></div></a>
                                    </div></div></div></div><div classname="owl-controls"><div classname="owl-nav"><div classname="owl-prev" style=""><i classname="fa fa-sort-asc" aria-hidden="true"></i></div><div classname="owl-next" style=""><i classname="fa fa-sort-desc" aria-hidden="true"></i></div></div><div classname="owl-dots" style="display: none;"></div></div></div>
                            </div>
                        </div>
                        <div classname="col-sm-6">
                            <div classname="product-page-dtl-block">
                                <h5 classname="product-dtl-name">Your Product Name</h5>
                                <div classname="product-dtl-price"><span>$20.00</span> $12.00</div>
                                <div classname="product-dtl-rating-block">
                                    <div classname="shop-products-rating">
                                        <ul>
                                            <li><i classname="fa fa-star"></i></li>
                                            <li><i classname="fa fa-star"></i></li>
                                            <li><i classname="fa fa-star"></i></li>
                                            <li><i classname="fa fa-star"></i></li>
                                            <li><i classname="fa fa-star-half-o"></i></li>
                                        </ul>
                                    </div>
                                    <div classname="rating-text-two">
                                        <span><a href="#" title="Reviews">(Based on 17 reviews)</a></span><a href="#" title="Write A Review"><i aria-hidden="true" classname="icon_pencil-edit"></i> Write a review</a>
                                    </div>
                                </div>
                                <div classname="product-desc">
                                    <p><br />Verear timeam qui ut, ut mei mazim voluptaria disputationi. Ea labore epicuri contentiones nec, has an nostro qualisque percipitur. Nam persius commune officiis ne, ei modus ign<br /><a href="#" title="Read More">Read more...</a></p>
                                </div>
                                <div classname="purchase-features-main-block">

                                </div>




                            </div>
                        </div>
                    </div>
                    <div classname="product-dtl-tab">
                        <ul classname="nav nav-tabs" role="tablist">

                            <li role="presentation" classname="active"><a href="#reviews" aria-controls="reviews" role="tab" data-toggle="tab">Reviews (2)</a></li>

                        </ul>
                        <!-- Tab panes -->
        <div classname="tab-content">

                            <div role="tabpanel" classname="tab-pane active" id="reviews">
                                <div classname="blog-comment">
                                    <div classname="row">
                                        <div classname="col-xs-10">
                                            <div classname="media">
                                                <div classname="media-left">
                                                    <a href="#"><img src="images/shop/review-01.jpg" classname="media-object" alt="comment-client-01" /></a>
                                                </div>
                                                <div classname="media-body">
                                                    <div classname="media-heading-block">
                                                        <h6 classname="media-heading">Johnathan Doe - <span>posted 2 minutes ago</span></h6>
                                                        <div classname="shop-products-rating">
                                                            <ul>
                                                                <li><i classname="fa fa-star"></i></li>
                                                                <li><i classname="fa fa-star"></i></li>
                                                                <li><i classname="fa fa-star"></i></li>
                                                                <li><i classname="fa fa-star"></i></li>
                                                                <li><i classname="fa fa-star-half-o"></i></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <p>Ad sumo admodum tincidunt cum. Mei et ullum lobortis, virtute accusamus pertinacia ne vim. At summo aliquando ius. Sea ad munere nullam admodum. Quo legere vivendo pericula et, ea aliquam placerat ullamcorper mei. Vide tractatos ei eos. Duo dicta commune intellegam cu, cu eum partem omnesque prodesset. Mea eripuit voluptatum in. Congue aperiam maiestatis et mea, nih</p>
                                                    <div classname="media comments-reply">
                                                        <div classname="media-left">
                                                            <a href="#"><img src="images/shop/review-02.jpg" classname="media-object" alt="comment-client-02" /></a>
                                                        </div>
                                                        <div classname="media-body">
                                                            <div classname="media-heading-block">
                                                                <h6 classname="media-heading">Susan Muscluas - <span>posted 3 hours ago</span></h6>
                                                                <div classname="shop-products-rating">
                                                                    <ul>
                                                                        <li><i classname="fa fa-star"></i></li>
                                                                        <li><i classname="fa fa-star"></i></li>
                                                                        <li><i classname="fa fa-star"></i></li>
                                                                        <li><i classname="fa fa-star"></i></li>
                                                                        <li><i classname="fa fa-star-half-o"></i></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <p>Ad sumo admodum tincidunt cum. Mei et ullum lobortis, virtute accusamus pertinacia ne vim. At summo aliquando ius. Sea ad munere nullam admodum. Quo legere vivendo pericula et, ea aliquam placerat ullamcorper mei. Vide tractatos ei eos. Duo dicta commune intellegam cu, cu eum partem omnesque prodesset. Mea eripuit voluptatum in. Congue aperiam maiestatis et mea, nihil</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div classname="col-xs-2">
                                            <div classname="media-reply-block">
                                                <div classname="media-reply">
                                                    <a href="#" title="Reply"><i classname="fa fa-mail-forward"></i> Reply</a>
                                                </div>
                                                <div classname="media-reply">
                                                    <a href="#" title="Reply"><i classname="fa fa-mail-forward"></i> Reply</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div classname="blog-comment-send">
                                    <h5 classname="comments-heading">Post a review</h5>
                                    <p>Fill out all required fields to send a message. You have to login to your wordpress account to post any comment. Please don´t spam.<br />Thank you!</p>
                                    <form id="comment-form" classname="comment-form" action="#">
                                        <div classname="row">
                                            <div classname="col-md-4">
                                                <div classname="form-group">
                                                    <input type="text" classname="form-control" name="name" id="name" placeholder="Enter your name..." />
                                                </div>
                                            </div>
                                            <div classname="col-md-4">
                                                <div classname="form-group">
                                                    <input type="email" classname="form-control" name="email" id="email" placeholder="youremail@email.com" />
                                                </div>
                                            </div>
                                            <div classname="col-md-4">
                                                <div classname="form-group">
                                                    <input type="text" classname="form-control" name="subject" id="subject" placeholder="Subject (Optional)" />
                                                </div>
                                            </div>
                                        </div>
                                        <div classname="message">
                                            <textarea classname="form-control" name="mesaage" rows="3" placeholder="Type your message here..."></textarea>
                                        </div>
                                        <button type="submit" classname="btn btn-default">Post Comment</button>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default ProductDetails;