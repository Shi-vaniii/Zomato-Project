import React, { useState } from 'react'
import zomatologo from '../../Images/Zomato-logo2.png'
import {cityfoodData} from '../Cities/FoodData'

const ZomatoViewFood = () => {
  
  const [data, SetData] = useState()
  const [Narry, SetNarry]= useState(cityfoodData);

  const fun1=(e)=>{
    SetData(e.target.value)
    console.log(e.target.value)
  }

  const fun2=(e)=>{
     e.preventDefault()
     let Narry=cityfoodData.filter((str)=>{
      return str.text===data;
    })
    SetNarry(Narry);
    console.log(Narry);
  }
 
  return (
    <div>
      <div>
      <div className='container w-75 d-flex justify-content-between align-item-center '>
            <img style={{width:'8em'}} src={zomatologo} />
            <h3>Search here</h3>
      </div>
        
        <div className=''>
        <div className="container  d-flex justify-content-center align-item-center col-12 mt-4 m-4" >
           <form className="d-flex " style={{width:500}} role="search" >
             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="data" value={data} onChange={fun1}  />
             <button className="btn btn-outline-danger" type="submit" onClick={fun2} >Search</button>
           </form>
         </div>
         </div>

         <section className='container w-75 '>
          <h2 style={{fontWeight:400}} className=''>Best food in Bhopal</h2>
          <div className='row  d-flex justify-content-between  align-item-center m-2 '>

          {
            Narry.map((res)=>{
              return(
              <>
              <div className="card mt-4 " style={{width:300}}>
                <img src={res.img} class="card-img-top" alt="..."/>
                <div class="card-body">
                   <p class="card-text">{res.text}</p>
                </div>
              </div>
              </>)
            })
          }
          </div>
         </section>
      </div>
    </div>
  )
}

export default ZomatoViewFood



// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'

// const ZomatoViewFood = () => {
// const zomatologo ='https://w7.pngwing.com/pngs/367/814/png-transparent-zomato-logo.png'

//   return (
//     <div>
//         <div className='container w-75 d-flex justify-content-between align-item-center'>
//             <img style={{width:'8rem'}} src={zomatologo} />
//             <h1>Search here</h1>
//         </div>
//         <div className="container-fluid">
//           <form class="d-flex" role="search">
//             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//             <button className="btn btn-outline-success" type="submit">Search</button>
//           </form>
//         </div>
//     </div>
    
//   )
// }

// export default ZomatoViewFood