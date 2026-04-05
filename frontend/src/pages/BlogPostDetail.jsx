import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, ArrowRight } from 'lucide-react';

function Block({ heading, text }) {
  if (heading) {
    return (
      <div>
        <h2 className="font-display font-700 text-xl text-brand-text mt-8 mb-2">{heading}</h2>
        <p className="text-brand-muted leading-relaxed">{text}</p>
      </div>
    );
  }
  return <p className="text-brand-muted leading-relaxed">{text}</p>;
}

export default function BlogPostDetail() {
  const { slug } = useParams();
  const allPosts = require('@/data/content').BLOG_POSTS_DATA;
  const post = allPosts[slug];

  if (!post) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <h1 className="font-display font-800 text-2xl text-brand-text">Post Not Found</h1>
      </div>
    );
  }

  const parts = post.sections || [];

  return (
    <>
      <Helmet><title>{post.title} | 24x7 Solution Blog</title></Helmet>
      <div className="pt-20 min-h-screen" data-testid="blog-post-detail-page">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-brand-muted hover:text-brand-mint mb-8 transition-colors">
            <ArrowLeft size={14} /> Back to Blog
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-brand-mint/10 text-brand-mint border border-brand-mint/20">{post.category}</span>
              <span className="flex items-center gap-1 text-xs text-brand-muted"><Clock size={11} /> {post.readTime}</span>
              <span className="text-xs text-brand-muted">{post.date}</span>
            </div>
            <h1 className="font-display font-800 text-3xl sm:text-4xl text-brand-text mb-8 leading-tight">{post.title}</h1>
          </motion.div>
          <div className="space-y-5">
            {parts.map((sec, i) => <Block key={i} heading={sec.heading} text={sec.text} />)}
          </div>
          <div className="mt-16 p-8 rounded-xl border border-brand-mint/20 bg-brand-mint/5 text-center">
            <h3 className="font-display font-700 text-xl text-brand-text mb-3">Need Help Implementing This?</h3>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-mint text-brand-bg font-display font-700 text-sm rounded-full hover:shadow-[0_0_24px_rgba(0,255,136,0.3)] transition-all mt-4">
              Get Your Free Strategy Call <ArrowRight size={16} />
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
