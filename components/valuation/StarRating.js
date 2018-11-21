import React from 'react';

import StarRatingComponent from 'react-star-rating-component';

class StarRating extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rating: 1,
            rating_custom_icon: 6,
            rating_half_star: 3.5,
            rating_empty_initial: 0
        };
    }

    render() {
        return (
            <div>
                <h4>Confidence Score</h4>
                <div style={{fontSize: 15}}>
                    <StarRatingComponent
                        name="app4"
                        editing={false}
                        starCount={5}
                        value={this.props.rating} />
                </div>
            </div>
        );
    }
}

export default StarRating;