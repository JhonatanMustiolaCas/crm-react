import { obtenerClientes } from "../data/clientes";

export function loader() {
    const clientes = obtenerClientes();
    return clientes;
}