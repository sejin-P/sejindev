import {Alert} from "./alert";
import React, { ReactNode } from "react";
import {Meta} from "./meta";
import {Footer} from "./footer";

interface LayoutProps {
    preview?: boolean;
    children: ReactNode;
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
};

export default Layout;
