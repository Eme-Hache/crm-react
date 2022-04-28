import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import CustomerDetails from './pages/CustomerDetails'
import EditCustomer from './pages/EditCustomer'
import AddCustomer from './pages/AddCustomer'
import Layout from './layout/Layout'
import Index from './pages/Index'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/customers' />} />
        <Route path='/customers' element={<Layout />}>
          <Route index element={<Index />} />
          <Route path='add' element={<AddCustomer />} />
          <Route path=':id' element={<CustomerDetails />} />
          <Route path='edit/:id' element={<EditCustomer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
