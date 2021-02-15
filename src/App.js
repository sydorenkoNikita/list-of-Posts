import {useState} from 'react';
import './App.css';
import Modal from './components/modal/Modal';
import Posts from './components/Posts/Posts';


const App = () => {
    const [modalActive, setModalActive] = useState(false)
    return (

        <div>
            <button
                className="glow-on-hover"
                onClick={() => setModalActive(true)}
            > Create post
            </button>
            <div className='containerr'>
                <Posts/>
                <Modal modalActive={modalActive} setModalActive={setModalActive}/>
            </div>
        </div>

    );
}

export default App;
