import React from 'react';
import { ReactComponent as StarReview } from 'core/assets/images/star.svg';
import './styles.scss';

type Props = {
  user_name: string;
  text: string;
}

const ReviewCard = ({ user_name, text }: Props) => {
  return (
    <div className="row review-info">
      <StarReview className="review-star-image" />
      <p className="review-card-user-name">
        {user_name}
      </p>
      <h3 className="review-details-card review-details-text">
        {text}
      </h3>
    </div>
  )
}

export default ReviewCard;