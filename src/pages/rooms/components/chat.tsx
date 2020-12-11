import { observer, useLocalObservable } from 'mobx-react';
import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom'
import { useInjectable } from '../../../hooks/di';
import { getStore } from '../../../ioc';
import { ApiService } from '../../../services/api-service';
import { ChatRoomStore } from '../store/room';

export const Chat = observer(({match}: RouteComponentProps<{ id: string }>) => {
    const room = useLocalObservable(() => getStore(ChatRoomStore));
    const api = useInjectable(ApiService)

    useEffect(() => api.getMessagesByRoomId(match.params.id), []);

    const messages = (
        room.messages
            .map(
                (message) =>
                    <span key={message.date + message.user}>{message.text}</span>
            )
    )


    return (
        <>
            <div>Chat id: {match.params.id}</div>


            {messages.length > 0 && (
                <div>
                    {messages}
                </div>
            )}
        </>
    );
})
