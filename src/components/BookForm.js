import React, { useContext } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import "../header.css"
import { Context } from './store'
import TextError from './TextError'

const BookForm = () => {
    const { state, dispatch } = useContext(Context);
    return (
        <div>
            <Formik
                initialValues={{ title: "", author: "", characters: "", thoughts: "", date: "" }}
                validationSchema={Yup.object({
                    title: Yup.string()
                        .required('Title Required'),
                    author: Yup.string()
                        .required('Author Required'),
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setTimeout(() => {
                        setSubmitting(false)
                        resetForm(true)
                        dispatch({ type: 'addBook', title: values.title, author: values.author, characters: values.characters, thoughts: values.characters, date: values.date })
                    }, 400);
                }}
            >
                {formik => (
                    <Form onSubmit={formik.handleSubmit} className="form">
                        <label htmlFor="title">Title</label>
                        <Field name="title" type="text" className="title" placeholder="Yaşama Sevinci" />
                        <ErrorMessage name="title" component={TextError} />

                        <label htmlFor="author">Author</label>
                        <Field name="author" type="text" className="author" placeholder="Emile Zola" />
                        <ErrorMessage name="author" component={TextError} />

                        <label htmlFor="characters">Characters</label>
                        <Field name="characters" type="text" placeholder="Pauline, Lazare, Louise, Chanteau, Veronique" className="characters" />

                        <label htmlFor="thoughts">Thoughts</label>
                        <Field name="thoughts" as="textarea"></Field>

                        <label htmlFor="date">Date</label>
                        <Field name="date" type="date" />

                        <button type="submit">Submit</button>
                    </Form>
                )}


            </Formik>
        </div>
    );
};

export default BookForm
