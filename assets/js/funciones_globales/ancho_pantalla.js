export default function dameElAnchoDePantalla() {
    return Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0,
        document.body.clientWidth || 0
    )
}