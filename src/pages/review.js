import React from 'react';
import { graphql, Link } from "gatsby"
import Seo from "../components/Seo"

const ReviewPage = ({data:{allContentfulReview: {nodes: reviews}}}) => {
  return (
    <>
      <Seo title={'Отзывы'}/>
      <main>
        <section className={'projects-page'}>
          <div>
            {reviews.map( (review) => {
              return <div key={review.name} className="review-item">
                <h3>{review.name}</h3>
                <div className="review-data">
                  <h4>{review.city}</h4>
                  <h4>{review.date.slice(0, -12)}</h4>
                </div>
                <p>{review.review.review}</p>
                <Link to={'/contact'} className={'btn'}>Написать нам</Link>
              </div>
            })}
          </div>
        </section>
      </main>
    </>
  );
 }

export const query = graphql`
  {
    allContentfulReview {
      nodes {
        name
        review {
          review
        }
        city
        date
      }
    }
  }
`



export default ReviewPage;