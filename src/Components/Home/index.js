import React, { useEffect, useState } from 'react'
import LeftPanel from '../LeftPanel';
import Header from '../Header';
import Button from '../Button';
import TableRow from '../TableRow';
import './index.css';
import Modal from '../Modal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../Store/Reducers/taskReducer';

const Home = () => {

  const store = useSelector(state => state.task.data);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="app">
      <LeftPanel />
      <div className="content">
        <Header />
        <Button text="Add New Customer" onClick={openModal} />
        {isModalOpen && <Modal onClose={closeModal} />}
        <table>
          <thead>
            <tr>
              <th>Profile Picture</th>
              <th>Customer ID</th>
              <th>Customer Name</th>
              <th>Customer Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {store && store.map((customer) => (
              <TableRow key={customer.id} customer={customer} />
            ))}
          </tbody>
        </table>
      </div>
    </div >
  );
};

export default Home;