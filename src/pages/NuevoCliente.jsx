import { useNavigate, Form, useActionData } from "react-router-dom";
import Formulario from "../components/Formulario";
import Error from "../components/Error";


function NuevoCliente() {

  const navigate = useNavigate();
  const errores = useActionData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
      <p className="mt-3">Llena todos los campos para registrar un nuevo cliente</p>

      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
      </div>
      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">
        {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}
        <Form
          method="post"
        >
          <Formulario />
          <input
            type="submit"
            className="w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg mt-20"
            value="Registrar cliente"
          />
        </Form>
      </div>
    </>
  )
}

export default NuevoCliente
