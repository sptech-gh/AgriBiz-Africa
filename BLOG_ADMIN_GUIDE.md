# Agribiz Africa - Blog Admin Guide

**How to Create and Publish Blog Articles**

---

## Overview

Blog articles are stored in `src/data/blogData.ts`. Each article is a JavaScript object with structured content. No database or CMS required - just edit the file and deploy.

---

## Step 1: Access the Blog Data File

**File Location:**
```
agribiz-africa-main/
└── src/
    └── data/
        └── blogData.ts
```

**How to Access:**
1. Open your code editor (VS Code)
2. Navigate to `src/data/blogData.ts`
3. Or search for "blogData" in your editor

---

## Step 2: Understand the Article Structure

Each blog article follows this format:

```typescript
{
  id: '4',  // Must be unique, increment from last article
  slug: 'your-article-url-slug',  // URL-friendly, lowercase, hyphens
  title: 'Your Article Title',
  metaTitle: 'Your Article Title | Agribiz Africa',  // For SEO
  metaDescription: 'Brief description for search engines (150-160 chars)',
  excerpt: 'Short summary shown on blog cards (2-3 sentences)',
  keywords: ['keyword1', 'keyword2', 'keyword3 Ghana'],
  category: 'Category Name',
  readTime: '5 min read',
  publishedDate: '2026-04-11',  // YYYY-MM-DD format
  image: '/images/product-seeds.webp',  // See image options below
  author: 'Agribiz Africa Agronomy Team',
  content: [
    '## First Heading',
    '',
    'Your paragraph text here.',
    '',
    '## Second Heading',
    '',
    '- Bullet point one',
    '- Bullet point two',
    '',
    '**Bold text** for emphasis.',
    '',
    '[Contact Agribiz Africa](#contact) for help.'
  ]
}
```

---

## Step 3: Choose Your Article Image

**Available Images:**
```
/images/
├── product-seeds.webp       # For seed-related articles
├── product-fertilizer.webp  # For fertilizer articles
├── product-pesticide.webp   # For pest/disease articles
├── product-equipment.webp   # For equipment/farming tips
├── hero-bg.webp            # For general agriculture
├── about-bg.webp           # For company/about topics
```

**How to Add:**
```typescript
image: '/images/product-seeds.webp',
```

**To Add Custom Images:**
1. Save image to `/public/images/` folder
2. Use WebP format (better performance)
3. Recommended size: 800x600 pixels
4. Update path: `image: '/images/your-image.webp'`

---

## Step 4: Write Your Article Content

### Content Formatting Rules

| Format | Syntax | Example |
|--------|--------|---------|
| **Heading 2** | `## Title` | `## Best Farming Practices` |
| **Heading 3** | `### Title` | `### Seed Selection` |
| **Bold Text** | `**text**` | `**Important:** Water daily` |
| **Bullet List** | `- item` | `- Buy quality seeds` |
| **Numbered List** | `1. item` | `1. Prepare soil` |
| **Links** | `[text](#url)` | `[Contact us](#contact)` |
| **Empty Line** | `''` | `''` (creates spacing) |

### Example Content Structure

```typescript
content: [
  '## Introduction',
  '',
  'Opening paragraph about the topic.',
  '',
  '## Main Points',
  '',
  '### Point One',
  '',
  'Detailed explanation here.',
  '',
  '- **Benefit 1**: Description',
  '- **Benefit 2**: Description',
  '',
  '### Point Two',
  '',
  'More details with [internal link](#services).',
  '',
  '## Conclusion',
  '',
  'Summary and call to action.',
  '',
  '**Ready to get started?** [Contact Agribiz Africa](#contact) today!'
]
```

---

## Step 5: SEO Optimization Checklist

Before publishing, verify:

- [ ] **Keywords included**: Target 3-5 relevant keywords
- [ ] **Meta title**: Under 60 characters, includes "| Agribiz Africa"
- [ ] **Meta description**: 150-160 characters, compelling
- [ ] **Slug**: Short, descriptive, hyphen-separated
- [ ] **Category**: Consistent with existing categories
- [ ] **Internal links**: Link to services, contact, other articles
- [ ] **Image**: Relevant to content topic

### Example SEO Setup

```typescript
{
  slug: 'organic-farming-ghana-beginners',
  title: 'Organic Farming in Ghana: A Beginner\'s Guide',
  metaTitle: 'Organic Farming in Ghana: Beginner\'s Guide | Agribiz Africa',
  metaDescription: 'Start organic farming in Ghana with this beginner guide. Learn certified techniques, natural fertilizers, and pest control for chemical-free crops.',
  keywords: ['organic farming Ghana', 'natural fertilizers', 'chemical free farming', 'sustainable agriculture Ghana'],
  category: 'Farming Techniques',
  // ... rest of article
}
```

---

## Step 6: Add Article to Blog Array

**Current articles are in the `blogPosts` array:**

```typescript
export const blogPosts: BlogPost[] = [
  { /* Article 1 */ },
  { /* Article 2 */ },
  { /* Article 3 */ },
  // ADD YOUR NEW ARTICLE HERE
  {
    id: '4',
    slug: 'your-new-article',
    // ... rest of article
  }
];
```

**Important:**
- Add new articles at the END of the array
- Ensure `id` is unique (increment from last article)
- Don't forget the comma after the previous article's closing brace `}`

---

## Step 7: Test Locally

**Before deploying, test your changes:**

```bash
# In terminal
cd agribiz-africa-main
npm run dev
```

**Check:**
1. Navigate to http://localhost:5173
2. Scroll to Blog section
3. Click your new article
4. Verify:
   - Title displays correctly
   - Image loads
   - Formatting works (bold, lists, links)
   - No console errors

---

## Step 8: Build and Deploy

**When ready to publish:**

```bash
# Build the project
npm run build

# If no errors, commit and push
git add -A
git commit -m "feat: Add new blog article - [Article Title]"
git push origin main
```

**Netlify will auto-deploy** in 1-2 minutes.

---

## Quick Reference Template

Copy this template for new articles:

```typescript
{
  id: '4',
  slug: 'article-topic-ghana',
  title: 'Descriptive Title for Farmers in Ghana',
  metaTitle: 'Descriptive Title | Agribiz Africa',
  metaDescription: 'Learn about topic in Ghana. Expert advice on related topics for better farm yields and productivity.',
  excerpt: 'Brief 2-3 sentence summary that appears on the blog card. Entice readers to click and learn more.',
  keywords: ['topic Ghana', 'related keyword', 'farming Ghana', 'agriculture Ghana'],
  category: 'Seeds & Planting',  // Or: 'Fertilizers & Nutrients', 'Farming Techniques', 'Pest Control'
  readTime: '5 min read',
  publishedDate: '2026-04-11',
  image: '/images/product-seeds.webp',
  author: 'Agribiz Africa Agronomy Team',
  content: [
    '## Introduction',
    '',
    'Opening paragraph explaining the topic and why it matters to Ghanaian farmers.',
    '',
    '## Main Section 1',
    '',
    'Detailed content with **bold** highlights.',
    '',
    '- Key point one',
    '- Key point two',
    '- Key point three',
    '',
    '## Main Section 2',
    '',
    'More information with [link to contact](#contact) for assistance.',
    '',
    '1. First step',
    '2. Second step',
    '3. Third step',
    '',
    '## Conclusion',
    '',
    'Summary of key takeaways.',
    '',
    '**Ready to implement?** [Contact Agribiz Africa](#contact) for personalized advice and quality inputs.'
  ]
}
```

---

## Category Guidelines

Use consistent categories:

| Category | Use For |
|----------|---------|
| `Seeds & Planting` | Seed varieties, planting techniques, crop selection |
| `Fertilizers & Nutrients` | Fertilizer types, soil nutrition, application methods |
| `Farming Techniques` | General farming methods, best practices, tips |
| `Pest Control` | Pest management, disease control, IPM |
| `Farm Business` | Marketing, finance, record keeping |

---

## Common Mistakes to Avoid

❌ **Don't:**
- Forget commas between articles
- Use the same `id` for multiple articles
- Leave empty `''` without commas in content array
- Use `()` instead of `[]` for links
- Forget to add `| Agribiz Africa` to metaTitle

✅ **Do:**
- Test locally before pushing
- Use WebP images when possible
- Include at least one internal link (#contact, #services)
- Keep meta descriptions under 160 characters
- Add 3-5 relevant keywords

---

## Need Help?

If you encounter issues:

1. **Check browser console** for error messages
2. **Verify JSON syntax** - missing commas are common
3. **Run build command** - shows TypeScript errors
4. **Compare with existing articles** - copy working structure

**Contact Developer:**
- WhatsApp: +233 24 254 4549
- Email: info@agribiz.africa

---

**Last Updated:** April 11, 2026  
**Version:** 1.0
