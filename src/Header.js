import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.PureComponent {
    render() {
        const { count, summary } = this.props;
        return (
            <div className="menu-summary">
                <div className="container">
                    <div className="row">
                        <div className="col-6 menu-summary-left">
                            <span>{count} items</span>
                        </div>
                        <div className="col-6 menu-summary-right">
                            {Object.keys(summary).map((sumItem) => (
                                <span key={sumItem}>{summary[sumItem]}x
                                    <span className="dietary">{sumItem}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

Header.propTypes = {
    count: PropTypes.number.isRequired,
    summary: PropTypes.object.isRequired,
};

function getDietarySummary(foodItems) {
    let breakdown = {};
    for (let item of foodItems) {
        for (let dietaryItem of item.dietaries) {
            breakdown[dietaryItem] = breakdown[dietaryItem] !== undefined ?
                breakdown[dietaryItem] + 1 : 1;
        }
    }
    return breakdown;
}

const mapStateToProps = ({ selectedItems }) => ({
    count: selectedItems.length,
    summary: getDietarySummary(selectedItems)
});

export default connect(mapStateToProps, {})(Header);