import { LucideIcon } from 'lucide-react'


export default function StatsCard({icon: Icon, value, label}:{icon:LucideIcon, value:string, label:string}) {
  return (
    <div className="flex items-center gap-2 justify-center">
      <Icon className="size-7 text-primary/70" />
      <div>
        <p className="text-3xl font-bold sm:text-4xl">{value}</p>
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </div>
  )
}