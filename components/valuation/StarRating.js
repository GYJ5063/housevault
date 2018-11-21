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
                <div style={styles.outerContainerStyling}>
                    <StarRatingComponent
                        caption="Confidence"
                        name="confidence"
                        editing={false}
                        starCount={5}
                        value={this.props.rating}
                        renderStarIcon={() => <span><i className="fa fa-home" style={styles.iconStyling}></i></span>}/>
                </div>
            </div>
        );
    }
}
const styles = {
    outerContainerStyling: {
        fontSize: 15
    },
    iconStyling: {
        fontSize: 36
    }
};

export default StarRating;