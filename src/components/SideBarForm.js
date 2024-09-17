import { useState } from 'react';

function SideBarForm({ onSubmit }){
    const [name,setName]=useState("");
    const [img,setImg]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        onSubmit({id:Date.now(),name:name,image:img,balance:0});
    }
    return <form className='form-add-friend' onSubmit={handleSubmit} >
        <label>🧑‍🤝‍🧑 Friend name</label>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
        <label>📷 Image Url</label>
        <input type='text' value={img} onChange={(e)=>setImg(e.target.value)}/>
        <button className='button'>Add</button>
        </form>
}

export default SideBarForm;