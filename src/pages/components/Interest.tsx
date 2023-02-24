const interest = (icon: string, name: string) => {
  return (
    <li>
      <span className={`icon ${icon}`}></span>
      {name}
    </li>
  );
};

const Interest = () => {
  return (
    <div className="interest">
      <h2>Interest</h2>
      <ul>
        {interest("icon-computer", "Software")}
        {interest("icon-jogging", "Running")}
        {interest("icon-music", "Music")}
        {interest("icon-cooking", "Cooking")}
      </ul>
    </div>
  );
};

export default Interest;
