import React from 'react';
import './Reviews.css';
import profilePic from './defaultpfp.jpg';
import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation();

  const reviews = [
    { quote: t("review1"), author: t("author1"), title: t("title1") },
    { quote: t("review2"), author: t("author2"), title: t("title2") },
    { quote: t("review3"), author: t("author3"), title: t("title3") },
    { quote: t("review4"), author: t("author4"), title: t("title4") },
    { quote: t("review5"), author: t("author5"), title: t("title5") },
    { quote: t("review6"), author: t("author6"), title: t("title6") },
  ];

  return (
    <section className="reviews-section">
      <h2>{t('readReviews')}</h2>
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <Review key={index} {...review} />
        ))}
      </div>
    </section>
  );
}

export default Reviews;
