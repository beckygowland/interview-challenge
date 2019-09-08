import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteFoodItem } from './reduxStore';

export class MenuPreviewItem extends React.PureComponent {

    delete = () => {
        const { id, position, deleteFoodItem } = this.props;
        deleteFoodItem(id, position)
    }

    render() {
        const { name, dietaries } = this.props;
        return (
            <li className="item">
                <h2>{name}</h2>
                <p>
                    {dietaries.map((dietary) =>
                        <span key={dietary} className="dietary">{dietary}</span>
                    )}
                </p>
                <button className="remove-item" onClick={this.delete}>x</button>
            </li> 
        );
    }
}

MenuPreviewItem.propTypes = {
    id: PropTypes.number.isRequired,
    position: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    dietaries: PropTypes.array,
    deleteFoodItem: PropTypes.func.isRequired,
};

MenuPreviewItem.defaultProps = {
    dietaries: [],
};

const mapDispatchToProps = {
    deleteFoodItem,
};

export default connect(() => ({}), mapDispatchToProps)(MenuPreviewItem);