import * as React from 'react';
import {
    FormContent,
    ImageCustom,
    MainContainer,
    MainMenuContainer,
    PictureInput,
} from '../../styles/MainStyles';
import { Button, Form, Icon, Input, TextArea } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import { useState } from 'react';
import { useStore } from '../../stores/RootStore';
import { useHistory } from 'react-router';

const AddPostForm = () => {
    const store                           = useStore ();
    const history                         = useHistory ();
    const [ title, setTitle ]             = useState ();
    const [ link, setLink ]               = useState ();
    const [ description, setDescription ] = useState ();
    
    const addTitle = ( event: any ) => {
        setTitle ( event.target.value );
    };
    
    const addDescription = ( event: any ) => {
        setDescription ( event.target.value );
    };
    
    const addFile = ( event: any ) => {
        
        let reader       = new FileReader ();
        reader.onloadend = ( event ) => {
            setLink ( event.target.result );
            //this.setState ( { ...this.state, link: event.target.result } );
            
        };
        
        reader.readAsDataURL ( event.target.files[ 0 ] );
    };
    
    const onClickHandler  = ( event: any ) => {
        event.preventDefault ();
        store.addedLinks ( link, title, description );
        history.goBack ();
    };
    const onCancelHandler = ( event: any ) => {
        event.preventDefault ();
        history.goBack ();
    };
    
    return (
        <MainContainer>
            <MainMenuContainer style={{  }}>
                
                <Form onSubmit={onClickHandler} style={{
                    
                    display       : 'flex',
                    flexDirection : 'column',
                    justifyContent: 'center',
                    alignItems    : 'center',
                    height        : 'auto',
                    padding       : '5rem',
                    overflow      : 'hidden',
                    border        : '2px solid grey',
                    maxHeight     : '100%',
                    margin        : '2rem',
                   
                    
                }}>
                    <h1 style={{ minHeight: '2rem' }}>Add your post card</h1>
                    <FormContent>
                        <div style={{
                            paddingTop   : '1rem',
                            paddingBottom: '1rem',
                            display      : 'flex',
                            flexDirection: 'column',
                            
                        }}>
                            <label style={{ paddingBottom: '1rem' }}>Input title:</label>
                            <Input onChange={addTitle} placeholder="Title" type="text"/>
                        </div>
                        
                        <PictureInput>
                            <label style={{ paddingBottom: '1rem' }}>Upload Image:</label>
                            <Input style={{ cursor: 'pointer' }} type="file" onChange={addFile}
                                   id="avatar" name="avatar"
                                   accept="image/png, image/jpeg"/>
                            
                            {
                                link && <ImageCustom src={link} alt='Upload Pic'/>}
                        </PictureInput>
                        
                        <label style={{ paddingBottom: '1rem', marginTop: '1rem' }}>Add description:</label>
                        <TextArea rows={3} onChange={addDescription} placeholder='Tell us more...'/>
                        
                        <div style={{
                            display       : 'flex',
                            justifyContent: 'flex-end',
                            width         : '100%',
                            marginTop     : '1rem',
                        }}>
                            <Button disabled={!(link && title && description)} type="submit"> Submit <Icon
                                name='check circle'/> </Button>
                            <Button onClick={onCancelHandler}> Cancel <Icon
                                name='cancel'/> </Button>
                        </div>
                    
                    </FormContent>
                </Form>
            </MainMenuContainer>
        </MainContainer>
    );
    
};

export default observer ( AddPostForm );
