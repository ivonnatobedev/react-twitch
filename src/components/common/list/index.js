import React from 'react';

export default props => {
  return (
    <div>
      {
        props.data.length > 1
          ?
        props.children
          :
        <div>
          {props.emptyMsg}
        </div>
      }
    </div>
  );
};