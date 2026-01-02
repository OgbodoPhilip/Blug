import { Icon } from "lucide-react"

export default function SectionHeader({title, Icon,description}: {title: string, Icon: React.ComponentType<{className?: string}>, description?: string}) {
  return (
    <div className=" mb-12">
        <div className="flex items-center gap-2 mb-3 ">
            <Icon className="size-8 text-primary "/>
      <h2 className="text-3xl font-bold">{title}</h2>
     
       </div>
        <p className="text-muted-foreground text-lg">{description}</p>
     </div>
  )
}