import React from 'react'

export default function FirstPhoto() {
  return (
    <>
    <img
            className="h-52 w-52 sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 
                       object-cover rounded-2xl shadow-2xl border border-blue-950"
            src="/firstPhoto.jpg"
            alt="photo"
          />
    </>
  )
}
