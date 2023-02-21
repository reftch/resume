const company = (
  date: string,
  companyName: string,
  link: string,
  title: string,
  description: string
) => {
  return (
    <div className="experience-box">
      <div className="experience-company">
        <h5>{date}</h5>
        <a className="companyName" href={link} target="_blank" rel="noreferrer">
          {companyName}
        </a>
      </div>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="experience">
      <h2>Experience</h2>

      {company(
        "12/2018 - present",
        "Compart GmbH",
        "https://compart.com/en/home",
        "Senior Full Stack Developer",
        "Lead in architecture, design and development new User Interface for " +
          "managing processing documents system. Developed 30+ new custom " +
          "components, which are used in different plugins. Designed and " +
          "developed plugin system to allow others to extend existed" +
          "functionality and modularity. Elaborated E2E integrations tests and " +
          "unit tests for the component`s testing. Implemented of the RESTful " +
          "API, code maintenance, encryption vault subsystem. Designed and " +
          "developed project documentation."
      )}

      {company(
        "09/2017 - 07/2018",
        "SINOVO business solutions",
        "https://sinovo.de",
        "Full Stack Java Developer",
        "Implemented of the RESTful API for the Roche Personalized Diabetes Management Tool." +
          "Development the quality-relevant processes are described and modeled in the BPEL XML-based language." +
          "Development custom interfaces in multiple modules." +
          "Elaborated integrations tests for the backend microservices."
      )}

      {company(
        "11/2012 - 08/2017",
        "HHS Tech Group",
        "https://hhs-group.com",
        "Java Developer",
        "Developed Audit System for event accumulation in the Hadoop HBase Cluster." +
          "Prototyping different decisions/approaches for implementation service-oriented architecture (SOA) solution" +
          "designed to help organizations manage a wide range of audit-related processes on a single integrated platform." +
          "Development BPEL engine processes. Designed custom User interfaces modules for visualization business processes."
      )}
    </div>
  );
};

export default Experience;
