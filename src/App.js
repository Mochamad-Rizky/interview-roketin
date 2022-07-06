import { useEffect, useState } from "react";
import axios from "axios";
import API_ENDPOINT from "./global/apiEndpoint";
import {
  ListUser,
  HeaderDashboard,
} from "./components";

import './App.css';

function App() {
  const [users, setUsers] = useState(null);
  
  useEffect(() => {
    const getDataUser = async () => {
      try {
        const response = await axios.get(API_ENDPOINT.GET_RANDOM_USER(25));
        
        setUsers(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    
    getDataUser();
  }, []);
  
  return (
    <main className="member-dashboard">
      <section className="member-dashboard__container">
        <h1>Member Dashboard</h1>
        <HeaderDashboard userData={users}/>
        <ListUser users={users}/>
      </section>
    </main>
  );
}

export default App;
