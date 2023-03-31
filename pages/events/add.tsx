import { Form, useFormik } from 'formik'
import toast, {Toaster} from 'react-hot-toast'
import { Event } from '../../lib/types'
import * as Yup from 'yup'
import { auth } from '../../lib/firebase'

export default function Home() {
    const create = async (data: {
        description: string;
        lat: number;
        long: number;
        name: string;
    }) => {
        let url = 'https://database-api.epiccodewizard2.repl.co/api/create'
        let xhr: XMLHttpRequest = new XMLHttpRequest()
        xhr.open('post', url, true)
        xhr.setRequestHeader('Content-Type', 'text/plain');
        xhr.send(JSON.stringify(data))
    }

    const { handleChange, handleSubmit, errors, values } = useFormik<{
        description: string;
        lat: number;
        long: number;
        name: string;
    }>({
        initialValues: {
            description: '',
            lat: 0.0,
            long: 0.0,
            name: ''
        },
        onSubmit: async (v, h) => {
            toast.promise(
                create(v),
                {
                    loading: 'Submitting form...',
                    success: 'Succesfully submitted the form',
                    error: 'Something went wrong'
                }
            )
        }
    })

    return (
        <form onSubmit={handleSubmit}>
            <Toaster />
            <input name='name' onChange={handleChange} value={values.name} />
            <input name='description' onChange={handleChange} value={values.description}/>
            <input name='lat' type='number' onChange={handleChange} value={values.lat} />
            <input name='long' type='number' onChange={handleChange} value={values.long} />
            <button type='submit'>
                Submit
            </button>
        </form>
    )
}