import React, { Component } from 'react';

// const withClass = (WrappedComponent, className) => {
//   return (props) => (
//     <div className={className}>
//       <WrappedComponent {...props}/>
//     </div>
//   )
// };

const withClass = (WrappedComponent, className) => {
  const WithClass = class extends Component { // now it's possible to access lifecycle
    render () {
      return (
        <div className={className}>
          <WrappedComponent ref={this.props.forwardedRef} {...this.props}/>
        </div>
      )
    }
  }

  return React.forwardRef((props, ref) => {
    return <WithClass {...props} forwardedRef={ref} />
  });
};

export default withClass;