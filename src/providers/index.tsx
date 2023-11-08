import type { FC, JSX, PropsWithChildren } from 'react';
import { PrimeReactAppProvider } from './prime_react.provider';

export const Providers: FC<PropsWithChildren> = ({
    children,
}: PropsWithChildren): JSX.Element => {
    return <PrimeReactAppProvider>{children}</PrimeReactAppProvider>;
};
