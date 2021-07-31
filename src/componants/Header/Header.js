import {useState} from 'react';
import Modal from 'react-modal'
import './Header.css';
import { GoPlus } from "react-icons/go";

Modal.setAppElement('#root');
function Landing() {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <nav className="navbar sticky-top navbar-light" style={{"backgroundColor": "#bababa",}}>
            <div className="container-fluid">
             <button type="button" className="btn btn-info btn-sm" onClick={()=>setModalOpen(!modalOpen)}><GoPlus></GoPlus>Add new profile</button>   
            </div>
            </nav> 
            <Modal isOpen={modalOpen} onRequestClose ={()=>setModalOpen(false)}
            shouldCloseOnEsc={true}
            style={{
                overlay: {
                    position: 'fixed',
                    top: 200,
                    left: 500,
                    right: 500,
                    bottom: 300,
                    backgroundColor: 'rgba(255, 255, 255, 0.75)'
                },
                content: {
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    right: '0px',
                    bottom: '0px',
                    border: '2px solid #ccc',
                    background: '#fff',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '6px',
                    outline: 'none',
                    padding: '20px'
            }
            }}>
                <h2 className=" bg-light">ADD NEW PROFILE</h2>
                <input type="text"/>
            </Modal>           
        </>
    )
}

export default Landing
