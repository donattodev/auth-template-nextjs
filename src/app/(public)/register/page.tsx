import { GoogleButton } from '@/elements/auth/o-auth/google-button'
import { RegisterForm } from '@/elements/auth/register-form'

export default function Register() {
  return (
    <main className="flex flex-col items-center gap-4 justify-center min-h-dvh max-w-sm mx-auto">
      <RegisterForm />
      <GoogleButton title="Cadastre-se com o Google" />
    </main>
  )
}
