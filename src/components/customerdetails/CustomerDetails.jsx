import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../loading/Loading";
import axios from "../../plugins/axios";
// import { useCustomersContext } from '../../contexts/customersContext';
// import { DiAtom } from 'react-icons/di'
// import { AiOutlineUser } from 'react-icons/ai'
// import{GoDashboard} from 'react-icons/go'
import "./CustomerDetails.css";
const CustomerDetails = () => {
  const [customer, setCustomer] = useState();
  // const {customers} = useCustomersContext()

  const { id } = useParams();

  useEffect(() => {
    const findCustomer = async () => {
      const { data } = await axios.get(`customers/${id}`);
      setCustomer(data);
    };
    findCustomer();
  }, [id]);

  return (
    <>
      {customer ? (
        <div className="customer-details-wrapper">
          <div class="container-customer-details">
          <div class="avatar-flip">
            <img src={customer.image} alt="avatar" height="150" width="150" />
            <img src={customer.image} alt="avatar" height="150" width="150" />
          </div>
          <h2>{customer.name}</h2>
          <h4>HOVER OVER CONTAINER</h4>
          <p>
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Maecenas sed diam eget risus varius blandit sit amet non magna ip
            sum dolore.
          </p>
          <p>
            Connec dolore ipsum faucibus mollis interdum. Donec ullamcorper
            nulla non metus auctor fringilla.
          </p>
        </div>
          <div class="container-customer-details">
          <div className="teste">
            <h4>MY ACCOUNT</h4>
            <p>
            Connec dolore ipsum faucibus mollis interdum. Donec ullamcorper
            nulla non metus auctor fringilla.
          </p>
          </div>
          <div className="teste">
          <h4>MY BILLS</h4>
          <div className="info-card-details">
          <div className="info-card-wrapper">
            <button className="button-radius"></button>
            <span>Phone Bill</span>
          </div>
            <button>Bill Paid</button>
          </div>
          <div className="info-card-details">
          <div className="info-card-wrapper">
            <button className="button-radius"></button>
            <span>House Bill</span>
          </div>
            <button>Bill Paid</button>
          </div>
          <div className="info-card-details">
          <div className="info-card-wrapper">
            <button className="button-radius"></button>
            <span>Internet Bill</span>
          </div>
            <button>Bill Paid</button>
          </div>
          </div>
        </div>
        </div>
      ) : (
        <Loading type={`spin`} color={`var(--blue)`} />
      )}
    </>
  );
};

export default CustomerDetails;
