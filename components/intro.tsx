import Image from 'next/image'
import gopherImg from '../images/gopher.png'

const Intro = () => {
    return (
        <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
            <div className="flex-col md:flex-row flex items-center">
                <Image
                    src={ gopherImg }
                    className="min-w-full"
                    width={40}
                    height={40}
                />
                <a
                    href={"https://sejindev.com"}
                    className="text-4xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8">
                    Sejin-P
                </a>
            </div>
            <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
                A statically generated blog using{' '}
                <a
                    href="https://nextjs.org/"
                    className="underline hover:text-success duration-200 transition-colors"
                >
                    Next.js
                </a>{' '}
                and template {' '}
                <a
                    href="https://next-blog-starter.vercel.app/"
                    className="underline hover:text-success duration-200 transition-colors"
                >
                    blog starter
                </a>
            </h4>
        </section>
    )
}

export default Intro
