import React, { Component } from 'react'
export default class Header extends Component {
constructor(props) {
super(props)
this.state = {
favoritecolor:"red"
}
}
render() {
return (
<div>
<h1>My Favorite Color is {this.state.favoritecolor}</h1>
</div>
)
}
}