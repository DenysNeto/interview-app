import React from 'react';
import { Button } from 'semantic-ui-react';
import { Input } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { observer, useLocalStore } from 'mobx-react';
import { useStore } from '../../stores/RootStore';

const NameInputForm = () => {
    const history    = useHistory ();
    const store      = useStore ();
    const storeLocal = useLocalStore (
        () => ({
                name: '',
                saveNameChanges ( event: any ) {
                        storeLocal.name = event.target.value;
                },
                saveUsersName ( event: any ) {
                    event.preventDefault ();
                    store.saveUsersName ( storeLocal.name );
                    history.replace ( '/main_page' );
                },
            }
        ) );
    
    return (
        <div style={{
            display       : 'flex',
            background    : '#e6ffff',
            width         : '100%',
            overflow      : 'hidden',
            height        : '50rem',
            justifyContent: 'center',
            alignItems    : 'center',
            flexDirection : 'column',
        }}>
            <form onSubmit={storeLocal.saveUsersName}
                  style={{ display: 'flex', flexDirection: 'column', padding: '3rem' }}>
                <label style={{ paddingBottom: '1rem', textAlign: 'center', fontSize: '1.6rem' }}>Enter your
                                                                                                  name:</label>
                <Input icon='users' iconPosition='left' type='text' onChange={storeLocal.saveNameChanges}
                       placeholder='Name'/>
                <div style={{ width: '100%' }}>
                    <Button  primary
                            style={{ textDecoration: 'none', cursor: 'pointer', width: '100%', marginTop:'1rem' }}
                            disabled={(storeLocal.name == '')} type="submit">Submit
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default observer ( NameInputForm );
