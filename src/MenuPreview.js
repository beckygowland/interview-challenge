import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MenuPreviewItem from './MenuPreviewItem';

class MenuPreview extends React.PureComponent {

    render() {
        const { selectedItems } = this.props;
        return (
            <div className="col-8">
                <h2>Menu preview</h2>
                <ul className="menu-preview">
                    {selectedItems.map((item) => (
                        <MenuPreviewItem
                            key={item.id + ':' + item.position}
                            {...item} />
                    ))}
                </ul>
            </div>
        )
    }
};

MenuPreview.propTypes = {
    selectedItems: PropTypes.array.isRequired,
};

const mapStateToProps = ({ selectedItems }) => {
    // we need a unique key for each menu item, and since the
    // same menu item can be added multiple times, the position/order
    // will be calculated in relation to the items with the same id
    let idCount = {};
    return {
        selectedItems: selectedItems.map((item) => {
            idCount[item.id] = idCount[item.id] !== undefined ? 
                idCount[item.id] + 1 : 0;
            return {
                ...item,
                position: idCount[item.id],
            }
        })
    }
};

export default connect(mapStateToProps, {})(MenuPreview);