import React from 'react'

import Layout from '../components/layout'
import Emoji from '../components/Emoji'

const About = () => (
  <Layout>
    <h1>About</h1>
    <p>
      Hi <Emoji symbol="👋" label="Waving hand" />
    </p>
    <p>My name is Roy Hewitt, I'm a web developer living in Atlanta, GA.</p>
  </Layout>
)

export default About
