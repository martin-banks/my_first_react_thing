import React from 'react'
import {Editor, EditorState, RichUtils, stateToHTML, convertToRaw, convertFromRaw } from 'draft-js'

import type {RawDraftContentBlock} from 'RawDraftContentBlock';
import type {RawDraftEntity} from 'RawDraftEntity';


const BLOCK_TYPES = [
	{label: 'H1', style: 'header-one'},
	{label: 'H2', style: 'header-two'},
	{label: 'H3', style: 'header-three'},
	{label: 'H4', style: 'header-four'},
	{label: 'H5', style: 'header-five'},
	{label: 'H6', style: 'header-six'},
	{label: 'Blockquote', style: 'blockquote'},
	{label: 'UL', style: 'unordered-list-item'},
	{label: 'OL', style: 'ordered-list-item'},
	{label: 'Code Block', style: 'code-block'},
];
const BlockStyleControls = (props) => {
  const {editorState} = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map((type) =>
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  );
};
// Custom overrides for "HEADER" style.
const styleMap = {
	HEADER: {
		color: 'rgba(255, 0, 0, 1)',
		fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
		fontSize: 24,
		lineHeight: '32px',
		marginBottom: '30px'	
	},

};


function myBlockStyleFn(contentBlock) {
  const type = contentBlock.getType();
  if (type === 'blockquote') {
    return 'superFancyBlockquote';
  }
}





class Previewer extends React.Component {
	constructor(props){
		super(props)
		this.handleText = this.handleText.bind(this)

	}

	handleText(){
		return this.props.rawdata.blocks.map((block, i)=>{
			return <p key={i} >{block.text}</p>
		})
	}

	render(){
		return (
			<section id="preview">
				<p>Preview</p>
				{this.props.rawdata.blocks.map((block, i)=>{
					return <div className={block.type} key={block.key}>{block.text}</div>
				})}
			</section>
		)
	}
}

	

class MyEditor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {editorState: EditorState.createEmpty()};
		this.onChange = (editorState) => this.setState({editorState});
		this.handleKeyCommand = this.handleKeyCommand.bind(this);
	}

	handleKeyCommand(command){
		const newState = RichUtils.handleKeyCommand(this.state.editorState, command)
		if (newState){
			this.onChange(newState);
			return 'handled'
		} 
		return 'not-handled'
	}

	_onBoldClick(){
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'))
	}
	_onItalicClick(){
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'))
	}
	_onHeaderClick(){
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'HEADER'))
	}
		_onQuoteClick(){
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, myBlockStyleFn))
	}

	_toggleInlineStyle(inlineStyle) {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle));
	}

	_toggleBlockType(blockType) {
    this.onChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        blockType
      )
    );
  }


	render() {
		const {editorState} = this.state;
		let cnv = convertToRaw(editorState.getCurrentContent())
		/*console.log(cnv)*/
		
		return (
			<div>
				<p>Inline styles</p>
				<button onClick = {this._onBoldClick.bind(this)}>B</button>
				<button onClick = {this._onItalicClick.bind(this)}>I</button>
				<br/>
				<p>Block styles</p>
				<BlockStyleControls
					editorState={editorState}
					onToggle={this._toggleBlockType.bind(this)}
				/>

				<Editor 
					customStyleMap = {styleMap}
					blockStyleFn={myBlockStyleFn}
					editorState={editorState} 
					handleKeyCommand = {this.handleKeyCommand}
					onChange={this.onChange} 
					placeholder = 'Write something'
					readOnly = {false}
				/>
				<Previewer rawdata={cnv} />
			</div>
		)

	}


}


class StyleButton extends React.Component {
	constructor() {
		super();
		this.onToggle = (e) => {
			e.preventDefault();
			this.props.onToggle(this.props.style);
		};
	}

	render() {
		let className = 'RichEditor-styleButton';
		if (this.props.active) {
			className += ' RichEditor-activeButton';
		}

		return (
			<button className={className} onMouseDown={this.onToggle}>
				{this.props.label}
			</button>
		);
	}
}




var INLINE_STYLES = [
	{label: 'Bold', style: 'BOLD'},
	{label: 'Italic', style: 'ITALIC'},
	{label: 'Underline', style: 'UNDERLINE'},
	{label: 'Header', style: 'HEADER'},
];

const InlineStyleControls = (props) => {
	var currentStyle = props.editorState.getCurrentInlineStyle();
	return (
		<div className="RichEditor-controls">
			{INLINE_STYLES.map(type =>
				<StyleButton
					key={type.label}
					active={currentStyle.has(type.style)}
					label={type.label}
					onToggle={props.onToggle}
					style={type.style}
				/>
			)}
		</div>
	);
};




module.exports = MyEditor


export type RawDraftContentState = {
  blocks: Array<RawDraftContentBlock>,
  entityMap: {[key: string]: RawDraftEntity},
};