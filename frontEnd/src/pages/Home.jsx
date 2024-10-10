import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../componets/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const Home = () => {
  const [books, setbooks] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);

    axios
      .get('http://localhost:3003/books')
      .then((res) => {
        setbooks(res.data.data);
        setloading(false);
      })
      .catch((error) => {
        console.log(error)
        setloading(false);
      })
  }, [])

  return (
    <div className="p-4 ">
      
      {loading ? (<Spinner />) : (

          <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {
            books.map((book, index) => {
              return (

                <div class=" m-4 relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-md w-86">
                  <div class="relative flex justify-center mt-1 overflow-hidden text-white rounded-md">
                    <img className='text-slate-950 h-70'
                     src={ book.imgUrl || 'data:image/png;base64,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'}  alt="img not found"
                     onError={(e) => { e.target.src =book.imgUrl; }} 
                     />
                  </div>
                  <div class="p-5">
                    <div className="mb-2 flex justify-between">
                      <h6 className="text-slate-800 text-xl font-semibold">{book.title}</h6>
                      <div class="flex items-center align-bottom">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                          class="w-5 h-5 text-yellow-600">
                          <path fill-rule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clip-rule="evenodd"></path>
                        </svg>
                        <span class="text-slate-600 ml-1.5">{book.rating}</span>
                      </div>

                    </div>
                    <div className="mt-1">
                      <p className="text-xs uppercase font-bold text-slate-500">-{book.author}</p>
                    </div>
                    <div className="mt-1">
                      <p class="block text-slate-600 leading-normal font-light mb-4 max-w-lg"><b>Publish Year</b> - {book.publishYear}</p>
                    </div>


                    <p class="text-slate-600 leading-normal font-light">
                      {book.review}
                    </p>
                  </div>

                  <div class="group my-3 inline-flex flex-wrap justify-center align-bottom items-center gap-2">

                    <Link to={`/books/details/${book._id}`}>

                      <button class="rounded-full pointer-events-none border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256"><path fill="currentColor" d="M245.48 125.57c-.34-.78-8.66-19.23-27.24-37.81C201 70.54 171.38 50 128 50S55 70.54 37.76 87.76c-18.58 18.58-26.9 37-27.24 37.81a6 6 0 0 0 0 4.88c.34.77 8.66 19.22 27.24 37.8C55 185.47 84.62 206 128 206s73-20.53 90.24-37.75c18.58-18.58 26.9-37 27.24-37.8a6 6 0 0 0 0-4.88M128 194c-31.38 0-58.78-11.42-81.45-33.93A134.8 134.8 0 0 1 22.69 128a134.6 134.6 0 0 1 23.86-32.06C69.22 73.42 96.62 62 128 62s58.78 11.42 81.45 33.94A134.6 134.6 0 0 1 233.31 128C226.94 140.21 195 194 128 194m0-112a46 46 0 1 0 46 46a46.06 46.06 0 0 0-46-46m0 80a34 34 0 1 1 34-34a34 34 0 0 1-34 34"/></svg>
                      </button>
                    </Link>

                    <Link to={`/books/edit/${book._id}`}>
                      <button class="rounded-full pointer-events-none border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M13 3a1 1 0 0 1 .117 1.993L13 5H5v14h14v-8a1 1 0 0 1 1.993-.117L21 11v8a2 2 0 0 1-1.85 1.995L19 21H5a2 2 0 0 1-1.995-1.85L3 19V5a2 2 0 0 1 1.85-1.995L5 3zm6.243.343a1 1 0 0 1 1.497 1.32l-.083.095l-9.9 9.899a1 1 0 0 1-1.497-1.32l.083-.094z"/></g></svg>
                      </button>
                    </Link>

                    <Link to={`/books/delete/${book._id}`}>
                      <button class="rounded-full pointer-events-none border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.616 20q-.672 0-1.144-.472T6 18.385V6H5V5h4v-.77h6V5h4v1h-1v12.385q0 .69-.462 1.153T16.384 20zM17 6H7v12.385q0 .269.173.442t.443.173h8.769q.23 0 .423-.192t.192-.424zM9.808 17h1V8h-1zm3.384 0h1V8h-1zM7 6v13z"/></svg>
                      </button>
                    </Link>

                  </div>

                  
                </div>
              )
            }
            )
          }
          </div>
        // </table>

      )}
    </div>
    //Upper code is for Home segment........................................
    //This is the code for Login page........
    //     <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    //   <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    //     <img className="mx-auto h-10 w-auto" src="Enter your url hewar" alt="Your Company"/>
    //     <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    //   </div>

    //   <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    //     <form className="space-y-6" action="#" method="POST">
    //       <div>
    //         <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
    //         <div className="mt-2">
    //           <input id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
    //         </div>
    //       </div>

    //       <div>
    //         <div className="flex items-center justify-between">
    //           <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
    //           <div className="text-sm">
    //             <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
    //           </div>
    //         </div>
    //         <div className="mt-2">
    //           <input id="password" name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
    //         </div>
    //       </div>

    //       <div>
    //         <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
    //       </div>
    //     </form>

    //   </div>
    // </div>






  )
}

export default Home