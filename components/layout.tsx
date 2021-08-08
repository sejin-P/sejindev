import {Alert} from "./alert";
import React, { ReactNode } from "react";
import {Meta} from "./meta";
import {Footer} from "./footer";

interface LayoutProps {
    preview: ReactNode;
    children: JSX.IntrinsicElements | JSX.IntrinsicAttributes;
}

export const Layout = ({ preview, children }: LayoutProps) => {
    return (
        <>
            <Meta />
            <div className="min-h-screen">
                <Alert preview={preview} />
                <main>{children}</main>
            </div>
            <Footer />
        </>
    )
}