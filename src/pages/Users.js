import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

const Users = () => {
     const [open, setOpen] = useState(false)
     const [toggleState, setToggleState] = useState();
     // console.log(toggleState)

     const hanldeUser = (toggleId) => {
          setToggleState(toggleId)
          setOpen(!open)
     }
     const { data: users = [] } = useQuery({
          queryKey: ["users"],
          queryFn: async () => {
               const res = await fetch('https://jsonplaceholder.typicode.com/users')
               const data = await res.json()
               console.log(data)
               return data;
          }
     })
     return (
          <div className='w-full bg-slate-300/30'>
               <div className='mx-2 sm:mx-6 md:mx-12 lg:max-w-5xl lg:mx-auto py-5'>
                    {
                         // users.map(user => <div key={user.id} className='flex  my-8 py-8 px-5 justify-between items-center bg-white rounded-md shadow-sm '>
                         //      <div className='text-sm'>{user?.name}</div>
                         //      <div>
                         //           <p className='font-semibold'>CONTACT</p>
                         //           <p className='text-sm'>{user?.phone}</p>
                         //      </div>
                         //      <div>
                         //           <p className='font-semibold'>CITY</p>
                         //           <p>{user?.address?.city}</p>
                         //      </div>
                         //      <div>
                         //           <p className='font-semibold'>STREET</p>
                         //           <p>{user?.address?.street}</p>
                         //      </div>
                         //      <div><button className='bg-yellow-500 px-3 py-1 rounded-md'>details</button></div>
                         // </div>)
                    }
                    {
                         //      users.map(user=> <div className="overflow-x-auto  md:pl-12 sm:pl-5 bg-white rounded-md shadow-sm my-8 py-3 ">
                         //      <table className="table-fixed w-full my-3 ">
                         //        {/* <!-- head --> */}
                         //        <thead>
                         //          <tr>
                         //            <th></th>
                         //            <th className='text-start'>CONTACT</th>
                         //            <th className='text-start'>CITY</th>
                         //            <th className='text-start'>STREET</th>
                         //          </tr>
                         //        </thead>
                         //        <tbody>
                         //          {/* <!-- row 1 --> */}
                         //          <tr className=''>
                         //            <td className='text-sm'>{user?.name}</td>
                         //            <td className='text-sm'>{user?.phone}</td>
                         //            <td className='text-sm'>{user?.address?.city}</td>
                         //            <td className='text-sm'>{user?.address?.street}</td>
                         //            <td><button onClick={()=>setOpen(!open)} className='bg-yellow-500 px-3 py-1 rounded-md'>Details</button></td>
                         //          </tr>

                         //        </tbody>
                         //      </table>
                         //      <div>
                         //          {
                         //           open && <div>
                         //                <p></p>
                         //           </div>
                         //          }
                         //      </div>
                         //    </div>)
                    }
                    {
                         users.map(user => <div className='my-8 py-5 md:py-8 px-3 md:px-8 bg-white rounded-md shadow-sm'>
                              <div className=' grid grid-cols-5 items-center w-full '>
                                   <div className='text-sm'>{user?.name}</div>
                                   <div>
                                        <p className='font-semibold'>CONTACT</p>
                                        <p className='text-sm'>{user?.phone}</p>
                                   </div>
                                   <div>
                                        <p className='font-semibold'>CITY</p>
                                        <p className='text-sm'>{user?.address?.city}</p>
                                   </div>
                                   <div>
                                        <p className='font-semibold'>STREET</p>
                                        <p className='text-sm'>{user?.address?.street}</p>
                                   </div>
                                   <div className='text-center'><button onClick={() => hanldeUser(user.id)} className='bg-yellow-500 px-4 py-2 rounded-md text-sm font-semibold'>Details</button></div>

                              </div>
                              <div className={toggleState === user.id && open ? 'inline-block' : 'hidden'}>
                                   {
                                        <div className='border'>
                                             <p>hello</p>
                                        </div>
                                   }
                              </div>
                         </div>)
                    }

               </div>
          </div>
     );
};

export default Users;