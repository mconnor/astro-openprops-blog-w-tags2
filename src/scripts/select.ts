import { navigate } from 'astro:transitions/client'

document.addEventListener('astro:page-load', () => {
<<<<<<< HEAD
    document
        .querySelector('[data-navigate-select]')
        ?.addEventListener(
=======
    document.querySelector('[data-navigate-select]')?.addEventListener(
>>>>>>> working1
            'change',
            (e: Event) =>
                e.target && navigate((e.target as HTMLSelectElement).value),
        )
})
