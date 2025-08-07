import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Doug Charles for WSR Board</title>
      </Head>
      <main>
        <h1>Welcome to the Doug Charles Campaign Site</h1>
        <img src="/headshot.jpg" alt="Doug Charles" width="200" />
        <img src="/wsr-logo.png" alt="WSR Logo" width="200" />
        <p>Thank you for visiting. Please use the forms to get involved.</p>
      </main>
    </div>
  );
}
