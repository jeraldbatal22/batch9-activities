import './DepositTransaction.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
// import { useSelector } from 'react-redux'
// import AuthSlice from '../../../redux-slice/AuthSlice';

const DepositTransaction = () => {

  // const { auth, users } = useSelector((store) => store )
  // const user = users.map(user => user)
  // console.log(user)
  
  return (
    <>
      <div className="deposit-table">
        <h1>Users Deposit Transaction</h1>
        <table className="table-deposit">
          <thead>
            <tr>
              <th>#</th>
              <th>Amount Deposit</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Username</th>
              <th>Member Since</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td>#3123213412321</td>
              <td>$1000</td>
              <td>Jerald</td>
              <td>Batal</td>
              <td>Jerald</td>
              <td>March 21, 2021</td>
              <td>Active</td>
              <td><button><ThumbUpIcon/></button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default DepositTransaction
