import React from "react";
import { styles } from "../styles";

const About = () => {
  return (
    <div>
      <div className="mt-[6rem]">
        <div>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </div>

        <p className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
          sapiente ipsum dolorum dicta eaque cumque inventore molestias, beatae
          ea quaerat alias accusamus voluptas autem! Alias odit voluptates in
          totam vitae dignissimos minus eaque culpa unde tempore dolore aperiam
          obcaecati voluptatum aliquam corrupti, suscipit accusamus! Odit unde
          veniam dolorum ipsum doloribus.
        </p>
      </div>
    </div>
  );
};

export default About;
