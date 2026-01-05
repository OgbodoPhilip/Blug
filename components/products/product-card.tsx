// Example of what your ProductCard might look like
export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="group relative bg-background rounded-2xl border p-4 hover:shadow-lg transition-all">
      <div className="aspect-video overflow-hidden rounded-xl mb-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
        />
      </div>
      <div className="flex flex-wrap gap-2 mb-2">
        {product.tags.map((tag: string) => (
          <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-muted px-2 py-0.5 rounded">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="font-bold text-lg leading-tight">{product.name}</h3>
      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{product.description}</p>
      <div className="mt-4 flex items-center justify-between">
         <span className="text-sm font-medium">▲ {product.votes}</span>
         {/* If you're using BorderBeam, you can wrap the card or place it here */}
      </div>
    </div>
  )
}