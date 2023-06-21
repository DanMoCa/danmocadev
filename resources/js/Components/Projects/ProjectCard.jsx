import Card from "@/Components/Card.jsx";
import {Link, usePage} from "@inertiajs/react";

export default function ProjectCard({project, className}){
    return (
        <Card className={"flex space-x-8 "+className}>
            <div className="flex-shrink-0">
                <img className="h-32 w-32 rounded-xl" src={project.image} alt={project.name} />
            </div>
            <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">{project.name}</h3>
                    {/*<p className="text-sm">{project.date}</p>*/}
                </div>
                <div className={"space-x-8"}>
                    <a href={project.link} target="_blank" className="text-blue-500 hover:text-blue-600 font-bold">Ver</a>
                    {
                        usePage().props.auth?.user &&
                        <Link href={route('projects.edit', project.id)} className="text-blue-500 hover:text-blue-600 font-bold">Editar</Link>
                    }
                </div>
                <p className="text-md">{project.description}</p>
            </div>
        </Card>
    )
}