import Image from 'next/image'
import { auth } from '../../../auth'

export async function ProfileForm() {
  const session = await auth()
  const name = session?.user?.name
  const email = session?.user?.email
  const avatar = session?.user?.image

  return (
    <section className="flex items-center flex-col gap-4 justify-center max-w-sm mx-auto w-full mt-20">
      <div className="flex flex-col items-center w-full">
        <div className="dark:bg-neutral-700 bg-neutral-200 w-96 h-36 flex rounded-md items-center justify-center" />
        {avatar ? (
          <Image
            src={avatar}
            width={500}
            height={500}
            className="size-36 -mt-16"
            quality={100}
            alt=""
          />
        ) : (
          ''
        )}
      </div>

      <ul className="flex flex-col gap-4 w-full">
        <li className="dark:bg-neutral-700 bg-neutral-200 px-6 py-2.5 rounded-md">{name}</li>
        <li className="dark:bg-neutral-700 bg-neutral-200 px-6 py-2.5 rounded-md">{email}</li>
      </ul>
    </section>
  )
}
