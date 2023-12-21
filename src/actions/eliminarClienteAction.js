import { redirect } from "react-router-dom";
import { eliminarCliente } from "../../data/clientes";

export async function action({ params }) {
    await eliminarCliente(params.clienteId);
    return redirect("/");
}