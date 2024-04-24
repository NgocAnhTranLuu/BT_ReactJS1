import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <nav className="container navbar navbar-expand">
                    <a className="navbar-brand" href="#">
                        <img src="https://pngimg.com/uploads/porsche_logo/porsche_logo_PNG9.png" />
                    </a>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" href="#">Trang chủ <span className="sr-only">(current)</span></a>
                            <a className="nav-link" href="#">Features</a>
                            <a className="nav-link" href="#">Các dòng xe</a>
                            <a className="nav-link" href="#">Dịch vụ</a>
                        </div>
                    </div>
                </nav>
            </div>

        )
    }
}
