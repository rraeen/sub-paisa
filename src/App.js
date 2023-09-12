import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './component/organism/MainLayout';
import "../src/styles/style.css"
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<MainLayout/>}>
      <Route path="/*" />
    </Route>
  
  </Routes>
 
</BrowserRouter>
  );
}

export default App;
