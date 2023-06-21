import Card from "@/Components/Card.jsx";
import {useEffect, useState} from "react";
import SmallProjectLoader from "@/Components/ContentLoader/SmallProjectLoader.jsx";

export default function SmallProjectList({}){
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getProjects();
    }, []);

    const getProjects = async () => {
        try {
            const response = await axios.get(route('smallprojects'));
            setTimeout(() => {
                setProjects(response.data.projects);
            }, 500);

        }catch (e) {
            console.log(e);
        }
    }

    return (
        <Card>
            <h2 className="text-2xl font-bold">Proyectos Recientes</h2>
            <br/>
            <div className="space-y-4">
                {
                    projects.length === 0 &&
                        <div className="space-y-4">
                            <SmallProjectLoader/>
                            <SmallProjectLoader/>
                        </div>
                }
                {projects.map((project) => (
                    <div className="flex space-x-4" key={project.id}>
                        <div className="flex-shrink-0">
                            <img className="h-12 w-12 rounded-full" src={project.image} alt={project.name} />
                        </div>
                        <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm font-medium">{project.name}</h3>
                                {/*<p className="text-sm ">{project.date}</p>*/}
                            </div>
                            <p className="text-sm ">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    )
}