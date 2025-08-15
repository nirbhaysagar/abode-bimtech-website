const BlogsSection = () => {
  return (
    <section id="blogs" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            LATEST BLOGS
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, index) => (
            <article 
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="bg-muted h-48 flex items-center justify-center">
                <p className="text-muted-foreground">Blog Image Placeholder</p>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-muted-foreground mb-2">
                  January {15 + index}, 2024
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">
                  {index === 0 && "The Future of BIM in Construction Industry"}
                  {index === 1 && "How Scan-to-BIM Technology is Revolutionizing Architecture"}
                  {index === 2 && "Best Practices for MEP Coordination in Large Projects"}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {index === 0 && "Exploring the latest trends and innovations in Building Information Modeling that are shaping the future of construction..."}
                  {index === 1 && "Discover how advanced scanning technologies are transforming traditional architectural workflows and improving accuracy..."}
                  {index === 2 && "Learn essential strategies for effective MEP coordination that can save time and reduce conflicts in complex building projects..."}
                </p>
                <button className="text-primary font-semibold hover:text-primary/80 transition-colors duration-200">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-primary font-semibold hover:text-primary/80 transition-colors duration-200">
            View All Blogs →
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;