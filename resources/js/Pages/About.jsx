import MainLayout from "@/Layouts/MainLayout.jsx";
import Card from "@/Components/Card.jsx";
import {Link} from "@inertiajs/react";

export default function About(){
    return (
        <MainLayout pageName={"Sobre mi"} title={"Sobre mi"}>
            <div className="space-y-4">
                <Card className="space-y-6">
                    <h1 className="text-xl font-bold">Quien es soy yo?</h1>
                    <p>
                        Soy un Ingeniero de Software Mexicano, principalmente con Desarrollo Web, y un enfoque en Backend. He trabajado de forma remota para
                        empresas en Estados Unidos, Canada, y Mexico desde 2016.

                        Actualmente trabajo como Ingenierio Backend para <a href="https://spinarplus.com" target="_blank" rel="noreferrer" className="text-blue-500 font-bold hover:underline">Spinar</a>, una empresa mexicana de Jalisco, México.
                    </p>
                    <h1 className="text-xl font-bold">Que hago?</h1>
                    <p>
                        Me especializo principalmente en Laravel Framework y PHP 🐘 pero también se Javascript, algo de Java, Python y C#, actualmente estoy aprendiendo Rust y React para desarrollo de dApps en Web3 👨‍💻
                    </p>
                    <p>
                        Durante mi trayecto he tenido la oportunidad de trabajar con otros tecnologias como:
                    </p>
                    <ul className={"list-disc list-inside pl-4"}>
                        <li>React</li>
                        <li>Vue</li>
                        <li>Docker</li>
                    </ul>
                    <p>
                        Y algunos servicios en la nube como AWS y Digital Ocean
                    </p>
                    <p>
                        Soy muy bueno desarrollando RESTful APIs, diseñando bases de datos, y escribiendo código limpio y mantenible. También he tenido la oportunidad de liderar
                        equipos de desarrollo, y he sido responsable de la arquitectura de varios proyectos.
                    </p>
                    <p>
                        Me gusta mucho aprender nuevas tecnologias, y me gusta mucho compartir lo que aprendo con la comunidad, por lo que comenzare a escribir algunos tips y tutoriales en mi blog sobre las nuevas tecnologías que estoy aprendiendo.
                    </p>

                    <h1 className="text-xl font-bold">Que me gusta hacer?</h1>
                    <p>
                        Me gusta mucho jugar videojuegos, escuchar música, ver series, películas, anime, comics y manga, y últimamente adentrándome en el mundo indiehacker 👨‍💻  Si deseas platicar sobre alguno de estos hobbies
                        sientete libre de contactarme en mi <a href={"https://twitter.com/pankexillo"} target={"_blank"} className={"text-blue-500 font-bold hover:underline"}>Twitter</a>
                    </p>


                </Card>
            </div>
        </MainLayout>
    )
}