export default function Footer() {
  return (
    <footer className="bg-gray-300 mt-2">
      <div className="w-full h-16 mx-auto max-w-screen-xl flex items-center justify-between px-4 gap-3">
        <span className="text-sm sm:text-center">
          © 2024{" "}
          <a href="/" className="hover:underline">
            Market™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
