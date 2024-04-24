import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div className='col-3 Card'>
                <div className="card">
                    <img src="https://media.vov.vn/sites/default/files/styles/large/public/2023-09/pap23_0354_fine.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Tận hưởng những khoảnh khắc đáng nhớ với Porsche.</p>
                        <h5 className="card-title">Porsche 911</h5>
                        <a href="#" className="btn btn-primary">Xem chi tiết</a>
                    </div>
                </div>

            </div>
        )
    }
}
