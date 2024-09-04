import React, { useState } from 'react';
import './Skillspace.css';

const Skillspace = () => {
   const [flag, setFlag] = useState(0);

   function onClickEvent(x) {
       setFlag(x);
   }

   return (
     <div>
       <div className='skillspace-body'>
         <div className='skillspace-header'>
           <div className={flag === 1 ? 'skillspace-header-content' : 'skillspace-header-content-bg'}>
             <h1 onClick={() => onClickEvent(0)}>Quiz</h1>
           </div>
           <div className={flag === 0 ? 'skillspace-header-content' : 'skillspace-header-content-bg'}>
             <h1 onClick={() => onClickEvent(1)}>Code</h1>
           </div>
         </div>
         <h1 className='available'>Show available contests</h1>
       </div>
     </div>
   );
};

export default Skillspace;
