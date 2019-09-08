import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class Header extends React.PureComponent {
    render() {
        const { count, summary } = this.props;
        return (
            <div className="menu-summary">
                <div className="container">
                    <div className="row">
                        <div className="col-6 menu-summary-left">
                            <span id="count">{count} items</span>
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

export const mapStateToProps = ({ selectedItems, summary }) => ({
    count: selectedItems.length,
    summary,
});

export default connect(mapStateToProps, {})(Header);