import React from "react";
import { deleteservice } from "../Js/Actions/Storeaction";
import { useDispatch } from "react-redux";

const Cardgeneral = ({ el }) => {
  const dispatch = useDispatch();
  console.log(el._id);

  // const name = props?.name;
  // const price = props?.price;
  // const companyName = props?.companyName;
  // const type = props?.type;
  // const id = props?.id;

  return (
    <div className="card">
      <div className="deletebtn">
        <button
          className="delete"
          onClick={() => dispatch(deleteservice({ id: el?._id }))}
        >
          X
        </button>
      </div>

      <h1>{el?.name}</h1>
      <h5>price :$ {el?.price}</h5>
      <p>{el?.companyName}</p>
      <p>{el?.type}</p>
      <button id="joinusbtn" className="JOInu1">
        buy now
      </button>
    </div>
  );
};

export default Cardgeneral;
