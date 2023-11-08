import { PrimeReactProvider } from 'primereact/api';
import type { FC, JSX, PropsWithChildren } from 'react';

export const PrimeReactAppProvider: FC<PropsWithChildren> = ({
    children,
}: PropsWithChildren): JSX.Element => {
    return <PrimeReactProvider>{children}</PrimeReactProvider>;
};
