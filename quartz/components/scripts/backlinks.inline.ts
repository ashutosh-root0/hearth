function toggleBacklinks(this: HTMLElement) {
    this.classList.toggle("collapsed")
    const content = this.nextElementSibling as HTMLElement | undefined
    if (!content) return
    content.classList.toggle("collapsed")
    this.setAttribute(
        "aria-expanded",
        this.getAttribute("aria-expanded") === "true" ? "false" : "true",
    )
}

function setupBacklinks() {
    const backlinks = document.querySelector(".backlinks")
    if (!backlinks) return

    const button = backlinks.querySelector(".backlinks-header")
    if (!button) return

    button.addEventListener("click", toggleBacklinks)
    window.addCleanup(() => button.removeEventListener("click", toggleBacklinks))
}

document.addEventListener("nav", () => {
    setupBacklinks()
})
