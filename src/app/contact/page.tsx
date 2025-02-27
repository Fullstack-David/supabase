import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Conatct() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow flex justify-center items-center">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 ">
          <h2 className="mb-6 text-lg font-bold text-center">Register</h2>
          <form className="space-y-4 ">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="email"
                className="w-full py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all p-1"
                placeholder="Write your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all p-1"
                placeholder="Write your email"
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
            </div>
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium pu-2.5 rounded-lg transition-colors p-3">
              Sign In
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
