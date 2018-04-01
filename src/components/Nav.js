import React from 'react'
const Nav = () => {


return ( 
    <div className="fixed-top">
        <div className="SocialBar">
            <ul>
                <li>
                    <a rel="tooltip noopener noreferrer" title="Follow us on Twitter" data-placement="bottom" href="https://twitter.com/CreativeTim" target="_blank">
                        <i className="fa fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a rel="tooltip noopener noreferrer" title="Like us on Facebook" data-placement="bottom" href="https://www.facebook.com/CreativeTim" target="_blank">
                        <i className="fa fa-facebook-square"></i>
                    </a>
                </li>
                <li>
                    <a rel="tooltip noopener noreferrer" title="Follow us on Instagram" data-placement="bottom" href="https://www.instagram.com/CreativeTimOfficial" target="_blank">
                        <i className="fa fa-instagram"></i>
                    </a>
                </li>
                <li>
                    <a rel="tooltip noopener noreferrer" title="Star on GitHub" data-placement="bottom" href="https://www.github.com/CreativeTimOfficial/paper-kit" target="_blank">
                        <i className="fa fa-github"></i>
                    </a>
                </li>
            </ul>
        </div>
        <nav className="navbar navbar-expand-md bg-dark" color-on-scroll="500">
            <div className="container">
                <div className="navbar-translate">
                    <button className="navbar-toggler navbar-toggler-right navbar-burger" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-bar"></span>
                        <span className="navbar-toggler-bar"></span>
                        <span className="navbar-toggler-bar"></span>
                    </button>
                    <a className="navbar-brand" href="./">Creating Tim</a>
                </div>
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link help" data-toggle="modal" data-target="#helpmodal"><i className="nc-icon nc-alert-circle-i" ></i><p className="d-lg-none"> Help</p></a>
                        </li>
                        <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="" role="button" aria-haspopup="true" aria-expanded="false"><i className="nc-icon nc-world-2"></i></a>
                            <ul className="dropdown-menu dropdown-menu-right dropdown-danger">
                                <a className="dropdown-item" href="#pk">Github Repo</a>
                                <a className="dropdown-item" href="https://creative-tim.com">Creative Tim</a>
                                <a className="dropdown-item" href="http://zerotomastery.io">Zero To Mastery</a>
                            </ul>
                        </div>
                    </ul>
                </div> 
            </div>
        </nav>
            
    </div>
    
  );
}

export default Nav;