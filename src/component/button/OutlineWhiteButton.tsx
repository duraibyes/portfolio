
const OutlineWhiteButton = ({ label, url }: { label: string; url?: string }) => {

    const handleClick = () => {
        if (url) {
            window.open(url, "_blank");
        }
    };

    return (
        <button
            onClick={handleClick}
            className="border border-white text-white hover:bg-white hover:text-[#1E3A8A] px-6 py-3 rounded-lg transition w-full sm:w-auto">
            {label}
        </button>
    )
}

export default OutlineWhiteButton