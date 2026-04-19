import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.VITE_SUPABASE_URL || 'http://localhost:54321', // Local testing fallback
  process.env.VITE_SUPABASE_ANON_KEY || 'no-key'
)

async function check() {
  console.log('Checking carts columns...')
  const { data: carts, error: cartsErr } = await supabase.from('carts').select('*').limit(1)
  if (cartsErr) console.log('Carts error:', cartsErr.message)
  else console.log('Carts columns:', Object.keys(carts[0] || {}))

  console.log('Checking cart_items columns...')
  const { data: items, error: itemsErr } = await supabase.from('cart_items').select('*').limit(1)
  if (itemsErr) console.log('Cart Items error:', itemsErr.message)
  else console.log('Cart Items columns:', Object.keys(items[0] || {}))
}

check()
