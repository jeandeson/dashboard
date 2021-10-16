import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import axios from "../plugins/axios";

const CustomersContext = createContext({});

const CustomersProvider = ({ children }) => {
    const [customers, setCustomers] = useState([])
    const [recentsCustomers, setRecentsCustomers] = useState([])

    useEffect(() => {
        (async function fetchCustomers() {
            const { data } = await axios.get("/customers")
            setCustomers(data)
            setRecentsCustomers(data.slice(data.length - 6, data.length))
        })()
    }, [])

    return (
        <CustomersContext.Provider value={{ customers, recentsCustomers }}>
            {children}
        </CustomersContext.Provider>
    )
}
const useCustomersContext = () => useContext(CustomersContext)

export { useCustomersContext, CustomersProvider };