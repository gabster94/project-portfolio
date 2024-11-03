import { Button } from "./CardButton";
import web from "../assets/web.svg"
import github from "../assets/github.svg"
import projects from "../libraries/projects.json"

//create the content for what each projectcard should look like. 
export const ProjectCard = () => {
  return (
    <>
      {projects.projects.map((item) => (
        <div className="project-card" key={item.id}>
          <div className="image-container">
            < img className="project-image" src={item.image} alt={item.name} />
          </div>
          
          <div className="project-info">
            <ul className="tags">
              {item.tags.map((tag, index) => (
                <li className="tag" key={index}>
                  {tag}
                </li>
              ))}
            </ul>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          
            <div className="buttons">
              <Button
                icon={web}
                link={item.netlifylink}
                className="button"
                image="web"
                label="Live demo"
                // color="grey"
              />

              <Button
                icon={github}
                link={item.githublink}
                className="button"
                image="github"
                label="GitHub"
                // color="grey"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  )
}