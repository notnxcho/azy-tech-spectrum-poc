const SectionCard = ({section, index, completionStatus, setFocusedLayer, changeSection}) => {
    const handleClick = () => {
        setFocusedLayer('section')
        changeSection(section.id)
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