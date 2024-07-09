"use client";

import Link from "next/link";
import { useEffect, useState } from "react";



const Users = () => {
    const [users, setUsers]=useState([]);
    useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=> res.json())
        // .then(data=>console.log(data));
        .then((data)=>setUsers(data))
      

    },[]);
    return (
        <div>
            <h1> TotalUsers :{users.length}</h1>
            
            { users.map(user=> 
            <div key={users.id} className="card bg-primary text-primary-content w-[70%] my-4 mx-auto">
                    <div className="card-body text-center">
                      <h2 className=" ">TITLE: {user.name}</h2>
                      <p>{user.email}</p>
                
                      <div className="card-actions justify-end">
                       <Link href="">  <button className="btn">See_More</button></Link>
                      </div>
                    </div>
                  </div>)
            }
        </div>
    );
};

export default Users;