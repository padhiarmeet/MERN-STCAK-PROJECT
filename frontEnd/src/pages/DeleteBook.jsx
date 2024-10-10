import React from 'react'
import BackButton from '../componets/BackButton'
import Spinner from '../componets/Spinner'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
 
const DeleteBook = () => {

  const notify = () => toast.error("Book Deleted sucsessfully !",{
    position: "bottom-left",
    autoClose: 3000,
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);

    axios.delete(`http://localhost:3003/books/${id}`)

      .then(() => {
        setLoading(false);
        navigate('/')
      })
      .catch((error) => {
        setLoading(false)
        console.log(error)
        alert("Danger.....Error ocupied")
      })

  }
  return (
    <>
      <div className='p-4'>
        <BackButton />
        {loading ? <Spinner /> : ''}

        <div className='flex-col justify-center border border-slate-500 rounded-sm w-[600px] p-4 mx-auto'>

        <div className="flex justify-center">
          <h3 className='text-2xl'>Are You Sure You want to delete this book?</h3>
          </div>

          <div className="flex justify-center">
          <button  onClick={()=>{
            handleDeleteBook(),
            notify();
            }} class=" flex justify-center mt-8 rounded-md w-48 border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-red-500 hover:border-transparent focus:text-white focus:bg-red-500 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-red-500 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            DELETE
          </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeleteBook