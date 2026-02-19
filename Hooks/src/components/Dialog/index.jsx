import React, {useEffect, useRef} from "react";

import './styles.css';

export function Dialog ({ isOpen, onClose }) {

    const dialogRef = useRef(null);

    useEffect(() => {
        if (!dialogRef.current) return;
        if (isOpen) {
            openDialog();
        } else {
            closeDialog();
        }
    }, [isOpen]);

    const openDialog = () => {
        dialogRef.current.showModal();
    }

    const closeDialog = () => {
        dialogRef.current.close();
    }

    return ( 
        <>
            <dialog ref={dialogRef}>
                <button autoFocus onClick={onClose}>Close</button>
                <p>This modal dialog has a grooby backdrop!</p>
            </dialog>
        </>
    );
}