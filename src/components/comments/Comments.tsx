import { IComments } from '../../interfaces/interfaces';
import * as React from 'react';
import { map } from 'lodash';
import Comment from './Comment';

// @ts-ignore
import { Link, useHistory } from 'react-router-dom';
import { CustomBtn, MainMenuContainer } from '../../styles/MainStyles';
import { observer } from 'mobx-react';
import { useStore } from '../../stores/RootStore';
import { Button, Icon } from 'semantic-ui-react';

const CommentsList = () => {
    
    const store   = useStore ();
    const history = useHistory ();
    
    return (
        <MainMenuContainer>
            <Link to={'/main_page'}>
                <Button color='green' onClick={() => history.goBack ()}>
                    <Icon style={{ marginRight: '1rem' }} name='long arrow alternate left'/> To Main Menu</Button>
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

// export default inject (
//     'store',
// ) (
//     observer ( (CommentsList) ),
// );

export default observer ( CommentsList );
