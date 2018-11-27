import React from 'react';

import StarRatingComponent from 'react-star-rating-component';

class StarRating extends React.Component {
    constructor(props) {
        super(props);

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
                        starColor={this.props.starColor}
                        emptyStarColor={this.props.starBackground}
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
        fontSize: 32,
    }
};

export default StarRating;