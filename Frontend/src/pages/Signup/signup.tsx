import { Button, Input } from "@/components/ui"

const Signup = () => {
  return (
    <>
      <section className="bg-gray-50">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"> 
      
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                  Create and account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your email</label>
                      <Input
                type="email"
                name="email"
                id="email"
                placeholder="name@company.com"
                className="bg-gray-50 text-black"
                required
              />
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label>
                      <Input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 text-black"
                required
              />
                  </div>
                  <div>
                      <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Confirm password</label>
                      <Input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 text-black"
                required
              />
                  </div>
                  
                  <Button variant="outline" className="w-full text-white">
              Signup
            </Button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </>
  )
}

export default Signup