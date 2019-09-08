import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addFoodItem } from './reduxStore';

export class ItemPickerItem extends React.PureComponent {

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

ItemPickerItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    dietaries: PropTypes.array,
    addFoodItem: PropTypes.func.isRequired,
};

ItemPickerItem.defaultProps = {
    dietaries: [],
};

const mapDispatchToProps = {
    addFoodItem,
};

export default connect(() => ({}), mapDispatchToProps)(ItemPickerItem);