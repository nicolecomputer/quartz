// @ts-ignore
import clipboardScript from "../scripts/clipboard.inline"
import clipboardStyle from "../styles/clipboard.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

export const NicoleBody: QuartzComponent = ({ children }: QuartzComponentProps) => {
    return <div id="nicole-quartz-body">{children}</div>
}

NicoleBody.afterDOMLoaded = clipboardScript
NicoleBody.css = clipboardStyle
