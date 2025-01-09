import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import { classNames } from "../../util/lang"

export const NicoleArticleTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    const title = fileData.frontmatter?.title
    if (title) {
        return (
            <div class="article-title-container">
                <h1 class={classNames(displayClass, "new-article-title")}>{title}</h1>
            </div>
        )
    } else {
        return null
    }
}

NicoleArticleTitle.css = `
.article-title-container {
    margin: 20px 0;
    position: relative;
    box-sizing: content-box;
    left: -10px;

    background-color: #A86FC5;
    box-shadow: 4px 5px 0px rgba(0,0,0,0.10098039);
    border-radius: 5px;

    padding: 0 10px;
}

.new-article-title {
  color: white;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0 !important;
}
`
