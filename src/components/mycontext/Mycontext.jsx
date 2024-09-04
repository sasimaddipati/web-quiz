
import React, { createContext, useState } from 'react';
const MyContext = createContext();
const MyProvider = ({ children }) => {
    const [value, setValue] = useState("Hello, World!");
    const [crequiz,setcrequiz]=useState([]);
    const [crecontest,setcrecontest]=useState([]);
    const [upcoming,setupcoming]=useState([])
    return (
        <MyContext.Provider value={{upcoming,setupcoming,value, setValue ,crequiz,crecontest,setcrecontest,setcrequiz }}>
            {children}
        </MyContext.Provider>
    );
};

export { MyContext, MyProvider };
