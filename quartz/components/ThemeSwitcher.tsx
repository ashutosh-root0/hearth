// @ts-ignore
import themeSwitcherScript from "./scripts/themeswitcher.inline"
import styles from "./styles/themeswitcher.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { Colors } from "../util/theme"

export default (() => {
    const ThemeSwitcher: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
        // Get theme names from the colors config
        const themeColors = cfg.theme.colors as Colors
        const themeNames = Object.keys(themeColors)

        return (
            <div class={classNames(displayClass, "theme-switcher")} data-theme-count={themeNames.length}>
                {themeNames.map((themeName) => {
                    // Get image path, fallback to a default if not defined
                    const imagePath = `https://${cfg.baseUrl}/static/assets/themes/${themeName}.png`

                    return (
                        <button
                            class="theme-btn"
                            data-theme={themeName}
                            title={themeName}
                            aria-label={`Switch to ${themeName} theme`}
                        >
                            <img
                                src={imagePath}
                                alt={`${themeName} theme preview`}
                                class="theme-preview-img"
                            />
                        </button>
                    )
                })}
            </div>
        )
    }

    ThemeSwitcher.beforeDOMLoaded = themeSwitcherScript
    ThemeSwitcher.css = styles

    return ThemeSwitcher
}) satisfies QuartzComponentConstructor