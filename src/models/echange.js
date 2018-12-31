import { createConstat, Constat } from '@/models/constat'
import { createMessage } from '@/models/message'
import { createSuite } from '@/models/suite'
export class Echange {
  constructor ({ id = -1, sujet = '', brouillon = true, messages = [], referencesReglementaires = [], constat = new Constat(), suites = [] } = {}) {
    this.id = id
    this.sujet = sujet
    this.brouillon = brouillon
    this.messages = messages
    this.referencesReglementaires = referencesReglementaires
    this.constat = constat
    this.suites = suites
  }
}

export function createEchange (data) {
  const constat = data.hasOwnProperty('constat') ? createConstat(data.constat) : new Constat()
  const messages = data.messages.map(x => createMessage(x))
  const suites = data.hasOwnProperty('suites') ? data.suites.map(x => createSuite(x)) : []
  return Object.assign(new Echange({
    id: data.id,
    sujet: data.sujet,
    brouillon: data.brouillon,
    messages,
    referencesReglementaires: data.referencesReglementaires,
    constat,
    suites
  }))
}

export function addConstat (echange, constat) {
  constat.echangeId = echange.id
  echange.constat = constat.id
}
