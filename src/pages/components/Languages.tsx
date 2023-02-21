const Language = (name: string, percent: number) => {
  const divStyle = {
    width: `${percent}%`,
  };
  return (
    <li>
      <span>{name}</span>
      <span className="languages-percent">
        <div style={divStyle}></div>
      </span>
    </li>
  );
};

const Languages = () => {
  return (
    <div className="languages">
      <h3>Languages</h3>
      <ul>
        {Language("English", 80)}
        {Language("Deutsch", 50)}
        {Language("Ukranian", 95)}
        {Language("Russian", 80)}
      </ul>
    </div>
  );
};

export default Languages;
