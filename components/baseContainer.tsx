import React, { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export const BaseContainer = ({children}: Props ) => {
    return <div className="container mx-auto px-5">{children}</div>
};

export default BaseContainer;
