import * as React from 'react';
import { IRatesProps } from '../../interfaces/interfaces';
import { observer } from 'mobx-react';
import { Icon, SemanticCOLORS } from 'semantic-ui-react';
import { useStore } from '../../stores/RootStore';
import { useState } from 'react';

const RatesComments = ( { id_prop }: IRatesProps ) => {
    
    const store                                   = useStore ();
    const [ disabled_first, setDisabledFirst ]    = useState ( store.postList[ store.current_index_comments ].comments[ id_prop ].likes.liked );
    const [ disabled_second, setDisabledSecond ]  = useState ( store.postList[ store.current_index_comments ].comments[ id_prop ].likes.disliked);
    const [ btn_color_second, setBtnColorSecond ] = useState ( disabled_second && 'blue' );
    const [ btn_color_first, setBtnColorFirst ]   = useState ( disabled_first && 'blue' );
    
    const changeRate = ( operation: 'minus' | 'plus' ) => {
        if ( operation === 'minus' ) {
            if ( disabled_second ) {
                store.ratesCommentsIncrease ( id_prop, false, false );
                setDisabledSecond ( false );
                setBtnColorSecond ( null );
            } else {
                if ( disabled_first ) {
                    store.ratesCommentsDecrease ( id_prop, false, true );
                    store.ratesCommentsDecrease ( id_prop, false, true );
                    setBtnColorSecond ( 'blue' );
                    setBtnColorFirst ( null );
                    setDisabledSecond ( true );
                    setDisabledFirst ( false );
                } else {
                    setBtnColorSecond ( 'blue' );
                    setBtnColorFirst ( null );
                    setDisabledSecond ( true );
                    setDisabledFirst ( false );
                    store.ratesCommentsDecrease ( id_prop, false, true );
                }
                
            }
        } else {
            if ( disabled_first ) {
                store.ratesCommentsDecrease ( id_prop, false, false );
                setBtnColorFirst ( null );
                setDisabledFirst ( false );
                
            } else {
                if ( disabled_second ) {
                    store.ratesCommentsIncrease ( id_prop, true, false );
                    store.ratesCommentsIncrease ( id_prop, true, false );
                    setBtnColorSecond ( null );
                    setBtnColorFirst ( 'blue' );
                    setDisabledSecond ( false );
                    setDisabledFirst ( true );
                } else {
                    setBtnColorSecond ( null );
                    setBtnColorFirst ( 'blue' );
                    setDisabledSecond ( false );
                    setDisabledFirst ( true );
                    store.ratesCommentsIncrease ( id_prop, true, false );
                }
                
            }
        }
    };
    
    const onMouseEnterHandler = ( optional: 'like' | 'dislike' ) => {
        if ( optional === 'like' ) {
            setBtnColorFirst ( 'blue' );
        } else {
            setBtnColorSecond ( 'blue' );
        }
        
    };
    
    const onMouseLeaveHandler = ( optional: 'like' | 'dislike' ) => {
        
        if ( optional == 'like' ) {
            !disabled_first &&
            setBtnColorFirst ( null );
            
        } else {
            !disabled_second &&
            setBtnColorSecond ( null );
        }
    };
    
    return (
        <div style={{
            display      : 'flex',
            flexDirection: 'column',
            alignItems   : 'stretch',
            marginTop    : '2rem ',
            marginBottom : '2rem ',
        }}>
            <Icon  onMouseEnter={() => onMouseEnterHandler ( 'like' )}
                  onMouseLeave={() => onMouseLeaveHandler ( 'like' )} color={btn_color_first as SemanticCOLORS || 'black'}
                  style={{ cursor: 'pointer', marginBottom: '1rem' }}
                  onClick={() => changeRate ( 'plus' )} size='big'
                  name='thumbs up'/>
            
            <p style={{
                margin  : 0,
                fontSize: '1.1rem',
            }}>{store.postList[ store.current_index_comments ].comments[ id_prop ].likes.count}</p>
            <Icon  style={{ cursor: 'pointer', marginTop: '1rem' }}
                  color={btn_color_second as SemanticCOLORS || 'black' }
                  onMouseEnter={() => onMouseEnterHandler ( 'dislike' )}
                  onMouseLeave={() => onMouseLeaveHandler ( 'dislike' )}
                  onClick={() => changeRate ( 'minus' )} size='big'
                  name='thumbs down'/>
        
        </div>
    
    );
    
};

{/*<div>*/
}
{/*    <FaArrowUp style={{ cursor: 'pointer' }} onClick={() => changeRate ( 'plus' )}/>*/
}
{/*    <p>{likes}</p>*/
}
{/*    <FaArrowDown style={{ cursor: 'pointer' }} onClick={() => changeRate ( 'minus' )}/>*/
}
{/*</div>*/
}

// export default inject (
//     'store',
// ) (
//     observer ( (RatesComments) ),
// );

export default observer ( RatesComments );
