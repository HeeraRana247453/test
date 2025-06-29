// BUTTON PRIMARY
// ==============
export const ButtonPrimary = ({ href, target, label, icon, classes }) => {

    if (href) {
        return (
            <a href={href} target={target} className={"btn btn-primary " + classes}>
                {label} {icon ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span> : undefined}
            </a>
        )
    } else {
        return (
            <button className={"btn btn-primary " + classes}>
                {label} {icon ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span> : undefined}
            </button>
        )
    }

}

// BUTTON OUTLINE
// ================
export const ButtonOutline = ({ href, target, label, icon, classes }) => {

    if (href) {
        return (
            <a href={href} target={target} className={"btn btn-outline bg-white/10 backdrop-blur-xl shadow-[inset_0_2px_9px_rgba(255,255,255,0.2),_0_8px_20px_rgba(0,0,0,0.5)] ring-white/10 text-white ring-1 ring-inset" + classes}>
                {label} {icon ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span> : undefined}
            </a>
        )
    } else {
        return (
            <button className={"btn btn-outline  bg-white/10 backdrop-blur-xl shadow-[inset_0_2px_9px_rgba(255,255,255,0.2),_0_8px_20px_rgba(0,0,0,0.5)] ring-white/10 text-white ring-1 ring-inset" + classes}>
                {label} {icon ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span> : undefined}
            </button>
        )
    }

}
