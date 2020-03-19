import React, { useState ,useEffect} from 'react'

function EffectOne() {
    const[count,setCount]=useState(0)

    useEffect(()=>{
        document.title=`You clicked ${count} times`
    })
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>click{count}Times</button>
            
        </div>
    )
}

export default EffectOne
