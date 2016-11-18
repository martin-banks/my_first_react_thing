const React = require('react')
const ReactDOM = require('react-dom')


const App = require('./components/App')

ReactDOM.render(
	<App />,
	document.getElementById('app')
)


import {Editor, EditorState, RichUtils, stateToHTML, convertToRaw, convertFromRaw } from 'draft-js'

import type {RawDraftContentBlock} from 'RawDraftContentBlock';
import type {RawDraftEntity} from 'RawDraftEntity';


import type {RawDraftContentState} from 'RawDraftContentState'

