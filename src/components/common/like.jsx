import React, { Component } from 'react';

const Like = (props) => {
  let heartClicked = "fa fa-heart";
  if(props.liked) heartClicked += "-o"
  return (
    <i
      onClick={props.onClick}
      style={{cursor: 'pointer'}}
      className={heartClicked}
      aria-hidden="true"
    />
  );
}
 
export default Like; 