import styled from "styled-components"
import { db } from '../firebase'
import { enterRoom } from "../features/AppSilce"
import { useDispatch } from "react-redux"

const SideBarOption = ({ Icon, title, addChannelOption, id }) => {
  const dispatch = useDispatch()
  const addChannel = () => {
    const channelName = prompt('please enter the channel name')
    if (channelName) {
      db.collection('rooms').add({
        name: channelName,
      })
    }
  }

  const selectChannel = () => {
    if (id) {
      dispatch(enterRoom({
        roomId: id
      }))
    }
  }
  return (
    <SideBarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: "10px" }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SideBarOptionChannel>
          <span>#</span> {title}
        </SideBarOptionChannel>
      )}
    </SideBarOptionContainer>
  )
}

export default SideBarOption

const SideBarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  padding-left: 2px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
    background: #340e36;
  }

  >h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
  }
`

const SideBarOptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;

`