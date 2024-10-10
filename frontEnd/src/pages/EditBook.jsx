import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Spinner from '../componets/Spinner';
import BackButton from '../componets/BackButton';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const EditBook = () => {

  const notify = () => toast.success("Book Edited sucsessfully !", {
    position: "bottom-left",
    autoClose: 3000,
  });
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setpublishYear] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState('');
  const [imgUrl, setImgUrl] = useState('')
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3003/books/${id}`)

      .then((res) => {
        setAuthor(res.data.author)
        setpublishYear(res.data.publishYear)
        setTitle(res.data.title)
        setRating(res.data.rating)
        setReview(res.data.review)
        setImgUrl(res.data.imgUrl)
        setLoading(false)
      })
      .catch((error) => { console.log("error") });
    setLoading(false);
  }, [])


  const hendleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
      review,
      rating,
      imgUrl
    };
    setLoading(true);
    axios.put(`http://localhost:3003/books/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        console.log(error)
        setLoading(false);
        alert('DANGER.....please check console imedetly')
      });
  }
  return (
    <>
      <div className='p-4'>
        <BackButton />
        {loading ? <Spinner /> : ''}

        <div className='flex-col border border-slate-500 rounded-md w-[500px] p-4 mx-auto'>

          <div class="relative flex flex-col justify-center items-center bg-transparent">

            <form class="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div class="mb-1 flex flex-col gap-6">
                <div class="w-full max-w-sm">
                  <label class="block mb-2 text-xl text-slate-600">
                    Title
                  </label>
                  <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Name" />
                </div>

                <div class="w-full max-w-sm min-w-[200px]">
                  <label class="block mb-2 text-xl text-slate-600">
                    Author
                  </label>
                  <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Email" />
                </div>

                <div class="w-full max-w-sm min-w-[200px]">
                  <label class="block mb-2 text-xl text-slate-600">
                    Publish Year
                  </label>
                  <input type="text" value={publishYear} onChange={(e) => setpublishYear(e.target.value)} class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Email" />
                </div>

                <div class="w-full max-w-sm min-w-[200px]">
                  <label class="block mb-2 text-xl text-slate-600">
                    Review
                  </label>
                  <input type='text' value={review} onChange={(e) => setReview(e.target.value)} class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Enter Your Review" />
                </div>

                <div class="w-full max-w-sm min-w-[200px]">
                  <label class="block mb-2 text-xl text-slate-600">
                    Image Url
                  </label>
                  <input type='text' value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Your Image Url" />
                </div>

                <div class="w-full max-w-sm min-w-[200px]">
                  <label class="block mb-2 text-xl text-slate-600">
                    Rating
                  </label>
                  <div class="flex flex-row-reverse justify-end items-center mt-2">
                    <input id="hs-ratings-readonly-1" onChange={(e) => setRating(e.target.value)} type="radio" class="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly" value="5" />
                    <label for="hs-ratings-readonly-1" class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none">
                      <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                      </svg>
                    </label>
                    <input id="hs-ratings-readonly-2" onChange={(e) => setRating(e.target.value)} type="radio" class="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly" value="4" />
                    <label for="hs-ratings-readonly-2" class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none">
                      <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                      </svg>
                    </label>
                    <input id="hs-ratings-readonly-3" onChange={(e) => setRating(e.target.value)} type="radio" class="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly" value="3" />
                    <label for="hs-ratings-readonly-3" class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none">
                      <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                      </svg>
                    </label>
                    <input id="hs-ratings-readonly-4" onChange={(e) => setRating(e.target.value)} type="radio" class="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly" value="2" />
                    <label for="hs-ratings-readonly-4" class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none">
                      <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                      </svg>
                    </label>
                    <input id="hs-ratings-readonly-5" onChange={(e) => setRating(e.target.value)} type="radio" class="peer -ms-5 size-5 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:bg-none focus:ring-0 focus:ring-offset-0" name="hs-ratings-readonly" value="1" />
                    <label for="hs-ratings-readonly-5" class="peer-checked:text-yellow-400 text-gray-300 pointer-events-none">
                      <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                      </svg>
                    </label>
                  </div>
                </div>

              </div>
            </form>
            <button className='flex items-center rounded-md text-xl border border-slate-300 py-2 px-4 text-center transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none' onClick={() => {
              hendleEditBook()
              notify()
            }}>Save</button>
          </div>


        </div>
      </div>

    </>
  )
}

export default EditBook