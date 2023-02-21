
const link = (icon: string, link: string) => {
  return (
    <li className="contact-li">
      <span className={`icon ${icon}`}></span>
      <span className="contact-text">{link}</span>
    </li>
  );
};

const Contacts = () => {
  return (
    <div className="contact">
      <h3 className="contact-title">Contact</h3>
      <ul className="contact-ul">
        {link("icon-envelope", "taras.chornyi@gmail.com")}
        {link("icon-github", "https://github.com/reftch")}
        {link("icon-linkedin", "www.linkedin.com")}
        {link("icon-xing", "www.xing.com")}
      </ul>
    </div>
  );
};

export default Contacts;
