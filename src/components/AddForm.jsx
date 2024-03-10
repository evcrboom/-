import React from "react";
import "./AddForm.css";

function AddForm(props) {
  const { addForm, title, setTitle, editId} = props;
  return (
    <div className="AddForm">
      <h2>แบบฟอร์มบริหารจัดการงาน</h2>
      <form className="form-group" onSubmit={addForm}>
        <div className="form-control">
          <input
            type="text"
            className="text-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {editId ? "update" : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddForm;
