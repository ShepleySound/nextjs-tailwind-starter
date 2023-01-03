import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js + Tailwind CSS</title>
        <meta
          name='description'
          content='A starter project for Next.js and Tailwind CSS'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div className='bg-white py-24 sm:py-32 lg:py-40'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <div className='sm:text-center'>
              <h2 className='text-lg font-semibold leading-8 text-indigo-600'>
                Next.js + Tailwind CSS
              </h2>
              <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                This is a simple starter project
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
