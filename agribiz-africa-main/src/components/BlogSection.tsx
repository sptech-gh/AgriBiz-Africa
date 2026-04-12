import { Clock, Calendar } from 'lucide-react';
import { blogPosts } from '../data/blogData';

interface BlogSectionProps {
  onArticleClick?: (slug: string) => void;
}

const BlogSection = ({ onArticleClick }: BlogSectionProps) => {
  const handleReadMore = (slug: string) => {
    if (onArticleClick) {
      onArticleClick(slug);
    } else {
      // Scroll to blog article or open modal
      const element = document.getElementById(`blog-${slug}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="blog" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Farming Insights
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Expert farming tips, crop recommendations, and proven strategies to maximize your yields in Ghana
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              id={`blog-${post.slug}`}
              className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-md dark:shadow-slate-900/50 transition-all duration-300 overflow-hidden group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Featured Image with Lazy Loading and Responsive srcset */}
              <div className="relative h-48 overflow-hidden">
                {(() => {
                  const imageName = post.image.split('/').pop()?.replace(/\.(webp|jpg|jpeg|png)$/i, '') || '';
                  return (
                    <picture>
                      <source
                        type="image/avif"
                        srcSet={`/images/optimized/${imageName}-320w.avif 320w, /images/optimized/${imageName}-480w.avif 480w, /images/optimized/${imageName}-640w.avif 640w`}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <source
                        type="image/webp"
                        srcSet={`/images/optimized/${imageName}-320w.webp 320w, /images/optimized/${imageName}-480w.webp 480w, /images/optimized/${imageName}-640w.webp 640w`}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <img
                        src={`/images/optimized/${imageName}.webp`}
                        alt={post.title}
                        loading="lazy"
                        decoding="async"
                        width={640}
                        height={360}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </picture>
                  );
                })()}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-teal-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.publishedDate).toLocaleDateString('en-GH', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-400 mb-3 line-clamp-2 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Read More Button */}
                <button
                  onClick={() => handleReadMore(post.slug)}
                  className="text-teal-600 dark:text-teal-400 font-medium hover:text-teal-700 dark:hover:text-teal-300 transition-colors inline-flex items-center gap-1"
                >
                  Read Article →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-3">
            Want more farming tips? Join our QUALISEED community
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('whatsapp-channel');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-teal-600 dark:text-teal-400 font-medium hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
          >
            Get Weekly Farming Tips →
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
