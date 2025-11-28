import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CountdownContextProvider from './Context/Provider/CountDownContextProvider.jsx';

createRoot(document.getElementById('root')).render(
  <CountdownContextProvider>
    <App />
  </CountdownContextProvider>
)
