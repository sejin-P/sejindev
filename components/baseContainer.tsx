import React, { ReactNode } from 'react';

interface Props {
    children: JSX.IntrinsicElements | JSX.IntrinsicAttributes;
}

export const BaseContainer = ({children}: Props ) => {
    return <div className="container mx-auto px-5">{children}</div>
};
