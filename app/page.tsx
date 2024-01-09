import Link from 'next/link'


const smallcases = [
  { route: 'todoapp', label: 'Todo App' },
  { route: 'infinitegallery', label: 'Infinite Gallery' }
]

export default function Home() {
  return (
    <ul className='flex gap-2'>
      {smallcases.map((smallcase) => {
        return (
          <li
            key={smallcase.route}
            className="text-blue-600 p-2 border border-blue-200">
              <Link href="/todoapp">{smallcase.label}</Link>
          </li>
        )
      })}
    </ul>
  )
}
