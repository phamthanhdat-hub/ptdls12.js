import './App.css';
import PtdListUsers from './components/PtdListUsers';
import axios from './api/PtdApi';
import { useEffect, useState } from 'react';
function PtdApp() {

  const [ptdListUsers,setPtdListUsers]=useState([]);

// doc du lieu tu api
const ptdGetAllUsers = async ()=>{
  const ptdResponse = await axios.get("ptdUsers");
  console.log("Api Data:",ptdResponse.data);
  setPtdListUsers(ptdResponse.data)
}


  useEffect(()=>{
    ptdGetAllUsers();
    console.log("State Data:",ptdListUsers);
  },[])
  return (
    <div className="container border my-3">
      <h1> Lam viec voi MockApi</h1>
      <hr/>
      <PtdListUsers  renderPtdListUsers={ptdListUsers}/>
    </div>
  );
}

export default PtdApp;
