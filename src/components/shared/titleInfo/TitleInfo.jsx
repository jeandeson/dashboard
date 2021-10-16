import React from 'react';
import './TitleInfo.css'
const TitleInfo = ({children}) => {
  return (
    <thead className='title-info'>
      <tr><td>{children}</td></tr>
    </thead>
  )
}

export default TitleInfo