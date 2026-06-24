ASSETS TO ADD
=============

1) PROFILE PHOTO  ->  public/assets/profile.jpg
   The hero loads `assets/profile.jpg`. If missing, a styled "ML"
   gradient avatar is shown automatically as a fallback.

2) RESUME / CV    ->  public/assets/Merlin-Libin-Resume.pdf
   The "Download CV" button links to this file. Rename your PDF to
   match, or change `resumeUrl` in src/data/content.ts.

Tips:
- Use a square-ish image (e.g. 800x800) for the cleanest crop.
- JPG or WebP both work — if you use WebP, rename it to profile.jpg
  or update the src in src/components/Hero.tsx.
