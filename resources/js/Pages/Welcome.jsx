import MainLayout from "@/Layouts/MainLayout.jsx";
import Card from "@/Components/Card.jsx";
import SmallProjectList from "@/Components/Projects/SmallProjectList.jsx";

export default function Welcome(){

    const projects = [
        {
            name: "Laravel Vite Plugin",
            image: "https://avatars.githubusercontent.com/u/8186664?s=200&v=4",
            date: "2021-08-01",
            description: "A Laravel plugin to use Vite as a bundler for your Laravel app"
        },
        {
            name: "Laravel Vite Preset",
            image: "https://avatars.githubusercontent.com/u/8186664?s=200&v=4",
            date: "2021-08-01",
            description: "A Laravel preset to use Vite as a bundler for your Laravel app"
        }
    ];

    return (
        <MainLayout pageName={"Hola, soy Dan!"}>
            <div className="space-y-4">
                <Card className="space-y-6">
                    <h1 className="text-3xl font-bold">Bienvenido a mi sitio web!</h1>
                    <p>Soy un Desarrollador Web Mexicano, me especializo principalmente en Laravel Framework y PHP 🐘 pero también se Javascript, algo de Java, Python y C#, actualmente estoy aprendiendo Rust y React para desarrollo Web3 👨‍💻</p>
                    <p>En esta página encontraras info como proyectos que he desarrollado y en los que estoy trabajando actualmente como side hustles</p>
                    <p>Y también un par de Blogs con tutoriales o tips que me vaya topando por ahí, y espero compartir con la comunidad hacker.</p>
                </Card>
                <SmallProjectList/>
            </div>
        </MainLayout>
    );
}  