import SideBarForm from "./SideBarForm";
import { useState } from 'react';
function SideBar({selectedId , updateSelected ,friends ,setFriends}){
    
    const [isOpen,setIsOpen]=useState(false);
    
    const handleSubmit=(addedFriend)=>{
        setFriends(curFriends => [...curFriends,addedFriend]);
        setIsOpen(false);
    }

    return <div className="sidebar">
            <ul>
            {
                friends.map((friend,idx)=><li>
                <img src={friend.image} alt={friend.name} />
                <h3>{friend.name}</h3>
                {friend.balance === 0 && <p>You and {friend.name} are even</p>}
                {friend.balance > 0 && <p className='green'>{friend.name} owes you {friend.balance} LE</p>}
                {friend.balance < 0 && <p className="red">You owe {friend.name} {-friend.balance} LE</p>}
                {selectedId !== friend.id && <button className="button" onClick={()=>updateSelected(friend.id)}>select</button>}
                {selectedId === friend.id && <button className="button" onClick={()=>updateSelected(null)}>close</button>}
                </li>)
            }
            </ul>
            {!isOpen &&<button className="button" onClick={()=>setIsOpen(op=>!op)}>add friend</button>}
            {isOpen && <>
                <SideBarForm onSubmit={handleSubmit}/>
                <button className="button" onClick={()=>setIsOpen(op=>!op)}>close</button>
            </>}
        </div>
}

export default SideBar;