import * as React from 'react';
import { map } from 'lodash';
import PostCardComponent from './postcard/PostCardComponent';
import { CustomBtn, MainMenuContainer, PostCardContainer } from '../styles/MainStyles';
import { observer, useLocalStore } from 'mobx-react';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router';
import { useStore } from '../stores/RootStore';
import ModalCustom from './Modal';
import Modal_two from './Modal2';
import { Button, Icon } from 'semantic-ui-react';

const MainPageComponent = observer ( ( props ) => {
    const history    = useHistory ();
    const store      = useStore ();
    const storeLocal = useLocalStore (
        () => ({
                addComment () {
                    history.push ( '/add_comment' );
                },
            }
        ), props );
    
    let { path, url } = useRouteMatch ();
    
    return (
        <MainMenuContainer>
            <Button color="green" onClick={storeLocal.addComment}>Add Postcard <Icon
                style={{ paddingLeft: '1rem' }} name='plus'/></Button>
            <h2>Postcards List</h2>
            {
                map ( store.postList, ( elem, index: number ) =>
                    (<PostCardComponent index={index} key={index} payload={elem}/>),
                )
            }
        
        </MainMenuContainer>
    );
} );

export default MainPageComponent;
