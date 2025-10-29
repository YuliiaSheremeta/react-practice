import './App.css'
import About from '../About/About';
import Menu from '../Menu/Menu';
import Dish from '../Dish/Dish';
import Modal from '../Modal/Modal';
import { use, useEffect, useState } from 'react';

export default function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clicks, setClicks] = useState(0);


  const openModal = ()=> setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  return (
    <div>
      <button onClick={()=>setClicks(clicks + 1)}>Add click</button>
      <button onClick={()=>setClicks(0)}>Reset</button>
      <p>Here are {clicks} clicks</p>
      <About name='Alice' table={15} />
      <About name='Denis' table={7} />
      <button onClick={openModal}>Open modal</button>
      {isModalOpen && (
      <Modal onClose={closeModal}>
        <p>Children 1</p>
      </Modal>)}  
      <Menu username='Lisa' maincorses={['risotto', 'pasta', 'ravioli', 'lasagne', 'zuppa']} />
      <Dish />
      <Dish type='success' />
      <Dish type='error' />
    </div>
  );
};


