import React, { useState } from "react";

function Counter(){
    const [count] = useState(0)
    return(
        <>
        <h1>Count-{count}</h1>
        <button>+</button>
        </>
    )   
}
export default Counter