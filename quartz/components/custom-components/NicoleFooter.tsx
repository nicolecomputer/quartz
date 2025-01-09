import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import style from "./styles/footer.scss"
import { version } from "../../../package.json"
import { i18n } from "../../i18n"

type Link = {
    link: string,
    text: string
}
export const NicoleFooter: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links: Link[] = [
        { text: "Nicole's Github", link: "https://github.com/nicolecomputer" }
    ]
    return (
        <footer>
            <p>🍓 What good can I do today?</p>
            <p><a href="/about/colophon">colophon</a></p>
        </footer>
    )
}

NicoleFooter.css = `
footer {
  border-top: 2px dashed #540D6E;
  background-color:#FFEADB;
  min-height: 80px;
  text-align: center;
  width: 100%;
  position: relative;
}

footer p {
text-align: center;
}

`
