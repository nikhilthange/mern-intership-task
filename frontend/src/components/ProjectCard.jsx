import { useNavigate } from "react-router-dom";
import "../css/Projects.css";

function ProjectCard({project}){

const navigate = useNavigate();

return(

<div className="project-card">

<h3>{project.name}</h3>

<p>Status: <span className="status">{project.status}</span></p>

<p>Start Date: {project.start}</p>

<p>Location: {project.location}</p>

<button onClick={()=>navigate(`/dpr/${project.id}`)}>
Open DPR
</button>

</div>

)

}

export default ProjectCard