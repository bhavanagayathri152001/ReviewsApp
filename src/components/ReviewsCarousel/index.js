import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReviewId: 0}

  getReview = () => {
    const {activeReviewId} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[
      activeReviewId
    ]

    return (
      <div className="reviews-container">
        <h1 className="heading">Reviews</h1>
        <img className="profile-image" alt={username} src={imgUrl} />
        <p className="username">{username}</p>
        <p className="description">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onClickLeftArrow = () => {
    const {activeReviewId} = this.state
    if (activeReviewId > 0) {
      this.setState(prevState => ({
        activeReviewId: prevState.activeReviewId - 1,
      }))
    }
  }

  onClickRightArrow = () => {
    const {activeReviewId} = this.state
    const {reviewsList} = this.props
    if (activeReviewId < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewId: prevState.activeReviewId + 1,
      }))
    }
  }

  render() {
    return (
      <div className="bg-container">
        <div className="carousel-container">
          <button
            type="button"
            className="button"
            onClick={this.onClickLeftArrow}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>
          {this.getReview()}
          <button
            type="button"
            className="button"
            onClick={this.onClickRightArrow}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
