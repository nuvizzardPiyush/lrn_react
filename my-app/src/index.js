import React from "react";
import ReactDOM from 'react-dom/client';

function Greeting(){
    return <h1>YOyoyo</h1>;
}    
export default Greeting;

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Greeting/>)