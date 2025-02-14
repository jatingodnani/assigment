import React from 'react'
import { Button } from '../ui/button'

function PaginationCard() {
  return (
    <div className="flex justify-center items-center gap-2 mt-8">
    <Button variant="outline" size="icon" className=" h-10 w-14  rounded-3xl">
      <span className="sr-only">Previous page</span>
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </Button>
    <span className="text-sm text-gray-600">5 of 13</span>
    <Button variant="outline" size="icon" className=" h-10 w-14 rounded-full">
      <span className="sr-only">Next page</span>
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Button>
  </div>

  )
}

export default PaginationCard
