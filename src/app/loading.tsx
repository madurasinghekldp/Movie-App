import React from 'react'
import Image from '../../node_modules/next/image'

const loading = () => {
  return (
    <div className='flex justify-center'>
        <Image src="spinner.svg" alt="loading..."/>
    </div>
  )
}

export default loading