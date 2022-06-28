import React from "react";
import './home.css'
import img from './bg.png'
import user from './user-1.png'
import data from './data.json'

const Home = () => {
    return (
        <div className="home">
            <div className="container-fluid px-4">
                {/* ----------------------- TITLE SECCTION ------------------------- */}
                <div className="row title">
                    <h1>{data.title} </h1>
                    <div className="tagline">
                        <p>Multi-DayCourse </p>
                        <ion-icon name="help-circle-outline"></ion-icon>
                    </div>
                </div>

                <div className="row d-flex mt-5 justify-content-center">
                    {/* ----------------------- CONTENT SECCTION ------------------------- */}
                    <div className="col-6 col_1">
                        <p>{data.content}
                        </p>
                        <div className="testimonial">
                            <div className="user d-flex align-items-center ">
                                <img src={data.user_img} alt="pic" />
                                <p>Kimberly R Mosler</p>
                            </div>
                            <div className="rating">
                                <p className="stars">{data.star} <span className="star-rating">{data.review1}</span></p>
                                <p className="stars">{data.star} <span className="star-rating">{data.review2}</span>
                                </p>
                                <p id="learn">{data.total_reviews}</p>
                            </div>
                            <div className="btn_sec d-flex align-items-center  justify-content-space-between">
                                <button className="text-light d-flex justify-content-center align-items-center rounded-pill">See Class Schedule <ion-icon className="fw-bold" name="chevron-forward-outline"></ion-icon> </button>
                                <div className="save_btn d-flex fw-bold align-items-center">
                                    <ion-icon name="heart-outline"></ion-icon>
                                    <p >Save</p>
                                </div>
                                <div className="share_btn d-flex fw-bold align-items-center">
                                    <ion-icon className="fw-bold" name="arrow-redo-outline"></ion-icon>
                                    <p>Share</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ----------------------- IMAGES SECCTION ------------------------- */}
                    <div className="col-6 px-1">
                        <img src={img} width="700" height="450" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
