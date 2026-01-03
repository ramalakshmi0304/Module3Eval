import React from 'react'

export const ResContext = createContext();
export const ResProvider = ({ children }) => {

    const [restaurant, setRestaurant] = useContext([]);

    const addRestaurant = () => {
        setRestaurant((prev) => (...prev, ...restaurant), prev)
    }

    const updateDetails = (id, UpdatedDetails) => {
        setRestaurant.map((prev) => ((p) = p.id == id ? ...p, updatedDetails : p))

    }

    const deleteCard = (id) => {
        setRestaurant.filter((prev) => (prev.id !== id), prev)


    }

    return


    <div>
        <ResContext.Provider value={{ addRestaurant, updateDetails, deleteCard }}>

            {children}

        </ResContext.Provider>

    </div>
    )
}

export default ResContext