import React, { useContext, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { Context } from './store'
import TextError from './TextError'
import '../styles/main.scss'


const BookForm = () => {
    const { state, dispatch } = useContext(Context);
    const [showForm, setShowForm] = useState(false);
    return (
        <div className="bookform">

            {showForm ?
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
                            dispatch({ type: 'addBook', title: values.title, author: values.author, characters: values.characters, thoughts: values.thoughts, date: values.date })
                        }, 400);
                    }}
                >
                    {formik => (
                        <Form onSubmit={formik.handleSubmit} className="form" autocomplete="off" >
                            <Field name="title" type="text" className="form__title" placeholder="Title (e.g. Yaşama Sevinci)" />
                            <ErrorMessage name="title" component={TextError} />

                            <Field name="author" type="text" className="form__author" placeholder="Author (e.g. Emile Zola)" />
                            <ErrorMessage name="author" component={TextError} />

                            <Field name="characters" type="text" placeholder="Characters (e.g. Pauline, Lazare, Louise, Chanteau)" className="form__characters" />

                            <Field name="thoughts" className="form__thoughts" as="textarea" placeholder="Thoughts"></Field>

                            <Field name="date" className="form__date" type="date" />

                            <button type="submit">Submit</button>
                        </Form>
                    )}


                </Formik>
                : <button className="showform" onClick={() => setShowForm(true)}> ADD BOOK</button>}

        </div>
    );
};

export default BookForm
