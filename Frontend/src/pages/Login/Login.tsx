import { Button, Input } from '@/components/ui/index';

const Login = () => (
  <section className="bg-gray-50">
    <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
      <span className="mb-6 flex items-center text-2xl font-semibold text-gray-900">
      </span>
      <div className="w-full rounded-2xl bg-white shadow sm:max-w-md md:mt-0 xl:p-0">
        <div className="space-y-4 p-6 sm:p-8 md:space-y-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Login to your account
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Your email
              </label>
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
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 text-black"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start" />
            </div>
            <Button variant="outline" className="w-full text-white">
              LogIn
            </Button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Login;
