export default function Card({image, description}) {
    if (!image) return null;

    return (
        <div className="w-full md:w-[48%] p-5 flex flex-col items-center text-center">
            <img
                src={image}
                alt="Team member"
                className="w-full h-auto rounded-md mb-4"
            />
            {description && (
                <p className="text-gray-800 text-base leading-relaxed">
                    {description}
                </p>
            )}
        </div>
    );
}