import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import List from './list/list.jsx'
import Modal from './modal/modal.jsx'
import React,{useState} from 'react';
function App() {
  const [modalData, setModalData] = useState(null);
  const closeModal = () => {
    setModalData(null);
  };
  return (
    <>
      {modalData ? (
        <div className="modal-container">
          <Modal movie={modalData} onClose={closeModal} />
        </div>
      ) : (
        <div className="container">
          <div className="main">
            <div className="head">
              <FontAwesomeIcon icon={faBars} />
              <div className="movieui">
                <h1>MOVIE</h1>
                <div className="ui">
                  <h1>UI</h1>
                </div>
              </div>
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <div className="line"></div>
            <div className="body">
              <h2>Most Popular Movies</h2>
              <List setModalData={setModalData} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default App