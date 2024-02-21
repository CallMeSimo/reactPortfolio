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
          {/* I am an experienced software developer with a focus on creating efficient and effective solutions. Through my career, I have honed my skills in optimizing strategies, responsive design, and website analytics. I have successfully tackled complex hardware, software, and network issues, consistently demonstrating my problem-solving abilities. With a degree in Information and Media Technology, I have completed impactful IoT projects and gained experience leading workshops, highlighting my leadership and communication skills. Fluent in both Swedish and English, I possess excellent communication abilities essential for collaborating effectively with diverse teams */}
          I build stuff, I also break stuff but lets forget that part.
          </p>
        </div>
        <div className="timeline">
          <h2>Experience</h2>
          <div className="date">
            <span className="timelineDate subTitle">April 2022 - May 2022 <br />WordPress Developer, MADPromotions (Internship)</span>
            <p className="subTitleContext">
              {" "}
			  <ul>
				<li>
        Genomförde webbplatsrevisioner och implementerade optimeringsstrategier för förbättrad sidhastighet och SEO
				</li>
				<li>
        Utvecklade responsiva designer och lösningar med mobil först
				</li>
				<li>
        Använde verktyg för webbanalys, såsom Google Analytics
				</li>
				<li>
        Demonstrerade utmärkta problemlösnings- och felsökningsfärdigheter
				</li>
			  </ul>

            </p>
          </div>
          <div className="date ">
            <span className="timelineDate subTitle">Mar 2022 - Apr 2022 <br /> Developer, ASSA ABLOY Entrance System (Internship)</span>
            <p className="subTitleContext">
              {" "}
			  <ul>
				<li>
        Testade komplexa problem med hårdvara, mjukvara och nätverk; förberedde omfattande rapporter.


				</li>
				<li>
        Ledde ett samarbetsprojekt med 3 personer.

				</li>
				<li>
        Planerade och organiserade projektet genom att använda Trello för att spåra framsteg och säkerställa effektiv kommunikation och samarbete inom teamet.
				</li>
				<li>
        Organiserade möten för att lösa kommunikationsproblem mellan enheter.

				</li>
				<li>
        Samordnade skapandet av HMI mellan designers och programmerare.

				</li>
 
			  </ul>

            </p>{" "}
          </div>
          <div className="date ">
            <span className="timelineDate subTitle">Oct 2022 - Present<br /> Technician, Stena Recycling AB</span>
            <p className="subTitleContext">
              {" "}<ul>


				<li>
        Hantera och konfigurera servrar, diskkabinetter, switchar, stationära och bärbara datorer.


				</li>
				<li>
        Felsökning och problemlösning i nätverk, mjukvara och operativsystem.

				</li>
				<li>
        Service och support för installationer av arbetsstationer, bärbara och stationära datorer, samt annan IT-utrustning.

				</li> 
				<li>
        Hantera nätverkskonfigurationer och ställ in nya enheter.

				</li> 
				<li>
        Detaljerad dokumentation av produkt och processer.

				</li> 
				<li>
        Medlem i förbättringskommittén. Förslag till kontinuerliga förbättringar inom teknik- och IT-området.

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
