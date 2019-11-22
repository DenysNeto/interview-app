import AddPostForm from './components/forms/AddPostForm';
import MainPageComponent from './components/MainPageComponent';
import NameInputForm from './components/forms/NameInputForm';
import React from 'react';
import CommentsList from './components/comments/Comments';
import ModalCustom from './components/Modal';
import SubComments from './components/comments/SubComments';

export const routes = [
    {
        path     : '/add_comment',
        exact    : false,
        component: () => <AddPostForm/>,
        
    },
    {
        path     : '/list_comments',
        exact    : true,
        component: () => <CommentsList/>,
    },
    {
        path     : '/main_page/add_comment/:index',
        exact    : true,
        component: () => <ModalCustom/>,
    },
    {
        path     : '/main_page/add_comment',
        exact    : true,
        component: () => <ModalCustom/>,
    },
    {
        path     : '/main_page',
        exact    : true,
        component: () => <MainPageComponent/>,
    },
    
    {
        path     : '/list_comments/comments/:index',
        exact    : true,
        component: () => <SubComments/>,
    },
    {
        path     : '/',
        exact    : true,
        component: () => <NameInputForm/>,
    },

];




