import axios from 'axios';
import { useState, useEffect } from 'react';
import "./card.css"

function Card() {

    const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  const username = sessionStorage.getItem("name");



  useEffect(()=>{
    axios.get("https://reactnd-books-api.udacity.com/books",
    { headers: { 'Authorization': 'whatever-you-want' },
  })
    .then(res=>{
      console.log(res)
      setData(res.data.books)
    })
    .catch(err=>{
      console.log("Status Code: "+err.response.status)
      if(err.response.status===404){
        console.log("Website not found")
      }
      else{
        console.log(err)
      }
    })
  },[])

  const handleChange = (event) => {
    setValue(event.target.value);
  };


  // const [result,setresult] = useState([])
 
  return (
    <div className='book-comtainer'>

         <h1 style={{color:"white"}} >Hello   {username} !</h1>


          <h1 id='search'>Search your favourite books here!</h1>
       <div className = "search-box">
      
        
          <input type = "text" className = "search-control" placeholder="Enter Book Name" id = "search-input" onChange={handleChange}/>
          
          
         
        </div>

{
    (value)?(
        <div style={{color:"white"}} >
          <h1>
          Results for your search
          </h1>
        </div>):(
        <div>
          
        </div>
        )


}
      <div id='book'>
      { data.filter((e) => {
        const searchedTerm = value.toLocaleLowerCase().trim();
        const fullName = e.title.toLocaleLowerCase();
              return (
                
                fullName.includes(searchedTerm) || fullName.startsWith(searchedTerm)  &&
                fullName !== searchedTerm 
              );
            })
            .map((item)=>{
        return(
          
          
            <div key={item.id} className="book-item">
            
            <div className='book-img'>
            <img src={item.imageLinks.smallThumbnail} alt=""></img>
            </div>
            
            <div className='book-name'>
            <h4>{item.title}</h4>
            </div>
            <div className='rating-price'>
            <h3>{item.averageRating}⭐</h3>
            <h4>Free</h4>
            </div>
          </div>
          
          
            
            
          
          
          
          
  )

  
            
            })
            
}


</div>

<div>
              <h1 style={{color:"white"}} >Sorry! we cannot find more items according to your search</h1>
            </div>



</div>
)
}


export default Card