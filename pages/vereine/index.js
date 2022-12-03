import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'

export async function getStaticProps() {
  const res = await fetch('https://feerd.directus.app/items/clubs')
  const clubs = await res.json()
  
  return {
    props: {
      clubs,
    },
  }
}

export default function Example({ clubs }) {
  return (
    <div className="bg-white">
    <Header/>
    <Hero/>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Vereine in Fürth</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {clubs.data.map((club) => (
            <div key={club.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src="https://images.unsplash.com/photo-1644660152442-60ba0a3ed285?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                  alt={club.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={club.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {club.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{club.president}</p>
                </div>
                {/* <p className="text-sm font-medium text-gray-900">{club.address}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}
