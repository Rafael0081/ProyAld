import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://dgzavnifxsqfvimaxcap.supabase.co';
const supabaseKey = 'sb_publishable_Zv-4WIV1IEaVGJJJZ7iekw_Opqffnes';

export const supabase = createClient(supabaseUrl, supabaseKey);

export function verificarSesion() {
    const sesionGuardada = localStorage.getItem('sesion');
    if (!sesionGuardada) {
        window.location.href = 'asistapp.html';
        return null;
    }
    try {
        return JSON.parse(sesionGuardada);
    } catch (e) {
        localStorage.removeItem('sesion');
        window.location.href = 'asistapp.html';
        return null;
    }
}

// Cierra la sesión actual y redirige al login
export function cerrarSesion() {
    localStorage.removeItem('sesion');
    window.location.href = 'asistapp.html';
}

// Obtiene la fecha actual en formato YYYY-MM-DD respetando la zona horaria local
export function obtenerFechaLocal() {
    const hoy = new Date();
    const offset = hoy.getTimezoneOffset() * 60000;
    return new Date(hoy.getTime() - offset).toISOString().split('T')[0];
}