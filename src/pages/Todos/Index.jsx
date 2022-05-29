import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, getAllTodos } from '../../components/api/slices';
import { Container, Item } from './style';

export const Todos = () => {
    const dispatch = useDispatch();
    const todos = useSelector(getAllTodos)

    useEffect(()=>{
        dispatch(fetchTodos())
    }, [dispatch])
  return (
    <Container>
        {todos.map((item)=>{return(
            <Item key={item.id}>
                <span>{item.id}.</span> 
                <input type={'checkbox'} defaultChecked={item.completed}/>
                <span>{item.title}</span>
            </Item>
        )})}
    </Container>
  )
}

export default Todos;