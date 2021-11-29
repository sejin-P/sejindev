import React, {ReactNode} from 'react';
import cn from 'classnames';
import {BaseContainer} from "./baseContainer";

interface alertProps {
    preview?: boolean;
}

export const Alert = ({preview}: alertProps) => {
    return (
        <div
            className={cn('border-b', {
                'bg-accent-7 border-accent-7 text-white': preview,
                'bg-accent-1 border-accent-2': !preview,
            })}
        >
            <BaseContainer>
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
                            A boy who interested in {' '}
                            <a
                                href={`https://go.dev/`}
                                className="underline hover:text-success duration-200 transition-colors text-blue-300"
                            >
                                go
                            </a>
                             -
                            <a
                                href={`https://grpc.io/`}
                                className="underline hover:text-success duration-200 transition-colors text-green-300"
                            >
                                grpc
                            </a>
                             -
                            <a
                                href={`https://kubernetes.io/`}
                                className="underline hover:text-success duration-200 transition-colors text-indigo-300"
                            >
                                k8s
                            </a>
                            .
                        </>
                    )}
                </div>
            </BaseContainer>
        </div>
    );
};

export default Alert;
