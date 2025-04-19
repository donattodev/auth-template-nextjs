import { GoogleButton } from '@/elements/auth/o-auth/google-button'
import { SignInForm } from '@/elements/auth/sign-in-form'

export default function SignIn() {
  return (
    <section className="flex flex-col items-center gap-4 justify-center min-h-dvh max-w-sm w-full mx-auto">
      <SignInForm />
      <GoogleButton title="REalizar login com o google" />
    </section>
  )
}
