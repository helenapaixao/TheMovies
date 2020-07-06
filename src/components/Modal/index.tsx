import React,{useState, useEffect} from 'react';

import ReactModal from 'react-modal';



interface Item {
    poster_path: string | null;
    overview: string;
    original_title: string;
    original_language: string;
    original_name: string;
    origin_country: string;
    title: string;
    popularity: number;
    vote_count: number;
    vote_avanger: number;
    first_air_date: string;
    last_episode_to_air: string;
    next_episode_to_air: string;
    release_date: string;
    name: string;
    available: boolean;
    backdrop_path: string;
    status: string;
    id: number;
}

interface IModalProps {
    children:any;
    isOpen:boolean;
    setIsOpen: () => void;
}


const Modal: React.FC<IModalProps> = ({children, isOpen, setIsOpen}) => {
    const [modalStatus, setModalStatus] = useState(isOpen)


    useEffect(() => {
        setModalStatus(isOpen);
    },[isOpen])


    return (
        <ReactModal
        shouldCloseOnOverlayClick={!false}
        onRequestClose={setIsOpen}
        isOpen={modalStatus}
        ariaHideApp={false}
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: '#972D07',
            color: '#FFF',
            borderRadius: '8px',
            width: '736px',
            border: 'none',
          },
          overlay: {
            backgroundColor: '#121214e6',
          },
        }}
      >
        {children}
      </ReactModal>
    )
}


export default Modal;