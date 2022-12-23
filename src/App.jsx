import React, { useState, useEffect } from 'react';

import './index.css'
import { Routes, Route, Navigate } from "react-router-dom";
import { BookPage, HomePage, UsersPage, GroupPage, Login, ErrorPage } from './pages';
import { AddUser, GetUser, Navigation, HeaderNavigation, AddQuestion, GetGroup, TestPage, GetTest, Loader } from './components/'
import { loggedInChecker } from './helper';


function App() {
  const [user, setUser] = useState({
    role: null,
    login: false,
  })
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      await loggedInChecker(setUser, setLoading)
    }
    load()
  }, [])




  if (loading) return <Loader />
  if (!user.role) return <Login setUser={setUser} />

  const AuthAdmin = (prop) => {
    return user.role === 'admin' ? prop.children : <Navigate to={'/'} />
  }
  const AuthUser = (prop) => {
    return user.role === 'user' ? prop.children : <Navigate to={'/'} />
  }

  return (
    <div className="App bg-custom-black">
      <HeaderNavigation user={user} setUser={setUser} />
      <div className="content flex min-h-screen ">
        <div className='navigation bg-custom-grey '>
          <Navigation role={user} />
        </div>

        <div className='p-2 py-2 w-full'>
          <Routes>
            <Route path="/" element={<HomePage user={user} />}> </Route>

            {/* admin Routes */}
            <Route path="users">
              <Route index element={<AuthAdmin><UsersPage /></AuthAdmin>} />
              <Route path="add" element={<AuthAdmin><AddUser /></AuthAdmin>} />
              <Route path=":userId" element={<AuthAdmin><GetUser /></AuthAdmin>} />
            </Route>
            <Route path="group">
              <Route index element={<AuthAdmin><GroupPage /></AuthAdmin>} />
              <Route path="add" element={<AuthAdmin><AddQuestion /></AuthAdmin>} />
              <Route path=":groupId" element={<AuthAdmin><GetGroup /></AuthAdmin>} />
            </Route>
            <Route path="books">
              <Route index element={<AuthAdmin><BookPage /></AuthAdmin>} />
              <Route path="add" element={<AuthAdmin><AddQuestion /></AuthAdmin>} />
              <Route path=":groupId" element={<AuthAdmin><GetGroup /></AuthAdmin>} />
            </Route>

            

            {/* user/student Routes */}
            <Route path="test">
              <Route index element={<AuthUser><TestPage /></AuthUser>} />
              <Route path=":testId" element={<AuthUser><GetTest id={user._id} /></AuthUser>} />
            </Route>

            {/*Error Handling Router  */}
            <Route path="*" element={<ErrorPage />}> </Route>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
