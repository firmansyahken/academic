import React from "react";
import { formatterName } from "../utils/formatterName";
import { useNavigate } from "react-router-dom";

const ListItem = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => navigate("/note/" + props.name)}
        className="cursor-pointer hover:bg-gray-100 px-4 py-6 border border-1"
      >
        <p className="text-sm">{formatterName(props.name)}</p>
      </div>
    </>
  );
};

export default ListItem;