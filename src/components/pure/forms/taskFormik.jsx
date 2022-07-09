import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import { Task } from '../../../models/task.class';
import { LEVELS } from '../../../models/levels.enum';

const TaskFormik = ({ add, length }) => {

    let task = new Task()

    const initialTask = {
        name: '',
        description: '',
        completed: false,
        level: '',
    }

    function addTask(e) {
        console.log(e)
        
        const newTask = new Task(e.name, e.description, false, e.level )

        add(newTask) 
    }

    const taskSchema = Yup.object().shape(
        {
            name: Yup.string().min(3, 'Minimo 3 caracteres')
                .max(12, 'Maximo 12 caracteres')
                .required('La tarea debe tener un nombre'),
            description: Yup.string().min(5, 'Minimo 5 caracteres')
                .max(13, 'Maximo 13 caracteres')
                .required('La tarea debe tener un nombre'),
            completed: Yup.bool().required(''),
            level: Yup.string().oneOf([LEVELS.NORMAL, LEVELS.BLOCKNG, LEVELS.URGENTE], 'Elige un nivel').required('level is REquired'),

        }
    )

    return (
        <Formik
            initialValues={initialTask}

            validationSchema={taskSchema}
            // onSubmit Event
            onSubmit={(values) =>{addTask(values)}}>


            {({
                values,
                touched,
                errors,
                isSubmitting,
                hadleChange,
                hableBlur
            }) => (

                <Form>
                    <label htmlFor="name">name: </label>
                    <Field id="name" type="text" name="name" placeholder="Your task name" />

                    {/* User error */}
                    {
                        errors.name && touched.name && (


                            <ErrorMessage name="name" component='div' ></ErrorMessage>
                        )
                    }
                    <label htmlFor="description">description: </label>
                    <Field id="description" type="text" name="description" placeholder="write the description" />
                    {/* description error */}
                    {
                        errors.description && touched.description && (


                            <ErrorMessage name="description" component='div' ></ErrorMessage>
                        )
                    }

                    <div role="group" aria-labelledby="my-radio-group">
                        <label>
                            <Field type="radio" name="level" value={LEVELS.NORMAL} />
                            {LEVELS.NORMAL}            </label>
                        <label>
                            <Field type="radio" name="level" value={LEVELS.BLOCKNG} />
                            {LEVELS.BLOCKNG}
                        </label>
                        <label>
                            <Field type="radio" name="level" value={LEVELS.URGENTE} />
                            {LEVELS.URGENTE}
                        </label>
                        
                        {/* description error */}
                        {
                            errors.level && touched.level && (


                                <ErrorMessage name="level" component='div' ></ErrorMessage>
                            )
                        }
                    </div>
                    <button type="submit">Create Task</button>
                    {isSubmitting ? <p>Enviando tu tarea nueva</p> : null}


                </Form>
            )}

        </Formik>
    );
}

TaskFormik.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
};

export default TaskFormik;
