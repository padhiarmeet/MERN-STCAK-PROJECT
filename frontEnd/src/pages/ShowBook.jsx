import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../componets/Spinner';


const ShowBook = () => {
  const [book, setBook] = useState({})
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3003/books/${id}`)

      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((error) => { console.log("error") });
    setLoading(false);
  }, [])


  return (
    <>
      <h1 className="text-3xl my-4 text-center pt-5">Show Book</h1>
    <div className="p-4 flex justify-center">
      
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col rounded-lg bg-white shadow-sm max-w-96 p-8 my-6 border border-slate-200">
          <div className="pb-8 m-0 mb-8 text-center text-slate-800 border-b border-slate-200">
            <h1 className="flex justify-center align-middle gap-1 mt-4 font-bold text-slate-800 text-3xl">
              0
              {book.title}
            </h1>
          </div>
          <div className="p-0">
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <span className="text-xl mr-4 text-gray-500">Author</span>
                <span>{book.author}</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-xl mr-4 text-gray-500">ID</span>
                <span>{book._id}</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-xl mr-4 text-gray-500">Publish Year</span>
                <span>{book.publishYear}</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-xl mr-4 text-gray-500">Review</span>
                <span>{book.review}</span>
              </li>
            </ul>
          </div>
          <div className="p-0 mt-12 flex justify-center">
            <Link to="/">
              
              <button class="flex items-center rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                Homepage
              
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 ml-1.5">
                  <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  </>
  )
}

export default ShowBook