import { delay, inject, injectable } from 'tsyringe';
import { ChatRoomStore, Message, Room } from '../pages/rooms/store/room';

@injectable()
export class ApiService {
    constructor(
        @inject(delay(() => ChatRoomStore))
        private chatRoomStore: ChatRoomStore
    ) {
    }

    private cb = {
        onGetMessagesCallback: (messages: Message[]) => {

            this.chatRoomStore.messagesFetched(...messages)
        },

        onGetRoomsCallback: (messages: Room[]) => {

            this.chatRoomStore.receiveRooms(messages)
        }
    }

    public getMessagesByRoomId(roomId: string): void {

        setTimeout(() => {

            this.cb.onGetMessagesCallback([
                {
                    user: 'Tim',
                    date: (new Date).toISOString(),
                    text: 'hellow!'
                },

                {
                    user: 'Tim',
                    date: (new Date).toISOString(),
                    text: 'yeah!!'
                }
            ])
        }, 300);
    }

    public getMyRooms(): void {
        setTimeout(() => {
            this.cb.onGetRoomsCallback([
                {
                    id: 'work-room-1',
                    name: 'Комната'
                },
                {
                    id: 'work-room-2',
                    name: 'Комната 2'
                }
            ])
        }, 2000);
    }
}
