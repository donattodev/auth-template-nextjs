'use client'

import registerFormAction from '@/app/actions/register-form-action'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const registerSchema = z.object({
  name: z.string().min(1, 'O nome é obrigatório'),
  surname: z.string().min(1, 'O sobrenome é obrigatório'),
  email: z.string().email('E-mail inválido'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
})

type RegisterSchema = z.infer<typeof registerSchema>

export function RegisterForm() {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      password: '',
    },
  })

  const onSubmit = (values: RegisterSchema) => {
    startTransition(async () => {
      const formData = new FormData()
      formData.append('name', values.name)
      formData.append('surname', values.surname)
      formData.append('email', values.email)
      formData.append('password', values.password)

      const res = await registerFormAction(null, formData)

      if (res.success) {
        toast.success(res.message ?? 'Cadastro realizado com sucesso!')
        router.push('/sign-in')
      } else {
        toast.error(res.message ?? 'Erro ao cadastrar usuário')
      }
    })
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full"
        >
          <div className="flex items-center gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Primeiro nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Primeiro Nome" autoFocus {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="surname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sobrenome</FormLabel>
                  <FormControl>
                    <Input placeholder="Sobrenome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Digite um e-mail válido!"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="**********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? 'Cadastrando...' : 'Cadastrar'}
          </Button>
        </form>
      </Form>
    </div>
  )
}
