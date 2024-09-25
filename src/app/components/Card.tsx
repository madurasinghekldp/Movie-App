import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Card = ({id,title,backdrop_path,poster_path,overview}:any) => {
  return (
    <div className='group p-1'>
        <Link href={`/movie/${id}`}>
        <Image src={`https://image.tmdb.org/t/p/original/${backdrop_path || poster_path}`} 
        width={500} height={300} className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300" alt=""/>
        <div className='p-2'>
            <p className='line-clamp-2'>{overview}</p>
            <h2 className='text-lg font-bold truncate'>{title}</h2>
        </div>
        </Link>
    </div>
  )
}

export default Card