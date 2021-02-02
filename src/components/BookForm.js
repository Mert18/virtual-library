import React, { useContext } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import "../header.css"
import { Context } from './store'

const BookForm = () => {
    const { state, dispatch } = useContext(Context);
    return (
        <div>
            <Formik
                initialValues={{ title: "", author: "", characters: "", thoughts: "" }}
                validationSchema={Yup.object({
                    title: Yup.string()
                        .required('Required'),
                    author: Yup.string()
                        .required('Required'),
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setTimeout(() => {
                        setSubmitting(false)
                        resetForm(true)
                        dispatch({ type: 'addBook', title: values.title, author: values.author, characters: values.characters, thoughts: values.characters })
                    }, 400);
                }}
            >
                {formik => (
                    <Form onSubmit={formik.handleSubmit} className="form">
                        <label htmlFor="title">Title</label>
                        <Field name="title" type="text" className="title" />
                        <ErrorMessage name="title" />

                        <label htmlFor="author">Author</label>
                        <Field name="author" type="text" className="author" />
                        <ErrorMessage name="author" />

                        <label htmlFor="characters">Characters</label>
                        <Field name="characters" type="text" className="characters" />

                        <label htmlFor="thoughts">Thoughts</label>
                        <Field name="thoughts" type="text" />

                        <button type="submit">Submit</button>
                    </Form>
                )}


            </Formik>
        </div>
    );
};

export default BookForm
