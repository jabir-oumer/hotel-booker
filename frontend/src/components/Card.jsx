import Rooms1 from '../assets/rooms-1.webp'

const Card = () => {
  return (
<>

<div className="flex flex-col w-full items-center justify-between md:flex-row my-20 dark:border-gray-700 dark:bg-gray-800 overflow-hidden max-md:flex-col mx-5">
  <div className="flex flex-col flex-1 justify-between p-20 leading-normal w-full">
    <h5 className="mb-4 text-4xl font-sans font-bold tracking-tight text-gray-900 dark:text-white">Meetings & Events</h5>
    <p className="font-normal font-sans text-gray-700 dark:text-gray-400">At Hyatt Regency Addis Ababa, we are expert planners for all occasions. Our flexible, contemporary meeting and event spaces cover 1,700 square meters, including a ground floor ballroom and a large terrace overlooking Meskel Square. All meeting and event spaces are equipped with modern technology and integrated audiovisual equipment.</p>
  </div>
  <div className='overflow-hidden flex-1 rounded-3xl'>
    <img className="object-cover hover:scale-110 duration-300 ease-in-out rounded-3xl h-full overflow-hidden" src={Rooms1} alt=""/>
  </div> 
</div>
<div className="flex flex-col w-full items-center justify-between md:flex-row my-20 dark:border-gray-700 dark:bg-gray-800 overflow-hidden max-md:flex-col mx-5">
  <div className='overflow-hidden flex-1 rounded-3xl w-full h-full'>
    <img className="object-cover hover:scale-110 duration-300 ease-in-out rounded-3xl h-full overflow-hidden" src={Rooms1} alt=""/>
  </div> 
  <div className="flex flex-col flex-1 justify-between p-20 leading-normal w-full">
    <h5 className="mb-4 text-4xl font-sans font-bold tracking-tight text-gray-900 dark:text-white">Meetings & Events</h5>
    <p className="font-normal font-sans text-gray-700 dark:text-gray-400">At Hyatt Regency Addis Ababa, we are expert planners for all occasions. Our flexible, contemporary meeting and event spaces cover 1,700 square meters, including a ground floor ballroom and a large terrace overlooking Meskel Square. All meeting and event spaces are equipped with modern technology and integrated audiovisual equipment.</p>
  </div>
</div>

</>
      

  )
}

export default Card
