import { createTheme } from '@/models/theme'
import { createUser } from '@/models/user'
import { createMessage } from '@/models/message'
import { createEchange } from '@/models/echange'
import { createEtat } from '@/models/etat'
import { createDetail } from '@/models/detail'
import { createEtablissement } from '@/models/etablissement'

export class Inspection {
  constructor ({
    id = 0, date = null, type = '',
    annonce = true, origine = '', favorite = false,
    etat = null, contexte = '', themes = [],
    inspecteurs = [], etablissement = null,
    comments = [], echanges = [] } = {}) {
    this.id = id
    this.date = date
    this.type = type
    this.annonce = annonce
    this.origine = origine
    this.favorite = favorite
    this.etat = etat
    this.contexte = contexte
    this.themes = themes
    this.inspecteurs = inspecteurs
    this.etablissement = etablissement
    this.comments = comments
    this.echanges = echanges
  }
}

export function createInspection (data) {
  const detail = createDetail(data)
  const etat = createEtat({ id: data.etat })
  const etablissement = createEtablissement({ id: data.etablissementId })
  const themes = data.themes.map(x => createTheme(x))
  const inspecteurs = data.inspecteurs.map(x => createUser(x))
  const comments = data.comments.map(x => createMessage(x))
  const echanges = data.echanges.map(x => createEchange(x))
  return Object.freeze(new Inspection({
    detail,
    etat,
    themes,
    inspecteurs,
    etablissement,
    comments,
    echanges }))
}
