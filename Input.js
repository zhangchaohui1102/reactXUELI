import React from 'react';

const Input= (props)=>{
    const btns = [1,2,3,4,5];
    return <div>
        {
            btns.map(
              (item)=>(
                <button 
                  key={item}
                  onClick={()=>props.getData(item)}
                >
                  {item}
                </button>
            ))
        }
    </div>
}
export default Input;