const Button = ({ text }) => {
    return (
        <button type="submit" className="w-full bg-[#E1713B] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center">{text}</button>
    );
};

export default Button;