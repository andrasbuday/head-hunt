/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
import Intro from "../sections/positions-hero.mdx"

const Hero = ({ offset }: { offset: number }) => (
  <Content sx={{ p: { fontSize: [2, 3, 4] } }} speed={0.4} offset={offset}>
    <Inner>
      <Intro />
    </Inner>
  </Content>
)

export default Hero
