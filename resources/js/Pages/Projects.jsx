import MainLayout from "@/Layouts/MainLayout.jsx";
import Card from "@/Components/Card.jsx";

export default function Projects(){
    return (
        <MainLayout pageName={"Proyectos"}>
            <Card className="space-y-4">
                <h1 className="text-3xl font-bold">Proyectos</h1>
            </Card>
        </MainLayout>
    )
}