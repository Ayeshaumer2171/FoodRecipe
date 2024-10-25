import React,{useState} from 'react';
import MealCards from './MealCards';

function MainPage() {

    const [data,setData]=useState();
    const [search,setSearch]=useState("");
  const [msg,setMsg]=useState("");

const myFunction = async()=>{

if(search==""){
setMsg("enter some detail");
}else{
    const get=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
   const jsonData=await get.json();
    console.log(jsonData.meals);
    setData(jsonData.meals);
    setMsg("");
   }
}

const handleinput=(e)=>{
    setSearch(e.target.value);
}
console.log(data);

  return (
    <>
    <h1 className='head'>Food Recipe App</h1>
    <div className="container" >
    <div className="searchBar">
    <input type="text" placeholder="enter your dish" onChange={handleinput}/>
    <button onClick={myFunction}>search</button>
    </div>
    <h3>{msg}</h3>
    <div>
<MealCards detail={data}/>
    </div>
    </div>
    </>
  );
}

export default MainPage;
