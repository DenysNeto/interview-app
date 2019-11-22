import { RootStore } from '../stores/RootStore';

export interface IProps {
    store?: RootStore;
    history?: any
    
}

export interface IComments {
    comment: string;
    author: string,
    timestamp: Date,
    likes: ILikes;
    sub_comments: ISubComments[];
}

export interface ISubComments {
    likes: ILikes,
    timestamp: Date,
    comment: string,
    author: string,
    
}

export interface ICommentsComponent extends IProps {
    index: number;
    comment: IComments;
}

export interface IRatesProps extends IProps {
    id_prop?: number;
}

export interface ILikes {
    count: number;
    liked: boolean;
    disliked: boolean;
}

export interface IPostCardInfo {
    title: string;
    image_link: string;
    image_comment : string;
    alt_image: string;
    likes: ILikes,
    timestamp: Date,
    username: string;
    comments_count: number;
    comments: IComments[];
}

export interface IPostCardComponent extends IProps {
    payload: IPostCardInfo;
    index: number;
}

export interface IPostCardDetails extends IProps {
    index: number;
    title: string;
    timestamp: Date,
    username: string;
    comments_count: number;
    picture_description: string
}
