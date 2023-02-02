import React from 'react';

const Pagination = ({ totalPost, setCurrentPage, currentPage }) => {
     let pages = []

     for (let i = 1; i <= Math.ceil(totalPost / 3); i++) {
          pages.push(i)
     }

     const handleBack = () =>{
         currentPage > 1 ? setCurrentPage(currentPage - 1) : setCurrentPage(1)
     }
     const handleForward = () =>{
          currentPage < 4 ? setCurrentPage(currentPage + 1) : setCurrentPage(4)
     }
     return (
          <div  className='flex justify-center items-center'>
               <div onClick={handleBack} className={`px-3 py-1 cursor-pointer ${currentPage === 1 && 'text-red-500'}`}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4  ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
               </svg>

               </div>
               {
                    pages.map((page, i) => {
                         return <button key={i} onClick={() => setCurrentPage(page)} className={`px-3 py-1 ${page === currentPage && 'bg-red-500 text-white'}`}>{page}</button>
                    })
               }
               <div onClick={handleForward} className={`px-3 py-1 cursor-pointer ${currentPage === 4 && 'text-red-500'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>

               </div>
          </div>
     );
};

export default Pagination;