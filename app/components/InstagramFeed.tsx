'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

// Note: This is a mock Instagram feed. In a real application, you would fetch this data from the Instagram API.
const mockInstagramPosts = [
  { id: '1', imageUrl: '/placeholder.svg?height=300&width=300', caption: 'Explorando nuevos movimientos #DanzaConexion' },
  { id: '2', imageUrl: '/placeholder.svg?height=300&width=300', caption: 'Preparándonos para el próximo taller #Waving' },
  { id: '3', imageUrl: '/placeholder.svg?height=300&width=300', caption: 'Momentos de la clase de hoy #Floorwork' },
  { id: '4', imageUrl: '/placeholder.svg?height=300&width=300', caption: 'Conexión a través del movimiento #DanzaTerapia' },
]

export default function InstagramFeed() {
  const [posts, setPosts] = useState(mockInstagramPosts)

  useEffect(() => {
    // In a real application, you would fetch Instagram posts here
    // For example:
    // const fetchPosts = async () => {
    //   const response = await fetch('/api/instagram-feed')
    //   const data = await response.json()
    //   setPosts(data)
    // }
    // fetchPosts()
  }, [])

  return (
    <section className="py-20 px-6 bg-warm-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-warm-900 mb-8 text-center">Síguenos en Instagram</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post) => (
            <div key={post.id} className="relative overflow-hidden rounded-lg shadow-md group">
              <Image
                src={post.imageUrl}
                alt={post.caption}
                width={300}
                height={300}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-warm-900 bg-opacity-0 group-hover:bg-opacity-70 transition-opacity duration-300 flex items-end justify-center">
                <p className="text-warm-50 p-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {post.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="https://www.instagram.com/your_instagram_handle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-warm-600 text-warm-50 py-2 px-6 rounded-full text-lg font-semibold hover:bg-warm-700 transition-colors duration-300"
          >
            Ver más en Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

