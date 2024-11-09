import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <a href="/" className="flex items-center mb-4">
              {/* <img
                src="/placeholder.svg?height=40&width=40"
                alt="Company Logo"
                className="mr-2"
              /> */}
              <span className="text-xl font-bold text-primary">InnoHub</span>
            </a>
            <p className="text-sm">
              Transform your ideas into reality with InnoHub. Your partner in innovation and growth.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Products</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-primary transition-colors">Custom Software Development</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">AI & Machine Learning</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Cloud Integration</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">IoT Solutions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Company</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#home" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#home" className="hover:text-primary transition-colors">Press</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#home" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#home" className="hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-muted-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} InnoHub. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}