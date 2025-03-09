import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const IconFilter = (props: ComponentProps<"svg">) => {
	return (
		<svg
			aria-label="Filtro"
			role="img"
			{...props}
			className={twMerge("size-5", props.className)}
			viewBox="0 0 17 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M7.4165 12H10.083V10.6665H7.4165V12ZM2.75 4V5.3335H14.75V4H2.75ZM4.75 8.6665H12.75V7.333H4.75V8.6665Z"
				fill="currentColor"
			/>
		</svg>
	);
};
