import { useState } from 'react'
import profit from '../../images/profit.png'
import duration from '../../images/duration.png'
import principal from '../../images/principal.png'

export const PricePlan = () => {

    const [activePlan, setActivePlan] = useState(0);

    const [totalPlan, setTotalPlan] = useState([
        {
            title: "Plan 1",
            totalDays: "250%",
            plans: [
                {
                    img: profit,
                    title: "Total Profit",
                    value: "600%"
                },
                {
                    img: duration,
                    title: "Deposit duration",
                    value: "35 Days"
                },
                {
                    img: duration,
                    title: "Deposit Range",
                    value: "100$ - 1000$"
                },
                {
                    img: principal,
                    title: "Principal Return",
                    value: "Yes"
                }
            ]
        },
        {
            title: "Plan 2",
            totalDays: "350%",
            plans: [
                {
                    img: profit,
                    title: "Total Profit",
                    value: "600%"
                },
                {
                    img: duration,
                    title: "Deposit duration",
                    value: "35 Days"
                },
                {
                    img: duration,
                    title: "Deposit Range",
                    value: "100$ - 1000$"
                },
                {
                    img: principal,
                    title: "Principal Return",
                    value: "Yes"
                }
            ]
        },
        {
            title: "Plan 3",
            totalDays: "450%",
            plans: [
                {
                    img: profit,
                    title: "Total Profit",
                    value: "600%"
                },
                {
                    img: duration,
                    title: "Deposit duration",
                    value: "35 Days"
                },
                {
                    img: duration,
                    title: "Deposit Range",
                    value: "100$ - 1000$"
                },
                {
                    img: principal,
                    title: "Principal Return",
                    value: "Yes"
                }
            ]
        },
        {
            title: "Plan 4",
            totalDays: "550%",
            plans: [
                {
                    img: profit,
                    title: "Total Profit",
                    value: "600%"
                },
                {
                    img: duration,
                    title: "Deposit duration",
                    value: "35 Days"
                },
                {
                    img: duration,
                    title: "Deposit Range",
                    value: "100$ - 1000$"
                },
                {
                    img: principal,
                    title: "Principal Return",
                    value: "Yes"
                }
            ]
        },
        {
            title: "Plan 5",
            totalDays: "650%",
            plans: [
                {
                    img: profit,
                    title: "Total Profit",
                    value: "600%"
                },
                {
                    img: duration,
                    title: "Deposit duration",
                    value: "35 Days"
                },
                {
                    img: duration,
                    title: "Deposit Range",
                    value: "100$ - 1000$"
                },
                {
                    img: principal,
                    title: "Principal Return",
                    value: "Yes"
                }
            ]
        },
        {
            title: "Plan 6",
            totalDays: "750%",
            plans: [
                {
                    img: profit,
                    title: "Total Profit",
                    value: "600%"
                },
                {
                    img: duration,
                    title: "Deposit duration",
                    value: "35 Days"
                },
                {
                    img: duration,
                    title: "Deposit Range",
                    value: "100$ - 1000$"
                },
                {
                    img: principal,
                    title: "Principal Return",
                    value: "Yes"
                }
            ]
        },
        {
            title: "Plan 7",
            totalDays: "850%",
            plans: [
                {
                    img: profit,
                    title: "Total Profit",
                    value: "600%"
                },
                {
                    img: duration,
                    title: "Deposit duration",
                    value: "35 Days"
                },
                {
                    img: duration,
                    title: "Deposit Range",
                    value: "100$ - 1000$"
                },
                {
                    img: principal,
                    title: "Principal Return",
                    value: "Yes"
                }
            ]
        },
        {
            title: "Plan 8",
            totalDays: "950%",
            plans: [
                {
                    img: profit,
                    title: "Total Profit",
                    value: "600%"
                },
                {
                    img: duration,
                    title: "Deposit duration",
                    value: "35 Days"
                },
                {
                    img: duration,
                    title: "Deposit Range",
                    value: "100$ - 1000$"
                },
                {
                    img: principal,
                    title: "Principal Return",
                    value: "Yes"
                }
            ]
        }
    ])

    const isActive = (position) => {
        return activePlan === position
    }

    return (
        <div className="plan-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="plan_main">
                            <h1>Choose&nbsp;<span>Pricing Plans&nbsp;</span>Which <br />Suits Your Needs.</h1>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="plan_left">
                                    {totalPlan.map((item, index) => {
                                        const { title = "", totalDays = "", plans = [] } = item || {};
                                        return <div id={`${title}${index}`} className={isActive(index) ? "active" : "tabcontent"}>
                                            <h4>{title}</h4>
                                            <h1>{totalDays}<span>Daily</span></h1>
                                            {plans.map(individualPlan => <div className="plan_head">
                                                <img src={individualPlan.img} />
                                                <p>{individualPlan.title}:<span>{individualPlan.value}</span></p>
                                            </div>
                                            )}
                                        </div>
                                    })}
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="plan_right">
                                    <h1>Select your  Investment Plan</h1>
                                    <div className="tab">
                                        <ul>
                                            {totalPlan.map((item, index) => {
                                                return (
                                                    <li>
                                                        <a
                                                            className={isActive(index) ? "tablinks active" : "tablinks"}
                                                            onClick={() => setActivePlan(index)}
                                                            id={item.title}>
                                                            {item.title}
                                                        </a>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                    <div className="plan_btn">
                                        <a>Invest Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}