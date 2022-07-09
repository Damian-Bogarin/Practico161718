import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import '../../styles/task.scss'


const TaskComponent = ({task, complete, remove}) => {

    useEffect(() => {
        console.log('Created Task')
        return () => {
            console.log(`Task: ${task.name} is going to un Mount`)
        };
    }, [task]);


    /**
     * Funcion que retorna a badge dependiendo en el level del task
     */

    function taskLevelBadge(){
        switch (task.level) {
            case LEVELS.NORMAL:
                return(<h6 className='mb-0'>
                    <span className='badge bg-primary'>
                        {task.level}
                    </span>
                </h6>)
            case LEVELS.URGENTE: 
            return(<h6 className='mb-0'>
            <span className='badge bg-warning'>
                {task.level}
            </span>
            
        </h6>)
        case LEVELS.BLOCKNG: 
        return(<h6 className='mb-0'>
        <span className='badge bg-danger'>
            {task.level}
        </span>
        </h6>)
            default:
                break;
        }
    }

    /**
     * Funtcion that return icon dependifg on completin of the task
     * 
     */

    function taskIconCompleted(){
        if(task.complete){
            return(<i onClick={() => {complete(task)}} className='bi-toggle-on task-action' style={{color: 'green', fontWeight : 'bold' }}></i>)

        }else{
            return(<i onClick={() => {complete(task)}} className='bi-toggle-off task-action' style={{color: 'grey', fontSize : '20px'}}></i>)

        }
    }

    return (

        <tr  className={task.complete ? 'fw-normal task-completed' : ' fw-normal task-pending'}>
            <th>
                <span className='ms-2'>
                    {task.name}
                </span>
            </th>
            <td className='align-middle'>
                <span>
                    {task.description}
                </span>
            </td>

            <td className='aling-middle'>
                {/* ejecucion de la funcion tasklevelbage */}
                {taskLevelBadge()}
            </td>

            <td className='align-middle'>
            {/* ejecution to funtcion to return  icon on dependig on completion */}
            {taskIconCompleted()}
               
               <i className='bi-trash task-action' onClick={()=> {remove(task)}} style={{color: 'tomato', fontSize : '20px'}}></i>
            </td>

        </tr>
        
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired

};


export default TaskComponent;
