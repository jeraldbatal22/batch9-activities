import './History.css'
import { useSelector } from 'react-redux'

const History = () => {
  const { auth, users } = useSelector((store) => store )
  const user = users.find((user) => user.id === auth.authId)
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
                user.history.map((item, index) => (
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
        </>  
      ): <h1>NO HISTORY FOUND</h1> }
        
      </div>
    </>
  )
}

export default History


