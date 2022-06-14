document.addEventListener('alpine:init', () => {
    // Dropdown Component
    Alpine.data('dropdown', (initialOpenState = false) => ({
        open: initialOpenState,

        // Sets initial state based on window width
        init() {
            if (window.innerWidth < 768) {
                return (this.open = false)
            }

            return (this.open = true)
        },

        dropdown: {
            ['@resize.window']() {
                if (window.innerWidth < 768) {
                    return (this.open = false)
                }

                return (this.open = true)
            },

            ['@click.outside']() {
                if (window.innerWidth < 768) {
                    return (this.open = false)
                }
            },
        },

        trigger: {
            ['@click']() {
                this.open = !this.open
            },
        },

        dialogue: {
            ['x-show']() {
                return this.open
            },
        },
    }))
})
