import { action, observable } from 'mobx';
import { injectable } from 'tsyringe';

export type Message = {
    text: string;
    user: string;
    date: string;
}

export type Room = {
    name: string
    id: string;
}

@injectable()
export class RoomListStore {


}

@injectable()
export class ChatRoomStore {
    @observable
    rooms: Room[] = []

    @observable
    messages: Message[] = [];

    @observable
    lastViewed: string = 'asdas@as123';

    @action
    receiveRooms = (rooms: Room[]) => {
        this.rooms = rooms
    }

    @action
    messagesFetched(...msg: Message[]) {
        this.messages = msg;
    }

    @action
    setLastViewed(id: string) {
        this.lastViewed = id;
    }
}



