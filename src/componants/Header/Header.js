import {useState} from 'react';
import './Header.css';
import { GoPlus } from "react-icons/go";

function Landing() {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <nav className="navbar sticky-top navbar-light" style={{"backgroundColor": "#bababa",}}>
            <div className="container-fluid">
             <button type="button" className="btn btn-info btn-sm" onClick={()=>setModalOpen(!modalOpen)}><GoPlus></GoPlus>Add new profile</button>   
            </div>
            </nav>          
        </>
    )
}

export default Landing
