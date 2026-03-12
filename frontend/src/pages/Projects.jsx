import ProjectCard from "../components/ProjectCard";
import "../css/Projects.css";

function Projects(){

const projects=[
{
id:1,
name:"Metro Bridge Construction",
status:"Active",
start:"2026-03-01",
location:"Mumbai"
},
{
id:2,
name:"Highway Expansion",
status:"Active",
start:"2026-02-10",
location:"Pune"
},
{
id:3,
name:"Residential Tower",
status:"Planning",
start:"2026-04-15",
location:"Delhi"
}
]

return(

<div className="projects-container">

<h1>Projects</h1>

<div className="project-grid">

{projects.map((p)=>(
<ProjectCard key={p.id} project={p}/>
))}

</div>

</div>

)

}

export default Projects