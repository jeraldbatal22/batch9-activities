import './BankInfo.css'
// import image from '../../../../images/myimg.png'
import { useSelector } from 'react-redux'

const BankInfo = () => {
  const { auth, users } = useSelector((store) => store )
  const user = users.find((user) => user.id === auth.authId)
  return (
    <div className="bank_info">
      <div className="account-balance">
        <div className="account-info">
          <h2>Account Name </h2>
          <h2>Account Number</h2>
          <h2>Member Since </h2>
        </div>
        <div className="account-info">
          <h3>{ user.firstname } { user.lastname }</h3>
          <h3>#{ user.id }</h3>
          <h3>
            {user.date}
            </h3>
        </div>
        <div className="your-balance">
          <div>
            <img
              src={user.profileImage}
              alt="jerald"
              style={{ width: '230px', borderRadius: '100%' }}
            />
          </div>
          <div>
            <h1>Balance </h1>
            <span>${user.balance}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BankInfo
