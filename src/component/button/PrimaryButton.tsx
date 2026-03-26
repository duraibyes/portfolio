
const PrimaryButton = ({ label }: { label: string }) => {
    return (
        <button className="bg-[#FACC15] hover:bg-[#EAB308] text-[#1E293B] px-6 py-3 rounded-lg font-semibold transition">
            {label}
        </button>
    )
}

export default PrimaryButton