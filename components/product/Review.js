import React, {useState} from 'react';
import Link from "next/link";
import {postReviewReq} from "../../utils/request";

const Review = ({reviews, product}) => {
    const [review, setReview] = useState('')

    async function addReviewHandler() {
        await postReviewReq(product.id, review)
    }
    return (
        <div className='reviews'>
            <h2>Reviews</h2>
            <pre>
                    <code>
                        {JSON.stringify(reviews, null, 2)}
                    </code>
                  </pre>
            <input type="text" placeholder={'review'} value={review} onChange={(e) => {
                setReview(e.target.value)
            }}/>
            <Link href={'#'}>
                <button type={"submit"} onClick={addReviewHandler}>add review</button>
            </Link>

        </div>
    );
};

export default Review;