'use server'

import { signIn } from '../../../auth'

type SignInFormState = {
  success: boolean
  message?: string
}

export default async function signInFormAction(
  _prevState: SignInFormState | null,
  formdata: FormData
): Promise<SignInFormState> {
  try {
    const res = await signIn('credentials', {
      email: formdata.get('email') as string,
      password: formdata.get('password') as string,
      redirect: false,
    })

    if (res?.error) {
      return { success: false, message: 'Dados de login incorretos!' }
    }

    return { success: true }
  } catch (e: unknown) {
    console.error(e)

    if (
      typeof e === 'object' &&
      e !== null &&
      'type' in e &&
      (e as { type: string }).type === 'CredentialsSignin'
    ) {
      return { success: false, message: 'Dados de login incorretos!' }
    }

    return { success: false, message: 'Ops, algum erro aconteceu.' }
  }
}
