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
            I’m a web developer & programmer with about one years worth of
            experience with HTML5, CSS3, JavaScript, WordPress and PHP also have
            experience in other languages such as Python, C#, and PLC
            Structured-text. Some of these I learned while doing collaboration
            projects, some from internships. My work assignments are not always
            relevant to my expertise, but that does not stop me from performing
            them.
          </p>
        </div>
        <div className="timeline">
          <h2>Timeline</h2>
          <div className="date">
            <span className="timelineDate subTitle">2022/22/2</span>
            <p className="subTitleContext">
              {" "}
              some from internships. My work assignments are not always relevant
              to my expertise
            </p>
          </div>
          <div className="date ">
            <span className="timelineDate subTitle">2022/22/2</span>
            <p className="subTitleContext">
              {" "}
              some from internships. My work assignments are not always relevant
              to my expertise
            </p>{" "}
          </div>
          <div className="date ">
            <span className="timelineDate subTitle">2022/22/2</span>
            <p className="subTitleContext">
              {" "}
              some from internships. My work assignments are not always relevant
              to my expertise
            </p>{" "}
          </div>
          <div className="date ">
            <span className="timelineDate subTitle">2022/22/2</span>
            <p className="subTitleContext">
              {" "}
              some from internships. My work assignments are not always relevant
              to my expertise
            </p>{" "}
          </div>
        </div>
        <div className="hobbies">
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
        </div>
        <div className="sources">
          <h2>Sources</h2>

          <div className="source" onClick={() => {}}>
            <img src="#" className="sourceImage subTitle" />
            <p className="subTitleContext">Find me here</p>
          </div>
          <div className="source" onClick={() => {}}>
            <img src="#" className="sourceImage subTitle" />
            <p className="subTitleContext">Find me here</p>
          </div>
          <div className="source" onClick={() => {}}>
            <img src="#" className="sourceImage subTitle" />
            <p className="subTitleContext">Find me here</p>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
