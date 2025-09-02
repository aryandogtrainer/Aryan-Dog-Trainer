import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

const Gallery = () => {
  // Gallery Images Array - Easy to manage!
  // To add new images: simply add a new object to this array with 'url' and 'title' properties
  // Optional: add 'description' for additional text below the title
  const images = [
    { 
      url: 'https://github.com/aryandogtrainer/aryan-dog-trainer/blob/main/src/assets/IMG-20250901-WA0012.jpg', 
      title: 'Basic Training Session',
      description: 'Puppy learning basic commands'
    },
    { 
      url: 'https://github.com/aryandogtrainer/aryan-dog-trainer/blob/main/src/assets/IMG-20250901-WA0012.jpg', 
      title: 'Obedience Training',
      description: 'Advanced command training'
    },
    { 
      url: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=800&fit=crop', 
      title: 'Success Story',
      description: 'Happy dog with owner'
    },
    { 
      url: 'https://images.unsplash.com/photo-1559190394-fd4d32d4e7a8?w=800&h=800&fit=crop', 
      title: 'Group Training',
      description: 'Socialization training'
    },
    { 
      url: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7f09?w=800&h=800&fit=crop', 
      title: 'Advanced Training',
      description: 'Agility and advanced commands'
    },
    { 
      url: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&h=800&fit=crop', 
      title: 'Therapy Training',
      description: 'Emotional support training'
    }
  ];

  // Fallback image for broken URLs
  const fallbackImage = 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=800&fit=crop';

  // Handle image load errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    if (target.src !== fallbackImage) {
      target.src = fallbackImage;
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Training Gallery</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            See our training sessions in action and success stories from happy dogs and their families
          </p>
        </div>
      </section>

      {/* Responsive Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Responsive grid: 1 column on mobile, 2 on tablet, 3-4 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {images.map((image, index) => (
              <Card 
                key={index}
                className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-0">
                  {/* Square image container with hover effects */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      onError={handleImageError}
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Content section */}
                  <div className="p-3 sm:p-4">
                    <h3 className="font-semibold text-base text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                      {image.title}
                    </h3>
                    {image.description && (
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {image.description}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Instructions for adding new images */}
          <div className="mt-12 p-6 bg-muted/50 rounded-lg border-l-4 border-primary">
            <h3 className="font-semibold text-foreground mb-2">📸 How to Add New Images</h3>
            <p className="text-sm text-muted-foreground mb-3">
              To add new images to this gallery, simply update the <code className="bg-primary/10 px-2 py-1 rounded text-primary">images</code> array in the component:
            </p>
            <div className="bg-card p-4 rounded-md border text-sm font-mono">
              <div className="text-muted-foreground">// Add this to the images array:</div>
              <div className="text-foreground mt-1">
                {`{ url: 'your-image-url.jpg', title: 'Your Title', description: 'Optional description' }`}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
