import React from 'react';
import { ICommentsComponent } from '../../interfaces/interfaces';
import { inject, observer } from 'mobx-react';
import { CommentsContainer, PCustom } from '../../styles/MainStyles';
// @ts-ignore
import { Link } from 'react-router-dom';
import ModalCustom from '../Modal';
import RatesComments from './RatesComments';
import SubComments from '../SubComments';

export const Comment = ( { comment, index, store }: ICommentsComponent ) => {
    
    const setIsSubCommentsListOpen = () => {
        console.log ( 'p ONCLICK' );
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
                <RatesComments id_prop={index} likes={comment.rates}/>
                
                <p>{comment.comment}</p>
                <ModalCustom type={'sub_comment'} comment_id={index}/>
            </div>
            {
                comment.sub_comments.length > 0 ?
                    <div style={{ position: 'relative', width: '100%', display:'flex', justifyContent:'flex-end' }}>
                        <PCustom onClick={setIsSubCommentsListOpen}> Comments: {comment.sub_comments.length}</PCustom>
                        {
                            store.isSubCommentsListOpen && store.current_index_for_subcomment == index &&
                            <div style={{
                                position: 'absolute',
                                top     : 30,
                                right   : 20,
                            }}>
                                <SubComments sub_comments={comment.sub_comments}/>
                            </div>
                        }
                    </div>
                    
                    :
                    <div style={{width:'100%'}}>
                        <p style={{textAlign:'right', marginRight:'3rem'}}> Comments: {comment.sub_comments.length}</p>
                    </div>
            }
        
        </CommentsContainer>
    );
};

export default inject (
    'store',
) (
    observer ( (Comment) ),
);
