import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addFoodItem } from './reduxStore';

class Item extends React.PureComponent {

    addToMenu = () => {
        const { id, name, dietaries, addFoodItem } = this.props;
        addFoodItem({id, name, dietaries})
    }

    render() {
        const { name, dietaries } = this.props;
        return (
            <li className="item" onClick={this.addToMenu}>
                <h2>{name}</h2>
                <p>
                    {dietaries.map((dietary) =>
                        <span key={dietary} className="dietary">{dietary}</span>
                    )}
                </p>
            </li>
        );
    }
}

Item.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    dietaries: PropTypes.array,
    addFoodItem: PropTypes.func.isRequired,
};

Item.defaultProps = {
    dietaries: [],
};

const mapDispatchToProps = {
    addFoodItem,
};

export default connect(() => ({}), mapDispatchToProps)(Item);