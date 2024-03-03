import { AvatarImage, AvatarFallback, Avatar } from "../../@/components/ui/avatar"
import { Badge } from "../../@/components/ui/badge"
import {Button} from '../../@/components/ui/button'

export default function CreateBlog() {
  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage alt="User profile" src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">Draft in Kirags</span>
          <Badge variant="secondary">Saved</Badge>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="secondary">Publish</Button>
          <MoreHorizontalIcon className="text-gray-400" />
          <Avatar>
            <AvatarImage alt="User profile" src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback>H</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="mt-12 flex flex-col items-center">
        <div className="mb-4 flex items-center space-x-2">
          <PlusIcon className="text-gray-400" />
          <h1 className="text-4xl font-bold text-gray-900">Title</h1>
        </div>
        <p className="text-lg text-gray-500">Tell your story...</p>
      </div>
    </div>
  )
}

interface MoreHorizontalIconProps extends React.SVGProps<SVGSVGElement> {}

function MoreHorizontalIcon(props:MoreHorizontalIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  )
}

interface PlusIconProps extends React.SVGProps<SVGSVGElement> {}

function PlusIcon(props:PlusIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}
