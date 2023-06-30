import author from "../Images/AuthorImage.jpg";
import simo from "../Images/Visualise.png";
import AnimatedPage from "../Components/AnimationHandler";

export default function Home() {
  return (
    <AnimatedPage>
      <div>
        {/* <div
          id="
        scene"
        ></div> */}
        <div className="simoBanner">
          <img src={simo}></img>
        </div>
        <div className="AuthorProps">
          <div>
            <h1>Wassim El Haddaoui</h1>
            <p>
              Webdeveloper <br />
              &#10088;Designer / Developer / Coffe drinker&#41;
            </p>
          </div>
          <img src={author} />
        </div>
        <div className="synopsis">
          <h2>Synopsis</h2>
          <p>
          I am an experienced software developer with a focus on creating efficient and effective solutions. Through my career, I have honed my skills in optimizing strategies, responsive design, and website analytics. I have successfully tackled complex hardware, software, and network issues, consistently demonstrating my problem-solving abilities. With a degree in Information and Media Technology, I have completed impactful IoT projects and gained experience leading workshops, highlighting my leadership and communication skills. Fluent in both Swedish and English, I possess excellent communication abilities essential for collaborating effectively with diverse teams</p>
        </div>
        <div className="timeline">
          <h2>Experience</h2>
          <div className="date">
            <span className="timelineDate subTitle">Mar 2022 -<br /> Apr 2022 <br /><br />WordPress Developer, MADPromotions (Internship)</span>
            <p className="subTitleContext">
              {" "}
			  <ul>
				<li>
				               Conducted site audits and implemented optimization strategies for improved site speed and SEO
				</li>
				<li>
				                Developed responsive designs and mobile-first solutions

				</li>
				<li>
				                Utilized website analytics tools, such as Google Analytics

				</li>
				<li>
 Demonstrated excellent problem-solving and debugging skills

				</li>
			  </ul>

            </p>
          </div>
          <div className="date ">
            <span className="timelineDate subTitle">Mar 2022 - <br />Apr 2022 <br /><br /> Developer, ASSA ABLOY Entrance System (Internship)</span>
            <p className="subTitleContext">
              {" "}
			  <ul>
				<li>
				                              Guided and assigned tasks to a 3-person collaboration project

				</li>
				<li>
				                Organized meetings to solve communication issues between devices

				</li>
				<li>
 Divided responsibilities for creating HMI between designer and programmer

				</li>
				<li>
 Operated complex hardware, software, and network problems and prepared reports summarizing and analyzing the issues

				</li>
 
			  </ul>

            </p>{" "}
          </div>
          <div className="date ">
            <span className="timelineDate subTitle">Oct 2022 - <br />Present<br /><br /> Technician, Stena Recycling AB</span>
            <p className="subTitleContext">
              {" "}<ul>
				<li>
              Manage and configure servers, drive enclosures, switches, desktops, and laptops

				</li>
				<li>
Test and resolve basic issues related to networking equipment

				</li>
				<li>
Manage network configurations and set up new devices

				</li> 
			  </ul>

            </p>{" "}
          </div>
      
        </div>
        {/*<div className="hobbies">
          <h2>Hobbies</h2>

          <div className="hobbie">
            <span className="hobbieTitle subTitle">Airsoft</span>
            <p className="subTitleContext">
              {" "}
              some from internships. My work assignments are not always relevant
              to my expertise
            </p>
          </div>
          <div className="hobbie">
            <span className="hobbieTitle subTitle">Strategy</span>
            <p className="subTitleContext">
              {" "}
              some from internships. My work assignments are not always relevant
              to my expertise
            </p>{" "}
          </div>
          <div className="hobbie">
            <span className="hobbieTitle subTitle">Fast paced</span>
            <p className="subTitleContext">
              {" "}
              some from internships. My work assignments are not always relevant
              to my expertise
            </p>{" "}
          </div>
          <div className="hobbie">
            <span className="hobbieTitle subTitle">Philosophy</span>
            <p className="subTitleContext">
              {" "}
              some from internships. My work assignments are not always relevant
              to my expertise
            </p>{" "}
          </div>
</div> */}
        <div className="sources">
          <h2>Sources</h2>

          <div className="source" onClick={() => {window.location = "https://github.com/CallMeSimo"}}>
            <img src="Images\Github-Icon.svg" className="sourceImage subTitle" />
            <p className="subTitleContext">Find me here</p>
          </div>
          <div className="source" onClick={() => {window.location = "https://www.linkedin.com/in/wassim-el-haddaoui/"}}>
            <img src="Images\linkedin-icon.svg" className="sourceImage subTitle" />
            <p className="subTitleContext">Or here</p>
          </div>
          <div className="source" onClick={() => {window.open('mailto:Elhaddaouiwassim@gmail.com?subject=SimoPortfolio')}}>
            <img src="Images\email-icon.svg" className="sourceImage subTitle" />
            <p className="subTitleContext">And here I guess</p>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
