
import { number } from "prop-types";
import { Link } from "react-router-dom";

const Pagenation1=({postPerPage,totalPost,paginate,previousPage,nextPage})=>{
    const pageNumbers=[];
    for(let i=1; i<=Math.ceil(totalPost/postPerPage);i++){
        pageNumbers.push(i);
    }

    return(
        <nav>
         <ul className="pagination">
            
         <button className='text-primary mb-3' onClick={previousPage} >
               Prev
            </button>
          
             {
                 pageNumbers.map(number=>(
                     <li key={number} className="page-item">
                         <a onClick={()=>paginate(number)} href="#"className="page-link">
                             {number}
                         </a>
                     </li>
                 ))
             }
               <button className='text-primary mb-3' onClick={nextPage} >
               Next
            </button>
         </ul>
  
        
 
        </nav>
    )
}
export default Pagenation1;