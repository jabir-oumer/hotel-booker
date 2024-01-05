import home from '../assets/home.webp';

const Body = () => {
    return (
        <div className="relative -z-10 h-screen flex items-center justify-center bg-[url('../assets/home.webp')]">
            <img src={home} alt="Cover" className="absolute inset-0" />
        </div>
    );
};

export default Body;
