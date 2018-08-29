import React from 'react';

const Testimonial = () => {
  return(
    <section className="tc-testimonial sec-spacer bg-black">
        <div className="uk-container-center uk-container">
            <div className="uk-slidenav-position" data-uk-slider="">
                <div className="uk-slider-container">
                    <ul className="uk-slider uk-grid-width-medium-1-1" style={{minWidth: '10170px', minHeight: '279px', transform: 'translateX(0px)'}}>
                        <li data-slider-slide="0" style={{left: '0px', width: '1130px'}}>
                            <div className="tm-item">
                                <div className="uk-text-center">
                                    <i className="uk-icon-quote-right"></i>
                                </div>
                                <div className="testi-desc">
                                    <p>
                                        A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole
                                        heart. I am alone, and feel the charm of existence in this spot
                                    </p>
                                </div>
                                <div className="testi-info">
                                    <h4>FARHAD ALI</h4>
                                    <p>Designer -
                                        <a href="#" draggable="false">thecodrops.com</a>
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <a href="#" className="uk-slidenav uk-slidenav-contrast uk-slidenav-previous"
                    data-uk-slider-item="previous" draggable="false"></a>
                <a href="#" className="uk-slidenav uk-slidenav-contrast uk-slidenav-next" data-uk-slider-item="next"
                    draggable="false"></a>
            </div>
        </div>
    </section>
  )
}

export default Testimonial;
