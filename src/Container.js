import React, { Component } from 'react'
import Clock from './Clock';
export default class Container extends Component {
constructor(props) {
super(props);
this.state = {show: true};
}
remClock = () => {
this.setState({show: false});
}
render() {
let myclock;
if (this.state.show) {
myclock = <Clock />;
};
return (
<div>
{myclock}
<button type="button" onClick={this.remClock}>Remove Clock </button>
</div>
);
}
}


