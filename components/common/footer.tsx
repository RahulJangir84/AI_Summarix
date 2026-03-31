import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="border-t border-gray-200/20 backdrop-blur-xl bg-gradient-to-r from-[#302196] bg-[#23186f]">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-14">

        <div>
          <h2 className="text-3xl font-semibold text-gray-200 dark:text-white">
            Summarix
          </h2>
          <p className="mt-3 text-md text-gray-300 dark:text-gray-400">
            AI-powered PDF summarization to help you save time and boost productivity.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-xl text-gray-200 dark:text-white mb-3">
            Product
          </h3>
          <ul className="flex flex-col space-y-3 text-md text-gray-300 dark:text-gray-400">
            <Link href="/#pricing" className="hover:text-indigo-600 cursor-pointer">Pricing</Link>
            <Link href="/upload" className="hover:text-indigo-600 cursor-pointer">Upload PDF</Link>
            <Link href="/dashboard" className="hover:text-indigo-600 cursor-pointer">Your Summaries</Link>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-xl text-gray-200 dark:text-white mb-3">
            Company
          </h3>
          <ul className="space-y-3 text-md text-gray-300 dark:text-gray-400">
            <li className="hover:text-indigo-600 cursor-pointer">About</li>
            <li className="hover:text-indigo-600 cursor-pointer">Contact</li>
            <li className="hover:text-indigo-600 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-xl text-gray-200 dark:text-white mb-3">
            Connect
          </h3>
          <div className="flex space-x-4">
            <div className="w-11 h-11 flex items-center justify-center rounded-full bg-purple-100 hover:bg-purple-200 cursor-pointer">
              <Mail/>
            </div>
            <div className="w-11 h-11 flex items-center justify-center rounded-full bg-purple-100 hover:bg-purple-200 cursor-pointer">
              <Phone/>
            </div>
            <div className="w-11 h-11 flex items-center justify-center rounded-full bg-purple-100 hover:bg-purple-200 cursor-pointer">
              <MapPin/>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100/20 text-center py-4 text-sm text-gray-200">
        © {new Date().getFullYear()} Summarix. All rights reserved.
      </div>
    </footer>
  );
}