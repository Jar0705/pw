import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://jihnohftqusmpampltdf.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppaG5vaGZ0cXVzbXBhbXBsdGRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxMzcyMjAsImV4cCI6MjA2NTcxMzIyMH0.fsPvD5e2SHqzsMsnGf8HpHTLbcm2Ft8ZScU8YIsiEtI'

const supabase = createClient(supabaseUrl, supabaseKey)

const form = document.getElementById('loginForm')
const message = document.getElementById('message')

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) {
    message.textContent = 'Login gagal: ' + error.message
    message.style.color = 'red'
  } else {
    message.textContent = 'Login berhasil! Mengalihkan...'
    message.style.color = 'green'
    setTimeout(() => {
      window.location.href = 'home.html'
    }, 1500)
  }
})
