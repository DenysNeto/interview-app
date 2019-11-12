import { Component } from 'react';
import { IProps } from '../interfaces/interfaces';
import * as React from 'react';
import { map } from 'lodash';
import PostCardComponent from './postcard/PostCardComponent';
import { CustomBtn, MainMenuContainer } from '../styles/MainStyles';
import { inject, observer } from 'mobx-react';
import { action } from 'mobx';

class MainPageComponent extends Component<IProps> {
    
    constructor ( props: any ) {
        super ( props );
    }
    
    @action
    addComment = () => {
        this.props.history.history.push ( '/add_comment' );
    };
    
    render () {
        
        return (
            
            <MainMenuContainer>
                < CustomBtn onClick={this.addComment}>Add Postcard</CustomBtn>
                <h2>Postcards List</h2>
                {
                    // @ts-ignore
                    map ( this.props.store.postList, ( elem, index ) =>
                        (<PostCardComponent history={this.props.history} index={index} key={index} payload={elem}/>),
                    )
                }
                
            
            </MainMenuContainer>
        );
    }
}

export default inject (
    'store',
) (
    observer ( (MainPageComponent) ),
);
