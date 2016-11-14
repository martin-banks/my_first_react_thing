const React = require('react')

let Par = React.createClass({
	render: ()=>{
		return <p>Some text in here blah blah lbha</p>
	}
})

let H1 = React.createClass({
	render: ()=>{
		return <h1>Hello World</h1>
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