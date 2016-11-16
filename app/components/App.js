const React = require('react')

const globalstate = require('../globalstate')
const atoms = require('./atoms')

const Par = atoms.Par
const Title = atoms.Title
const CardContainer = atoms.CardContainer
const BodyText = atoms.BodyText
const TextInput = require('./userInput/TextInput').TextInput
const TextArea = require('./userInput/TextInput').TextArea

import MyEditor from './Editor'


/*
let OldApp = React.createClass({
	getInitialState: ()=>{
		return {
			title: "Enter your title",
			text: "Enter some text"
		}
	},

	changeText: function(newText){
		this.setState({
			text: newText
		})
	},

	updateTitle: function(newValue){
		this.setState({
			title: newValue
		})
	},

	render: function(){
		let contentToRender = (
			<div>
				<section id="editor">
					<MyEditor />
					<TextInput handleChange={this.updateTitle}/>
					<TextArea handleChange={this.changeText}/>
				</section>

				<section id="preview">
					<Title title={this.state.title} />
					<Par  text={this.state.text} />
				</section>
			</div>
		)
		return <div>{contentToRender}</div>
	}
})
*/



let App = React.createClass({
	getInitialState: ()=>{
		return {
			title: "Enter your title",
			text: "Enter some text"
		}
	},

	changeText: function(newText){
		this.setState({
			text: newText
		})
	},

	updateTitle: function(newValue){
		this.setState({
			title: newValue
		})
	},

	render: function(){
		let contentToRender = (
			<div>
				<section id="editor">
					<MyEditor />
				</section>

				<section id="preview">
					<Title title={this.state.title} />
					<Par  text={this.state.text} />
				</section>
			</div>
		)
		return <div>{contentToRender}</div>
	}
})


module.exports = App