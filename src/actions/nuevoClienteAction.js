import { redirect } from "react-router-dom";
import { agregarCliente } from "../data/clientes";

export async function action({ request }) {
    const formData = await request.formData();
    const datos = Object.fromEntries(formData);
    const email = formData.get("email");


    // Validacion
    let errores = []
    if (Object.values(datos).includes("")) {
        errores.push("Todos los campos son obligatorios");
    }

    let regex = new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$");
    if (!regex.test(email)) {
        errores.push("El email no es válido")
    }

    // Retornar datos si hay errores
    if (Object.keys(errores).length) {
        return errores;
    }

    await agregarCliente(datos);
    return redirect("/");
}