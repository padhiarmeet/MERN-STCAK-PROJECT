import {Link} from 'react-router-dom';
import React from 'react'
import { BsArrowBarLeft } from 'react-icons/bs';


const BackButton = ({destination = '/'}) => {
  return (
    <div className='flex'>
        <Link to={destination} className='bg-sky-300 text-white rounded-lg w-fit'>
        <BsArrowBarLeft className='text-2xl'></BsArrowBarLeft>
        </Link>
    </div>
  )
}
export default BackButton;
