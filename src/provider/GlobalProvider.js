import React,{ useState } from 'react';
import GlobalContext from '../context/globalContext';

const GlobalProvider = ({ children }) => {
    const intialStore = {
        isAuthenticated : false,
    }
    const [store, updateStore] = useState(intialStore)
    return (
        <GlobalContext.Provider value={{
            store,
            setAuthentication: (value) => {
                updateStore((prevState) => {
                    return { ...prevState, isAuthenticated: value }
                })
            }
        }} >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;