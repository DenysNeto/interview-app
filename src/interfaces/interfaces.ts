import { RootStore } from '../stores/RootStore';

export interface IProps {
    store?: RootStore;
    history?: any
    
}

export interface IComments {
    comment: string;
    rates: number;
    sub_comments: string[];
}

export interface ICommentsComponent extends IProps {
    index: number;
    comment: IComments;
}

export interface IRatesProps extends IProps {
    likes: number;
    id_prop?: number;
}

export interface IPostCardInfo {
    title: string;
    image_link: string;
    alt_image: string;
    likes: number,
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
}
