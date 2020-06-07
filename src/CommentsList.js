import React, { useState } from 'react';

function CommentsList() {

  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  function changeInputTextHandler(event) {
    setCommentText(event.target.value);
  }

  function submitFormHandler() {
    if(!commentText) return;
    setComments(previous => {
      return [...previous, commentText];
    });
    setCommentText('');
  }

  return ( 
    <>
      <h1>Comments Form</h1>
      <form>
        <input type='text' name='comment' value={commentText} onChange={changeInputTextHandler} />
        <input type='button' value='Comment' onClick={submitFormHandler} />
      </form>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </>
  );

}

export default CommentsList;