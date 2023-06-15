import Card from "@/Components/Card.jsx";
import MainLayout from "@/Layouts/MainLayout.jsx";

export default function Blog(){
    return (
        <MainLayout pageName={"Blog"} title={"Blog"}>
            <Card className="space-y-4">
                <h1 className="text-3xl font-bold">En Construcción 👨‍🔧</h1>
            </Card>
        </MainLayout>
    )
}