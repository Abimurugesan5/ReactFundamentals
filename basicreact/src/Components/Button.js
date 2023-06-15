import React from 'react';

function MyComponent() {
  return (
    <div>
      <h1>Hello, JSX!</h1>
      <p>This is a paragraph.</p>
      <button onClick={() => console.log('Button clicked!')}>
        Click me
      </button>
    </div>
  );
}

export default MyComponent;