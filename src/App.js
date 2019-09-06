import React from 'react';
import './App.css';
import Header from './Header';
import ItemPicker from './ItemPicker';
import MenuPreview from './MenuPreview';

export default () => (
  <div className="wrapper">
    <Header />
    <div className="container menu-builder">
      <div className="row">
        <ItemPicker />
        <MenuPreview />
      </div>
    </div>
  </div>
);
