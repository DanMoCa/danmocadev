import MainLayout from "@/Layouts/MainLayout.jsx";
import Card from "@/Components/Card.jsx";

export default function About(){
    return (
        <MainLayout pageName={"Sobre mi"}>
            <div className="space-y-4">
                <Card className="space-y-6">
                    <h1 className="text-3xl font-bold">Sobre mi</h1>

                </Card>
            </div>
        </MainLayout>
    )
}