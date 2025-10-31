import { GoogleButton } from '@/elements/auth/o-auth/google-button'
import { SignInForm } from '@/elements/auth/sign-in-form'
import { FooterPublic } from '@/elements/footer/footer-public'
import { NavLogo } from '@/elements/navbar/nav-logo'
import Link from 'next/link'

export default function SignIn() {
  return (
    <div className="w-full flex flex-col gap-6 justify-between max-sm:order-2 max-sm:p-6 ">
      <NavLogo />

      <div className="flex flex-col gap-6 w-full max-w-sm mx-auto">
        <hgroup>
          <h2 className="text-3xl font-bold mb-1 max-sm:text-center max-sm:text-xl">Bem-vindo de volta</h2>
          <h3 className="text-sm text-neutral-600 max-sm:text-center max-sm:text-xs">
            Seja bem-vindo. Por favor insira seus dados
          </h3>
        </hgroup>

        <div className="flex flex-col gap-3">
          <SignInForm />
          <GoogleButton title="Logar com o Google" />
        </div>

        <span className="text-neutral-500 font-semibold block text-center text-sm">
          Ainda não possui cadastro?{' '}
          <Link href="/register" className="text-primary font-bold">
            Cadastre-se agora!
          </Link>
        </span>
      </div>

      <FooterPublic />
    </div>
  )
}
