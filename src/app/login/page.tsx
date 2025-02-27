import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar />
      <div className="flex-grow flex justify-center items-center">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 ">
          <form className="space-y-4 ">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all p-1"
                placeholder="Email adress..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus-border-indigo-500 outline-none transform-all"
                placeholder="**********"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a
                href="#"
                className="text-sm text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium pu-2.5 rounded-lg transition-colors p-3">
              Sign In
            </button>
            <div>
              Don&apos;t have an account?{" "}
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-500 font-medium"
              >
                Sign up
              </a>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
