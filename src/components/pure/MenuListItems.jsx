import {List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import {useNavigate} from 'react-router-dom'

import {Home , Settings, Task } from '@mui/icons-material'


const getIcon = (icon) => {
    switch (icon) {
        case 'Home':
            return (<Home/>)
            break;
        case 'TASK':
            return (<Task></Task>)
            break;
            case 'SETTING':
                return (<Settings></Settings>)
                break;
        default:
            return(<Home></Home>)
            break;
    }
}

const MenuListItems = ({list}) =>{

    const navigate = useNavigate()

    const funcion = (path) => {
        navigate(path)
    }

    return (
        <List>
            {list.map(({text, path, icon}, index) => {
                <ListItem key={index} button onClick={() => {
                    navigate(path)
                }} >
                    <ListItemIcon>
                        {getIcon(icon)}
                    </ListItemIcon>
                    <ListItemText primary={text}>
                        
                    </ListItemText>


                </ListItem>
            })}
        </List>
    )
}

export default MenuListItems;