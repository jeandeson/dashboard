import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import axios from "../plugins/axios";

const CustomersContext = createContext({});

const CustomersProvider = ({ children }) => {
    const [customers, setCustomers] = useState([])
    useEffect(() => {
        (async function fetchCustomers() {
            const { data } = await axios.get("/customers")
            setCustomers(data)
        })()
    }, [])

    return (
        <CustomersContext.Provider value={{ customers }}>
            {children}
        </CustomersContext.Provider>
    )
}
const useCustomersContext = () => useContext(CustomersContext)

export { useCustomersContext, CustomersProvider };