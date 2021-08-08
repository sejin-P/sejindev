import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Index({ allPosts }) {
  const firstPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
      <>
        <Layout>
          <Head>
            <title>Next.js Blog Example with {CMS_NAME}</title>
          </Head>
          <Container>
            <Intro />
            {firstPost && (
                <HeroPost
                    title={firstPost.title}
                    coverImage={firstPost.coverImage}
                    date={firstPost.date}
                    author={firstPost.author}
                    slug={firstPost.slug}
                    excerpt={firstPost.excerpt}
                />
            )}
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </Container>
        </Layout>
      </>
  )
}
