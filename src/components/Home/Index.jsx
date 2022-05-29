import React from 'react'
import { Container, H1, P} from './style';

export const Home = () => {
  const json = "{JSON}"
  return (
    <Container>
       <H1>{json} Placeholder</H1>
       <P>Free fake API for testing and prototyping.</P>
       <P>Powered by JSON Server + LowDB. Tested with XV.</P>
       <P>As of Oct 2021, serving ~1.7 billion requests each month.</P>
    </Container>
  )
}
export default Home;