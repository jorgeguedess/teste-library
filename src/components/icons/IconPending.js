"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconPending = void 0;
var tailwind_merge_1 = require("tailwind-merge");
var IconPending = function (props) {
    return (<svg aria-label="Pendente" role="img" {...props} className={(0, tailwind_merge_1.twMerge)("size-5", props.className)} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_2009_7047)">
				<path d="M14.0834 2.00001H13.4167V0.666672H12.0834V2.00001H5.41671V0.666672H4.08337V2.00001H3.41671C2.68337 2.00001 2.08337 2.60001 2.08337 3.33334V14C2.08337 14.7333 2.68337 15.3333 3.41671 15.3333H14.0834C14.8167 15.3333 15.4167 14.7333 15.4167 14V3.33334C15.4167 2.60001 14.8167 2.00001 14.0834 2.00001ZM14.0834 14H3.41671V5.33334H14.0834V14Z" fill="currentColor"/>
			</g>
			<defs>
				<clipPath id="clip0_2009_7047">
					<rect width={16} height={16} fill="white" transform="translate(0.75)"/>
				</clipPath>
			</defs>
		</svg>);
};
exports.IconPending = IconPending;
