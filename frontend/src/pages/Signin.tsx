import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 flex items-center lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Login</h2>
            <p className="mt-2 text-sm text-gray-600">
              Create an account? 
              <Link className="font-medium text-indigo-600 hover:text-indigo-500 pl-2" to={'/signup'} >
                 signup
              </Link>
            </p>
            <form action="#" className="mt-8 space-y-6" method="POST">
              <div>
                <label className="sr-only" htmlFor="email-address">
                  Email address
                </label>
                <input
                  autoComplete="email"
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  id="email-address"
                  name="email"
                  placeholder="Email address"
                  required
                  type="email"
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="password">
                  Password
                </label>
                <input
                  autoComplete="current-password"
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                  type="password"
                />
              </div>
              <div>
                <button
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
          <div>
            <blockquote className="relative bg-white">
              <div className="text-lg">
                <p className="mt-2 text-gray-900">
                  “The customer service I received was exceptional. The support team went above and beyond to address my
                  concerns.”
                </p>
              </div>
              <footer className="mt-4">
                <p className="text-base font-semibold text-gray-900">Jules Winnfield</p>
                <p className="text-base text-gray-500">CEO, Acme Inc</p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}

