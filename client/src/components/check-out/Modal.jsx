import React from 'react';
import { useRouter } from 'next/router';


const Modal = ({ show, onClose, children }) => {
    const router = useRouter();

    const handleClose = () => {
        onClose();
        router.push('/');
    };

    return (
        <div
            className={`modal ${show ? 'show' : ''}`}
            style={{
                display: show ? 'block' : 'none',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                position: 'fixed',
                zIndex: 1000,
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
                overflow: 'auto',
            }}
            onClick={handleClose}
        >
            <div
                className="modal-content"
                style={{
                    backgroundColor: '#fefefe',
                    margin: '15% auto',
                    padding: '20px',
                    border: '1px solid #888',
                    width: '30%',
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;