import { NavLink } from "react-router-dom";

const ButtonComponent = ({ buttonText, buttonLink, buttonType }) => {
	return (
		<NavLink to={buttonLink}>
			<button
				className={`cta-btn 
					mt-5 rounded-rsm border 
					${
						buttonType === "fill"
							? "bg-dark_red text-white border-dark_red hover:bg-dark_red hover:text-white hover:border-dark_red"
							: "bg-red text-dark border-red/[.5] hover:bg-red hover:text-dark hover:border-red/[.5]"
					}
					hover:scale-105 hover:shadow-lg hover:-translate-y-1 
					transition-all duration-300 ease-in-out
					px-8 py-3 text-sm w-fit font-bold`}
			>
				{buttonText}
			</button>
		</NavLink>
	);
};

export default ButtonComponent;
