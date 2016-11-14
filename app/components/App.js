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