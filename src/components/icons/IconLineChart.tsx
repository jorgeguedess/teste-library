import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const IconLineChart = (props: ComponentProps<"svg">) => {
	return (
		<svg
			aria-label="Linhas"
			role="img"
			{...props}
			className={twMerge("size-5", props.className)}
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M2 2V14H14"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12.6667 6L9.33333 9.33333L6.66667 6.66667L4.66667 8.66667"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
