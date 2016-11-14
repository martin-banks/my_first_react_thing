const React = require('react')
const globalstate = require('../globalstate')


/* es5 copmponent */
let Par = React.createClass({
	getInitialState: function(){
		return {
			intro: globalstate.intro
		}
	},
	render: function(){
		return <p>{this.state.intro}</p>
	}
})

/* es6 component */
class H1 extends React.Component{
	constructor(){
		super()
		this.state = {
			title: 	globalstate.title
		}
	}
	render(){
		return <h1>Global title {this.state.title}</h1>
	} 
}


let App = React.createClass({
	render: function(){
		return (
			<div>
				<H1 />
				<Par />
			</div>
		)
	}
})

module.exports = App