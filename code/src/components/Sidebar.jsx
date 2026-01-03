import React from 'react'

const Sidebar = () => {

    const [restaurantName, setRestaurantName] = useState("")
    const [address, setAddress] = useState("")
    const [type, setType] = useState("")
    const [parkingLot, setParkingLot] = useState("")

    const handleAdd={
        
    }


    return (


        <div>
            <h3><strong>Add Restaurant</strong></h3>

            <form action={handleAdd}>
                <input type="text" placeholder='Restaurant Name' value={restaurantName} onChange={(e) => setRestaurantName(e.target.value)} />
                <input type="text" placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} />

                <select value={type} onChange={(e) => (setType(e.target.value))}>
                    <option value="Rajasthani">Rajasthani</option>
                    <option value="South Indian">South Indian</option>
                    <option value="North Indian">North Indian</option>
                </select>

                <select value={parkingLot} onChange={(e) => setParkingLot(e.target.value)}>
                    <option value="parking yes">parking yes</option>
                    <option value="parking no">parking no</option>
                </select>
                <button type="add">Add Restaurant</button>

            </form>
        </div>
    )
}

export default Sidebar