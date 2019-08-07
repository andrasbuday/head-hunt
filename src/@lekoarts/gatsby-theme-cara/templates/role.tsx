import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import PositionsHero from "../components/positions-hero"
import Contact from "../components/contact"
import Projects from "../components/projects"

const Cara = () => (
  <Layout>
    <Parallax pages={4}>
      <PositionsHero offset={0} />
      <Projects offset={1} />
      <Contact offset={3} />
    </Parallax>
  </Layout>
)

export default Cara
