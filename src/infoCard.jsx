const InfoCard = ({name, description, image}) => {
    return(
        <div className="cardContainer">
            <header>
                <h1>{title}</h1>
                <h2>{author}</h2>
            </header>
            <div className="flex flex-col">
                <img className="flex items-center justify-center h-46 object-cover overflow-hidden" src={image} alt={name} />
                <p>{story_text}</p>
            </div>
        </div>
    )
}

export default InfoCard;