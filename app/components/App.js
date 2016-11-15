const React = require('react')
const globalstate = require('../globalstate')
const atoms = require('./atoms')

const Par = atoms.Par
const Title = atoms.Title
const CardContainer = atoms.CardContainer





let App = React.createClass({
	getInitialState: ()=>{
		return {
			title: 'foo',
			text: 'bar'
		}
	},
	changeText: function(){
		this.setState(globalstate)
	},
	render: function(){
		console.log(this.state)
		return (
			<div>
				<h1 onClick={this.changeText}>
					{this.state.title}
				</h1>
				<Par 
					text={this.state.text} 
					handleclick={this.changeText} 
				/>

			</div>
		)
	}
})

module.exports = App