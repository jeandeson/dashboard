import React from "react";
import './Customers.css'
import { useCustomersContext } from "../../contexts/customersContext";

const Customers = () => {

  const {customers} = useCustomersContext()

  return (
    <ul className="customers-list">
      {customers.map((customer) => (
        <li key={customer.id}>
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
        </li>
      ))}
    </ul>
  );
};

export default Customers;
