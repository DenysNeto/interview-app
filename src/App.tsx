import React from 'react';

import { InjectStoreContext } from './stores/RootStore';
// @ts-ignore
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from './routes';

const App = () => {
    
    return (
        <>
            <InjectStoreContext>
                <Router>
                    <Switch>
                        {
                            routes.map ( ( element, index ) => (
                                <Route path={element.path} exact={element.exact} key={index}
                                       component={element.component}/>
                            ) )
                        }
                    </Switch>
                </Router>
            </InjectStoreContext>
        </>
    );
};

export default App;
