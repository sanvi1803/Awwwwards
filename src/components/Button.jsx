/* eslint-disable react/prop-types */
const Button = ({ title, id, leftIcon, rightIcon, containerClass }) => {
    return (
        <button id={id} className={`group relative z-10 w-fit cursor-pointer rounded-full overflow-hidden bg-violet-50 px-7 py-3 text-black ${containerClass}`}>

            {leftIcon}
            <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
                <div>
                    {title}
                </div>
            </span>
            {rightIcon}

        </button>
    )
}

export default Button
