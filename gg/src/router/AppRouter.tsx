import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from '../layout/layout'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}/>
      </Routes>
    </>
  )
}
