import { useRouter } from "next/router"
import MainLayout from "../../components/MainLayout"
import { withLoading } from "../../utils/hooks"

function Users ({users, loading}) {
  const router = useRouter()
  const handleClick = (id) => {
    router.push(`/users/${id}`)
    loading(true)
  }
  return (
    <MainLayout>
      <h1 className="text-2xl"></h1>
      <hr/>
      <ul className="user-containre">
        {
          users.map(user => (
              <a key={user.id}>
                <li className="user-item border-2 border-green-500 m-2 rounded-md p-4 hover:bg-green-100" 
                  onClick={() => handleClick(user.id)}
                >
                  <p className="font-medium text-green-800">Name: {user.name}</p>
                  <p className="">Position: {user.about}</p>
                  <p className="">Age: {user.age}</p>
                </li>
              </a>
          ))
        }
      </ul>
    </MainLayout>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:4200/users')
  const users = await res.json()
  console.log('Uesers: ', users)
  return {
    props: {
      users
    }
  }
}

export default withLoading(Users)
