import Head from 'next/head'
import {Layout} from "../components/layout";
import {BaseContainer} from "../components/baseContainer";
import Intro from "../components/intro";

const Index = () =>  {
  return (
      <>
        <Layout>
          <Head>
            <title>Next Blog of sejin-P</title>
          </Head>
          <BaseContainer>
            <Intro />
          </BaseContainer>
        </Layout>
      </>
  )
}

export default Index
