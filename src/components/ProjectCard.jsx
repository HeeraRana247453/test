
const ProjectCard = ({ imgSrc, title, tags, projectLink, classes }) => {
    return (
        <div className={"relative p-0.5 rounded-2xl shadow-[16px_16px_20px_#0000008c] overflow-hidden before:absolute before:top-[-50%] before:right-[-50%] before:bottom-[-50%] before:left-[-50%] before:bg-[conic-gradient(transparent,#ff4545,#00ff99,#006aff,#ff0095,#ff4545,#006aff)] before:animate-spin-slow "+ classes }>
                
            {/* hover:bg-zinc-700/50  active:bg-zinc-700/60 -> these two property will add the transparency in card bg on hover */}
            <div className={"relative p-4 rounded-2xl bg-zinc-800 ring-1 ring-inset ring-zinc-50/5 transition-colors flex flex-col h-full" }>

                <figure className="img-box aspect-square rounded-lg mb-4">
                    <img src={imgSrc} alt={title} loading='lazy' className="img-cover" />
                </figure>

                <div className="flex items-center justify-between gap-4">
                    <div className="flex-grow">
                        <h3 className="title-1 mb-3">{title}</h3>
                        <div className="flex flex-wrap items-center gap-2">
                            {tags.map((label, key) =>
                                <span key={key} className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg">{label}</span>
                            )}
                        </div>
                    </div>

                    <div className="w-11 h-11 rounded-lg grid place-items-center bg-violet-400 text-zinc-950 shrink-0">
                        <span className="material-symbols-rounded" aria-hidden="true">
                            arrow_outward
                        </span>
                    </div>
                </div>

                <a href={projectLink} target='_blank' className="absolute inset-0"></a>
            </div>
        </div>
    )
}

export default ProjectCard