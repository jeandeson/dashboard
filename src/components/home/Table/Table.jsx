import React, { useEffect, useState } from 'react';
import './Table.css'
import Order from "./Order.jsx";
import TitleInfo from "../../shared/titleInfo/TitleInfo"
import Pagination from '../../pagination/Pagination';
import axios from '../../../plugins/axios';
import ReactPaginate from 'react-paginate';
import './Pagination.css';
import Loading from '../../loading/Loading';
const LIMIT = 6;

const Table = () => {
  const [offSet, setOffset] = useState(0)
  
  const [orders, setOrders] = useState([]);
  const [pageNumber, setPageNumber] = useState(0)
  const pagesVisited = pageNumber * LIMIT;

  const getInfo = (offset, pageNumber) => {
    setPageNumber(pageNumber)
    setOffset(offset)
  }

  const displayOrders = orders.slice(pagesVisited, pagesVisited + LIMIT).map((order) => <Order key={order.id} order={order}/>)
  console.log(pagesVisited)
  useEffect(() => {

    const fetchOrders = async () => {
      const { data } = await axios.get('orders')
      setOrders(data)
    }
    fetchOrders()
  }, [])

  const pages = Math.ceil(orders.length / LIMIT);
  const changePage = ({selected}) => {
    setPageNumber(selected)
  }
  
  if(displayOrders.length < 0) {
      return <Loading type={`spin`} color={`var(--blue)`}/>
  }

  return ( 
     <>
    <div className="flex-container">
    <table className="dash">
    <TitleInfo>Recent Orders</TitleInfo>
        <thead>
          <th>Name</th>
          <th>Price</th>
          <th>Payment</th>
          <th>Status</th>
        </thead>
        <tbody>
            {displayOrders}
        </tbody>
          {/* {orders.length > 0 && (
            <Pagination getInfo={getInfo} total={orders.length} limit={LIMIT} total={orders.length} offset={offSet}/>
          )} */}
          <tfoot>
            <tr>
              <ReactPaginate previousLabel="previos"
                nextLabel="next"
                pageRangeDisplayed={0}
                pageCount={pages}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
              />
            </tr>
          </tfoot>
    </table>
    
    </div>
     </>
    
   );
}
 
export default Table;
