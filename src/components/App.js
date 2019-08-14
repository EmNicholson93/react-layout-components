import React, { PureComponent } from 'react';
import ColorPicker from './ColorPicker';
import ColorDisplay from './ColorFunc';

export default class App extends PureComponent {
  state = {
    color: '',
    count: 0
  }

  selectColor = color => {
    this.setColor({ color });
  }

  incrementCountHandler = () => {
    this.setState(state => ({ count: state.count + 1 }));
  }
  
  render() {
    return (
      <>
        <ColorPicker selectColor={ this.selectColor } count={ this.incrementCountHandler } />
        <ColorDisplay color={ this.state.color } />
        { this.state.count }
      </>
    );
  }
} 
