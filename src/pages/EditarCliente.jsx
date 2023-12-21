import { useNavigate, Form, useLoaderData, useActionData } from "react-router-dom";
import Formulario from "../components/Formulario";
import Error from "../components/Error";

function EditarCliente() {
    const navigate = useNavigate();
    const cliente = useLoaderData();
    const errores = useActionData;
    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
            <p className="mt-3">Ahora puedes modificar los datos de tu cliente</p>

            <div className="flex justify-end">
                <button
                    className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
                    onClick={() => navigate("/")}
                >
                    Volver
                </button>
            </div>
            <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">
                {errores?.length > 0 && errores.map((error, i) => <Error key={i}>{error}</Error>)}
                <Form
                    method="post"
                    noValidate
                >
                    <Formulario
                        cliente={cliente}
                    />
                    <input
                        type="submit"
                        className="w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg mt-20"
                        value="Guardar Cambios"
                    />
                </Form>
            </div>
        </>
    )
}

export default EditarCliente
