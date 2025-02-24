import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from './layout/Layout'
import Dashboard from './pages/Dashboard'
import Addcategory from './pages/Addcategory'
import CategoryList from './pages/CategoryList'
import Datatable from './components/datatable/Datatable'
import Datatable2 from './components/datatable/Datatable2'
import Test from './pages/Test'
import TextEditor from './components/textEditor/TextEditor'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='/addcategory' element={<Addcategory />} />
          <Route path='/allcategory' element={<CategoryList />} />
          <Route path='/test' element={<Test />} />
          <Route path='/test2' element={<TextEditor />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
