import React from 'react';
// @ts-ignore
import Modal from 'react-modal';
import { inject, observer } from 'mobx-react';
import { IProps } from '../interfaces/interfaces';
import { CustomBtn } from '../styles/MainStyles';

interface IModalCustom extends IProps {
    type?: 'sub_comment';
    comment_id?: number
    id_prop?: number;
}

const ModalCustom = ( { store, type, comment_id, id_prop }: IModalCustom ) => {
    let temp_value = '';
    
    const onOpenClickHandler  = () => {
        store.setCurrentIndexComments ( id_prop || 0 );
        store.setCurrentIndexForSubcomment ( comment_id || 0 );
        
        store.setIsModalOpen ( true );
        
    };
    const onCloseClickHandler = () => {
        store.setIsModalOpen ( false );
    };
    
    const onTextChangeHandler = ( event: any ) => {
        temp_value = event.target.value;
        
    };
    
    const onSubmitHandler = () => {
        if ( temp_value ) {
            store.addComment ( temp_value );
        }
        store.setIsModalOpen ( false );
    };
    
    const onSubmitSubbuttonHandler = () => {
        if ( temp_value ) {
            store.addCommentSubComments ( temp_value, comment_id );
        }
        store.setIsModalOpen ( false );
    };
    
    return (
        <div>
            <CustomBtn onClick={onOpenClickHandler}>Add Comment</CustomBtn>
            {
                type ?
                    
                    <Modal
                        style={{
                            content: {
                                margin        : '10rem',
                                marginLeft    : '35rem',
                                width         : '20rem',
                                height        : '8rem',
                                display       : 'flex',
                                justifyContent: 'center',
                            },
                            overlay: {
                                
                                backgroundColor: 'papayawhip',
                            },
                        }}
                        ariaHideApp={false}
                        isOpen={store.isModalOpen}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', width: '20rem' }}>
                            <label>Enter your comment:</label>
                            <textarea autoFocus rows={4} onChange={onTextChangeHandler}/>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                <CustomBtn onClick={onCloseClickHandler}>Cancel</CustomBtn>
                                <CustomBtn disabled={!temp_value} onClick={onSubmitSubbuttonHandler}>Submit</CustomBtn>
                            </div>
                        </div>
                    </Modal>
                    
                    :
                    
                    <Modal
                        style={{
                            content: {
                                margin        : '10rem',
                                marginLeft    : '35rem',
                                width         : '20rem',
                                height        : '8rem',
                                display       : 'flex',
                                justifyContent: 'center',
                            },
                            overlay: {
                                
                                backgroundColor: 'papayawhip',
                            },
                        }}
                        isOpen={store.isModalOpen}
                        contentLabel="Example Modal"
                    >
                        
                        <div style={{ display: 'flex', flexDirection: 'column', width: '20rem' }}>
                            <label>Enter your comment:</label>
                            <textarea rows={4} autoFocus onChange={onTextChangeHandler}/>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                <CustomBtn onClick={onCloseClickHandler}>Cancel</CustomBtn>
                                <CustomBtn disabled={!temp_value} onClick={onSubmitHandler}>Submit</CustomBtn>
                            </div>
                        </div>
                    
                    </Modal>
            }
        
        </div>
    );
};

export default inject (
    'store',
) (
    observer ( (ModalCustom) ),
);
