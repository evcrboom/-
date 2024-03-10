import React from "react";
import "./Item.css";
import { MdDelete,MdEdit } from "react-icons/md";


function Item(props) {
  const { data,deleteTask,editTask } = props;
  return (
    <div className="list-item">
      <p className="title">{data.title}</p>
      <div className="button-container">
        <MdDelete className="btn" onClick={()=>deleteTask(data.id)}>ลบ</MdDelete>
        <MdEdit className="btn" onClick={()=>editTask(data.id,data.title)}>แก้ไข</MdEdit>
      </div>
    </div>
  );
}

export default Item;
