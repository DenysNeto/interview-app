import * as React from 'react';
import { inject, observer } from 'mobx-react';

interface ISubComment {
    sub_comment: string;
    sub_comment_id: number;
}

const SubComment = ( props: ISubComment ) => {
    return (
        <div style={{
            width          : '20rem',
            height         : '5rem',
            margin         : '.5rem',
            backgroundColor: 'lightgrey',
            display        : 'flex',
            alignItems     : 'center',
            justifyContent:'center'
        }}>
            <p style={{ textAlign: 'center' }}>
                {props.sub_comment}
            </p>
        </div>
    );
};

export default inject (
    'store',
) (
    observer ( (SubComment),
    ) );
