import React from 'react'

export const ResContext = createContext();
export const ResProvider = ({ children }) => {

    const [restaurant, setRestaurnt] = useContext([]);

    const addRestaurant=()=>{
        setRestaurant.prev((prev)=>(...prev,...restaurant),prev)
    }




    return (


        <div>
            <ResContext.Provider value={{addRestaurant, updateDetails,deleteCard }}>

                {children}

            </ResContext.Provider>

        </div>
    )
}

export default ResContext