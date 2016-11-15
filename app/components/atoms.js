const React = require('react')
let globalstate = require('../globalstate')

/* es5 copmponents */
const seconds = 1000





let Title = React.createClass({
	getInitialState: ()=>{
		return {
			title: globalstate.title
		}
	},

	updateheadline: function(){
		this.setState({
			title: 'I changed!'
		})
	},

	render: function(){
		return <h1 onClick={this.updateheadline}>
			{this.state.title}
		</h1>
	}
})



let Par = React.createClass({
	render: function(){
		return <p onClick={this.props.handleclick} >{this.props.text}</p>
	}
})



let CardContainer = React.createClass({
	render: function(){
		return (
			<div className="container-card">
				<Title />
				<Par />
			</div>
		)
	}
})



module.exports = {
	CardContainer,
	Title,
	Par
}