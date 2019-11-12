import { IComments, IProps } from '../../interfaces/interfaces';
import * as React from 'react';
import { map } from 'lodash';
import { inject, observer } from 'mobx-react';
import Comment from './Comment';

// @ts-ignore
import { Link } from 'react-router-dom';
import { CustomBtn, MainMenuContainer } from '../../styles/MainStyles';

const CommentsList = ( { store }: IProps ) => {
    return (
        <MainMenuContainer>
            <Link to={'/main_page'}>
                <CustomBtn onClick={() => store.setCurrentIndexComments ( 1 )}>To Main Menu</CustomBtn>
            </Link>
            <h2>List of Comments</h2>
            {
                map ( store.postList[ store.current_index_comments ].comments, ( elem: IComments, index: number ) =>
                    (<Comment comment={elem} index={index} key={index}/>),
                )
            }

        </MainMenuContainer>
    );
};

export default inject (
    'store',
) (
    observer ( (CommentsList) ),
);
