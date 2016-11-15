const React = require('react')

let TextInput = React.createClass({
	propTypes:{
		handleChange: React.PropTypes.func.isRequired
	},

	getInitialState: function(){
		return {
			value: ""
		}
	},
	sendChange: function(e){
		let newValue = e.target.value
		this.props.handleChange(newValue)
	
	},
	render: function(){
		return <input onChange={this.sendChange}/>
	}

})


let TextArea = React.createClass({
	propTypes:{
		handleChange: React.PropTypes.func.isRequired
	},

	getInitialState: function(){
		return {
			value: ""
		}
	},
	sendChange: function(e){
		let newValue = e.target.value
		this.props.handleChange(newValue)
	
	},
	render: function(){
		return <textarea onChange={this.sendChange}></textarea>
	}
})


module.exports = {
	TextInput,
	TextArea
}