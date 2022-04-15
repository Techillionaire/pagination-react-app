import ReactPaginate from 'react-paginate';
import './App.css';
import React, { useState, useEffect } from 'react'

const perPage = 6;



const App = () => {

  const [ currentPage, setCurrentPage ] = useState(0);
  const [ data, setData ] = useState([]);

  useEffect(() =>{
    fetchData();
  }, [])

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res) => res.json())
    .then((data) => {
      setData(data);
    })
  }

  const handlePageClick = ({ selected: selectedPage }) => {
    console.log('selectedPage', selectedPage);
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * perPage;

  const currentPageData = data
    .slice(offset, offset + perPage)
    .map(( res, index ) => <img key={index} src={res.thumbnailUrl} alt='' />)

  const pageCount = Math.ceil(data.length / perPage);

  return (
    <div className='App'>
      <h1>Projects</h1>
      {currentPageData}

      <ReactPaginate 
        previousLabel={' <- Previous'}
        nextLabel = {'Next ->'}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        previousLinkClassName={'paginationLink'}
        nextClassName={'paginationLink'}
        disabledClassName={'paginationLinkDisabled'}
        activeClassName={'paginationLinkActive'}
      />
    </div>
  )
}

export default App