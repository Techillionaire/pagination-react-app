import React from 'react'

const Pagination = ({ postPerPage, totalPosts, paginate }) => {

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++){
        pageNumbers.push(i)
    }

  return (
    // <nav aria-label="Page navigation example">
    //     <ul className="pagination">
    //         {pageNumbers.map(number => (
    //             
    //         ))}
    //     </ul>
    // </nav>

    <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-end">
            {pageNumbers.map(number => (
                <li key={number} className="page-item"> 
                    <a onClick={() => paginate(number)} href='#' className="page-link"></a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Pagination