import styled from "styled-components"
import { Create, FiberManualRecord, Add, ExpandMore, InsertComment, Inbox, Drafts, BookmarkBorder, FileCopy, PeopleAlt, Apps, ExpandLess } from "@material-ui/icons"
import SideBarOption from "./SideBarOption"
import { useCollection } from 'react-firebase-hooks/firestore'
import { auth, db } from '../firebase'
import { useAuthState } from "react-firebase-hooks/auth"


const SideBar = () => {

  const [channels] = useCollection(db.collection('rooms'))

  const [user] = useAuthState(auth)

  return (
    <SideBarContainer>
      <SideBarHeader>
        <SideBarInfo>
          <h2>Avion School</h2>
          <h3>
            <FiberManualRecord />
            {user.displayName}
          </h3>
        </SideBarInfo>
        <Create />
      </SideBarHeader>
      <SideBarOption Icon={InsertComment} title="Threads" />
      <SideBarOption Icon={Inbox} title="Mentions & reactions" />
      <SideBarOption Icon={Drafts} title="Saved Items" />
      <SideBarOption Icon={BookmarkBorder} title="Channel Browser" />
      <SideBarOption Icon={PeopleAlt} title="People & user groups" />
      <SideBarOption Icon={Apps} title="Apps" />
      <SideBarOption Icon={FileCopy} title="File Browser" />
      <SideBarOption Icon={ExpandLess} title="Show Less" />
      <hr />
      <SideBarOption Icon={ExpandMore} title="Show More" />
      <hr />
      <SideBarOption Icon={Add} addChannelOption title="Add Channel" />

      {channels?.docs.map(doc => (
        <SideBarOption
          key={doc.id}
          id={doc.id}
          title={doc.data().name}
        />
      ))}

    </SideBarContainer>
  )
}

export default SideBar

const SideBarContainer = styled.div`
  background: var(--slack-color);
  color:#fff;
  flex: 0.3;
  border-top:1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;

  > hr {
    margin: 10px 0;
    border:1px solid #49274b;
  }
`

const SideBarHeader = styled.div`
  display: flex;
  padding: 13px;
  border-bottom: 1px solid #49274b;

 > .MuiSvgIcon-root {
    padding: 8px;
    background: #fff;
    color: #49274b;
    border-radius: 999px;
    font-size: 18px;
  }
`

const SideBarInfo = styled.div`
  flex: 1;

  >h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  >h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }
  >h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green ;
  }
/* > .MuiSvgIcon-root {
    color:green;
  } */

`