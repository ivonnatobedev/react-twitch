import React from 'react';

function withTitle(WrappedComponent, title) {
  return props => {
    return(
      <div>
        <h2 className="list-title">{title}</h2>
        <WrappedComponent
          {...props}
        />
      </div>
    );
  }
}

export default withTitle;