import React from 'react';
import { BookOpen, Clock, ArrowRight, Calendar } from 'lucide-react';
import { blogPosts } from '../data/blogData';

interface BlogSectionProps {
  onArticleClick?: (slug: string) => void;
}

const BlogSection: React.FC<BlogSectionProps> = ({ onArticleClick }) => {
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
    <section id="blog" className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BookOpen className="h-4 w-4" />
            Farming Knowledge Hub
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Agribiz{' '}
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Farming Insights
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert farming tips, crop recommendations, and proven strategies to maximize your yields in Ghana
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              id={`blog-${post.slug}`}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Featured Image with Lazy Loading */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
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
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
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
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-teal-600 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Keywords */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.keywords.slice(0, 3).map((keyword, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                {/* Read More Button */}
                <button
                  onClick={() => handleReadMore(post.slug)}
                  className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-all duration-300 group/btn"
                >
                  Read Article
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">
            Want more farming tips? Join our QUALISEED community
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('whatsapp-channel');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center gap-2"
          >
            <BookOpen className="h-5 w-5" />
            Get Weekly Farming Tips
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
