import React, { useState } from 'react';
import './style2.css';

const useEffect = () => {
    const initialDate = 10;
    const [myNum, setMyNum] = useState(initialDate);
    return (
        <>
          <div className="center_div">
            <p>{myNum}</p>
            <div className="button2" onClick={()=>setMyNum(myNum+1)}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              INCR
            </div>
            
          </div>
        </>
      );
}

export default useEffect;
