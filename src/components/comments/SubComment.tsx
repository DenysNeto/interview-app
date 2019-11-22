import * as React from 'react';
import { observer } from 'mobx-react';
import { Label } from 'semantic-ui-react';
import RatesSubComments from '../rates/RatesSubComments';
import { ISubComments } from '../../interfaces/interfaces';
import { CommentsContainer } from '../../styles/MainStyles';

interface ISubComment {
    sub_comment: ISubComments;
    sub_comment_id: number;
    index: number;
}

const SubComment = ( props: ISubComment ) => {
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
                    {props.index + 1}
                </Label>
                <RatesSubComments index={props.index}/>
                <div>
                    <p style={{ textDecoration: 'underline' }}>
                        <strong>{props.sub_comment.author},</strong> {new Date ( props.sub_comment.timestamp ).toLocaleString ()}
                    </p>
                    <p style={{ textAlign: 'center' }}>
                        {props.sub_comment.comment}
                    </p>
                </div>
            </div>
        
        </CommentsContainer>
    );
};

export default observer ( SubComment );
