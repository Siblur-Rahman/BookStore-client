


const SectionDescriptionHeading = ({text_1, text_2}: {text_1: string; text_2?: string } ) => {
    return (
        <>
            <h2 className="text-5xl font-bold leading-snug">{text_1} <span className="text-blue-700"> {text_2}</span> </h2>
        </>
    );
};

export default SectionDescriptionHeading;