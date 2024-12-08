// crea impostazione per poter utilizzare supabase in tutto il progetto specie nel folder server/api
import { createClient } from '@supabase/supabase-js'
import { useRuntimeConfig } from '#imports'

const config = useRuntimeConfig()
const supabase = createClient(config.public.supabaseUrl, config.public.supabaseKey)

export default supabase
