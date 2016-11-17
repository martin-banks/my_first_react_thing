"use strict"

const React = require('react')
let globalstate = require('../globalstate')

/* es5 copmponents */
const seconds = 1000





let Title = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired
	},

	getInitialState: function(){
		return {
			title: this.props.title
		}
	},

	updateheadline: function(){
		this.setState({
			title: `I changed! ${Math.random()}`
		})
	},

	render: function(){
		return <h1 onClick={this.updateheadline}>
			{this.props.title}
		</h1>
	}
})




let Crosshead = React.createClass({
	render: function(){
		return <h2>I'm a {this.props.title}</h2>
	}
})

let Par = React.createClass({
	propTypes: {
		text: React.PropTypes.string.isRequired
	},
	render: function(){
		return <p>{this.props.text}</p>
	}
})



let BodyText = React.createClass({

	createPars: function(){
		return this.props.text.map((par, index)=>{
			if(typeof par === 'string'){
				return <Par key={index} onClick={this.props.handleclick} text={par} />
			
			} else if (typeof par === 'object'){
				return Object.keys(par).map(obj=>{
					if(obj.toLowerCase() === 'crosshead'){
						return <Crosshead key={index} title={par[obj]} />
					}
				})
				
			}	
		})
	},
	render: function(){
		return <div>{this.createPars()}</div>
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
	BodyText,
	Par
}