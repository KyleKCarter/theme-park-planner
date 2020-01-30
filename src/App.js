import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import routes from './routes'

//components
import Layout from './components/layout'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <div className='App'>
          {routes}
        </div>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
