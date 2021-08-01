import { useRouter } from "next/router"
import MainLayout from "../../components/MainLayout"

export default function User ({user}) {
  const router = useRouter()
  console.log('Render...', user)
  if(!user) return <MainLayout >Loading...</MainLayout>
  return (
    <MainLayout >
      <h1 className="text-3xl">User {router.query.id}</h1>
      <hr/>
      <div className="user-item border-2 border-green-500 m-2 rounded-md p-4">
        <p className="font-medium text-green-800">Name: {user.name}</p>
        <p className="">Position: {user.about}</p>
        <p className="">Age: {user.age}</p>
      </div>
    </MainLayout>
  )
}

export async function getServerSideProps (ctx) {
  console.log('C:', !!ctx.req)
  if(!ctx.req) return { props: { user: null } }
  const res = await fetch('http://localhost:4200/users/' + ctx.query.id)
  const user = await res.json()
  return {
    props: { user } 
  }
}