import React from 'react'
import { Form, useFormik } from "formik"
import { auth } from "../../lib/firebase"
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth'
import * as Yup from 'yup'
import { NextRouter, useRouter } from 'next/router';

export default function Signup() {

    let router: NextRouter = useRouter()

    let { handleChange, handleSubmit, values, errors } = useFormik <{email: string, password: string}>({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async (v, h) => {
            h.setSubmitting(true)
            console.log(v)
            await signInWithEmailAndPassword(auth, v.email, v.password)
            h.setSubmitting(false)
            console.log(router.query)
            router.push('/events/add')
        }
    })

    async function Google() {
        let google: GoogleAuthProvider = new GoogleAuthProvider()
        await signInWithPopup(auth, google)
            .then(() => router.push('/events/add'))
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='border border-gray-400 m-5 p-7 shadow-md rounded-md max-w-4/5 text-center'>
                <h1 className='pb-3 text-3xl font-display font-bold'> Sign in to Empower US</h1>
                <div>
                        <div className='py-3 mt-3 mb-2'>
                                <label className='text-xl font-medium px-3 py-2'>
                                    Email:
                                </label>
                                <input
                                    onChange={handleChange}
                                    name='email'
                                    type='email'
                                    value={values.email}
                                    className='px-4 py-2 border border-blue-400 rounded-md w-4/5'
                                />
                        </div>
                        <div className='py-3 mt-3 mb-2'>
                                <label className='text-xl font-medium px-3 py-2'>
                                    Password:
                                </label>
                                <input
                                    onChange={handleChange}
                                    name='password'
                                    type='password'
                                    value={values.password}
                                    className='px-4 py-2 border border-blue-400 rounded-md w-4/5'
                                />
                        </div>
                    <button type='submit' className='text-white px-5 py-2 bg-blue-500 rounded-md'>
                        Submit this Form
                    </button>
                    <p className='py-4'>
                        OR
                    </p>
                    <button onClick={() => Google()} className='text-blue-600 border border-blue-600 px-5 py-2 rounded-md'>
                        Sign in with Google
                    </button>
                </div>
            </form>
        </div>
    )
}