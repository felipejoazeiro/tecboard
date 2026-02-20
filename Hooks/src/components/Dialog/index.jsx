import React, {useEffect, useRef} from "react";

import './styles.css';
import { IconClose } from "../icons";

export function Dialog ({ isOpen, onClose, children }) {

    const dialogRef = useRef(null);

    useEffect(() => {
        if (!dialogRef.current) return;
        if (isOpen) {
            openDialog();
        } else {
            closeDialog();
        }
    }, [isOpen]);

    useEffect(() => {
        const dialog = dialogRef.current;
        dialog?.addEventListener("close", onClose);

        return () => {
            dialog?.removeEventListener("close", onClose);
        }
    }, []);

    const openDialog = () => {
        dialogRef.current.showModal();
    }

    const closeDialog = () => {
        dialogRef.current.close();
    }

    return ( 
        <>
            <dialog ref={dialogRef} className="dialog"> 
                <div className="close-btn-wrapper">
                    <button autoFocus onClick={onClose} className="close-btn">
                        <IconClose />
                    </button>
                </div>
                {children}
            </dialog>
        </>
    );
}