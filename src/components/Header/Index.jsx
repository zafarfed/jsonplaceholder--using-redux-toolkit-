import React from 'react'
import {Card, Container, Link, Logo} from './style.js'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
    const navigate = useNavigate()
  return (
    <Container>
      <Card f>
        <Logo onClick={()=>navigate('/')}>JSONPlaceholder</Logo>
      </Card>

      <Card>

        <Link onClick={()=>navigate('/users')}>Users</Link>
        <Link onClick={()=>navigate('/posts')}>Posts</Link>
        <Link onClick={()=>navigate('/todos')}>Todos</Link>
      </Card>

    </Container>
  )
}
export default Header;