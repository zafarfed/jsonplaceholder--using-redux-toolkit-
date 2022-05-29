import React, {useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { getAllPosts, fetchPosts } from '../../components/api/slices'
import { Container, Wrapper, CardHead, Card, CardBody } from './style'

const Posts = () => {
    const dispatch = useDispatch()
    const posts = useSelector(getAllPosts)
    
    useEffect(()=>{ 
        dispatch(fetchPosts())
    },[dispatch])

  return (
    <Container>
      <Wrapper>

          {posts.map((item, id)=>{return(
              <Card key={id}>
                 <CardHead> {item.id}. {item.title}</CardHead>
                 <CardBody>
                   {item.body}
                 </CardBody>
              </Card>
           )})}
      </Wrapper>
    </Container>
  )
}

export default Posts;