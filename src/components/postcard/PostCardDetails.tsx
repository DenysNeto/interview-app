import { IPostCardDetails } from '../../interfaces/interfaces';
import React from 'react';
// @ts-ignore
import { Link, useHistory } from 'react-router-dom';
import { observer, useLocalStore } from 'mobx-react';
import { useStore } from '../../stores/RootStore';

const PostCardDetails = ( props: IPostCardDetails ) => {
    
    const localStore = useLocalStore ( () => ({
        desc_details: `${new Date ( props.timestamp ).toLocaleString ()} by ${props.username}`,
    }) );
    
    const history        = useHistory ();
    const store          = useStore ();
    const onClickHandler = () => {
        store.setCurrentIndexComments ( props.index );
    };
    
    return (
        <div style={{ position: 'relative' }}>
            <h2>{props.title}</h2>
            <p>{localStore.desc_details}</p>
            <p>{props.picture_description}</p>
        
        </div>
    );
};

export default observer ( PostCardDetails );
