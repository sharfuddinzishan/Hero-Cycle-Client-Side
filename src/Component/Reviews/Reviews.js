import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [loadingReview, setLoadingReview] = useState(false);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        setLoadingReview(false);
        axios.get('https://hero-cycle.herokuapp.com/reviews')
            .then(result => {
                if (result.data) {
                    setReviews(result.data)
                    setLoadingReview(true);
                }
            })
            .catch(() => { })
    }, [])
    return (
        <div className="bg-info">
            <div className='container p-3'>
                <h1 className="pb-2 border-bottom text-center text-center">
                    Reviews <span className="text-primary fw-bold">By Customers</span>
                </h1>
                {
                    !loadingReview && <> <div class="spinner-grow text-primary text-center" role="status">
                        <span class="visually-hidden">Loading Reviews</span>
                    </div>
                        <div class="spinner-grow text-primary text-center" role="status">
                            <span class="visually-hidden">Loading Reviews</span>
                        </div>
                    </>
                }
                <div className="row py-5">
                    {
                        loadingReview && reviews.map((review, index) => {
                            return < div className="col-12 col-sm-6 col-md-4">
                                <div class="card text-dark bg-light mb-3">
                                    <div class="card-header" style={{ border: '100px!important' }}>{review.userName}</div>
                                    <div class="card-body">
                                        <h5 class="card-title">{review.subject}</h5>
                                        <p class="card-text">{review.comment}.</p>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div >
        </div>
    );
};

export default Reviews;