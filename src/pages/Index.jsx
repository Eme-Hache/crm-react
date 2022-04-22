import Customer from '../components/Customer'
import { useEffect, useState } from 'react'

const Inicio = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        const getCustomers = async () => {
            try {
                const url = 'http://localhost:4000/clientes'
                let response = await fetch(url)
                response = await response.json()

                setCustomers(response)
            }
            catch (error) {
                console.log(error)
            }
        }

        getCustomers()
    }, [])

    const handleDeleteCustomer = async id => {
        const confirmDialog = confirm('¿Estás seguro de que quieres eliminar este cliente?')

        if (confirmDialog) {
            try {
                const url = `http://localhost:4000/clientes/${id}`
                await fetch(url, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            }
            catch (error) {
                console.log(error)
            }

            const newCustomers = customers.filter(customer => customer.id !== id)
            setCustomers(newCustomers)
        }
    }

    return (
        <>
            <h1 className='font-black text-4xl text-blue-900'>Listado de Clientes</h1>
            <p className='mt-3'>Administra tus clientes aquí</p>

            <table className='w-full mt-5 table-auto shadow bg-white'>
                <thead>
                    <tr>
                        <th className='p-2'>Nombre</th>
                        <th className='p-2'>Contacto</th>
                        <th className='p-2'>Empresa</th>
                        <th className='p-2'>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {customers.map(customer => (
                        <Customer
                            key={customer.id}
                            customer={customer}
                            handleDeleteCustomer={handleDeleteCustomer}
                        />
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Inicio