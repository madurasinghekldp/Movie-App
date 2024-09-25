import React from 'react'
import { Params } from '../../../../node_modules/next/dist/shared/lib/router/utils/route-matcher';
import Image from '../../../../node_modules/next/image';

const page = async ({params}:{ params: Params }) => {
    const res = await fetch (`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.API_KEY}`);
    const movie = await res.json();
    //console.log(movie);
  return (
    <div className='w-full'>
        <div className='p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6'>
        <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`} 
        width={500} height={300} className="sm:rounded-t-lg" alt="" style={{maxWidth:'100%', maxHeight:'100%'}}/>
        <div className="p-2">
            <h2 className='text-lg mb-3 font-bold'>{movie.title || movie.name}</h2>
            <p className='text-lg mb-3'>{movie.overview}</p>
            <p className='mb-3'>
                <span className="font-semibold mr-1">Date released: </span>
                {movie.release_date || movie.first_air_date}</p>
            <p>
            <span className="font-semibold mr-1">Rating: </span>
                {movie.vote_count}</p>
        </div>
        </div>
    </div>
  )
}

export default page