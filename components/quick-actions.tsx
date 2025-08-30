import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Mail, Shield, User } from "lucide-react"

export function QuickActions() {
  const actions = [
    {
      icon: MessageCircle,
      label: "Prayer Requests",
      href: "/prayer-requests",
      variant: "outline" as const,
    },
    {
      icon: Phone,
      label: "WhatsApp Contact",
      href: "https://wa.me/1234567890",
      variant: "outline" as const,
    },
    {
      icon: Mail,
      label: "Newsletter",
      href: "/newsletter",
      variant: "outline" as const,
    },
    {
      icon: Shield,
      label: "Emergency Support",
      href: "/emergency",
      variant: "default" as const,
    },
    {
      icon: User,
      label: "Member Portal",
      href: "/member-portal",
      variant: "secondary" as const,
    },
  ]

  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Quick Actions</h2>
          <p className="text-muted-foreground">Need immediate support or want to get involved? We're here to help.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {actions.map((action, index) => {
            const Icon = action.icon
            return (
              <Button key={index} variant={action.variant} size="lg" className="flex items-center gap-2" asChild>
                <a href={action.href} target={action.href.startsWith("http") ? "_blank" : undefined}>
                  <Icon className="h-5 w-5" />
                  {action.label}
                </a>
              </Button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
