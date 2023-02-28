import { useEffect, useState } from 'react';
export function Fetch() {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch('https://fakestoreapi.com/products?limit=6')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
      
  }
  useEffect(() => {
    fetchData();
  }, [])


  return (
  <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr  key={index}>
              <>
                <th scope="row">{user.id}</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </>
            </tr>
          ))}

        </tbody>
      </table>
 
      </>
  );
}

