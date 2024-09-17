import { useState } from 'react';
function Form({friend,updateFriend}){
    const [bill,setBill]=useState('');
    const [yourExpenses,setYourExpenses]=useState('');
    const [select,setSelect]=useState('you');

    console.log(friend);

    const myFriendExpenses=bill-yourExpenses;

    const handleSubmit=(e)=>{
        e.preventDefault();
        let updatedFriend={...friend};
        updatedFriend.balance+=(select === 'you'? myFriendExpenses:-yourExpenses);
        updateFriend(updatedFriend);
    }

    return <form className="form-split-bill" onSubmit={handleSubmit}>
        <h2>Split a bill with {friend.name}</h2>

        <label>💵Bill value</label>
        <input type="text" value={bill} onChange={(e)=>setBill(Number(e.target.value))}/>
        
        <label>🫵your expense</label>
        <input type="text" value={yourExpenses} onChange={(e)=>setYourExpenses(Number(e.target.value))}/>
        
        <label>🧑‍🤝‍🧑{friend.name} expense</label>
        <input type="text" value={myFriendExpenses}/>

        <label>🤑who is paying</label>
        <select value={select} onChange={(e)=>setSelect(e.target.value)}>
            <option value='you'>You</option>
            <option value='your friend'>{friend.name}</option>
        </select>

        <button className="button">Split bill</button>

    </form>
}

export default Form;