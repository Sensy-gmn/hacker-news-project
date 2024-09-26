export default function ArticleDetails({
    author,
    created_at,
    story_id,
    title,
    url,
    tags,
}) {
    return (
        <>
            <div className="flex flex-col p-5 m-2 border-2 border-gray-300 rounded-lg shadow-lg bg-white">
                <a
                    href={url}
                    className="font-bold text-3xl text-blue-600 hover:underline"
                >
                    {title} - ID: {story_id}
                </a>
                <p className="italic text-gray-700 mt-2">{author}</p>
                <p className="text-gray-500">
                    {new Date(created_at).toLocaleDateString()}
                </p>
                <div className="mt-3">
                    {tags &&
                        tags.map((tag) => (
                            <span
                                key={tag}
                                className="inline-block bg-red-100 text-red-500 px-2 py-1 rounded-full text-sm mr-2"
                            >
                                {tag}
                            </span>
                        ))}
                </div>
            </div>
        </>
    );
}
