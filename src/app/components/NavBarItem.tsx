'use client';
import React from 'react'
import Link from '../../../node_modules/next/link'
import { useSearchParams } from '../../../node_modules/next/navigation';

const NavBarItem = ({title,param}:{title:string,param:string}) => {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');
  return (
    <div>
        <Link href={`/?genre=${param}`} className={`hover:text-amber-600 font-semibold ${genre===param?
        'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg':''}`}>{title}</Link>
    </div>
  )
}

export default NavBarItem