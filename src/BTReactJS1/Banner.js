import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
                        <li data-target="#carouselExampleCaptions" data-slide-to={1} />
                        <li data-target="#carouselExampleCaptions" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://porsche-vietnam.vn/wp-content/uploads/2019/12/RD-2023-Homepage-Banner-WW-TaycanPushGTS-KW19-1600x615.jpg" className="d-block w-100"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Porcher Taycan</h5>
                                <p>Tinh thần nguyên bản - Năng lượng đột phá.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://porsche-vietnam.vn/wp-content/uploads/2019/04/rd-2021-homepage-banner-pcna-macanii-kw29--1600x615.jpg" className="d-block w-100"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Porcher Cayenne</h5>
                                <p>Cỗ máy kinh điển - Xa hơn cùng nhau.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://porsche-vietnam.vn/wp-content/uploads/2018/10/RD-2023-Homepage-Banner-WW-E3II-%C2%B520KW16-1600x615.jpg" className="d-block w-100"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Porcher 718 Cayman</h5>
                                <p>Can đảm dẫn đầu - Thể thao thuần khiết.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </button>
                </div>

            </div>
        )
    }
}
