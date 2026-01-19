// Immediate initialization - runs before DOM is ready to prevent flash
// Initialised with Totoro theme
const savedColorTheme = localStorage.getItem("color-theme") ?? "Totoro"
document.documentElement.setAttribute("data-color-theme", savedColorTheme)

// Emit theme change event
const emitColorThemeChangeEvent = (theme: string) => {
    const event = new CustomEvent("colorthemechange", {
        detail: { theme },
    })
    document.dispatchEvent(event)
}

// Set up event listeners after navigation (SPA support)
document.addEventListener("nav", () => {
    const currentTheme = localStorage.getItem("color-theme") ?? "Totoro"
    document.documentElement.setAttribute("data-color-theme", currentTheme)

    // Update active state on buttons
    const updateActiveState = (themeName: string) => {
        const buttons = document.querySelectorAll(".theme-btn")
        buttons.forEach((btn) => {
            const btnTheme = btn.getAttribute("data-theme")
            if (btnTheme === themeName) {
                btn.classList.add("active")
            } else {
                btn.classList.remove("active")
            }
        })
    }

    // Initial active state
    updateActiveState(currentTheme)

    // Switch theme function
    const switchTheme = (e: Event) => {
        const button = e.currentTarget as HTMLElement
        const newTheme = button.getAttribute("data-theme")
        if (!newTheme) return

        document.documentElement.setAttribute("data-color-theme", newTheme)
        localStorage.setItem("color-theme", newTheme)
        updateActiveState(newTheme)
        emitColorThemeChangeEvent(newTheme)
    }

    // Add click listeners to theme buttons
    const themeButtons = document.querySelectorAll(".theme-btn")
    themeButtons.forEach((btn) => {
        btn.addEventListener("click", switchTheme)
        window.addCleanup(() => btn.removeEventListener("click", switchTheme))
    })
})
