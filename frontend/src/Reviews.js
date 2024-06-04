import React from 'react';
import './Reviews.css';
import profilePic from './defaultpfp.jpg';

function Review({ quote, author, title }) {
  return (
    <div className="review-block">
      <p className="quote"><i>❝ {quote}</i></p>
      <div className="author-info">
        <img src={profilePic} alt={author} />
        <div>
          <h4>{author}</h4>
          <p className="title">
            <i>
              <b>{title}</b>
            </i>
          </p>
        </div>
      </div>
    </div>
  );
}

function Reviews() {
  const reviews = [
    { quote: "Charming establishment with discreet and charming hosts, too. We really liked it. I recommend it.", author: "Michelle", title: "Exceptional" },
    { quote: "Very nice house, cozy. Great grounds much appreciated by all, specially by our little ones. Hosts really very nice, very discreet.", author: "Lae", title: "Little Gem!" },
    { quote: "We were there for a few days but we really liked it. Nice environment too. Delicious food. Fine spacious holiday home with a fantastic garden for the dog.", author: "Robert", title: "Very friendly welcome and very helpful" },
    { quote: "The owners are very friendly and welcoming, available at any moment.", author: "Janick", title: "Very Pleasant Stay!" },
    { quote: "Lewis and Nelson are great hosts who go out of their way to make sure that we feel at home the best. We will keep a wonderful memory of our stay at home and will return with great pleasure.", author: "Sophie", title: "A little piece of paradise!" },
    { quote: "Very good!", author: "Veronique", title: "Very good" },
  ];

  return (
    <section className="reviews-section">
      <h2>Read what our customers say</h2>
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <Review key={index} {...review} />
        ))}
      </div>
    </section>
  );
}

export default Reviews;
