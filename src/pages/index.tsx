import type { NextPage } from 'next';
import { useAlert } from 'react-alert';
import Head from 'next/head';

const Home: NextPage = () => {
  const alert = useAlert();

  return (
    <div className="font-inter">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="text-red-500 font-bold">Hello World</div>
        <button
          onClick={() => {
            alert.success('Yeyyy!');
            alert.error('Yeyyy!');
            alert.info('Yeyyy!');
          }}
        >
          Alert
        </button>
      </main>
    </div>
  );
};

export default Home;
