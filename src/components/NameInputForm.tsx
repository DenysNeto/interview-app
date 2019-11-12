import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { IProps } from '../interfaces/interfaces';
import { action, observable } from 'mobx';

// @ts-ignore
import { withRouter, Link } from 'react-router-dom';
import { InputCustom } from '../styles/MainStyles';

class NameInputForm extends Component<IProps> {
    
    @observable name: string = '';
    
    constructor ( props: any ) {
        super ( props );
        
    }
    
    @action saveNameChanges = ( event: any ) => {
        if ( event.target.value ) {
            this.name = event.target.value;
        }
        
    };
    
    @action saveUsersName = () => {
        //console.log ( '[c] HISTORY', this.props.history );
        // @ts-ignore
        this.props.store.saveUsersName ( this.name );
        // @ts-ignore
        
    };
    
    render () {
        return (
            <div style={{
                display       : 'flex',
                background    : 'green',
                width         : '100%',
                overflow      : 'hidden',
                height        : '50rem',
                justifyContent: 'center',
                alignItems    : 'center',
                flexDirection : 'column',
            }}>
                <form style={{ display: 'flex', flexDirection: 'column', border: '1px solid white', padding: '3rem' }}>
                    <label style={{ paddingBottom: '1rem' }}>Input your name:</label>
                    <InputCustom type='text' onChange={this.saveNameChanges} placeholder="Name"/>
                    
                    <Link style={{ marginTop: '1rem', display: 'flex', justifyContent:'flex-end'}} to={'/main_page'}>
                        <button style={{textDecoration: 'none'}}  disabled={!this.name} onClick={this.saveUsersName} type="submit">Submit</button>
                    </Link>
                </form>
            </div>
        );
    }
    
}

export default inject (
    'store',
) (
    observer ( (NameInputForm) ),
);
