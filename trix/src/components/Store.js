import React, { useState } from "react";
import { useEffect } from "react";
import { getservice } from "../Js/Actions/Storeaction";
import { useDispatch, useSelector } from "react-redux";

function Store() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getservice());
  }, []);
  const services = useSelector((state) => state.serviceList);
  const [Type, setType] = useState(0);
  console.log(Type);
  return (
    <div >
      <select name="categ" onChange={(e) => setType(e.target.value)}>
        <option>Catégories</option>
        <option value={"gaming"}>Gamming</option>
        <option value={"media"}>Media</option>
        <option value={"productivity"}>productivity</option>
      </select>
      <div className="cards">

      {services ? (
        services.map((el) => (
          (el.type == Type)? (
          <div className="crad">
            <h1>{el?.name}</h1>
            <h3>{el?.price}</h3>
            <p>{el?.companyName}</p>
            <p>{el?.type}</p>
            <p>{el?.logo}</p>
          </div>):((Type==0)?(
          <div className="crad">
            <h1>{el?.name}</h1>
            <h3>{el?.price}</h3>
            <p>{el?.companyName}</p>
            <p>{el?.type}</p>
            <img href={el?.logo}/>
            <button id="joinusbtn" className='JOInu1'>buy now</button>
          </div>):(null))
        ))
      ) : (
        <h3>Loading</h3>
      )}
      </div>
    </div>
  );
}

export default Store;
