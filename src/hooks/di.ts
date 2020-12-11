import { useState } from 'react';
import { container } from 'tsyringe';

type ClassProvider<A> = Function & { prototype: A };

export function useInjectable<A>(token: ClassProvider<A>): A {
    return useState(() => container.resolve<A>(token as any))[0]
}
