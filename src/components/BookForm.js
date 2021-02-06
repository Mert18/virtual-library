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
                    <Form onSubmit={formik.handleSubmit} className="form" autocomplete="off" >
                        <Field name="title" type="text" className="title" placeholder="Title (e.g. Yaşama Sevinci)" />
                        <ErrorMessage name="title" component={TextError} />

                        <Field name="author" type="text" className="author" placeholder="Author (e.g. Emile Zola)" />
                        <ErrorMessage name="author" component={TextError} />

                        <Field name="characters" type="text" placeholder="Characters (e.g. Pauline, Lazare, Louise, Chanteau)" className="characters" />

                        <Field name="thoughts" as="textarea" placeholder="Thoughts"></Field>

                        <Field name="date" type="date" />

                        <button type="submit">Submit</button>
                    </Form>
                )}


            </Formik>
        </div>
    );
};

export default BookForm
