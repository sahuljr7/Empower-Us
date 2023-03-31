import { Form, useFormik } from 'formik'
import toast, {Toaster} from 'react-hot-toast'
import { Event } from '../../lib/types'
import * as Yup from 'yup'
import React from 'react'
import axios from 'axios'

let url = 'https://database-api.epiccodewizard2.repl.co/api/send'

interface Event {
    description: string;
    id: string;
    lat: string;
    long: string;
    name: string;
}

export default function View() {

    let [response, setResponse] = React.useState<any[]>([])

    React.useEffect(() => {
        axios.get(url, { method: 'GET' })
            .then(async res => setResponse(res.data))
    });

    return (
        <div>
            {response.map((i: Event, k) => (
                <div>
                    <p>{i.name}</p>
                    <p>{i.description}</p>
                    <p>{i.lat}, {i.long}</p>
                </div> 
            ))}
        </div>
    )
}
