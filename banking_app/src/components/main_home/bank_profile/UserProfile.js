import './UserProfile.css'
import { useHistory } from 'react-router-dom'
import { errorMessage, successMessage } from '../../../utils/message'
import { useSelector } from 'react-redux'
import profileImage from '../../../images/myimg.png'
import { Avatar } from 'antd'
console.log(Avatar)
const UserProfile = () => {

  const history = useHistory()

  const { auth, users } = useSelector((store) => store )
  const user = users.find((user) => user.id === auth.authId)

  const logoutUser = (router) => {
    history.push(router)
    return successMessage('Successfully logout!', 'Thankyou For Visit')
  }

  const updateProfile = (router) => {
    history.push(router)
    return errorMessage('Error!', `Change Password is unavailble yet`)
  }

  const editProfile = (router) => {
    history.push(router)
    return errorMessage('Error!', `Update Profile is unavailble yet`)
  }

  return (
    <>
      <div className="user-profile">

        <div className="account_balance">
          <h1>Account Profile</h1>
        </div>

        <form>
          <div className="form_container">
            <div className="row_left">
              <label>Account Number</label>
              <h2>{user.id}</h2>
                <label>Firstname</label>
                <input
                  type="text"
                  placeholder="Account Number"
                  id="firstname"
                  name="firstname"
                  autoComplete="off"
                  defaultValue={user.firstname}
                />
                <label>Lastname</label>
                <input
                  type="text"
                  placeholder="Account Number"
                  defaultValue={user.lastname}
                  name="firstname"
                  autoComplete="off"
                />
            </div>
            <div className="row_right">
              <label>Username</label>
                <input
                  type="text"
                  placeholder="Account Number"
                  defaultValue={user.username}
                  id="firstname"
                  name="firstname"
                  autoComplete="off"
                />
                <label>Member Since</label>
                <h2>{user.date}</h2>
                <label>Account Status</label>
                <h2>Admin</h2>
            </div>
          </div>
           
            <div className="profile_picture">
              <img src={profileImage} alt=""/>
              {/* <Avatar size={64} icon={user}/> */}
              <input type="file" name="image-upload" id="input" hidden accept="image/*"/>
              <label htmlFor="input">Click Change profile</label>
            </div>

            <div className="account_balance">
              <h1>Total Balance</h1>
              <h2>${user.balance}</h2>
            </div>

            <div className="profile_btn">
              <button type="button" onClick={()=> editProfile('my-profile')}>Change Password</button>
              <button type="button" onClick={()=> updateProfile('my-profile')}>Save Update</button>
              <button onClick={() => logoutUser('')}>Logout</button>
            </div>
        </form>
      </div>
    </>
  )
}

export default UserProfile
