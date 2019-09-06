import React from 'react';
import PropTypes from 'prop-types';


class Item extends React.PureComponent {

    addToMenu = () => {
        const { id } = this.props;
        console.log('-------id ', id);
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
};

Item.defaultProps = {
    dietaries: []
};

export default Item;