import logo from '../../images/logo.png'
import instagram from '../../images/instagram.png'
import telegram from '../../images/telegram.png'
import facebook from '../../images/facebook.png'
import gogle_plus from '../../images/gogle_plus.png'

import home from '../../images/home.png'
import about_us from '../../images/about_us.png'
import features from '../../images/features.png'
import team from '../../images/team.png'
import registration from '../../images/registration.png'
import line from '../../images/line.png'

export const Header = () => {
    return (
        <>

            <div className="top-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="top_box">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="top_left">
                                        <img src={logo} />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="top_right">
                                        <ul>
                                            <li><a href="https://www.instagram.com/?hl=en"><img src={instagram} /></a></li>
                                            <li><a href="https://telegram.org/"><img src={telegram} /></a></li>
                                            <li><a href="https://www.facebook.com/"><img src={facebook} /></a></li>
                                            <li><a href="https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1"><img src={gogle_plus} /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <header>
                                <nav className="navbar navbar-inverse">
                                    <div className="navbar-header">
                                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                    </div>
                                    <div className="collapse navbar-collapse" id="myNavbar">
                                        <ul className="nav navbar-nav navbar-right">
                                            <li><a href="?a=home"><img src={home} />HOME</a></li>
                                            <li><a href="?a=aboutus"><img src={about_us} />ABOUT US</a></li>
                                            <li><a href="?a=faq"><img src={features} />FEATURES</a></li>
                                            <li><a href="?a=support"><img src={team} />TEAM</a></li>
                                            <li><a href="?a=faq"><img src={team} />CONTACT US</a></li>
                                            <li><a href="?a=support"><img src={registration} />REGISTRATION</a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </header>
                            <div className="header_main">
                                <h2>Welcome to procoin</h2>
                                <h1>NEW GENERATION <br /><span>TO EVERYONE</span></h1>
                                <h3><img src={line} />INVESTMENT PLATFORM</h3>
                                <p>Our Team Specializes In Investing In The Most Relevant Investment Instruments.</p>
                                <div className="header_btn">
                                    <ul>
                                        <li><a>Get Started</a></li>
                                        <li><a>Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}