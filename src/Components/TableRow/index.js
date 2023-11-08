import React, { useState } from "react";
import "./index.css";
import DeleteModal from "../DeleteModal";

const TableRow = ({ customer }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <tr className="table">
      <td>
        <img src={customer.avatar} alt="Profile" />
      </td>
      <td>{customer.id}</td>
      <td>{customer.first_name}</td>
      <td>{customer.email}</td>
      <td>
        <button className="table-button">
          Edit
        </button>
        {isDeleteModalOpen && <DeleteModal onClose={closeDeleteModal} id={customer.id} />}
        <button onClick={openDeleteModal} className="table-buttonA">Delete</button>
      </td>
    </tr>
  );
};

export default TableRow;
