import { useState } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  isReversed?: boolean;
}

function FeatureCard({ title, description, imageSrc, imageAlt, isReversed = false }: FeatureCardProps) {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}>
      {/* Content */}
      <div className="flex-1 space-y-6">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
          {title}
        </h3>
        <p className="text-lg text-text-subtle leading-relaxed">
          {description}
        </p>
      </div>

      {/* Image/Demo */}
      <div className="flex-1 relative">
        <div className="relative rounded-2xl overflow-hidden shadow-medium bg-surface border border-border">
          {/* Loading skeleton */}
          {imageLoading && (
            <div className="absolute inset-0 bg-surface animate-pulse" />
          )}
          
          {/* Placeholder for demo interface */}
          <div className="aspect-video bg-gradient-to-br from-surface to-surface-secondary p-6 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-lg mx-auto flex items-center justify-center">
                <div className="w-8 h-8 bg-primary rounded-md" />
              </div>
              <div className="space-y-2">
                <div className="h-3 bg-text-subtle/20 rounded w-3/4 mx-auto" />
                <div className="h-3 bg-text-subtle/20 rounded w-1/2 mx-auto" />
              </div>
            </div>
          </div>
          
          {/* Overlay for better visual */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>
    </div>
  );
}

export function ExploreSection() {
  const features = [
    {
      title: "Drag",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales aliquet arcu, at fermentum est rhoncus non. Curabitur vel odio tincidunt, molestie velit et auctor, luctus lectus. Suspendisse auctor diam ac tortor fermentum, in maximus nisl feugiat. Vestibulum malesuada tempor ipsum ac euismod. Etiam facilisis nibh vel rhoncus dignissim. Ut eget gravida metus. Nulla non eros sit amet lorem tincidunt ullamcorper.",
      imageSrc: "/placeholder.svg",
      imageAlt: "Drag interface demonstration"
    },
    {
      title: "Drop",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales aliquet arcu, at fermentum est rhoncus non. Curabitur vel odio tincidunt, molestie velit et auctor, luctus lectus. Suspendisse auctor diam ac tortor fermentum, in maximus nisl feugiat. Vestibulum malesuada tempor ipsum ac euismod. Etiam facilisis nibh vel rhoncus dignissim. Ut eget gravida metus. Nulla non eros sit amet lorem tincidunt ullamcorper.",
      imageSrc: "/placeholder.svg",
      imageAlt: "Drop interface demonstration",
      isReversed: true
    },
    {
      title: "Deploy",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales aliquet arcu, at fermentum est rhoncus non. Curabitur vel odio tincidunt, molestie velit et auctor, luctus lectus. Suspendisse auctor diam ac tortor fermentum, in maximus nisl feugiat. Vestibulum malesuada tempor ipsum ac euismod. Etiam facilisis nibh vel rhoncus dignissim. Ut eget gravida metus. Nulla non eros sit amet lorem tincidunt ullamcorper.",
      imageSrc: "/placeholder.svg",
      imageAlt: "Deploy interface demonstration"
    }
  ];

  return (
    <section id="explore" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-surface">
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Explore
          </h2>
          <p className="text-lg text-text-subtle max-w-2xl mx-auto">
            Discover how our intuitive drag-and-drop interface makes building beautiful UIs effortless
          </p>
        </div>

        {/* Feature cards */}
        <div className="space-y-24 lg:space-y-32">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}