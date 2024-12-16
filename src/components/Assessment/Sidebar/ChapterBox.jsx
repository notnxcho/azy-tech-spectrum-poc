const ChapterBox = ({chapter, currentChapter, changeChapter, completionStatus}) => {
    return (
        <div className={`chapter-box ${currentChapter === chapter.id ? 'selected' : ''} `} onClick={()=> changeChapter(chapter.id)}>
            <div className="label">Chapter {chapter.id}</div>
            <div className="title">{chapter.title}</div>
            <div className="sublabel">Sections</div>
            {chapter.sections.map((section, index) => (
                <div className={`section-title ${completionStatus.sections[index].isComplete ? 'completed' : ''}`}>{section.title}</div>
            ))}
        </div>
    )
}
export default ChapterBox