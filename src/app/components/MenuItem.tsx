import React from 'react'
import Link from '../../../node_modules/next/link';
import { IconType } from '../../../node_modules/react-icons/lib/iconBase';

const MenuItem = ({title,address,Icon}:{
    title:string;
    address:string;
    Icon:IconType;
}) => {
  return (
    <Link className='hover:text-amber-500' href={address}>
        <Icon className='text-2xl sm:hidden'/>
        <p className='uppercase hidden sm:inline text-sm'>{title}</p>
    </Link>
  )
}

export default MenuItem