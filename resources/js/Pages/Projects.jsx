import MainLayout from "@/Layouts/MainLayout.jsx";
import Card from "@/Components/Card.jsx";

export default function Projects(){
    return (
        <MainLayout pageName={"Proyectos"} title={"Proyectos"}>
            <Card className="space-y-4">
                <h1 className="text-3xl font-bold">En Construcción 👨‍🔧</h1>
            </Card>
        </MainLayout>
    )
}