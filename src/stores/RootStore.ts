import { action, computed, observable, toJS } from 'mobx';
import { IComments, IPostCardInfo } from '../interfaces/interfaces';
// @ts-ignore
import { map } from 'lodash';
// @ts-ignore
import { fill } from 'lodash';

const arr: any[] = map ( fill ( new Array ( 20 ), { comment: '', sub_comments: [] } ),
    ( _: string, index: number ) => {
        if ( index < 4 ) {
            return {
                comment     : `Comment # ${index + 1}`,
                rates       : 50,
                sub_comments: [
                    `SubComment ${index + 1}`,
                ],
            };
        } else {
            return {
                comment     : `Comment # ${index + 1}`,
                rates       : 40,
                sub_comments: [],
            };
        }
    } );


class RootStore {
    @observable user_name: string              = '';
    @observable _added_links: string[]         = [];
    @observable isModalOpen: boolean           = false;
    @observable isSubCommentsListOpen: boolean = false;
    
    @observable current_index_for_subcomment: number;
    
    @observable current_index_comments: number = 0;
    
    @observable _postList: IPostCardInfo [] = [ {
        likes         : 2800,
        image_link    : 'https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        alt_image     : 'Nature image',
        timestamp     : new Date (),
        title         : 'Title',
        username      : this.user_name,
        comments_count: arr.length,
        comments      : arr,
        
    },
        {
            likes         : 1400,
            image_link    : 'https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            alt_image     : 'Nature image',
            timestamp     : new Date (),
            title         : 'Title',
            username      : this.user_name,
            comments_count: arr.length,
            comments      : arr,
        },
        {
            likes         : 1400,
            image_link    : 'https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            alt_image     : 'Nature image',
            timestamp     : new Date (),
            title         : 'Title',
            username      : this.user_name,
            comments_count: arr.length,
            comments      : arr,
        },
        {
            likes         : 1400,
            image_link    : 'https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            alt_image     : 'Nature image',
            timestamp     : new Date (),
            title         : 'Title',
            username      : this.user_name,
            comments_count: arr.length,
            comments      : arr,
        },
    ];
    
    @action setCurrentIndexForSubcomment ( index: number ) {
        this.current_index_for_subcomment = index;
        
    }
    
    @action setIsModalOpen ( value: boolean ) {
        this.isModalOpen = value;
    }
    
    @action setCurrentIndexComments ( index: number ) {
        this.current_index_comments = index;
        
    }
    
    @action addedLinks ( link: string, title: string ) {
        
        let postToAdd: IPostCardInfo = {
            likes         : 0,
            image_link    : link,
            alt_image     : 'User post',
            timestamp     : new Date (),
            title,
            username      : this.user_name,
            comments_count: 0,
            comments      : [],
        };
        
        this.addPostToList ( postToAdd );
        
    }
    
    @action setIsSubCommentsListOpen () {
        this.isSubCommentsListOpen = !this.isSubCommentsListOpen;
    }
    
    @computed get added_links () {
        return toJS ( this._added_links );
    }
    
    @action addPostToList ( payload: IPostCardInfo ) {
        if ( payload ) {
            this._postList.push ( payload );
        }
        
    }
    
    @computed get postList (): IPostCardInfo[] {
        return toJS ( this._postList );
    }
    
    @action saveUsersName ( name: string ) {
        this.user_name = name;
    }
    
    @action addComment ( comment: string ) {
        let data: IComments = {
            comment,
            rates       : 50,
            sub_comments: [],
        };
        
        this._postList[ this.current_index_comments ].comments.push ( data );
        this._postList[ this.current_index_comments ].comments_count = this._postList[ this.current_index_comments ].comments_count + 1;
        
    }
    
    @action addCommentSubComments ( comment: string, _: number ) {

        this._postList[ this.current_index_comments ].comments[ this.current_index_for_subcomment ].sub_comments.push ( comment );
    }
    
    @action ratesIncrease ( id: number ) {
        this._postList[ id ].likes = this._postList[ id ].likes + 1;
    }
    
    @action ratesDecrease ( id: number ) {
        this._postList[ id ].likes = this._postList[ id ].likes - 1;
    }
    
    @action ratesCommentsIncrease ( id: number ) {
        this._postList[ this.current_index_comments ].comments[ id ].rates = this._postList[ this.current_index_comments ].comments[ id ].rates + 1;
        
    }
    
    @action ratesCommentsDecrease ( id: number ) {
        this._postList[ this.current_index_comments ].comments[ id ].rates = this._postList[ this.current_index_comments ].comments[ id ].rates - 1;
        
    }
    
}

export { RootStore };
const store = new RootStore ();
export default store;
