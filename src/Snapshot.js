import React, { Component } from 'react'
export default class Snapshot extends Component {
constructor(props) {
super(props)
this.state = {
favoritecolor:"yellow"
}}
componentDidMount() {
setTimeout(() => {
this.setState({favoritecolor: "blue"})
}, 2000)
}
getSnapshotBeforeUpdate(prevProps, prevState) {
document.getElementById("div1").innerHTML =
"Before the update, the favorite was " + prevState.favoritecolor;
}
componentDidUpdate() {
document.getElementById("div2").innerHTML =
"The updated favorite is " + this.state.favoritecolor;
}
render() {
return (
<>
<h1>My Favorite Color is {this.state.favoritecolor}</h1>
<div id="div1"></div>
<div id="div2"></div>
</>
);
}
}