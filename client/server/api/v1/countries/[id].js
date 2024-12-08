import supabase from '../../supabase/supabase'
import { defineEventHandler, getRouterParam, readBody, createError } from '#imports'

export default defineEventHandler(async (event) => {
  const method = event.method
  const id = getRouterParam(event, 'id')
  console.log('[DEBUG ID]', id)
  try {
    // GET specific country
    if (method === 'GET' && id) {
      console.log('[DEBUG API GET ID]')
      const { data, error } = await supabase
        .from('countries')
        .select('*')
        .eq('id', id)
        .single()
      
      if (error) {
        if (error.code === 'PGRST116') {
          throw createError({
            statusCode: 404,
            message: 'Paese non trovato'
          })
        }
        throw createError({
          statusCode: 500,
          message: 'Errore nel recupero del paese'
        })
      }

      return data
    }

    // PUT update country
    if (method === 'PUT' && id) {
      const body = await readBody(event)

      if (!body.name) {
        throw createError({
          statusCode: 400,
          message: 'Il nome è obbligatorio'
        })
      }

      const { data, error } = await supabase
        .from('countries')
        .update(body)
        .eq('id', id)
        .select()
      
      if (error) {
        if (error.code === 'PGRST116') {
          throw createError({
            statusCode: 404,
            message: 'Paese non trovato'
          })
        }
        if (error.code === '23505') {
          throw createError({
            statusCode: 409,
            message: 'Paese già esistente'
          })
        }
        throw createError({
          statusCode: 500,
          message: 'Errore nell\'aggiornamento del paese'
        })
      }

      return data
    }

    // DELETE country
    if (method === 'DELETE' && id) {
      const { error } = await supabase
        .from('countries')
        .delete()
        .eq('id', id)
      
      if (error) {
        if (error.code === 'PGRST116') {
          throw createError({
            statusCode: 404,
            message: 'Paese non trovato'
          })
        }
        throw createError({
          statusCode: 500,
          message: 'Errore nell\'eliminazione del paese'
        })
      }

      return { message: 'Paese eliminato con successo' }
    }
  } catch (error) {
    if (error.statusCode) throw error
    
    throw createError({
      statusCode: 500,
      message: 'Errore interno del server'
    })
  }
})