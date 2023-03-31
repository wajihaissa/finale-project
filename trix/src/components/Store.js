import React, { useState } from "react";
import { useEffect } from "react";
import { getservice } from "../Js/Actions/Storeaction";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Cardgeneral from "./Cardgeneral";
import { Link } from "react-router-dom";

function Store() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getservice());
  }, []);
  const services = useSelector((state) => state.serviceReducer.serviceList);
  console.log("voici services", services);
  const [Type, setType] = useState(0);
  console.log(Type);

  return (
    <div>
      <div className="header2">
        <select name="categ" onChange={(e) => setType(e.target.value)}>
          <option>Catégories</option>
          <option value={"gaming"}>Gamming</option>
          <option value={"media"}>Media</option>
          <option value={"productivity"}>productivity</option>
        </select>

        <Link to="/Add">
          <Button variant="primary" type="submit" className="ADD">
            ADD service
          </Button>
        </Link>
      </div>
      <div className="cards">
        {services ? (
          services.map((el) =>
            el?.type === Type ? (
              <div className="crads">
                <Cardgeneral el={el}/>
              </div>
            ) : Type === 0 ? (
              <Cardgeneral   el={el}
              />
            ) : null
          )
        ) : (
          <h3>Loading</h3>
        )}
      </div>
    </div>
  );
}

export default Store;
