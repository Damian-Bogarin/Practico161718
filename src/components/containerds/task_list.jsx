import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';
import TaskForm from '../pure/forms/taskForm';
import TaskFormik from '../pure/forms/taskFormik';


const TaskListComponent = () => {


    const defaultTask1 = new Task('Example1', 'Defualt description 1', true, LEVELS.NORMAL)
    const defaultTask2 = new Task('Example2', 'Defualt description 2', true, LEVELS.URGENTE)
    const defaultTask3 = new Task('Example3', 'Defualt description 3', true, LEVELS.BLOCKNG)



    //Estado del componente
    const [tasks, setTask] = useState([defaultTask1,defaultTask2, defaultTask3]);
   const [loading, setLoading] = useState(true);

    //Control de lclico de vida del componente
    useEffect(() => {
        console.log('Task State has been modified')
        setTimeout(() => {
            setLoading(false)
        }, 2000);
        return () => {
            console.log('Task List component is goint to UnMount')
        };
    }, [tasks]);
    

    function completeTask(task){
        console.log('complete this Task:', task )
        const index = tasks.indexOf(task)

        const tempTask = [...tasks]; //me traig todas las tareas 
        tempTask[index].complete = !tempTask[index].complete;

        // We update the state of the component with te new list of tasks and it will update the
        // iteration of the task in order to show the task updated

        setTask(tempTask)

    }
    
    function removeTask(task){
        console.log('remove this Task:', task )
        const index = tasks.indexOf(task)
        const tempTask = [...tasks]; //me traig todas las tareas 
        tempTask.splice(index,1)
        setTask(tempTask);
    }

    function addTask(task){
        console.log('remove this Task:', task )
        
        const tempTask = [...tasks]; //me traig todas las tareas 
        tempTask.push(task);
        setTask(tempTask)
    }


    const Table = () =>{
        return (
        <table>

            <thead>
                  <tr>
                    <th scope='col'> Title</th>
                    
                    <th scope='col'> Description</th>

                    <th scope='col'> Priority</th>

                    <th scope='col'> Actions</th>
                </tr>
            </thead>
            <tbody>

                {tasks.map((task, index) => {
                    return(
                        <TaskComponent key={index} task={task} complete={completeTask} remove={removeTask}></TaskComponent>
                    )
                })}
                {/* Iterar sobre una lista de tareas */}
                
            </tbody>
              
            </table>
            )
    }

    let tasksTable;

    if(tasks.length > 0){
        tasksTable = <Table></Table>
    }else{ 

    
        tasksTable = <div>
        
        <h3> There are no tasks to show </h3>
        <h4>Please, create one!</h4>
        </div>
    }
    
    const loadingStyle = {
        color: 'grey',
        fontSize: '30px',
        fontWeight: 'bold'
    }
     
    return (
        <div>
            <div className='col-12'>

             <div className='card'>
             {/* Card header */}
                <div className='card-header'>
                    <h5>
                        Your Tasks:
                    </h5>
                </div>
                {/* Card body */}

                <div className='card-body' data-mbd-perfect-scrollbar='true' style={{position: 'relative', height : '400px'}}>
                  
                  {/* TODO: Add loadind spinner! */}
                   {loading ? (<p style={loadingStyle}>Loading task</p>) : tasksTable}
                </div>
                
             </div>
               
            </div>
            {/* <TaskForm add={addTask} length={tasks.length} ></TaskForm> */}
            {/* Aplicar un For/Map para renderizar tarea */}
           {/*  <TaskComponent task = {defaultTask}></TaskComponent> */}

           <TaskFormik add={addTask} length = {tasks.length} > </TaskFormik>
        </div>
    );
};

//No hace falta en los componentes contenedores... 
/* TaskList.propTypes = {

}; */


export default TaskListComponent;
