import CustomerForm from '../components/CustomerForm'

const NewCustomer = () => {
    return (
        <>
            <div className='md:w-3/4 mx-auto'>
                <h1 className='font-black text-4xl text-blue-800 text-center mb-14'>Nuevo Cliente</h1>
                <p className='mt-3'>Llena los siguientes campos para registrar un cliente</p>
            </div>

            <CustomerForm />
        </>
    )
}

export default NewCustomer