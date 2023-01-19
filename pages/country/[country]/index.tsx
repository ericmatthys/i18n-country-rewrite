import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async (
  context
) => {
  if (typeof context.params?.country !== 'string') {
    throw new Error('Missing country code');
  }

  return {
    props: {
      country: context.params.country,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export default function Home({ country }: { country: string}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <h1>
        {country}
      </h1>
    </>
  )
}
