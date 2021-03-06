import {BaseContainer} from "./baseContainer";

export const Footer = () => {
    return (
        <footer className="bg-accent-1 border-t border-accent-2">
            <BaseContainer>
                <div className="py-28 flex flex-col lg:flex-row items-center">
                    <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
                        Statically Generated with Next.js.
                    </h3>
                    <div className="flex flex-col lg:flex-row justify-end items-center lg:pl-4 lg:w-1/2">
                        <a
                            href="https://github.com/sejin-P"
                            className="bg-black hover:bg-white hover:text-black border border-black inset-y-0 right-0 text-white font-bold py-3 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
                        >
                            Go to sejin-P github
                        </a>
                    </div>
                </div>
            </BaseContainer>
        </footer>
    )
}