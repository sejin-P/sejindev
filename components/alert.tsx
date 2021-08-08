import React, {ReactNode} from 'react';
import cn from 'classnames';
import {BaseContainer} from "./baseContainer";

interface alertProps {
    preview: ReactNode;
}

export const Alert = ({preview}: alertProps) => {
    return (
        <div
            className={cn('border-b', {
                'bg-accent-7 border-accent-7 text-white': preview,
                'bg-accent-1 border-accent-2': !preview,
            })}
        >
            <BaseContainer children={
                <div className="py-2 text-center text-sm">
                    {preview ? (
                        <>
                            This page is a preview.{' '}
                            <a
                                href="/api/exit-preview"
                                className="underline hover:text-cyan duration-200 transition-colors"
                            >
                                Click here
                            </a>{' '}
                            to exit preview mode.
                        </>
                    ) : (
                        <>
                            The source code for this blog is{' '}
                            <a
                                href={`https://github.com/vercel/next.js/tree/canary/examples/blog-starter`}
                                className="underline hover:text-success duration-200 transition-colors"
                            >
                                available on GitHub
                            </a>
                            .
                        </>
                    )}
                </div>
            }/>
        </div>
    );
};
