import { useRouter } from "next/router"
import Link from 'next/link'
import MainLayout from "../../components/MainLayout"

export default function Users ({users}) {
  const router = useRouter()
  const handleClick = (id) => {
    router.push(`/users/${id}`)
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

export async function getServerSideProps (context) { 
  const res = await fetch('http://localhost:4200/users')
  const users = await res.json()
  console.log('Uesers: ', users)
  return {
    props: {
      users
    }
  }
}