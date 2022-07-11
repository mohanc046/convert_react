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

            <div class="top-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="top_box">
                                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div class="top_left">
                                        <img src={logo} />
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div class="top_right">
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

            <div class="header-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <header>
                                <nav class="navbar navbar-inverse">
                                    <div class="navbar-header">
                                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                        </button>
                                    </div>
                                    <div class="collapse navbar-collapse" id="myNavbar">
                                        <ul class="nav navbar-nav navbar-right">
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
                            <div class="header_main">
                                <h2>Welcome to procoin</h2>
                                <h1>NEW GENERATION <br /><span>TO EVERYONE</span></h1>
                                <h3><img src={line} />INVESTMENT PLATFORM</h3>
                                <p>Our Team Specializes In Investing In The Most Relevant Investment Instruments.</p>
                                <div class="header_btn">
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