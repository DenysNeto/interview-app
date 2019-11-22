import React from 'react';
import { ICommentsComponent } from '../../interfaces/interfaces';
import { CommentsContainer, PCustom } from '../../styles/MainStyles';
import ModalCustom from '../Modal';
import RatesComments from '../rates/RatesComments';
import { useStore } from '../../stores/RootStore';
import { Button, Icon, Label } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router';

export const Comment = ( { comment, index }: ICommentsComponent ) => {
    
    const store   = useStore ();
    const history = useHistory ();
    
    const setIsSubCommentsListOpen = () => {
        store.setIsSubCommentsListOpen ();
        store.setCurrentIndexForSubcomment ( index );
    };
    
    return (
        <CommentsContainer>
            <div style={{
                width         : '100%',
                display       : 'flex',
                flexDirection : 'row',
                justifyContent: 'space-evenly',
                alignItems    : 'center',
            }}>
                <Label size='big' circular color={'green'}>
                    {index + 1}
                </Label>
                <RatesComments id_prop={index}/>
                
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '100%' }}>
                    <p style={{ textDecoration: 'underline' }}>
                        <strong>{comment.author},</strong> {new Date ( comment.timestamp ).toLocaleString ()}</p>
                    <p>{comment.comment}</p>
                </div>
                
                {/*<ModalCustom type={'sub_comment'} comment_id={index}/>*/}
                
                {
                    comment.sub_comments.length > 0 ?
                        <div style={{ display: 'flex', width: '15rem', flexDirection: 'column' }}>
                            <Button style={{ margin: '.5rem' }}
                                    onClick={() => history.push ( `/list_comments/comments/${index}` )}
                                    color='green'>See answers
                                <Icon style={{ paddingLeft: '1rem', paddingRight: '1.5rem' }} name='eye'/>
                                                  ({comment.sub_comments.length})
                            </Button>
                            <Button onClick={() => history.push ( `/main_page/add_comment/${index}?type=subcomment` )}
                                    style={{ margin: '.5rem' }} color='green'>Answer Comment
                                <Icon style={{ paddingLeft: '1rem' }} name='plus'/>
                            </Button>
                        </div>
                        :
                        <div style={{ display: 'flex', width: '15rem', flexDirection: 'column' }}>
                            <Button onClick={() => history.push ( `/main_page/add_comment/${index}?type=subcomment` )}
                                    color='green'>Answer Comment <Icon
                                style={{ paddingLeft: '1rem' }} name='plus'/></Button>
                        </div>
                }
            </div>
        
        </CommentsContainer>
    );
};

export default observer ( Comment );


