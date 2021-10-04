import Nav from "../components/home/Nav"
import DashBoard from "../components/home/dashBoard.jsx"
import Header from "../components/home/header/header"
import Loading from "../components/loading/Loading";
import Modal from "../components/home/modal/Modal";

import Axios from "axios"
import React, { useState, useEffect, useRef } from 'react';

const Home = () => {

  const [translate, setTranslate] = useState("");
  const [istTranslate, setIstTranslate] = useState(false);

  const [customers, setCustomers] = useState([]);
  const [orders, setOrders] = useState([]);

  const [infoCustomer, setInfoCustomer] = useState("");

  const [showModal, setShowModal] = useState("");
  const modalRef = useRef(null);
  
  useEffect(()=>{
    const fetchCustomers = async ()=>{
      const {data} = await Axios.get('http://localhost:3000/customers')
      setCustomers(data)
    }
    const fetchOrders = async ()=>{
      const {data} = await Axios.get('http://localhost:3000/orders')
      setOrders(data)
    }
    fetchCustomers()
    fetchOrders()
  }, [])

  const handleShowModal = (customer) => {
    setShowModal("show")
    setInfoCustomer(customer)
  }

  const closeModal = () => {
    setShowModal("")
  };


  const handleTranslate = () => {
      if(istTranslate === false){
        setTranslate("translate")
        setIstTranslate(true)
      }
      else{
        setTranslate("")
        setIstTranslate(false)
      }
  }

  if(orders.length === 0){
    return   <Loading type={`spin`} color={`var(--blue)`}/>
  }
  return ( 
    <>
      <Modal closeModal={closeModal} infoCustomer={infoCustomer} modalRef={modalRef} showModal={showModal}/>
      <Nav translate={translate} handleTranslate={handleTranslate}/>
      <Header  translate={translate} handleTranslate={handleTranslate}/>
      <DashBoard handleShowModal={handleShowModal} orders={orders} customers={customers}/>
    </>
   );
}
 
export default Home;