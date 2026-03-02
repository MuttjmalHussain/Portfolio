import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Fasi Dev</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Software Engineer specializing in MERN stack development.
            Passionate about building scalable and performant web applications.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="/about" className="hover:text-blue-600">About</Link></li>
            <li><Link href="/projects" className="hover:text-blue-600">Projects</Link></li>
            <li><Link href="/experience" className="hover:text-blue-600">Experience</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider">
            Connect
          </h4>
          <div className="flex gap-4">
            <a
              href="https://github.com/MuttjmalHussain"
              target="_blank"
              className="text-gray-600 hover:text-black"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/muttjmal-hussain-60871b350/"
              target="_blank"
              className="text-gray-600 hover:text-blue-700"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:muttjmalhussain1@gmail.com"
              className="text-gray-600 hover:text-red-600"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Fasi Dev. All rights reserved.
      </div>
    </footer>
  );
}