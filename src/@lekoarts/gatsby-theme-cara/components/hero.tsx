/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
import Intro from "../sections/intro.mdx"

const Hero = ({ offset }: { offset: number }) => (
  <div>
    <Divider speed={0.2} offset={offset}>
      <UpDown>
        <SVG icon="triangle" hiddenMobile width={48} color="icon_orange" left="8%" top="15%" />
        <SVG icon="hexa" width={48} color="icon_red" left="60%" top="70%" />
        <SVG icon="box" width={6} color="icon_darker" left="60%" top="15%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="arrowUp" hiddenMobile width={16} color="icon_blue" left="80%" top="10%" />
        <SVG icon="triangle" width={12} color="icon_brightest" left="90%" top="50%" />
        <SVG icon="circle" width={16} color="icon_darker" left="70%" top="90%" />
        <SVG icon="triangle" width={16} color="icon_darkest" left="30%" top="70%" />
        <SVG icon="circle" width={6} color="icon_darkest" left="75%" top="10%" />
        <SVG icon="upDown" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="circle" hiddenMobile width={24} color="icon_darker" left="5%" top="70%" />
      <SVG icon="circle" width={6} color="icon_darkest" left="4%" top="20%" />
      <SVG icon="circle" width={12} color="icon_darkest" left="50%" top="70%" />
      <SVG icon="upDown" width={8} color="icon_darkest" left="95%" top="90%" />
      <SVG icon="upDown" hiddenMobile width={24} color="icon_darker" left="40%" top="80%" />
      <SVG icon="triangle" width={8} color="icon_darker" left="25%" top="5%" />
      <SVG icon="circle" width={64} color="icon_green" left="90%" top="5%" />
      <SVG icon="box" hiddenMobile width={64} color="icon_purple" left="5%" top="90%" />
      <SVG icon="box" width={6} color="icon_darkest" left="10%" top="10%" />
      <SVG icon="hexa" width={16} color="icon_darker" left="10%" top="50%" />
      <SVG icon="hexa" width={8} color="icon_darker" left="80%" top="70%" />
    </Divider>
    <Content sx={{ p: { fontSize: [2, 3, 4] } }} speed={0.4} offset={offset}>
      <Inner>
        <Intro />
        <a href="https://headhunt-btc.typeform.com/to/ecMlg4" sx={{ textDecoration: 'none', display: 'inline' }}>
         <button
        sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, ml: 0,  mb: 3, px: 4, py: 3, fontSize: 2  }}
        type="button"
        aria-label="Toggle dark mode"
      >
       Let's connect
     </button>
   </a>
      </Inner>
    </Content>
  </div>
)

export default Hero
