import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from './Loading';
import Pagination from './Pagination';

const Users = () => {
     const [open, setOpen] = useState(false)
     const [toggleState, setToggleState] = useState();
     const [currentPage, setCurrentPage] = useState(1);


     const hanldeUser = (toggleId) => {
          setToggleState(toggleId)
          setOpen(!open)
     }
     const { data: users = [], isLoading } = useQuery({
          queryKey: ["users"],
          queryFn: async () => {
               const res = await fetch('https://jsonplaceholder.typicode.com/users')
               const data = await res.json()
               // console.log(data)
               return data;
          }
     })

     const lastPostIndex = currentPage * 3;
     const firstPostIndex = lastPostIndex - 3;
     const currentPosts = users.slice(firstPostIndex, lastPostIndex)

     if (isLoading) {
          return <div className='w-full h-screen flex justify-center items-center'>
               <Loading></Loading>
          </div>
     }
     return (
          <div className='w-full min-h-screen bg-slate-300/30'>
               <div className='mx-2 sm:mx-6 md:mx-12 lg:max-w-5xl lg:mx-auto py-5'>
                    {
                         currentPosts.map(user => <div key={user.id} className='my-8 py-5 md:py-8 px-3 md:px-8 bg-white rounded-md shadow-sm'>
                              <div className=' grid grid-cols-2 gap-4  sm:grid-cols-5 items-center w-full '>
                                   <div className='text-sm'>{user?.name}</div>
                                   <div>
                                        <p className='font-semibold text-sm sm:text-base'>CONTACT</p>
                                        <p className='md:text-sm text-xs'>{user?.phone}</p>
                                   </div>
                                   <div>
                                        <p className='font-semibold text-sm sm:text-base'>CITY</p>
                                        <p className='md:text-sm text-xs'>{user?.address?.city}</p>
                                   </div>
                                   <div>
                                        <p className='font-semibold text-sm sm:text-base'>STREET</p>
                                        <p className='md:text-sm text-xs'>{user?.address?.street}</p>
                                   </div>
                                   <div className='sm:text-center'><button onClick={() => hanldeUser(user.id)} className='bg-red-600 text-white px-4 py-2 rounded-2xl text-sm font-semibold'>{open && toggleState === user.id ? 'Hide details' : 'View details'}</button></div>

                              </div>
                              <div className={toggleState === user.id && open ? 'block' : 'hidden'}>

                                   <div className='border mt-5 rounded-md w-full p-5 md:px-12 md:py-8'>
                                        <p className='font-semibold text-sm'>Description</p>
                                        <p className='text-sm mb-4'>{user.company.name + ' company owner'} </p>
                                        <div className=' grid grid-cols-1 md:grid-cols-2'>
                                             <div>
                                                  <p className='font-semibold text-sm'>Contact Person</p>
                                                  <p className='text-sm mb-2'>{user.name}</p>
                                                  <p className='font-semibold text-sm'>Username</p>
                                                  <p className='text-sm mb-2'>{user.username}</p>
                                                  <p className='font-semibold text-sm'>Emails</p>
                                                  <p className='text-sm mb-2'>{user.email}</p>
                                                  <p className='font-semibold text-sm'>Phones</p>
                                                  <p className='text-sm mb-2'>{user.phone}</p>
                                             </div>
                                             <div>
                                                  <p className='font-semibold text-sm'>Street</p>
                                                  <p className='text-sm mb-2'>{user.address.street}</p>
                                                  <p className='font-semibold text-sm'>City</p>
                                                  <p className='text-sm mb-2'>{user.address?.city}</p>
                                                  <p className='font-semibold text-sm'>Zip code</p>
                                                  <p className='text-sm mb-2'>{user.address.zipcode}</p>
                                                  <p className='font-semibold text-sm'>Website</p>
                                                  <p className='text-sm mb-2'>{user?.website}</p>
                                             </div>
                                        </div>
                                   </div>

                              </div>
                         </div>)
                    }
                    
                         <Pagination
                              totalPost={users.length}
                              setCurrentPage={setCurrentPage}
                              currentPage={currentPage}
                         />
                   

               </div>
          </div>
     );
};

export default Users;