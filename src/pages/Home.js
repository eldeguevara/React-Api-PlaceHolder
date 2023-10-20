import React, { useEffect, useState } from "react";
import "../assets/styles/Home.css";
import Card from "../components/Card";
import Header from "../components/Header";
import axios from "axios";

export default function Home() {

    const [objeto,setObjeto] = useState([])

    const getApiPlaceHolder = async ()=>{
        try {
            const result = await axios.get('https://jsonplaceholder.typicode.com/users?classId=da0bbae3-c91b-48a9-bc6a-09da01437b1b&assignmentId=481bc5d0-ca48-4dd8-ae75-388370f858b0&submissionId=ed848b1f-4861-7d04-7b6f-7b7da33f9058')
            setObjeto(result.data)
        } catch (error) {
            console.log(error)
        }   
    }

    useEffect(()=>{
        getApiPlaceHolder()
    },[])

  return (
    <div className="container">
        <Header/>
        {
            objeto.map((item)=>(
                <Card 
                    key={item.id} 
                    name={item.name} 
                    username={item.username}
                    email={item.email}
                    street={item.address.street}
                    suite={item.address.suite}
                    city={item.address.city}
                    zipcode={item.address.zipcode}
                />
            ))
        }
    </div>
  );
}
