import Head from 'next/head'
import {Layout} from "../components/layout";
import {CMS_NAME} from "../lib/constants";
import {BaseContainer} from "../components/baseContainer";
import Intro from "../components/intro";

const Index = () =>  {
  return (
      <>
        <Layout>
          <Head>
            <title>Next.js Blog Example with {CMS_NAME}</title>
          </Head>
          <BaseContainer>
            <Intro />
          </BaseContainer>
        </Layout>
      </>
  )
}

export default Index
