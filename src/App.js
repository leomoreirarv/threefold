import React from 'react';
import CommentsList from './CommentsList';
import List from './List';


function App() {
  return (
    <>
    <CommentsList />
    <hr/>
    <List items={['A', 'B', 'C', 'D']}/>
    </>
  )
}

export default App;
