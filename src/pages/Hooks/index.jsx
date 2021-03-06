import React, { useState } from 'react';
function Example(){
    const [ count , setCount ] = useState(0);   //数组结构
    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>Add</button>
            <button onClick={()=>{setCount(-1)}}>Clear</button>
        </div>
    )

}

 
export default Example;