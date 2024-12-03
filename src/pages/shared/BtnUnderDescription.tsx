
const BtnUnderDescription = ({text}: {text: string}) => {
    return (
        <button className="bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300 ">{text}</button>

    );
};

export default BtnUnderDescription;