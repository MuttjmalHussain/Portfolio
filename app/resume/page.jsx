import React from 'react'

export default function page() {
  return (
      <div className="w-full h-screen max-w-[1560px] mx-auto">
        <iframe
          src="/cv.pdf"
          className="w-full h-full"
          title="CV PDF"
        />
      </div>
  )
}
