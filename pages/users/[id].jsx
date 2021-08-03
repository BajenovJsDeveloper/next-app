import { useRouter } from "next/router"
import MainLayout from "../../components/MainLayout"
import { withLoading } from "../../utils/hooks"

function User ({user, loading}) {
  const router = useRouter()
  console.log('Render...', user)
  const handleClick = () => {
    router.push('/users')
    loading()
  }

  return (
    <MainLayout loading={loading}>
      <h1 className="text-3xl">User {router.query.id}</h1>
      <hr/>
      <div className="user-item border-2 border-green-500 m-2 rounded-md p-4">
        <p className="font-medium text-green-800">Name: {user.name}</p>
        <p className="">Position: {user.about}</p>
        <p className="">Age: {user.age}</p>
      </div>
      <a href="#" onClick={handleClick}>Go back</a>
    </MainLayout>
  )
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:4200/users')
  const users = await res.json()
  return {
    paths: users.map(u => ({params: { id: u.id.toString() } })),
    fallback: true
  }
}

export async function getStaticProps ({params}) {
  const res = await fetch('http://localhost:4200/users/' + params.id)
  const user = await res.json()
  return {
    props: { user } 
  }
}

export default withLoading(User)


// User.getInitialProps = async function (ctx) {
//   console.log('C:', ctx)
//   if(!ctx.req) return { props: { user: null } }
//   const res = await fetch('http://localhost:4200/users/' + ctx.query.id)
//   const user = await res.json()
//   return {
//     user
//   }
// }