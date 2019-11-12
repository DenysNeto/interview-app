import * as React from 'react';
import { IProps } from '../interfaces/interfaces';
import { map } from 'lodash';
import { inject, observer } from 'mobx-react';
import SubComment from './postcard/SubComment';


interface ISubComments extends IProps {
    sub_comments: string[];
}

const SubComments = ( props: ISubComments ) => {
    
    return (
        <div style={{background:'white', border:"1px solid black", margin:".3rem"}}>
            <h3 style={{textAlign:'center'}} >List of Comments</h3>
            {
                map ( props.sub_comments, ( elem: string, index: number ) =>
                    (
                        <SubComment key={index} sub_comment={elem} sub_comment_id={index}/>
                    ) )
            }
            
        
        </div>
    );
    
};

export default inject (
    'store',
) (
    observer ( (SubComments),
    ) );
