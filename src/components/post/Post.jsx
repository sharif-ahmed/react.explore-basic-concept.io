import { useEffect, useState } from "react"

export default function Post() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div>
            {
                users.map((user)=>{
                    console.log(user.name);
                    <p>Name : {user.name}</p>
                })
            }
        </div>
    )
}