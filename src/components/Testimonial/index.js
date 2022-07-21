import { useState } from "react"
import cus_img from '../../images/cus_img.png'
import star from '../../images/star.png'

export const Testimonial = () => {

    const [testimonial, setTestimonial] = useState([
        {
            feedback: "Excellent! I received my withdrawal in just a click, 100% reliable! I Highly recommend it. 5 Stars.Great Program.",
            profileImg: cus_img,
            ratingImg: star,
            name: "Segoe Print",
            designation: "Freelance"
        },
        {
            feedback: "Excellent! I received my withdrawal in just a click, 100% reliable! I Highly recommend it. 5 Stars.Great Program.",
            profileImg: cus_img,
            ratingImg: star,
            name: "Segoe Print",
            designation: "Freelance"
        },
        {
            feedback: "Excellent! I received my withdrawal in just a click, 100% reliable! I Highly recommend it. 5 Stars.Great Program.",
            profileImg: cus_img,
            ratingImg: star,
            name: "Segoe Print",
            designation: "Freelance"
        }
    ])

    return (
        <div className="feedback-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="feedback_main">
                            <h3>Testimonial</h3>
                            <h1>We Are Very Happy To Get Our Client’s Feedback</h1>
                            <div className="customer_carousel owl-carousel owl-theme">
                                {testimonial.map(item => {
                                    const { feedback, profileImg, ratingImg, name, designation } = item || {};
                                    return (<div className="customer_feedback_block">
                                        <div className="box slide">
                                            <p>{feedback}</p>
                                            <h3><img src={profileImg} /><span> <img className="right" src={ratingImg} /></span></h3>
                                            <h4>{name}</h4>
                                            <h5>{designation}</h5>
                                        </div>
                                    </div>)
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}