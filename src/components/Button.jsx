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
            <a href={href} target={target} className={"btn btn-outline " + classes}>
                {label} {icon ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span> : undefined}
            </a>
        )
    } else {
        return (
            <button className={"btn btn-outline " + classes}>
                {label} {icon ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span> : undefined}
            </button>
        )
    }

}
