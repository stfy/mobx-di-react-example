import { makeAutoObservable } from 'mobx';
import { container, InjectionToken, Lifecycle, Provider } from 'tsyringe'
import RegistrationOptions from 'tsyringe/dist/typings/types/registration-options';
import { ChatRoomStore, RoomListStore } from './pages/rooms/store/room';

const STORE_PROVIDERS = [
    {token: ChatRoomStore, useClass: ChatRoomStore, options: {lifecycle: Lifecycle.Singleton}},
    {token: RoomListStore, useClass: RoomListStore, options: {lifecycle: Lifecycle.Singleton}}
];

(function bootstrapIoC() {
    function storeProviders(providers: Array<{ token: InjectionToken, options?: RegistrationOptions; } & Provider>) {
        providers.forEach(({token, options, ...provider}) => {
            container.register(token, provider as any, options);

            container.afterResolution(
                token,
                (_, res) => {
                    makeAutoObservable(res);
                },
                {frequency: 'Once'}
            )

        })
    }


    storeProviders(STORE_PROVIDERS);
})();

export function getStore<A extends any>(store: Function & { prototype: A }): A {
    return container.resolve<A>(store as any);
}
