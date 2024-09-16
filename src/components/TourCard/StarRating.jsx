import { useState, useEffect } from 'react';

function StarRating() {
    const [rating, setRating] = useState(0);
    const [isRatingSubmitted, setIsRatingSubmitted] = useState(false);

    useEffect(() => {
        if (isRatingSubmitted && rating > 0) {
            setIsRatingSubmitted(false);
        }
    }, [rating, isRatingSubmitted]);

    return (
        <div className="flex items-center mt-1">
            {[...Array(5)].map((_, index) => (
                <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 ${
                        index < 4 ? 'text-yellow-300' : 'text-gray-400'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M12 .587l3.668 7.568L24 9.423l-6 5.847L19.334 24 12 19.897 4.666 24 6 15.27l-6-5.847 8.332-1.268z"/>
                </svg>
            ))}

        </div>
);
}

export default StarRating;