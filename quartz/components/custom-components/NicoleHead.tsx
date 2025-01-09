import { i18n } from "../../i18n"
import { CSSResourceToStyleElement, JSResourceToScriptElement } from "../../util/resources"
import { googleFontHref } from "../../util/theme"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import { unescapeHTML } from "../../util/escape"

export const NicoleHead: QuartzComponent = ({
    cfg,
    fileData,
    externalResources,
    ctx,
}: QuartzComponentProps) => {
    // Get file description (priority: frontmatter > fileData > default)
    const fdDescription =
        fileData.description?.trim() ?? i18n(cfg.locale).propertyDefaults.description
    const titleSuffix = cfg.pageTitleSuffix ?? ""
    const title =
        (fileData.frontmatter?.title ?? i18n(cfg.locale).propertyDefaults.title) + titleSuffix
    let description = ""
    if (fdDescription) {
        description = unescapeHTML(fdDescription)
    }

    if (fileData.frontmatter?.socialDescription) {
        description = fileData.frontmatter?.socialDescription as string
    } else if (fileData.frontmatter?.description) {
        description = fileData.frontmatter?.description
    }

    const { css, js } = externalResources

    return (
        <head>
            <title>{cfg.pageTitle} | {title}</title>
            <meta charSet="utf-8" />
            {cfg.theme.cdnCaching && cfg.theme.fontOrigin === "googleFonts" && (
                <>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link rel="stylesheet" href={googleFontHref(cfg.theme)} />
                </>
            )}
            <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin={"anonymous"} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {/* OG/Twitter meta tags */}
            <meta name="og:site_name" content={cfg.pageTitle}></meta>
            <meta property="og:title" content={title} />
            <meta property="og:type" content="website" />
            <meta property="og:description" content={description} />

            <meta name="description" content={description} />
            {css.map((resource) => CSSResourceToStyleElement(resource, true))}
            {js
                .filter((resource) => resource.loadTime === "beforeDOMReady")
                .map((res) => JSResourceToScriptElement(res, true))}
        </head>
    )
}
