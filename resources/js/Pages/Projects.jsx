import MainLayout from "@/Layouts/MainLayout.jsx";
import Card from "@/Components/Card.jsx";
import ProjectCard from "@/Components/Projects/ProjectCard.jsx";
import {Link, usePage} from "@inertiajs/react";

export default function Projects({projects}){
    const project = {
        id: 1,
        name: "Proyecto 1",
        description: "Lorem ipsum dolor siet amet, consectetur adipiscing elit. Nullam id nunc vitae nunc tincidunt luctus. Nulla facilisi. Nulla facilisi. " +
            "Lorem ipsum dolor siet amet, consectetur adipiscing elit. Nullam id nunc vitae nunc tincidunt luctus. Nulla facilisi. Nulla facilisi. " +
            "Lorem ipsum dolor siet amet, consectetur adipiscing elit. Nullam id nunc vitae nunc tincidunt luctus. Nulla facilisi. Nulla facilisi. " +
            "Lorem ipsum dolor siet amet, consectetur adipiscing elit. Nullam id nunc vitae nunc tincidunt luctus. Nulla facilisi. Nulla facilisi. ",
        url: 'https://google.com',
        date: "2021-01-01",
        image: "https://avatars.githubusercontent.com/u/8186664?s=200&v=4",
    }
    return (
        <MainLayout pageName={"Proyectos"} title={"Proyectos"}>
            <div className={"space-y-4"}>
                {
                    usePage().props.auth?.user &&
                    <Link
                        href={route('projects.create')}
                        className="text-blue-500 hover:text-blue-600 font-bold"
                    >
                        Crear Proyecto
                    </Link>
                }
                {projects.map((project) => (
                    <ProjectCard project={project} key={project.id}/>
                ))}
                {projects.length === 0 &&
                    <Card>
                        These are not the projects you're looking for
                    </Card>}
            </div>
        </MainLayout>
    )
}