
const SkillCard = ({ imgSrc, label, desc, classes }) => {
    return (
        <>
        {/* <div className={'flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-50/10  hover:bg-zinc-800 transition-colors group' + classes}> */}
        <div className={'flex items-center gap-3 bg-white/10 backdrop-blur-xl shadow-[inset_0_1px_3px_rgba(255,255,255,0.2),_0_8px_20px_rgba(0,0,0,0.5)] ring-white/10 text-white ring-1 ring-inset rounded-2xl p-3 hover:bg-zinc-50/10  hover:bg-zinc-800 transition-colors group ' + classes}>
            <figure className="bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors">
                <img src={imgSrc} width={32} height={32} alt={label} />
            </figure>
            <div className="">
                <h3>{label}</h3>
                <p className="text-zinc-400 text-sm">{desc}</p>
            </div>
        </div>

        </>
    )
}

export default SkillCard