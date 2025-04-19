import logoutAction from '@/app/actions/logout-action'
import Form from 'next/form'

export function Logout() {
  return (
    <Form action={logoutAction}>
      <button type="submit" className="cursor-pointer">
        Sair
      </button>
    </Form>
  )
}
