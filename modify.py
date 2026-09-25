import sys
import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace Contacto Directo section
pattern = r'<div>\s*<h4>Contacto Directo</h4>\s*<p.*?</p>\s*<p.*?</p>\s*<p.*?</p>\s*</div>\s*</div>'
replacement = '''<div class="footer-contact">
          <h4>Contacto Directo</h4>
          <ul class="contact-list" style="list-style: none; padding: 0; margin-bottom: 20px;">
            <li style="margin-bottom: 12px; display: flex; align-items: center; gap: 10px;">
              <i class="fa-solid fa-envelope" style="color: var(--primary);"></i> info@disenowebstudio.com
            </li>
            <li style="margin-bottom: 12px; display: flex; align-items: center; gap: 10px;">
              <i class="fa-solid fa-globe" style="color: var(--primary);"></i> disenowebstudio.com
            </li>
          </ul>
          <button onclick="window.open('https://wa.me/593988305159', '_blank')" class="btn" style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 10px; padding: 12px; font-weight: 600; cursor: pointer; border: none; font-family: inherit; font-size: 1rem;">
            <i class="fa-brands fa-whatsapp" style="font-size: 1.2rem;"></i> Chat en WhatsApp
          </button>
        </div>
      </div>'''

new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)

# Add schema and favicon
favicon_schema = '''  <!-- Favicon and Schema -->
  <link rel="icon" href="favicon.ico" type="image/x-icon">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "DiseñoWeb Studio",
    "image": "https://disenowebstudio.com/hero_ultra_realistic_1790354355762.png",
    "@id": "",
    "url": "https://disenowebstudio.com",
    "telephone": "+593988305159",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cuenca",
      "addressCountry": "EC"
    }
  }
  </script>
  <!-- Stylesheet -->'''

new_content = new_content.replace('  <!-- Stylesheet -->', favicon_schema)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_content)
