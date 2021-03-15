import Link from 'next/link'

export default function FirstPost() {
    return (
      <>
        <h1>Page 2</h1>
        <h1>
          <Link href="/">
            <a>Retour a la Page 1</a>
          </Link>
        </h1>
      </>
    )
  }