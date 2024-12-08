import supabase from '../supabase/supabase'
import { defineEventHandler, getRouterParam, readBody, createError } from '#imports'

export default defineEventHandler(async (event) => {
  const method = event.method
  const id = getRouterParam(event, 'id')
  
  try {
    // GET all countries
    if (method === 'GET' && !id) {
      console.log('[DEBUG API GET]')
      const { data, error } = await supabase
        .from('countries')
        .select('*')
      
      if (error) throw createError({
        statusCode: 500,
        message: 'Errore nel recupero dei paesi'
      })

      return data
    }

    // POST new country
    if (method === 'POST') {
      const body = await readBody(event)
      
      if (!body.name) {
        throw createError({
          statusCode: 400,
          message: 'Il nome è obbligatorio'
        })
      }

      const { data, error } = await supabase
        .from('countries')
        .insert(body)
        .select()
      
      if (error) {
        if (error.code === '23505') {
          throw createError({
            statusCode: 409,
            message: 'Paese già esistente'
          })
        }
        throw createError({
          statusCode: 500,
          message: 'Errore nella creazione del paese'
        })
      }

      return data
    }

  } catch (error) {
    if (error.statusCode) throw error
    
    throw createError({
      statusCode: 500,
      message: 'Errore interno del server'
    })
  }
})