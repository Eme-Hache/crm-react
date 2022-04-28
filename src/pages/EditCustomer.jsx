import Formulario from '../components/CustomerForm.jsx'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const EditCustomer = () => {
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

            setTimeout(() => setLoading(false), 1000);
        }

        getCustomer()
    }, [])

    return (
        <>
            <div className='md:w-3/4 mx-auto'>
                <h1 className='font-black text-4xl text-blue-800 text-center mb-14'>Editar Cliente</h1>
                <p className='mt-3'>Utiliza este formulario para editar los datos del cliente</p>
            </div>

            {Object.keys(customer).length === 0 ? <p>ID del cliente no encontrado</p> : (
                <Formulario customer={customer} loading={loading} />
            )}
        </>
    )
}

export default EditCustomer