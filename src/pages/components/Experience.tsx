type Project = {
  name: string;
  description: string;
  technologies: string;
};

const company = (
  date: string,
  companyName: string,
  link: string,
  title: string,
  projects: Array<Project>
) => {
  return (
    <div className="experience-box">
      <div className="experience-company">
        <h5>{date}</h5>
        <a href={link} target="_blank" rel="noreferrer">
          {companyName}
        </a>
      </div>
      <div>
        <h4>{title}</h4>
        {projects.map((p: Project, index: number) => (
          <div className="project" key={index}>
            <div className="name">{p.name}</div>
            <div className="description">
              <p>{p.description}</p>
            </div>
            <div className="technologies">
              <div className="title">Technologies</div>
              <span className="description">{p.technologies}</span>
            </div>
          </div>
        ))}
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
        [
          {
            name: "Postage Optiomization Module UI",
            description:
              "Lead in architecture, development new UI for " +
              "replacement old one in Postage Optimization Module project. This project based on custom web elements and " +
              "Redux library as a state management. " +
              "Elaborated E2E integrations tests and " +
              "unit tests for the component`s testing.",
            technologies:
              "Typescript, Vite, Redux, Execa, Jest, Playwright, RESTful",
          },
          {
            name: "DocBridge Pilot UI",
            description:
              "Design and development UI for managing processing documents system." +
              "Postage Optimization Module project. Based on the Lit elements Web User Interface library " +
              "is a development tool, which allows to decrease a development time and application complexity. Designed and " +
              "developed project documentation. Implemented E2E integrations tests and " +
              "unit tests for the component`s testing.",
            technologies:
              "Typescript, Lit, Vuejs, Redux, Vite, Execa, Jest, Playwright, Cypress, RESTful",
          },
          {
            name: "DocBridge Pilot",
            description:
              "DocBridge Pilot provides the functionality to control and optimize document data streams. " +
              "A browser interface is available to control and monitor the processing steps. Implemented of the RESTful " +
              "API, code maintenance, encryption vault subsystem.",
            technologies:
              "Java 8-11, Spring Boot, Spring Vault, RESTful API, Docker, Maven, Tomcat, MySQL, MariaDB, MSSQL, Oracle DB",
          },
        ]
      )}

      {company(
        "09/2017 - 07/2018",
        "SINOVO business solutions",
        "https://sinovo.de",
        "Full Stack Java Developer",
        [
          {
            name: "Roche Personalized Diabetes Management Tool",
            description:
              "The integrated PDM tool based on microservices architecture helps doctors comply with processes " +
              "in the context of diabetes therapy. " +
              "It is used to locate and to correct deviations in the therapy process. " +
              "Besides that, the tool is used for the documentation of the data acquisition. " +
              "The quality-relevant processes are described and modeled in the BPEL XML-based language. " +
              "Apache ODE is used on the server side as a BPEL engine and contains separated process modules for control," +
              " diagnostic, metabolic, adipositas, fat metabolism and hypertension.",
            technologies:
              "Java 8, Spring Boot, Spring Cloud, Spring Eureka, Spring Configuration, " +
              "Spring Microservices, RESTful API, Angular 4-6, Maven, Gradle, Apache Tomcat, BPEL ODE, MariaDB",
          },
        ]
      )}

      {company(
        "11/2012 - 08/2017",
        "HHS Tech Group",
        "https://hhstechgroup.com/",
        "Senior Java Developer",
        [
          {
            name: "Audit System for event accumulation in the Hadoop HBase Cluster",
            description:
              "Ready-to-use fully encapsulated, service-oriented architecture (SOA) solution designed to " +
              "help organizations manage a wide range of audit-related processes on a single integrated platform. " +
              "Prototyping different decisions/approaches for implementation service-oriented architecture (SOA) solution " +
              "designed to help organizations manage a wide range of audit-related processes on a single integrated platform. " +
              "Development BPEL engine processes. Designed custom User interfaces modules for visualization business processes.",
            technologies:
              "Cloudera Hadoop, Elasticsearch, Solr, Ember Framework, BPEL ActiveVOS, Maven, " +
              "WebSphere 6,7,8, J2EE Design Patterns",
          },
        ]
      )}

      {company(
        "10/2010 - 10/2012",
        "Codeminders",
        "http://www.codeminders.com",
        "Java Developer",
        [
          {
            name: "Vidder Application VPN Solution",
            description:
              "Application VPN solutions put application owners in control of all aspects of network security",
            technologies:
              "Hibernate, Servlets, Ajax, JSON, JavaScript, Maven, Derby SQL, Apache Tomcat, Jetty",
          },
        ]
      )}

      {company(
        "08/2008 - 09/2010",
        "Miratech",
        "http://www.miratechgroup.com",
        "Java Developer",
        [
          {
            name: "Miratech Technical Assessment System",
            description:
              "The system where each employee (SWE, VVE, PL, TL, IT Engineers, TS Engineers, " +
              "Team Manages and Others) have own sets technical characteristics, " +
              "which allow access technical level of employee. These data are framework skills, domain skills, " +
              "database skills, swtools skills, technology skills and other. Base on these assesstments, " +
              "Direct Manager can more efficiently control their SWE and VVE units and improve process of software development",
            technologies:
              "Spring MVC, Servlets, ExtJS, Ajax, JSON, HTML, CSS, JavaScript, Maven, JDBC, MS SQL," +
              " Tomcat, Jetty",
          },
        ]
      )}

      {company(
        "04/2008 - 08/2008",
        "Dexton Software",
        "http://www.dexton-software.com",
        "Java Developer",
        [
          {
            name: "The Dexton Integrator facilitates data manipulation",
            description:
              "Manipulations can be done with or without user interaction. Business processes are " +
              "broken down into separate steps and based on certain rules, these steps will be carried out. " +
              "A process can take the parameters to run. These parameters can come from a data source but can also be " +
              "manually typed in by a user or triggered by another application or process",
            technologies:
              "Spring MVC, Servlets, ExtJS, Ajax, JSON, HTML, CSS, JavaScript, Maven, JDBC, MS SQL, Tomcat",
          },
        ]
      )}

      {company(
        "07/2005 - 03/2008",
        "Genesys",
        "https://www.genesys.com",
        "Java Developer",
        [
          {
            name: "Genesys Desktop Supervision",
            description:
              "An application that allows online communication between customers and companies.",
            technologies:
              "Struts 1, JSP, Servlets, HTML, CSS, JavaScript, ant, JDBC, MS SQL, Tomcat, Web Sphere and Web Logic",
          },
        ]
      )}

      {company(
        "06/1997 - 06/2005",
        "State Kyiv Design Bureau Luch",
        "http://www.luch.kiev.ua/en",
        "Software Developer",
        [
          {
            name: "Embedded software development",
            description: "Embedded software development for the control systems based on the x86-processors, " +
            "embedded software development for the control systems based on the DSP-processors " +
            "(TMS320C5000, TMS320C2000). Software development for the automatic control " +
            "and diagnostic systems for the high-precision guided weapons. " +
            "Software development for the telemetry system.",
            technologies: "Code Composer Studio™ (CCStudio) IDE, C, C++, Assembler",
          },
        ]
      )}
    </div>
  );
};

export default Experience;
