import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  // {
  //   title: 'Easy to Use',
  //   Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
  //   description: (
  //     <>
  //       Docusaurus was designed from the ground up to be easily installed and
  //       used to get your website up and running quickly.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Focus on What Matters',
  //   Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
  //   description: (
  //     <>
  //       Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
  //       ahead and move your docs into the <code>docs</code> directory.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Powered by React',
  //   Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        {/* <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div> */}
        <p><b>The following project was conducted during the Spring 2023 Semester, by the following people: </b></p><br />
        <ul>
          <li><b><i>Anvitha Ramachandran</i></b>: CS + Computer Engineering major and math minor, researched audio signal obfuscation for microphone-based airflow sensors and software-defined networking for UAV networks for emergency routing. Can contribute towards hardware design for the project and mathematical modeling for embedded systems. Skills from research such as making block diagrams transfer over fairly well to this project, which will add more skills regarding data visualization and large-scale design of metering tools.</li>
          <li><b><i>Emily Laus</i></b>: Physics major and Classical Civilization minor, aiming to understand the human perception of science. Educational background and experience in thermodynamics, advanced mathematics, and problem-solving. Has performed data analysis for Community Choice Electricity (CCE) in Massachusetts, which allows for an understanding of the needs of the average person and the priorities of communities. Also has assessed the potential weaknesses of the UMass Carbon Zero plan, and has compared the viability of geothermal heating and cooling to that of carbon capture and storage in response to this assessment.</li>
          <li><b><i>Frank Catalano</i></b>: Animal Science Pre-Vet Major. Can contribute in coding, building circuits, and can learn new things pretty quickly. Prior knowledge in Circuit Building, some Embedded Systems, and minor Code experience and Physics experience. Vast knowledge of spots on campus, which may aid in understanding and implementation of the project. Interested in forming a lightsaber dueling group for all the colleges on the east coast of the U.S.</li>
          <li><b><i>Kushagra Srivastava</i></b>: CompSci major. Specializing in Artificial Intelligence/Machine Learning, and in System Design and Architecture. Can create software and web visualizations for the audience to better understand, grasp, and interact with data, conduct data analysis and predictions using my Statistical and ML skillset, and contribute towards a lot of Mathematical stuff. Can also contribute towards development in the hardware side of our project. I am also working with Prof Richards and Prof Chiu of UMass CICS to get a Systems Lab!</li>
        </ul>
        <hr />
        <p>The <a href="/docs/intro">Project</a> Page Holds our interactive data and visualizations, along with our research methodology, findings, and the like that we created as a result of this analysis, and the <a href="/blog">Weekly Reports</a> page holds our progress through the Spring 2023 semester while working on this project.</p>
      </div>
    </section>
  );
}
