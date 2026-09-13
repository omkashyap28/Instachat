import React from 'react'

type Props = {
  children: React.ReactNode
}

function Layout({children}: Props) {
  return (
    <main className='flex items-center justify-center h-screen w-full'>
      {children}
      </main>
  )
}

export default Layout