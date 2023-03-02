import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer';
import ReactDOM from 'react-dom/client'
import { FormspreeProvider } from '@formspree/react';
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormspreeProvider>
    <Header />
    <App/>
    <Footer />
    </FormspreeProvider>
  </React.StrictMode>,
)
