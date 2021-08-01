import axios from 'axios'
import Head from 'next/head'
import MainLayout from '../../components/MainLayout'

export default function Home ({ posts }) {
  if(!posts) return null
  return (
    <MainLayout>
      <Head>
        <meta name="Next test" content="Next, test, reactjs"/>
        <title>Next js test page</title>
      </Head>
      <h2 className="p-5 text-gray-700 font-extrabold text-3xl text-center"> Home page</h2>
      { posts.map(item => (
        <div key={ item.id } className="container mx-auto p-4 border rounded-md my-2">
          <h3 className="text-2xl text-center font-extrabold mb-2 text-blue-700">#{item.id} { item.title.slice(0,1).toUpperCase() +  item.title.slice(1)}</h3>
          <p className="text-gray-400">{ item.body }</p>
        </div>
      ))}
    </MainLayout>
  )
}

export const getStaticProps = async (ctx) => {
  const posts = await axios('https://jsonplaceholder.typicode.com/posts?_limit=5')
  return { 
    props: {
      posts: posts.data
    }  
  }
}