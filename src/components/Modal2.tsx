import React from 'react';
import { useHistory } from 'react-router';

const Modal_two = () => {
    
    let history = useHistory ();
    return (
        <>
            {
                <div
                    onClick={( e ) => {
                        e.stopPropagation ();
                        history.goBack ();
                    }}
                    style={{
                        top:        0,
                        left:       0,
                        bottom:     0,
                        right:      0,
                        height:     '30rem',
                        position:   'absolute',
                        background: 'rgba(0, 0, 0, 0.15)',
                    }}
                >
                    <div
                        style={{
                            position:   'absolute',
                            background: '#fff',
                            top:        25,
                            left:       '10%',
                            right:      '10%',
                            padding:    15,
                            border:     '2px solid #444',
                        }}>
                        <p>Modal Menu</p>
                        <button type='button' onClick={( e ) => {
                            e.stopPropagation ();
                            history.goBack ();
                        }}>Cancel
                        </button>
                    </div>
                
                </div>
                
            }
        </>
    
    );
};

export default Modal_two;
