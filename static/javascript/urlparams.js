import { getInvitado } from './invitados.js'

export const getInvitadoObj = () => {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const paramValue = params.get('uuid');

    return getInvitado(paramValue)
}