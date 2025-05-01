import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div className='my-26 px-20 text-black'>
      <h1>See orders here :</h1>
      <Link href={'/admin/orders'}>
      <h1 className='font-bold'>Orders</h1>
      </Link>
    </div>
  )
}

export default page
