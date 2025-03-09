import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const IconLoading = (props: ComponentProps<"svg">) => {
	return (
		<svg
			aria-label="Carregando"
			role="img"
			{...props}
			className={twMerge("size-5", props.className)}
			viewBox="0 0 17 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_2012_1926)">
				<path
					d="M8.75 1.33333V3.99999"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M8.75 12V14.6667"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M4.03662 3.28667L5.92329 5.17333"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M11.5767 10.8267L13.4633 12.7133"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M2.08337 8H4.75004"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M12.75 8H15.4167"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M4.03662 12.7133L5.92329 10.8267"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M11.5767 5.17333L13.4633 3.28667"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<defs>
				<clipPath id="clip0_2012_1926">
					<rect width={16} height={16} fill="white" transform="translate(0.75)" />
				</clipPath>
			</defs>
		</svg>
	);
};
