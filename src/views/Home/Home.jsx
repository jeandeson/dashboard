import axios from "../../plugins/axios"
import DashBoard from "../../components/home/Dashboard/DashBoard"
import Loading from "../../components/loading/Loading";
import Modal from "../../components/home/modal/Modal";
import React, { useState, useEffect, useRef } from 'react';
import { useCustomersContext } from "../../contexts/customersContext";

const Home = () => {

  const { customers } = useCustomersContext()
  const {recentsCustomers} = useCustomersContext()

  const [statitcs, setStatistcs] = useState([{ comments: 1234 }])

  const [infoCustomer, setInfoCustomer] = useState("");

  const [showModal, setShowModal] = useState("");

  const modalRef = useRef(null);

  useEffect(() => {
    // const fetchOrders = async () => {
    //   const { data } = await axios.get('orders')
    //   setOrders(data)
    // }
    const fetchStatistics = async () => {
      const { data } = await axios.get('statistics')
      setStatistcs(data)
    }
    fetchStatistics()
    // fetchOrders()
  }, [])

  const handleShowModal = (customer) => {
    setShowModal("show")
    setInfoCustomer(customer)
  }

  const closeModal = () => {
    setShowModal("")
  };

  return (
    <>
      {customers.length === 0 ? (
        <Loading type={`spin`} color={`var(--blue)`} />
      ) :  
      <>
      <Modal closeModal={closeModal} infoCustomer={infoCustomer} modalRef={modalRef} showModal={showModal} />
      <DashBoard statitcs={statitcs} handleShowModal={handleShowModal} customers={recentsCustomers} />
      </>}
     
    </>
  );
}

export default Home;