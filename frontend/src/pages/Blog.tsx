/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fBWBPPltB2F
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from '../../@/components/ui/button'
import { AvatarImage, AvatarFallback, Avatar } from '../../@/components/ui/avatar'
import { Badge } from '../../@/components/ui/badge'

export default function Component() {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-4">
          <Button variant="outline">For you</Button>
          <Button variant="outline">Following</Button>
        </div>
        <Button variant="secondary">Become a member</Button>
      </div>
      <div className="space-y-6">
        <article>
          <div className="flex items-center space-x-2 mb-4">
            <Avatar>
              <AvatarImage alt="Peter V." src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>PV</AvatarFallback>
            </Avatar>
            <div>
              <div className="text-sm font-semibold">Peter V. - Dec 3, 2023</div>
              <Badge variant="secondary">Member-only</Badge>
            </div>
          </div>
          <h2 className="text-xl font-bold mb-2">
            How an Ugly Single-Page Website Makes $5,000 a Month with Affiliate Marketing
          </h2>
          <p className="text-gray-600 mb-4">
            No need to create a fancy and modern website with hundreds of pages to make money online. — Making money
            online is the dream for man...
          </p>
          <div className="flex items-center justify-between">
            <Badge>Side Hustle</Badge>
            <div className="text-sm">3 min read</div>
          </div>
        </article>
        <article>
          <div className="flex items-center space-x-2 mb-4">
            <Avatar>
              <AvatarImage alt="Payam Saderi" src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>PS</AvatarFallback>
            </Avatar>
            <div>
              <div className="text-sm font-semibold">Payam Saderi - Oct 2, 2023</div>
              <Badge variant="secondary">Selected for you</Badge>
            </div>
          </div>
          <h2 className="text-xl font-bold mb-2">To PM2, or Not to PM2: Embracing Docker for Node.js</h2>
          <p className="text-gray-600 mb-4">
            We’ve got this teeny-tiny service written Node.js, and like all services in the world its availability is
            very important to us. we’re talking BC-era code here! Back in those dark ages, Docker didn’t exist yet. We
            had to...
          </p>
          <div className="flex items-center justify-between">
            <Badge>Docker</Badge>
            <div className="text-sm">4 min read</div>
          </div>
        </article>
        <article>
          <div className="flex items-center space-x-2 mb-4">
            <Avatar>
              <AvatarImage alt="Ignacio de Gregorio" src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>ID</AvatarFallback>
            </Avatar>
            <div>
              <div className="text-sm font-semibold">Ignacio de Gregorio - Feb 22, 2024</div>
              <Badge variant="secondary">Member-only</Badge>
            </div>
          </div>
          <h2 className="text-xl font-bold mb-2">Google Has Finally Dethroned ChatGPT</h2>
          <p className="text-gray-600 mb-4">
            They Finally Did It — When you look at what Google has just achieved, it’s no wonder OpenAI suddenly
            released Sora a few hours later to...
          </p>
          <div className="flex items-center justify-between">
            <Badge>AI</Badge>
            <div className="text-sm">5 min read</div>
          </div>
        </article>
      </div>
    </div>
  )
}

