import { getInvitadoObj } from './urlparams.js'

const invitadoObj = getInvitadoObj()

const invitado = invitadoObj.nombre.split(' ').join('+')
const cantidad = invitadoObj.adultos + invitadoObj.ninos

const formsURl = `https://docs.google.com/forms/d/e/1FAIpQLScLLyaK9LGChkGF1-Ni2-t_Zw97e3Rf42XYTRjv_uibbdA9_g/viewform?entry.1503077025=${invitado}&entry.1200103917=${cantidad}`

const anchorConfirmar = document.getElementById('btn-confirm-asistencia')
anchorConfirmar.href = formsURl