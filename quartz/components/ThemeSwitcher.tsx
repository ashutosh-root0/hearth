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
                    const colors = themeColors[themeName]
                    // Use secondary and tertiary colors for the swatch preview
                    const primaryColor = colors.lightMode.secondary
                    const accentColor = colors.lightMode.tertiary

                    return (
                        <button
                            class="theme-btn"
                            data-theme={themeName}
                            title={themeName}
                            aria-label={`Switch to ${themeName} theme`}
                        >
                            <span class="theme-swatch">
                                <span class="swatch-primary" style={`background-color: ${primaryColor};`}></span>
                                <span class="swatch-accent" style={`background-color: ${accentColor};`}></span>
                            </span>
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
