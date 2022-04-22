import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import Spinner from './Spinner';
import Alerta from './Alerta';
import * as Yup from 'yup'

const CustomerForm = ({ customer, loading }) => {
    const navigate = useNavigate()

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'El nombre es muy corto')
            .max(50, 'El nombre es muy largo')
            .required('El nombre es requerido'),
        company: Yup.string()
            .required('El nombre de la empresa es obligatorio'),
        email: Yup.string()
            .required('El email es requerido')
            .email('El email no es válido'),
        phone: Yup.number()
            .integer('Número no válido')
            .positive('Número no válido')
            .typeError('El teléfono debe ser un número')
    })

    const handleSubmit = async values => {
        try {
            if (customer.id) {
                // Update current customer
                const url = `http://localhost:4000/clientes/${customer.id}`
                await fetch(url, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(values)
                })
            }
            else {
                // Add new customer
                const url = 'http://localhost:4000/clientes'
                await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(values)

                })
            }
            
            navigate('/clientes')
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        loading ? (
            <div className='flex-grow-1 h-full flex items-center'>
                <Spinner />
            </div>
        ) : (
            <div className='bg-white mt-10 p-10 rounded-md shadow-md md:w-3/4 mx-auto'>
                <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>
                    {customer?.name ? 'Editar Cliente' : 'Nuevo Cliente'}
                </h1>

                <Formik
                    enableReinitialize
                    validationSchema={validationSchema}
                    initialValues={{
                        name: customer?.name ?? '',
                        company: customer?.company ?? '',
                        email: customer?.email ?? '',
                        phone: customer?.phone ?? '',
                        notes: customer?.notes ?? ''
                    }}
                    onSubmit={async (values, { resetForm }) => {
                        await handleSubmit(values)

                        resetForm()
                    }}
                >
                    {({ errors, touched }) => {
                        return (
                            <Form className='mt-10'>
                                <div className='mb-4'>
                                    <label
                                        htmlFor='name'
                                        className='text-gray-800'
                                    >
                                        Nombre:
                                    </label>
                                    <Field
                                        id='name'
                                        name='name'
                                        type='text'
                                        className='mt-2 block w-full p-3 bg-gray-50'
                                        placeholder='Nombre del cliente'
                                    />
                                    {errors.name && touched.name ? (
                                        <Alerta>{errors.name}</Alerta>
                                    ) : null}
                                </div>
                                <div className='mb-4'>
                                    <label
                                        htmlFor='company'
                                        className='text-gray-800'
                                    >
                                        Empresa:
                                    </label>
                                    <Field
                                        id='company'
                                        name='company'
                                        type='text'
                                        className='mt-2 block w-full p-3 bg-gray-50'
                                        placeholder='Empresa del cliente'
                                    />
                                    {errors.company && touched.name ? (
                                        <Alerta>{errors.company}</Alerta>
                                    ) : null}
                                </div>
                                <div className='mb-4'>
                                    <label
                                        htmlFor='email'
                                        className='text-gray-800'
                                    >
                                        E-Mail:
                                    </label>
                                    <Field
                                        id='email'
                                        name='email'
                                        type='text'
                                        className='mt-2 block w-full p-3 bg-gray-50'
                                        placeholder='E-Mail del cliente'
                                    />
                                    {errors.email && touched.email ? (
                                        <Alerta>{errors.email}</Alerta>
                                    ) : null}
                                </div>
                                <div className='mb-4'>
                                    <label
                                        htmlFor='phone'
                                        className='text-gray-800'
                                    >
                                        Teléfono:
                                    </label>
                                    <Field
                                        id='phone'
                                        name='phone'
                                        type='text'
                                        className='mt-2 block w-full p-3 bg-gray-50'
                                        placeholder='Teléfono del cliente'
                                    />
                                    {errors.phone && touched.phone ? (
                                        <Alerta>{errors.phone}</Alerta>
                                    ) : null}
                                </div>
                                <div className='mb-4'>
                                    <label
                                        htmlFor='notes'
                                        className='text-gray-800'
                                    >
                                        Notas:
                                    </label>
                                    <Field
                                        as='textarea'
                                        name='notes'
                                        id='notes'
                                        type='text'
                                        className='mt-2 block w-full p-3 bg-gray-50 h-40'
                                        placeholder='Notas del cliente'
                                    />
                                </div>

                                <input
                                    type='submit'
                                    value={customer?.name ? 'Editar Cliente' : 'Agregar Cliente'}
                                    className='mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg'
                                />
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        )
    )
}

CustomerForm.defaultProps = {
    customer: {},
    loading: false
}

export default CustomerForm