import { useState } from 'react'
import SectionHeading from '../../components/SectionHeading'
import ProductCard from '../../components/ProductCard'
import ProductDetail from '../../components/ProductDetail'
import { products, productsPage } from '../../content/content'
import type { Product } from '../../types'

const { grid } = productsPage

/** Products — the full range, each card opening an informational detail panel. */
export default function ProductGridSection() {
  const [selected, setSelected] = useState<Product | null>(null)

  return (
    <section className="section bg-cream" aria-label="Product range">
      <div className="shell">
        <SectionHeading eyebrow={grid.eyebrow} title={grid.title} subtitle={grid.subtitle} />

        <div className="mt-[clamp(3rem,5vw,5rem)] grid gap-7 sm:grid-cols-2 xl:grid-cols-3 xl:gap-9">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onSelect={setSelected}
            />
          ))}
        </div>
      </div>

      <ProductDetail product={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
