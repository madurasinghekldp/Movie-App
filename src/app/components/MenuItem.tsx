import React from 'react'
import Link from '../../../node_modules/next/link';

const MenuItem = ({title,address,Icon}:{
    title:string;
    address:string;
    Icon:any;
}) => {
  return (
    <Link className='hover:text-amber-500' href={address}>
        <Icon className='text-2xl sm:hidden'/>
        <p className='uppercase hidden sm:inline text-sm'>{title}</p>
    </Link>
  )
}

export default MenuItem