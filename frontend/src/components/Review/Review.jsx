import logo from '../../assets/rooms-3.webp';

const Review = ({ review }) => {
  return (
    <div className="flex flex-col items-center w-1/3 p-4 mx-2 border rounded-md shadow-lg">
      <img
        src={logo}
        alt="Author"
        className="w-32 h-32 object-cover rounded-full mr-4 "
      />
      <p className="font-semibold text-xl text-center">{review.author}</p>
      <p className="text-gray-500 pt-2 text-center">&apos;&apos; {review.content} &apos;&apos;</p>
    </div>
  );
};

export default Review;
