
const SecondaryButton = ({ label, url }: { label: string; url?: string; }) => {

    const handleClick = () => {
        if (url) {
            window.open(url, "_blank");
        }
    };

    return (
        <button
            onClick={handleClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition w-full sm:w-auto">
            {label}
        </button>
    )
}

export default SecondaryButton