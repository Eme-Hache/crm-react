import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Spinner from '../components/Spinner'

const CustomerDetails = () => {
    const [customer, setCustomer] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        const getCustomer = async () => {
            try {
                const url = `${import.meta.env.VITE_API_URL}/${id}`
                let response = await fetch(url)
                response = await response.json()

                setCustomer(response)
            }
            catch (error) {
                console.log(error)
            }

            setTimeout(() => setLoading(false), 2000);
        }

        getCustomer()
    }, [])

    return (
        loading ? (
            <div className='flex-grow-1 h-full flex items-center'>
                <Spinner />
            </div>
        ) : (
                Object.keys(customer).length === 0 ? <p>No hay resultados</p> : (
                    <>
                        <h1 className='font-black text-4xl text-blue-900'>Ver Cliente</h1>
                        <p className='mt-3'>Información del cliente</p>

                        {customer.name && (
                            <p className='text-4xl text-gray-600 mt-10'>
                                <span className='uppercase font-bold'>Cliente: </span>
                                {customer.name}
                            </p>
                        )}
                        {customer.company && (
                            <p className='text-2xl text-gray-600 mt-4'>
                                <span className='uppercase font-bold text-gray-800'>Empresa: </span>
                                {customer.company}
                            </p>
                        )}
                        {customer.email && (
                            <p className='text-2xl text-gray-600 mt-4'>
                                <span className='uppercase font-bold text-gray-800'>E-Mail: </span>
                                {customer.email}
                            </p>
                        )}
                        {customer.phone && (
                            <p className='text-2xl text-gray-600 mt-4'>
                                <span className='uppercase font-bold text-gray-800'>Teléfono: </span>
                                {customer.phone}
                            </p>
                        )}
                        {customer.notes && (
                            <p className='text-2xl text-gray-600 mt-4'>
                                <span className='uppercase font-bold text-gray-800'>Notas: </span>
                                {customer.notes}
                            </p>
                        )}
                    </>
                )
            )
    )
}

export default CustomerDetails