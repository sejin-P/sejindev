import Head from 'next/head'
import {Layout} from "../components/layout";
import {CMS_NAME} from "../lib/constants";
import {BaseContainer} from "../components/baseContainer";

export default function Index({ allPosts }) {
  const firstPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
      <>
        <Layout>
          <Head>
            <title>Next.js Blog Example with {CMS_NAME}</title>
          </Head>
          <BaseContainer>
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
          </BaseContainer>
        </Layout>
      </>
  )
}
