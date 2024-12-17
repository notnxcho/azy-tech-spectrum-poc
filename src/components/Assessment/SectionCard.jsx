const SectionCard = ({section, index, completionStatus, setFocusedLayer, changeSection, setRelativePosition}) => {
    const handleClick = (event) => {
        const parent = event.currentTarget.parentElement
        const rect = event.currentTarget.getBoundingClientRect()
        const parentRect = parent.getBoundingClientRect()
        const relativeX = rect.left - parentRect.left
        const relativeY = rect.top - parentRect.top
        setRelativePosition({x: relativeX, y: Math.round(relativeY + 3)})
        setTimeout(()=>{
            setFocusedLayer('section')
            changeSection(section.id)
        }, 5)
        
    }
    return (
        <div className="section-card" onClick={handleClick}>
            <div className="label">
                Section {index + 1}
            </div>
            <div className="title">{section.title}</div>
            <div className={`status ${completionStatus.filter(q => q.isComplete).length === completionStatus.length ? 'completed' : ''} `}>
                {completionStatus.filter(q => q.isComplete).length}/{completionStatus.length} Completed
            </div>
        </div>
    )
}
export default SectionCard