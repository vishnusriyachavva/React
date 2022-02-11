import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment.js'
import Buttons from './Buttons.js'


const App=()=>{
  return <Buttons><Comment /></Buttons>
}
  
  ReactDOM.render(
    <><App/>  </>
     
     ,document.getElementById('root')
  )
