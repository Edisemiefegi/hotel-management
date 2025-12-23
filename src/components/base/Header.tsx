import type { ReactNode } from "react"

interface Props {
    heading?: string,
    subheading?: string,
    action?: boolean,
    children?: ReactNode
}
function Header({heading, subheading, action, children}: Props) {
  return (
    <header className="flex items-center justify-between ">
       <div className="space-y-1">
         <h1 className="text-2xl font-semibold font-serif">{heading}</h1>
        <p className="font-light text-gray-600">{subheading}</p>
       </div>

        {action && <div>{children}</div>}
    </header>
  )
}

export default Header