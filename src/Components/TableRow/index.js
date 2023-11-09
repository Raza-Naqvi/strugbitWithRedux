import React, { useState } from "react";
import "./index.css";
import DeleteModal from "../DeleteModal";
import Modal from "../Modal";

const TableRow = ({ customer }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
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
        <button onClick={closeModal} className="table-button">Edit</button>
        {isModalOpen && <Modal onClose={closeModal} edit={1} customer={customer} />}
        <button onClick={openDeleteModal} className="table-buttonA">Delete</button>
        {isDeleteModalOpen && <DeleteModal onClose={closeDeleteModal} id={customer.id} />}
      </td>
    </tr>
  );
};

export default TableRow;
