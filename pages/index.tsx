import Head from 'next/head'
import {Layout} from "../components/layout";
import {BaseContainer} from "../components/baseContainer";
import Intro from "../components/intro";
import PostSummary from '../types/postSummary';
import FirstPost from '../components/fisrt-post';

type Props = {
    allPosts: PostSummary[]
}

const Index = ({ allPosts }: Props) =>  {
    if (!allPosts) return null;
    const firstPost = allPosts[0]
    const otherPosts = allPosts.slice(1)

    return (
      <>
        <Layout>
          <Head>
            <title>Next Blog of sejin-P</title>
          </Head>
          <BaseContainer>
            <Intro />
            <FirstPost {...firstPost} />
          </BaseContainer>
        </Layout>
      </>
    )
}

export default Index
