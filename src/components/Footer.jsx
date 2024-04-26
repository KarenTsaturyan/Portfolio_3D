import { socialLinks } from "../constants/main.js";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <p className="text-sm">&copy; {new Date().getFullYear()}</p>
        </div>
        <div className="flex space-x-4">
          {socialLinks.map((socialLink) => (
            <a
              href={socialLink.link}
              className="hover:shadow-lg transition-shadow duration-300"
              key={socialLink.name}
            >
              <img
                src={socialLink.iconUrl}
                alt={socialLink.name}
                className="w-10 h-10 object-cover transition-all duration-300 hover:scale-110 hover:rotate-6"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
