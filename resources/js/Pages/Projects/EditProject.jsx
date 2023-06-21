import MainLayout from "@/Layouts/MainLayout.jsx";
import Card from "@/Components/Card.jsx";
import {useEffect, useState} from "react";
import {useForm, router, Link} from "@inertiajs/react";

export default function EditProject({project}){

    const {data, setData, put, processing, errors} = useForm({
        _method: 'put',
        name: project.name,
        description: project.description,
        link: project.link,
        image: project.image,
        file: null,
    })

    const [imageUrl, setImageUrl] = useState(data.image)

    useEffect(() => {
        //grab the image file and convert it to base64 string format
        if(data.file){
            let reader = new FileReader();
            reader.readAsDataURL(data.file);
            setImageUrl(URL.createObjectURL(data.file));
            reader.onloadend = () => {
                setData({...data, image: reader.result})
            }
        }
    },[data])

    function handleSubmit(e){
        e.preventDefault();
        router.post(route('projects.update', project.id), data)

    }

    return (
        <MainLayout pageName={"Editar - " + project.name} title={"Editar - " + project.name}>
            <div className="space-y-4">
                <form onSubmit={handleSubmit}>
                    <Card className="space-y-4">
                        <div className="space-y-12">
                            <div className="border-b border-gray-900/10 pb-12">
                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                            Nombre Proyecto
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <input
                                                    type="text"
                                                    name="username"
                                                    id="username"
                                                    autoComplete="username"
                                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 dark:text-white"
                                                    placeholder="janesmith"
                                                    value={data.name}
                                                    onChange={(e) => setData({...data, name: e.target.value})}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                            URL
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <input
                                                    type="text"
                                                    name="url"
                                                    id="url"
                                                    autoComplete="username"
                                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 dark:text-white"
                                                    placeholder="janesmith"
                                                    value={data.link}
                                                    onChange={(e) => setData({...data, link: e.target.value})}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                            Descripción
                                        </label>
                                        <div className="mt-2">
                                            <textarea
                                                id="about"
                                                name="about"
                                                rows={3}
                                                className="block w-full rounded-md bg-transparent border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-white"
                                                defaultValue={project.description}
                                                onChange={(e) => setData({...data, description: e.target.value})}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                            Thumbnail
                                        </label>
                                        <div className="mt-2 flex items-center gap-x-3">
                                            <img className="h-32 w-32 bg-gray-600 p-2 rounded-xl" src={imageUrl} aria-hidden="true" alt={data.name}/>
                                            <input type="file" className={"hidden"} id="photo" name="photo"
                                                   onChange={e => setData('file', e.target.files[0])}
                                            />
                                            <button
                                                onClick={() => document.getElementById('photo').click()}
                                                type="button"
                                                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                            >
                                                Change
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <Link
                                href={route('projects.index')}
                                type="button"
                                className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                                Cancel
                            </Link>
                            <button
                                type="submit"
                                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Save
                            </button>
                        </div>
                    </Card>
                </form>
            </div>
        </MainLayout>
    )
}