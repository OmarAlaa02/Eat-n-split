
import {useState} from 'react';
import SideBar from './components/SideBar';
import Form from './components/Form';

function App(){
  const [friends,setFriends]=useState([
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ])
  const [selectId,setSelectedID]=useState(null);  

  const handleFriendUpdate=(updatedFriend)=>{
    console.log(updatedFriend);
    setFriends(curFriends =>{
      return curFriends.map(friend=> friend.id === updatedFriend.id?{...friend,balance:updatedFriend.balance}:friend);
    })
    setSelectedID(null);
  }
  return <div className='app'>
      <SideBar selectedId={selectId} updateSelected={setSelectedID} friends={friends} setFriends={setFriends}/>
      {selectId!==null && <Form friend={friends.find(friend => friend.id === selectId)} updateFriend={handleFriendUpdate}/>}
      
    </div>
}

export default App;
