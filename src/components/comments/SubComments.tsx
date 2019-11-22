import * as React from 'react';
import { map } from 'lodash';
import SubComment from './SubComment';
import { useStore } from '../../stores/RootStore';
import { useHistory, useParams } from 'react-router';
import { MainMenuContainer } from '../../styles/MainStyles';
import { Button, Icon } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import { ISubComments } from '../../interfaces/interfaces';

const SubComments = () => {
    let params: any = useParams ();
    const store     = useStore ();
    const history   = useHistory ();
    
    store.setCurrentIndexForSubcomment ( params.index );
    
    const onClickHandler = () => {
        history.goBack ();
    };
    
    
    return (
        <MainMenuContainer style={{  }}>
            <Button color='green' onClick={onClickHandler}>
                <Icon style={{ marginRight: '1rem' }} name='long arrow alternate left'/> Back</Button>
            
            <h3 style={{ textAlign: 'center' }}>List of Answers</h3>
            {
                map ( store.postList[ store.current_index_comments ].comments[ params.index ].sub_comments, ( elem: ISubComments, index: number ) =>
                    (
                        <SubComment key={index} index={index} sub_comment={elem} sub_comment_id={index}/>
                    ) )
            }
        </MainMenuContainer>
    );
    
};
export default observer ( SubComments );
