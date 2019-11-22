import { action, computed, observable, toJS } from 'mobx';
import { IComments, ILikes, IPostCardInfo, ISubComments } from '../interfaces/interfaces';
// @ts-ignore
import { map } from 'lodash';
// @ts-ignore
import { fill } from 'lodash';
import React, { createContext, useContext } from 'react';

const arr_comments_mock: any[] = map ( fill ( new Array ( 20 ), { comment: '', sub_comments: [] } ),
    ( _: string, index: number ) => {
        if ( index < 4 ) {
            return {
                comment     : `Comment # ${index + 1}`,
                likes       : {
                    count   : 50,
                    liked   : false,
                    disliked: false,
                },
                timestamp   : new Date (),
                author      : 'Admin',
                sub_comments: [ {
                    likes    : {
                        count   : 50,
                        liked   : false,
                        disliked: false,
                    },
                    timestamp: new Date (),
                    author   : 'Admin',
                    comment  : `SubComment ${index + 1}`,
                } ]
                
                ,
            };
        } else {
            return {
                comment     : `Comment # ${index + 1}`,
                likes       : {
                    count   : 40,
                    liked   : false,
                    disliked: false,
                },
                timestamp   : new Date (),
                author      : 'Admin',
                sub_comments: [],
                
            };
        }
    } );

export class RootStore {
    @observable user_name: string              = '';
    @observable _added_links: string[]         = [];
    @observable isModalOpen: boolean           = false;
    @observable isSubCommentsListOpen: boolean = false;
    
    @observable current_index_for_subcomment: number;
    
    @observable current_index_comments: number = 0;
    
    @observable _postList: IPostCardInfo [] = [ {
        likes         : {
            count   : 2800,
            liked   : false,
            disliked: false,
        },
        image_comment : 'Wonderful nature',
        image_link    : 'https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        alt_image     : 'Nature image',
        timestamp     : new Date (),
        title         : 'Title',
        username      : this.user_name,
        comments_count: arr_comments_mock.length,
        comments      : arr_comments_mock,
        
    },
        {
            likes         : {
                count   : 1400,
                liked   : false,
                disliked: false,
            },
            image_comment : 'Wonderful nature',
            image_link    : 'https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            alt_image     : 'Nature image',
            timestamp     : new Date (),
            title         : 'Title',
            username      : this.user_name,
            comments_count: arr_comments_mock.length,
            comments      : arr_comments_mock,
        },
        {
            likes         : {
                count   : 1200,
                liked   : false,
                disliked: false,
            },
            image_comment : 'Wonderful nature',
            image_link    : 'https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            alt_image     : 'Nature image',
            timestamp     : new Date (),
            title         : 'Title',
            username      : this.user_name,
            comments_count: arr_comments_mock.length,
            comments      : arr_comments_mock,
        },
        {
            likes         : {
                count   : 1100,
                liked   : false,
                disliked: false,
            },
            image_comment : 'Wonderful nature',
            image_link    : 'https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            alt_image     : 'Nature image',
            timestamp     : new Date (),
            title         : 'Title',
            username      : this.user_name,
            comments_count: arr_comments_mock.length,
            comments      : arr_comments_mock,
        },
    ];
    
    @computed get listOfSubcomments () {
        return this.postList[ this.current_index_comments ].comments[ this.current_index_for_subcomment ].sub_comments;
    }
    
    @action setCurrentIndexForSubcomment ( index: number ) {
        this.current_index_for_subcomment = index;
        
    }
    
    @action setIsModalOpen ( value: boolean ) {
        this.isModalOpen = value;
    }
    
    @action setCurrentIndexComments ( index: number ) {
        this.current_index_comments = index;
        
    }
    
    @action addedLinks ( link: string, title: string, description: string ) {
        
        let postToAdd: IPostCardInfo = {
            likes         : {
                count   : 0,
                liked   : false,
                disliked: false,
            },
            image_comment : description,
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
            timestamp   : new Date (),
            author      : this.user_name,
            likes       : {
                count   : 50,
                liked   : false,
                disliked: false,
            },
            sub_comments: [],
        };
        
        this._postList[ this.current_index_comments ].comments.push ( data );
        this._postList[ this.current_index_comments ].comments_count = this._postList[ this.current_index_comments ].comments_count + 1;
        
    }
    
    @action addCommentSubComments ( comment: string, index: number ) {
        this._postList[ this.current_index_comments ].comments[ index ].sub_comments.push ( {
            likes    : {
                count   : 0,
                liked   : false,
                disliked: false,
            },
            timestamp: new Date (),
            comment,
            author   : this.user_name,
        } );
    }
    
    @action ratesIncrease ( id: number, liked: boolean, disliked: boolean ) {
        this._postList[ id ].likes = {
            count: this._postList[ id ].likes.count + 1,
            liked, disliked,
        };
    };
    
    @action ratesDecrease ( id: number, liked: boolean, disliked: boolean ) {
        this._postList[ id ].likes = {
            count: this._postList[ id ].likes.count - 1,
            liked, disliked,
        };
        
    }
    
    @action ratesCommentsIncrease ( id: number, liked: boolean, disliked: boolean ) {
        this._postList[ this.current_index_comments ].comments[ id ].likes =
            {
                count: this._postList[ this.current_index_comments ].comments[ id ].likes.count + 1,
                liked, disliked,
            };
    }
    
    @action ratesCommentsDecrease ( id: number, liked: boolean, disliked: boolean ) {
        this._postList[ this.current_index_comments ].comments[ id ].likes =
            {
                count: this._postList[ this.current_index_comments ].comments[ id ].likes.count - 1,
                liked, disliked,
            };
        
    }
    
    @action ratesSubCommentsIncrease ( id: number, liked: boolean, disliked: boolean ) {
        this.listOfSubcomments[ id ].likes = {
            count: this.listOfSubcomments[ id ].likes.count + 1,
            liked, disliked,
        };
    }
    
    @action ratesSubCommentsDecrease ( id: number, liked: boolean, disliked: boolean ) {
        this.listOfSubcomments[ id ].likes = {
            count: this.listOfSubcomments[ id ].likes.count - 1,
            liked, disliked,
        };
        // console.log ( 'AAAA', this.current_index_for_subcomment , id,liked,disliked );
    }
    
}

let StoreContext = createContext ( null );
const store      = new RootStore ();

export function InjectStoreContext ( { children }: any ) {
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}

//hook to use in components
export function useStore () {
    return useContext ( StoreContext );
}


