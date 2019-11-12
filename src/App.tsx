import { Provider } from 'mobx-react';
import React from 'react';

import store from './stores/RootStore';
// @ts-ignore
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MainPageComponent from './components/MainPageComponent';
import NameInputForm from './components/NameInputForm';
import AddPostForm from './components/AddPostForm';
import CommentsList from './components/postcard/Comments';




const App = () => {
    
    return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route exact path={'/add_comment'}>
                            <AddPostForm/>
                        </Route>
                        
                        <Route exact path={'/list_comments'}>
                            <CommentsList/>
                        </Route>
                        
                        <Route exact path={'/main_page'}
                               render={( routeProps: any ) => (
                                   <MainPageComponent history={routeProps}/>
                               )}
                        />
                        <Route exact path={'/'}>
                                <NameInputForm/>
                        </Route>
                    </Switch>
                </Router>
            </Provider>
    );
};

export default App;
