import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { RoomsListPage } from './pages/rooms/page';

export const Routes = () => {
    return (
        <Switch>
            <Route path="/chat" component={RoomsListPage}/>

            <Route
                exact
                path="/"
                render={() => <Redirect to={'/chat'}/>}
            />
        </Switch>
    );
}
