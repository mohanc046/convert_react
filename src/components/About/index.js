import focus from '../../images/focus.png'
import high_level from '../../images/high_level.png'
import hand from '../../images/hand.png'

export const About = () => {
    return (
        <div class="about-bg">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="about_main">
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div class="about_left">
                                    <h3>About PROCOIN.</h3>
                                    <h1>The Best Choice For Your <br />Successful Business</h1>
                                    <p>Our company specializes in investing in traffic arbitrage, which has become an integral part of our life. We saw the prospect for the development of this kind of activity 10 years ago, at the stage of inception, and that was our right decision!</p>
                                    <div class="about_lorem">
                                        <img src={focus} />
                                        <h2>Focused On Industries</h2>
                                        <p>Lorem Ipsum es simplemente el texto de relleno de laseither nor .</p>
                                    </div>
                                    <div class="about_lorem">
                                        <img src={high_level} />
                                        <h2>High Level Knowledge</h2>
                                        <p>Lorem Ipsum es simplemente el texto de relleno de laseither nor .</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div class="about_right">
                                    <img src={hand} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}