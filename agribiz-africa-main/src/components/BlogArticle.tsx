import React, { useEffect } from 'react';
import { X, Clock, Calendar, Share2, MessageCircle, Phone, ArrowLeft, User } from 'lucide-react';
import { BlogPost, getRelatedPosts } from '../data/blogData';
import { trackConversion } from '../utils/analytics';

interface BlogArticleProps {
  post: BlogPost;
  onClose: () => void;
  onReadAnother: (slug: string) => void;
}

const BlogArticle: React.FC<BlogArticleProps> = ({ post, onClose, onReadAnother }) => {
  const relatedPosts = getRelatedPosts(post.slug, 2);

  // Track blog view
  useEffect(() => {
    // @ts-ignore - Analytics tracking
    if (trackConversion.blogView) {
      // @ts-ignore
      trackConversion.blogView(post.title);
    }
  }, [post.title]);

  const openWhatsApp = () => {
    trackConversion.whatsAppClick?.();
    const phone = '233242544549';
    const message = `Hi, I read your article "${post.title}" and have some questions.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const makeCall = () => {
    trackConversion.phoneCall?.();
    window.open('tel:+233242544549', '_blank');
  };

  const handleShare = async () => {
    const shareData = {
      title: post.title,
      text: post.excerpt,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  // Parse content and render with proper formatting
  const renderContent = (content: string[]) => {
    return content.map((paragraph, index) => {
      // Skip empty lines
      if (!paragraph.trim()) {
        return <div key={index} className="h-4" />;
      }

      // Headers
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            {paragraph.replace('## ', '')}
          </h2>
        );
      }

      if (paragraph.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl font-bold text-gray-800 mt-6 mb-3">
            {paragraph.replace('### ', '')}
          </h3>
        );
      }

      if (paragraph.startsWith('#### ')) {
        return (
          <h4 key={index} className="text-lg font-semibold text-gray-800 mt-4 mb-2">
            {paragraph.replace('#### ', '')}
          </h4>
        );
      }

      // Lists
      if (paragraph.startsWith('- ')) {
        let formattedListItem = paragraph
          .replace('- ', '')
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        // Parse markdown links in list items
        formattedListItem = formattedListItem.replace(
          /\[([^\]]+)\]\(([^)]+)\)/g,
          '<a href="$2" class="text-teal-600 hover:text-teal-700 underline font-medium">$1</a>'
        );
        return (
          <li
            key={index}
            className="ml-6 text-gray-700 mb-2 list-disc"
            dangerouslySetInnerHTML={{ __html: formattedListItem }}
          />
        );
      }

      if (paragraph.match(/^\d+\./)) {
        let formattedListItem = paragraph
          .replace(/^\d+\.\s*/, '')
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        // Parse markdown links in list items
        formattedListItem = formattedListItem.replace(
          /\[([^\]]+)\]\(([^)]+)\)/g,
          '<a href="$2" class="text-teal-600 hover:text-teal-700 underline font-medium">$1</a>'
        );
        return (
          <li
            key={index}
            className="ml-6 text-gray-700 mb-2 list-decimal"
            dangerouslySetInnerHTML={{ __html: formattedListItem }}
          />
        );
      }

      // Tables
      if (paragraph.startsWith('|')) {
        // Skip table separator lines
        if (paragraph.includes('---')) return null;
        
        const cells = paragraph.split('|').filter(cell => cell.trim());
        if (cells.length > 1) {
          return (
            <div key={index} className="overflow-x-auto my-4">
              <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${cells.length}, 1fr)` }}>
                {cells.map((cell, cellIndex) => (
                  <div
                    key={cellIndex}
                    className={`px-4 py-2 text-sm ${cellIndex === 0 ? 'font-semibold bg-teal-50' : 'bg-gray-50'} rounded`}
                  >
                    {cell.trim()}
                  </div>
                ))}
              </div>
            </div>
          );
        }
      }

      // Checklists
      if (paragraph.startsWith('- [')) {
        const isChecked = paragraph.includes('[x]');
        const text = paragraph.replace(/- \[[ x]\] /, '');
        return (
          <div key={index} className="flex items-center gap-2 ml-4 mb-2">
            <span className={`w-4 h-4 rounded border-2 flex items-center justify-center ${isChecked ? 'bg-teal-500 border-teal-500' : 'border-gray-300'}`}>
              {isChecked && <span className="text-white text-xs">✓</span>}
            </span>
            <span className="text-gray-700">{text}</span>
          </div>
        );
      }

      // Bold text (markdown style)
      let formattedText = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

      // Markdown links [text](#url) -> HTML <a> tags
      formattedText = formattedText.replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" class="text-teal-600 hover:text-teal-700 underline font-medium">$1</a>'
      );

      // Regular paragraph
      return (
        <p
          key={index}
          className="text-gray-700 leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: formattedText }}
        />
      );
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm">
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between z-10">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Blog</span>
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                title="Share article"
              >
                <Share2 className="h-5 w-5 text-gray-600" />
              </button>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
              <span className="bg-teal-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                {post.category}
              </span>
            </div>
          </div>

          {/* Article Content */}
          <article className="px-6 md:px-12 py-8">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="flex items-center gap-1 text-sm text-gray-500">
                <Calendar className="h-4 w-4" />
                {new Date(post.publishedDate).toLocaleDateString('en-GH', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
              <span className="flex items-center gap-1 text-sm text-gray-500">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>

            {/* Author */}
            <div className="flex items-center gap-2 mb-8 pb-8 border-b border-gray-100">
              <User className="h-5 w-5 text-teal-600" />
              <span className="text-gray-600">By {post.author}</span>
            </div>

            {/* Keywords */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.keywords.map((keyword, idx) => (
                <span
                  key={idx}
                  className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full"
                >
                  {keyword}
                </span>
              ))}
            </div>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none">
              {renderContent(post.content)}
            </div>

            {/* CTA Section */}
            <div className="mt-12 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Apply These Strategies?
              </h3>
              <p className="text-gray-600 mb-6">
                Our agronomy team is ready to help you implement these techniques on your farm. Get personalized advice and quality inputs delivered to your location.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={openWhatsApp}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </button>
                <button
                  onClick={makeCall}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </button>
              </div>
            </div>

            {/* Related Articles */}
            {relatedPosts.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Related Articles
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <button
                      key={relatedPost.id}
                      onClick={() => onReadAnother(relatedPost.slug)}
                      className="text-left bg-gray-50 hover:bg-gray-100 rounded-xl p-6 transition-all duration-300 group"
                    >
                      <span className="text-sm text-teal-600 font-medium">
                        {relatedPost.category}
                      </span>
                      <h4 className="text-lg font-bold text-gray-900 mt-2 mb-2 group-hover:text-teal-600 transition-colors">
                        {relatedPost.title}
                      </h4>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogArticle;
