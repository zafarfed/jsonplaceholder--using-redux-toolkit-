import React, {useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { getAllUsers, fetchUsers } from '../../components/api/slices'
import { Container, MyCollapse} from './style'

export const Users = () => {

    const dispatch = useDispatch();
    const users = useSelector(getAllUsers)

    useEffect(()=>{
        dispatch(fetchUsers())
    }, [dispatch])

  return (
    <Container>
        {users.map((item)=>{return(
            <MyCollapse key={item.id}>
                    <br/>
                    <p>Name: {item.name} </p>
                    <br/>
                    <p>Username: {item.username} </p>
                    <br/>
                    <p>Phone: {item.phone} </p>
                    <br/>
                    <p>Email: {item.email} </p>
                    <br/>
                    <p>City: {item.address.city} </p>
                    <br/>
            </MyCollapse>
        )})}

    </Container>
  )
};export default Users;