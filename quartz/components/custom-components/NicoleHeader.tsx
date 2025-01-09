import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import { classNames } from "../../util/lang"
import { pathToRoot } from "../../util/path"
import { i18n } from "../../i18n"

export const NicoleHeader: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)

  const links = [
    {
      title: "🌊Now",
      destination: "/now"
    },
    {
      title: "🍄Days",
      destination: "/daily/"
    },
    {
      title: "🦜Blog",
      destination: "/blog/"
    },
    {
      title: "☕️ Github",
      destination: "https://github.com/nicolecomputer"
    }
  ]
  return (
    <header>
      <h2 class={classNames(displayClass, "page-title")}>
        <a href={baseDir}>{title}</a>
      </h2>
      <ol>
        {links.map(link => (
          <li>
            <a href={link.destination}>{link.title}</a>
          </li>
        ))}
      </ol>
    </header>
  )
}

NicoleHeader.css = `
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  flex-wrap: wrap;
  gap: 20px;
  text-align: center;

  border-bottom: 2px dashed #540D6E;
}

header ol {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

@media (max-width: 600px) {
  header ol {
    justify-content: center;
    flex-basis: 100%;
    margin: 0;
    padding: 0;
  }
}

header ol li {
  display: flex;
  font-size: 16px;
  font-weight: bold;
}

.page-title {
  font-size: 1.75rem;
  margin: 0;
  white-space: nowrap
}

.page-title a {
    position: relative;
}

.page-title a:hover {
    color: #ee426778 !important;
}

.page-title a:before {
    --highlighter-color: 255, 206, 0;
    content: '';
    position: absolute;
    inset: -4px 0 0 -8px;
    width: 100%;
    height: 100%;
    padding: 4px 14px;
    z-index: -1;
    background-image: linear-gradient(104deg,rgba(0,0,0,0) .9%,rgba(var(--highlighter-color),1.25) 2.4%,rgba(var(--highlighter-color),.5) 5.8%,rgba(var(--highlighter-color),.25) 93%,rgba(var(--highlighter-color),.7) 96%,rgba(0,0,0,0) 98%),linear-gradient(183deg,rgba(0,0,0,0) 0,rgba(var(--highlighter-color),.3) 7.9%,rgba(0,0,0,0) 15%);
    transform: rotate(-2deg);
}
`
