import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <CardContent className="p-6 text-center">
        <div className="rounded-full bg-blue-50 p-4 mx-auto w-fit mb-4">
          <Icon size={32} className="text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button 
          variant="ghost" 
          className="w-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}