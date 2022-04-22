import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CustomerDetails from './pages/CustomerDetails'
import EditCustomer from './pages/EditCustomer'
import NewCustomer from './pages/NewCustomer'
import Layout from './layout/Layout'
import Index from './pages/Index'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/clientes' element={<Layout />}>
          <Route index element={<Index />} />
          <Route path='nuevo' element={<NewCustomer />} />
          <Route path=':id' element={<CustomerDetails />} />
          <Route path='editar/:id' element={<EditCustomer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
