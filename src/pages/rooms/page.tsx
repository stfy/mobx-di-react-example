import { observer, useLocalObservable } from 'mobx-react';
import React, { useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import { useInjectable } from '../../hooks/di';
import { getStore } from '../../ioc';
import { ApiService } from '../../services/api-service';
import { Chat } from './components/chat';
import { ChatRoomStore } from './store/room';


export const RoomsListPage = observer(({match}) => {
    const rooms = useLocalObservable(() => getStore(ChatRoomStore));
    const api = useInjectable(ApiService);

    useEffect(() => api.getMyRooms(), [])

    const navigation = (
        <div>
            {rooms.rooms.map((room) => (
                <div key={room.id}>
                    <Link to={`/chat/${room.id}`}>{room.name}</Link>
                </div>
            ))}
        </div>
    );


    return (
        <>
            <div>Chat list</div>

            {navigation}

            <Route
                path={`${match.url}/:id`}
                component={Chat}/>
        </>
    );
});
