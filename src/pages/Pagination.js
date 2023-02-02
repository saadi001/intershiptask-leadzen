import React from 'react';

const Pagination = ({totalPost}) => {
     let pages = []

     for(let i = 1; i <= totalPost/3; i++){
          pages.push(i)
     }
     return (
          <div>
               
          </div>
     );
};

export default Pagination;