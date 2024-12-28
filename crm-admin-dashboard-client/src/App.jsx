import './App.css';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { ScrollRestoration } from './Components/ScrollRestoration/ScrollRestoration';
export default function App () {
  useEffect(() => {
    const app = document.body;
    app.addEventListener('copy', event => event.preventDefault());
  }, []);
  return (
    <>
      <ScrollRestoration/>
      <Outlet/>
    </>
  );
};