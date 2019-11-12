import * as React from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { IRatesProps } from '../../interfaces/interfaces';
import { inject, observer } from 'mobx-react';

const RatesComments = ( { likes, store, id_prop }: IRatesProps ) => {
    
    const changeRate = ( operation: 'minus' | 'plus' ) => {
        if ( operation === 'minus' ) {
            // @ts-ignore
            store.ratesCommentsDecrease ( id_prop );
        } else {
            // @ts-ignore
            store.ratesCommentsIncrease ( id_prop );
        }
    };
    
    return (
        <div>
            <FaArrowUp style={{ cursor: 'pointer' }} onClick={() => changeRate ( 'plus' )}/>
            <p>{likes}</p>
            <FaArrowDown style={{ cursor: 'pointer' }} onClick={() => changeRate ( 'minus' )}/>
        </div>
    
    );
    
};

export default inject (
    'store',
) (
    observer ( (RatesComments) ),
);
