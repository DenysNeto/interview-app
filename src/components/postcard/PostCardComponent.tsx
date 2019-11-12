import React from 'react';
import Rates from './Rates';
import { IPostCardComponent } from '../../interfaces/interfaces';
import PostCardDetails from './PostCardDetails';
import { ImageCustom, PostCardContainer } from '../../styles/MainStyles';
import { inject, observer } from 'mobx-react';
import ModalCustom from '../Modal';

const PostCardComponent = ( props: IPostCardComponent ) => {
    
    
    return (
        <PostCardContainer>
            <Rates id_prop={props.index} likes={props.payload.likes}/>
            <ImageCustom alt={props.payload.alt_image} src={props.payload.image_link}/>
            <PostCardDetails comments_count={props.store.postList[ props.index ].comments_count} index={props.index}
                             timestamp={props.payload.timestamp}
                             title={props.payload.title}
                             username={props.store.user_name}/>
            <ModalCustom id_prop={props.index}/>
        
        </PostCardContainer>
    );
};

export default inject (
    'store',
) (
    observer ( (PostCardComponent) ),
);
