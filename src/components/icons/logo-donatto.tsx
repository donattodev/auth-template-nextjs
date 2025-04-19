'use client'

import type { ComponentProps } from 'react'

type LogoProps = ComponentProps<'svg'> & {
  className?: string
}

export function Logo({ className, ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 150 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M16.633 9.962c0 5.526-4.443 9.985-9.95 9.985H0V.015h6.684a9.944 9.944 0 019.95 9.947zm-3.683 0c0-3.43-2.81-6.25-6.266-6.25H3.91V16.25h2.773c3.455 0 6.266-2.82 6.266-6.288z"
        className="fill-black dark:fill-white transition-colors"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.833 9.915c0 5.468-4.433 9.9-9.9 9.9a9.854 9.854 0 01-5.581-1.722l2.558-2.558a6.38 6.38 0 008.643-8.643l2.558-2.558a9.854 9.854 0 011.722 5.581zm-7.147-5.757l2.583-2.583a9.853 9.853 0 00-5.336-1.56c-5.468 0-9.9 4.433-9.9 9.9 0 1.965.573 3.796 1.56 5.336l2.583-2.583a6.38 6.38 0 018.51-8.51z"
        className="fill-[#96B500] dark:fill-primary transition-colors"
      />
      <path
        d="M61.676.015v19.931h-3.912v-1.79L49.144 6.57v13.377h-3.911V.015h3.911l8.62 11.586V.015h3.912zM85.937 19.947h-3.912l-.645-1.601a9.747 9.747 0 01-5.393 1.6c-1.974 0-3.835-.571-5.354-1.6l-.646 1.6h-3.911L74.05.017h3.911l7.975 19.93zm-5.962-5.069l-2.81-7.012-1.178-2.935-3.95 9.947a6.17 6.17 0 003.95 1.41 6.275 6.275 0 003.988-1.41zM105.869 3.94h-5.81v16.045h-3.912V3.94h-5.81V.015h15.532v3.926zM125.801 3.94h-5.811v16.045h-3.911V3.94h-5.81V.015h15.532v3.926z"
        className="fill-black dark:fill-white transition-colors"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M150 9.915c0 5.468-4.432 9.9-9.9 9.9a9.854 9.854 0 01-5.581-1.722l2.558-2.558a6.38 6.38 0 008.643-8.643l2.558-2.558A9.858 9.858 0 01150 9.915zm-7.147-5.757l2.583-2.583A9.85 9.85 0 00140.1.015c-5.467 0-9.9 4.433-9.9 9.9 0 1.965.573 3.796 1.56 5.336l2.583-2.583a6.38 6.38 0 018.51-8.51z"
        className="fill-black dark:fill-white transition-colors"
      />
    </svg>
  )
}
