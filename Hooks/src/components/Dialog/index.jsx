import React, {useRef} from "react";

import './styles.css';

export function Dialog () {

    const dialogRef = useRef(null);


    const openDialog = () => {
        dialogRef.current.showModal();
    }

    const closeDialog = () => {
        dialogRef.current.close();
    }

    return ( 
        <>
            <dialog ref={dialogRef}>
                <button autoFocus onClick={closeDialog}>Close</button>
                <p>This modal dialog has a grooby backdrop!</p>
            </dialog>
            <button onClick={openDialog}>Show The Dialog</button>
        </>
    );
}