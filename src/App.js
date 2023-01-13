import React from 'react';
import {Tree} from 'react-tree-graph';
import {data} from './data';
import 'react-tree-graph/dist/style.css'
import './App.css';

function App() {
  return (
    <Tree
	data={data}
	height={900}
	width={500}/>
  );
}

export default App;