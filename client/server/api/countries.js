import supabase from './supabase/supabase'

export default defineEventHandler(async (event) => {
  const method = event.node.req.method
  const id = event.context.params?.id

  switch (method) {
    case 'GET':
      // Leggi tutti i paesi o un paese specifico
      if (id) {
        const { data, error } = await supabase.from('countries').select('*').eq('id', id).single()
        return data
      } else {
        const { data, error } = await supabase.from('countries').select('*')
        return data
      }

    case 'POST':
      // Crea un nuovo paese
      const body = await readBody(event)
      const { data: newCountry, error: createError } = await supabase.from('countries').insert(body)
      return newCountry

    case 'PUT':
      // Aggiorna un paese esistente
      if (!id) throw new Error('ID mancante per l\'aggiornamento')
      const updateBody = await readBody(event)
      const { data: updatedCountry, error: updateError } = await supabase
        .from('countries')
        .update(updateBody)
        .eq('id', id)
      return updatedCountry

    case 'DELETE':
      // Cancella un paese
      if (!id) throw new Error('ID mancante per la cancellazione')
      const { data: deletedCountry, error: deleteError } = await supabase
        .from('countries')
        .delete()
        .eq('id', id)
      return deletedCountry

    default:
      throw new Error('Metodo non supportato')
  }
})