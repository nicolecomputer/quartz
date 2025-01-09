import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { NicoleHeader } from "./custom-components/NicoleHeader"

const Header: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return children.length > 0 ? <header>{children}</header> : null
}

Header.css = `
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2rem 0;
  gap: 1.5rem;
}

header h1 {
  margin: 0;
  flex: auto;
}
`

export default (() => NicoleHeader) satisfies QuartzComponentConstructor
