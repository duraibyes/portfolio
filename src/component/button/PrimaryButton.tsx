
const PrimaryButton = ({ label, url }: { label: string, url?: string }) => {

    const handleClick = () => {
        if (url) {
            window.open(url, "_blank");
        }
    };

    return (
        <button
            onClick={handleClick}
            className="bg-[#FACC15] hover:bg-[#EAB308] text-[#1E293B] px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition w-full sm:w-auto">
            {label}
        </button>
    )
}

export default PrimaryButton