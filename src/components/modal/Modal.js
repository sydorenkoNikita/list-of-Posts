import React from 'react';
import './Modal.css'
import PostForm from '../Posts/PostForm';

const Modal = ({ modalActive, setModalActive }) => {


  const changeModal = () => {
    setModalActive(false)
  }
  return (
    <div className={modalActive ? 'modall active' : 'modall'} onClick={changeModal}>
      
      <div className={modalActive ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()} >
      <div className='headerModal' > Create post </div>
        {<PostForm changeModal={changeModal} />}
      </div>


    </div>
  )
}
export default Modal