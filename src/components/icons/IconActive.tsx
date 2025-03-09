import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const IconActive = (props: ComponentProps<"svg">) => {
	return (
		<svg
			aria-label="Ativo"
			role="img"
			{...props}
			className={twMerge("size-5", props.className)}
			viewBox="0 0 17 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M6.61346 10.5835L3.83346 7.8035L2.88696 8.7435L6.61346 12.47L14.6135 4.47L13.6735 3.53L6.61346 10.5835Z"
				fill="currentColor"
			/>
		</svg>
	);
};
