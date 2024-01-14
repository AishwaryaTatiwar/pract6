import React, { Component } from 'react'
export default class Header extends Component {
constructor(props) {
super(props)
this.state = {
favoritecolor:"yellow"
}
}
componentDidMount() {
setTimeout(() =>{
this.setState({favoritecolor:"blue"})
}, 3000)
}
render() {
return (
<div>
<h1>My Favorite Color is {this.state.favoritecolor}</h1>
</div>
)
}
}