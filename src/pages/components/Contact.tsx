
const link = (icon: string, link: string, title: string, ) => {
  return (
    <li className="contact-li">
      <span className={`icon ${icon}`}></span>
      <a href={link} target="_blank" rel="noreferrer">{title}</a>
    </li>
  );
};

const Contacts = () => {
  return (
    <div className="contact">
      <h3 className="contact-title">Contact</h3>
      <ul className="contact-ul">
        {link("icon-envelope", "mailto:taras.chornyi@gmail.com", "taras.chornyi@gmail.com")}
        {link("icon-github", "https://github.com/reftch", "github.com/reftch")}
        {link("icon-linkedin", "https://www.linkedin.com/in/taras-chornyi-696148152", "www.linkedin.com",)}
        {link("icon-xing", "https://www.xing.com/profile/Taras_Chornyi/cv", "www.xing.com")}
      </ul>
    </div>
  );
};

export default Contacts;
