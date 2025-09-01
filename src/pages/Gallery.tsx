import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const Gallery = () => {
  // Sample gallery images with links (replace with actual images)
  const galleryImages = [
    {
      id: 1,
      title: "Basic Training Session",
      description: "Puppy learning basic commands",
      imageUrl: "https://drive.google.com/drive/folders/18vFojp1sUTuneib49Xxwoy9CAoAZc8oW",
      link: "https://drive.google.com/file/d/1yvjfd5m2oC0-e5ftu3PSGeS0yfyRfbXn/view?usp=drive_link"
    },
    {
      id: 2,
      title: "Obedience Training",
      description: "Advanced command training",
      imageUrl: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop",
      link: "https://images.unsplash.com/photo-1587300003388-59208cc962cb"
    },
    {
      id: 3,
      title: "Guard Training",
      description: "Protection training session",
      imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop",
      link: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee"
    },
    {
      id: 4,
      title: "Success Story",
      description: "Happy dog with owner",
      imageUrl: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop",
      link: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1"
    },
    {
      id: 5,
      title: "Group Training",
      description: "Socialization training",
      imageUrl: "https://images.unsplash.com/photo-1559190394-fd4d32d4e7a8?w=400&h=300&fit=crop",
      link: "https://images.unsplash.com/photo-1559190394-fd4d32d4e7a8"
    },
    {
      id: 6,
      title: "Advanced Training",
      description: "Agility and advanced commands",
      imageUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7f09?w=400&h=300&fit=crop",
      link: "https://images.unsplash.com/photo-1558618047-3c8c76ca7f09"
    }
  ];

  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const handleImageClick = (image: typeof galleryImages[0]) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
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

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <Card 
                key={image.id} 
                className="cursor-pointer hover:shadow-lg transition-shadow group"
                onClick={() => handleImageClick(image)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={image.imageUrl}
                      alt={image.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <ExternalLink className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-secondary mb-2">{image.title}</h3>
                    <p className="text-muted-foreground text-sm">{image.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upload Instructions */}
      {/*<section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-secondary mb-6">
            Add Your Training Photos
          </h2>
          <div className="bg-white rounded-lg p-8 shadow-card">
            <h3 className="text-xl font-semibold text-secondary mb-4">How to Add Photos to Gallery</h3>
            <div className="text-left space-y-4 text-muted-foreground">
              <p><strong>For Website Owner:</strong></p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Upload images up to 1 MB each to the gallery folder</li>
                <li>Each uploaded image will create a separate folder automatically</li>
                <li>When the website code is pushed to GitHub, gallery images remain saved</li>
                <li>All gallery images are stored safely in the repository</li>
                <li>Images can be accessed directly from GitHub without being lost during updates</li>
              </ol>
              <p className="mt-4 p-4 bg-light-orange rounded-lg">
                <strong>Note:</strong> This gallery currently displays sample images. 
                Replace the image URLs in the Gallery component with your actual training photos.
              </p>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-full overflow-auto">
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-secondary">{selectedImage.title}</h3>
                <button 
                  onClick={closeModal}
                  className="text-muted-foreground hover:text-secondary text-2xl"
                >
                  ×
                </button>
              </div>
              <img
                src={selectedImage.link}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-muted-foreground mt-4">{selectedImage.description}</p>
              <div className="mt-4">
                <a 
                  href={selectedImage.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Full Size Image
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
