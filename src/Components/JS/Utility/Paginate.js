import React from 'react'
import ReactPaginate from 'react-paginate';
import "../../Styles/Utility/Paginate.css"
export default function Paginate() {
const handlePageClick=()=>{};
  return (

    <div className='paginate'>
      <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            onPageChange={handlePageClick}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            pageCount={100}
            previousLabel="Previous"
            containerClassName={"pagination justify-content-center p-3"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
      />
    </div>
  )
}
