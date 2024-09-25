import React from 'react'
import Card from './Card'

const Results = ({results}:{results: Array<{
    backdrop_path: string,
    id: number,
    title: string,
    original_title: string,
    overview: string,
    poster_path: string,
    media_type: string,
    adult: boolean,
    original_language: string,
    genre_ids: Array<number>,
    popularity: number,
    release_date: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}>}) => {
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4'>
        {
            results.map(({ id,title,backdrop_path,poster_path,overview}) => (
                
                <Card key ={id} id={id} title={title} backdrop_path={backdrop_path} poster_path={poster_path} 
                overview={overview}/>
            ))
        }
    </div>
  )
}

export default Results