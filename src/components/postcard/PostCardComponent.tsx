import React from 'react';
import Rates from '../rates/Rates';
import { IPostCardComponent } from '../../interfaces/interfaces';
import PostCardDetails from './PostCardDetails';
import { ImageCustom, PostCardContainer } from '../../styles/MainStyles';
import { Button, Icon, Label } from 'semantic-ui-react';
import { useStore } from '../../stores/RootStore';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router';
import CommentsList from '../comments/Comments';
import Modal_two from '../Modal2';
import { observer } from 'mobx-react';
import ModalCustom from '../Modal';

const PostCardComponent = ( props: IPostCardComponent ) => {
    
    const store       = useStore ();
    const history     = useHistory ();
    let { path, url } = useRouteMatch ();
    
    return (
        
        <PostCardContainer>
            <Label size='big' circular color={'green'}>
                {props.index + 1}
            </Label>
            <Rates id_prop={props.index}/>
            <ImageCustom alt={props.payload.alt_image} src={props.payload.image_link}/>
            <PostCardDetails picture_description={props.payload.image_comment}
                             comments_count={store.postList[ props.index ].comments_count} index={props.index}
                             timestamp={props.payload.timestamp}
                             title={props.payload.title}
                             username={store.user_name}/>
            {/*<ModalCustom id_prop={props.index}/>*/}
            
            <div style={{ display: 'flex', width: '15rem', flexDirection: 'column' }}>
                {
                    store.postList[ props.index ].comments_count > 0 ?
                        <>
                            <Button style={{ margin: '.5rem' }}
                                    onClick={() => {
                                        store.setCurrentIndexComments ( props.index );
                                        history.push ( `/list_comments` );
                                    }}
                                    color='green'>See comments
                                <Icon style={{ paddingLeft: '1rem', paddingRight: '1.5rem' }} name='eye'/>
                                                  ({store.postList[ props.index ].comments_count})
                            </Button>
                            <Button style={{ margin: '.5rem' }} color='green' type='button'
                                    onClick={() => {
                                        store.setCurrentIndexComments ( props.index || 0 );
                                        history.push ( `${url}/add_comment` );
                                    }
                                    }>Add Comment<Icon
                                style={{ paddingLeft: '1rem' }}
                                name='plus'/></Button>
                        </>
                        :
                        <Button style={{ margin: '.5rem' }} color='green' type='button'
                                onClick={() => history.push ( `${url}/add_comment` )}>Add Comment<Icon
                            style={{ paddingLeft: '1rem' }}
                            name='plus'/></Button>
                    
                }
            
            </div>
        
        </PostCardContainer>
    
    );
};

export default observer ( PostCardComponent );
