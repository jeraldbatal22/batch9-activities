import './History.css'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import HistoryPagination from './HistoryPagination'
const History = () => {
  const { auth, users } = useSelector((store) => store )
  const user = users.find((user) => user.id === auth.authId)

  const [currenPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(5)

  const indexOflastPost = currenPage * postsPerPage;
  const indexOfFirstPost = indexOflastPost - postsPerPage
  const currentPosts = user.history.slice(indexOfFirstPost, indexOflastPost)
  console.log(currentPosts)
  const paginate = (pagenumber) => {
    setCurrentPage(pagenumber)
  }
  return (
    <>
      <div className="history_div">
      {user.history.length ? (
        <>
          <h1>HISTORY</h1>
          <table className="deposit-histoy">
            <thead>
              <tr>
                <th>Type of transaction</th>
                <th>Date and Time</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {
                currentPosts.map((item, index) => (
                  <tr key={index}>
                    <td>
                      {
                      (item.action === 'sendMoney') ? 
                        `Send Money to ${item.receiver.firstname} ${item.receiver.lastname} # ${item.receiver.id}` 
                        : (item.action === 'recievedMoney') ? `Recieved Money from ${item.sender.firstname} ${item.sender.lastname} # ${item.sender.id}` : item.action
                      } 
                    </td>
                    <td>{item.date}</td>
                    <td>${item.amount}</td>
                  </tr>
                ))
              }

            </tbody>

          </table>

        <HistoryPagination postsPerPage={postsPerPage} totalPosts={user.history.length} paginate={paginate}/>

        </>  
      ): <h1>NO HISTORY FOUND</h1> }
        
      </div>
    </>
  )
}

export default History


