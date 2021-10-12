import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CommentsProvider } from './contexts/commentsContexts';
import { CustomersProvider } from './contexts/customersContext';
import { AccountProvider } from './contexts/accountContexts';

ReactDOM.render(
  <React.StrictMode>

  <AccountProvider>
    <CommentsProvider>
     <CustomersProvider>
      <App />
      </CustomersProvider>
    </CommentsProvider>
  </AccountProvider>

  </React.StrictMode>,
  document.getElementById('root')
);
