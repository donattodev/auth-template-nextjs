import Link from 'next/link'

export function FooterPublic() {
  return (
    <footer className="pb-6 px-8 text-sm font-medium text-neutral-600 max-sm:hidden">
      &copy;{' '}
      <Link
        href="https://donattodev.com.br"
        className="hover:text-primary hover:font-bold duration-200 transition-colors"
        target="_blank"
      >
        Donatto Dev
      </Link>{' '}
      2025
    </footer>
  )
}
