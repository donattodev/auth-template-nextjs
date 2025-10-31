import { GoogleButton } from '@/elements/auth/o-auth/google-button'
import { RegisterForm } from '@/elements/auth/register-form'
import { FooterPublic } from '@/elements/footer/footer-public'
import { NavLogo } from '@/elements/navbar/nav-logo'
import Link from 'next/link'

export default function Register() {
  return (
    <div className="w-full flex flex-col gap-6 justify-between max-sm:order-2 max-sm:p-6 ">
      <NavLogo />

      <div className="flex flex-col gap-7 w-full max-w-sm mx-auto">
        <hgroup>
          <h2 className="text-3xl font-bold mb-1">Realizar cadastro</h2>
          <h3 className="text-sm text-neutral-600">
            Realize o cadastro para acessar a plataforma!
          </h3>
        </hgroup>

        <div className="flex flex-col gap-3">
          <RegisterForm />
          <GoogleButton title="Cadastre-se com o Google" />
        </div>

        <span className="text-neutral-500 font-semibold block text-center text-sm">
          Já possui cadastro?{' '}
          <Link href="/sign-in" className="text-primary font-bold">
            Realizar login.
          </Link>
        </span>
      </div>

      <FooterPublic />
    </div>
  )
}
