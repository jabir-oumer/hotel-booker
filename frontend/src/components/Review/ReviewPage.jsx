import { useState } from 'react';
import Review from './Review';

const reviews = [
  {
    id: 1,
    author: 'John Doe ',
    content:
      'Great product! Highly recommended.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate ullam doloribus error provident dicta doloremque natus. Odit autem vel cupiditate  ',
  },
  {
    id: 2,
    author: 'Jane Smith',
    content:
      'Awesome experience. ecommended.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate ullam doloribus error provident dicta doloremque natus Will buy again.',
  },
  {
    id: 3,
    author: 'Henok Yisma',
    content:
      'Great product! Highly ecommended.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate ullam doloribus error provident dicta doloremque natusrecommended.',
  },
  {
    id: 4,
    author: 'Jabir Smith',
    content:
      'Awesome experience.ecommended.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate ullam doloribus error provident dicta doloremque natus Will buy again.',
  },
];

const ReviewPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrevReview = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <div className="w-full h-auto p-4 overflow-hidden">
      <div className="flex items-center justify-center py-4 h-auto ">
        <Review key={reviews[currentIndex].id} review={reviews[currentIndex]} />
      </div>
      <div className="flex justify-evenly mt-4">
        <button
          className="bg-gray-800 text-white px-4 py-2 rounded-full"
          onClick={handlePrevReview}
        >
          &#8592; {/* Left arrow */}
        </button>

        <button
          className=" bg-gray-800 text-white px-4 py-2 rounded-full"
          onClick={handleNextReview}
        >
          &#8594; {/* Right arrow */}
        </button>
      </div>
    </div>
  );
};

export default ReviewPage;
