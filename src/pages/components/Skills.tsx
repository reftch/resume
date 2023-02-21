const skill = (name: string, percent: number) => {
  const divStyle = {
    width: `${percent}%`,
  };
  return (
    <div className="skills-box">
      <h4>{name}</h4>
      <div className="skills-percent">
        <div style={divStyle}></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="skills">
      <h2>Professional Skills</h2>
      {skill("Typescript", 95)}
      {skill("Java", 90)}
      {skill("Html", 95)}
      {skill("CSS", 80)}
    </div>
  );
};

export default Skills;
