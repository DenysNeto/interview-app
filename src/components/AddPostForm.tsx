import * as React from 'react';

// @ts-ignore
import { Link } from 'react-router-dom';
import { Component } from 'react';
import {
    CustomBtn,
    FormContent,
    FormStyled,
    ImageCustom, InputCustom,
    MainContainer,
    MainMenuContainer,
    PictureInput,
} from '../styles/MainStyles';
import { IProps } from '../interfaces/interfaces';
import { inject, observer } from 'mobx-react';
import { action } from 'mobx';

class AddPostForm extends Component<IProps> {
    //  const [ a, setA ] = useState ();
    
    constructor ( props: any ) {
        super ( props );
        this.state = { link: '', title: '' };
        
    }
    
    @action addTitle = ( event: any ) => {
        this.setState ( { ...this.state, title: event.target.value } );
    };
    
    @action addFile = ( event: any ) => {
        //  let img = document.createElement ( 'img' );
        
        let reader       = new FileReader ();
        reader.onloadend = ( event ) => {
            //  img.src = reader.result;
            
            this.setState ( { ...this.state, link: event.target.result } );
            
        };
        
        reader.readAsDataURL ( event.target.files[ 0 ] );
    };
    
    @action onClickHandler = () => {
        // @ts-ignore
        this.props.store.addedLinks ( this.state.link, this.state.title );
    };
    
    render () {
        
        return (
            <MainContainer>
                <MainMenuContainer>
                    
                    <FormStyled>
                        <h1 style={{ color: 'white' }}>Add your post card</h1>
                        <FormContent>
                            <div style={{
                                paddingTop   : '1rem',
                                paddingBottom: '1rem',
                                display      : 'flex',
                                flexDirection: 'column',
                            }}>
                                <label style={{ paddingBottom: '1rem' }}>Input title:</label>
                                <InputCustom onChange={this.addTitle} placeholder="Title" type="text"/>
                            </div>
                            
                            <PictureInput>
                                <label style={{ paddingBottom: '1rem' }}>Upload Image:</label>
                                <InputCustom style={{ cursor: 'pointer' }} type="file" onChange={this.addFile}
                                             id="avatar" name="avatar"
                                             accept="image/png, image/jpeg"/>
                                
                                {
                                    // @ts-ignore
                                    this.state.link && <ImageCustom src={this.state.link} alt='Upload Pic'/>}
                            </PictureInput>
                            
                            <Link to={'/main_page'}>
                                <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                                    <CustomBtn onClick={this.onClickHandler} type="submit">Submit</CustomBtn>
                                </div>
                            </Link>
                        
                        </FormContent>
                    </FormStyled>
                </MainMenuContainer>
            </MainContainer>
        );
    };
    
}

export default inject (
    'store',
) (
    observer ( (AddPostForm) ),
);
