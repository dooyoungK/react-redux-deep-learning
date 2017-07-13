import React, { Component } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}



