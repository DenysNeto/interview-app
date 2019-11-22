import React, { useEffect } from 'react';
// @ts-ignore

import { observer, useLocalStore } from 'mobx-react';
import { IProps } from '../interfaces/interfaces';
import { useStore } from '../stores/RootStore';
import { Button, Form, Icon, Modal, TextArea } from 'semantic-ui-react';

import { useHistory, useParams } from 'react-router';
import useQuery from './hooks/useQuery';

interface IModalCustom extends IProps {
    type?: 'sub_comment';
    comment_id?: number
    id_prop?: number;
}

const ModalCustom = (  ) => {
    
    const params: any = useParams ();
    const query: any  = useQuery ();
    
    
    const store   = useStore ();
    const history = useHistory ();
    
    
    const localStore = useLocalStore ( () =>
        ({
            temp_value: '',
            onOpenClickHandler () {
              //  store.setCurrentIndexComments ( id_prop || 0 );
                store.setCurrentIndexForSubcomment ( params.index || 0 );
                // history.push ( '/main_page/add_comment' );
                
            },
            onCloseClickHandler ( event: any ) {
                event.preventDefault ();
                history.goBack ();
            },
            onTextChangeHandler ( event: any ) {
                localStore.temp_value = event.target.value;
                
            },
            onSubmitHandler ( event: any ) {
                event.preventDefault ();
                if ( localStore.temp_value ) {
                    store.addComment ( localStore.temp_value );
                }
                history.goBack ();
            },
            
            onSubmitSubbuttonHandler ( event: any ) {
                event.preventDefault ();
                if ( localStore.temp_value ) {
                    store.addCommentSubComments ( localStore.temp_value, params.index );
                }
                history.goBack ();
            },
        }) );
    
    localStore.onOpenClickHandler ();
    
    return (
        <div>
            {
                query.get ( 'type' ) ?
                    <Modal size={'mini'} open={true}>
                        <Modal.Header>Add answer</Modal.Header>
                        <Modal.Content image>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '20rem' }}>
                                <Form onSubmit={localStore.onSubmitSubbuttonHandler}>
                                    <label style={{ marginBottom: '1rem' }}>Enter your answer:</label>
                                    <TextArea autoFocus rows={4} onChange={localStore.onTextChangeHandler}/>
                                    <div style={{
                                        width         : '100%',
                                        display       : 'flex',
                                        justifyContent: 'flex-end',
                                        marginTop     : '1rem',
                                    }}>
                                        <Button color='green' onClick={localStore.onCloseClickHandler}>Cancel <Icon
                                            style={{ marginLeft: '1rem' }}
                                            name='cancel'/></Button>
                                        <Button type={'submit'} color='green'>Submit <Icon
                                            style={{ marginLeft: '1rem' }}
                                            name='check circle'/></Button>
                                    </div>
                                </Form>
                            </div>
                        </Modal.Content>
                    </Modal>
                    :
                    <Modal size={'mini'} open={true}>
                        <Modal.Header>Add comment</Modal.Header>
                        <Modal.Content image>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '20rem' }}>
                                <Form onSubmit={localStore.onSubmitHandler}>
                                    <label style={{ marginBottom: '1rem' }}>Enter your comment:</label>
                                    <TextArea autoFocus rows={4} onChange={localStore.onTextChangeHandler}/>
                                    <div style={{
                                        width         : '100%',
                                        display       : 'flex',
                                        justifyContent: 'flex-end',
                                        marginTop     : '1rem',
                                    }}>
                                        <Button color='green' onClick={localStore.onCloseClickHandler}>Cancel <Icon
                                            style={{ marginLeft: '1rem' }}
                                            name='cancel'/></Button>
                                        <Button type={'submit'} color='green'>Submit <Icon
                                            style={{ marginLeft: '1rem' }}
                                            name='check circle'/></Button>
                                    </div>
                                </Form>
                            </div>
                        </Modal.Content>
                    </Modal>
                
            }
        
        </div>
    
    );
};

export default observer ( ModalCustom );



        

