import { IPostCardDetails } from '../../interfaces/interfaces';
import React from 'react';
import { inject, observer } from 'mobx-react';
// @ts-ignore
import { Link } from 'react-router-dom';

const PostCardDetails = ( props: IPostCardDetails ) => {
    const desc_details = `${new Date(props.timestamp).toLocaleString()} by ${props.username}`;
    
    const onClickHandler = () => {
        props.store.setCurrentIndexComments ( props.index );
    };
    
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{desc_details}</p>
            <Link to={'/list_comments'}>
                <p onClick={onClickHandler}>{props.comments_count} comments</p>
            </Link>
        </div>
    );
};

export default inject (
    'store',
) (
    observer ( (PostCardDetails) ),
);

