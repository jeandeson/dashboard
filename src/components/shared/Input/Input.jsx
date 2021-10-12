import React, { useRef, useState, memo } from 'react';
import {AiOutlineSearch} from 'react-icons/ai'
import { useCustomersContext } from '../../../contexts/customersContext';
import {useHistory} from 'react-router-dom'

import "./input.css"

const SearchInfo = ({customer}) => {

  const history = useHistory()
  // const {customers} = useCustomersContext()
  // const { id } = useParams()
  
  // useEffect(()=> {
  //   const findCustomer = () => {
  //     const handleCustomer = customers.find((customer) => customer.id === id)
  //   }
  // }, [])

  const toCustomerDetails = () => {
    history.push(`customerDetails/${customer.id}`)
  }
  return ( 
      <div onClick={toCustomerDetails} className="search-box-info">
          <img src={customer.image} alt="avatar"/>
          <span>{customer.name}</span>
      </div>
   );
}

const Input = () => {
  const [search, setSearch] = useState('')
  const searchRef = useRef(null);
  const { customers } = useCustomersContext()
  
  const [filtreCustomers, setFiltreCustomers] = useState(customers)
  
  const [searchValue, setSearchValue] = useState("")

  const input = document.getElementsByName("input")

  const lowerSearch = searchValue.toLowerCase()

  const handleFilter = event => {
    setSearchValue(event.target.value)
    const handlefiltre = customers.filter((customer) => customer.name.toLowerCase().includes(lowerSearch))
    setFiltreCustomers(handlefiltre)
  }

  const removeSearch = event => {
    event.stopPropagation();
    if (event.target !== input) {
      setSearch("");
      document.body.removeEventListener("click", removeSearch);
    }
  }

  const handleSearch = (e) => {
    e.stopPropagation();
    if(e.type === "click"){
      setSearch("show-search")
      setTimeout(() => {
        document.body.addEventListener("click", removeSearch);
      }, 500);
    }
  }

  return ( 

    <div className="input-container">
      <AiOutlineSearch/>
      <input value={searchValue} onChange={handleFilter} onClick={handleSearch} placeholder="Search here" className="input" type="text" />
      <div ref={searchRef} className={`${search} search-box`}>
        {filtreCustomers.map((customer, index)=> <SearchInfo key={index} customer={customer}/>)}
      </div>
    </div>

   );
}
 
export default memo(Input);