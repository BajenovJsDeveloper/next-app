import Head from "next/head";
import Link from "next/link";

export default function MainLayout ({ children, title, loading }) {

  const loadingData = () => {
    console.log('Clicked')
    if(loading) loading()
  }
  return (
    <>
      <Head>
        <title>{ title } | Next JS</title>
      </Head>
      <nav className="flex flex-row justify-start bg-blue-700 text-white p-4" onClick={loadingData}>
        <Link href="/users"><a className="p-2">Users</a></Link>
        <Link href="/home"><a className="p-2 ml-4">Posts</a></Link>
      </nav>
      <main>
        { children }
      </main>
    </>
  )
}