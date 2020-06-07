import React, { useState, useEffect } from 'react';

function List(props) {
  const [ list, setList ] = useState([]);
  
  useEffect(() => {
    setList(previous => {
      return [...previous, ...props.items]
    });
  }, [props.items]);

  function listItemClickHandler(index) {
    const listCopy = [...list];
    listCopy.splice(index, 1);
    listCopy.unshift(list[index]);
    setList(listCopy);
  }

  return (
    <>
    <h1>List Order</h1>
    <ul>
      {list.map((item, index) => (
        <li key={index} onClick={listItemClickHandler.bind(this, index)}>{item}</li>
      ))}
    </ul>
    </>
  );
}

export default List;