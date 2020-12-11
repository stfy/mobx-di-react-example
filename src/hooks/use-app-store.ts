import { AnnotationsMap, observable } from 'mobx';
import { useEffect, useRef, useState } from 'react';
import { container, InjectionToken } from 'tsyringe';

export function useAppStore<TStore extends Record<string, any>>(
    token: TStore,
    annotations?: AnnotationsMap<TStore, never>
): TStore {
    const ref = useRef<TStore>();


    useEffect(()  =>  {
        ref.current = container.resolve(token as unknown as InjectionToken<TStore>);
    }, [])

    return useState(() => observable(ref.current, annotations, { autoBind: true }))[0]
}
