import { number } from "prop-types";
import { Link } from "react-router-dom";

const Pagenation1=({postPerPage,totalPost,paginate})=>{
    const pageNumbers=[];
    for(let i=1; i<=Math.ceil(totalPost/postPerPage);i++){
        pageNumbers.push(i);
    }
    return(
        <nav>
         <ul className="pagination">
             {
                 pageNumbers.map(number=>(
                     <li key={number} className="page-item">
                         <a onClick={()=>paginate(number)} href="#"className="page-link">
                             {number}
                         </a>
                     </li>
                 ))
             }
         </ul>

        </nav>
    )
}
export default Pagenation1;