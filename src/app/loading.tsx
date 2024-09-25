import React from 'react'
import Image from '../../node_modules/next/image'

const loading = () => {
  return (
    <div className='flex justify-center'>
        <Image src="spinner.svg" alt="loading..." width={100} height={100}/>
    </div>
  )
}

export default loading