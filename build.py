import os
import re

def build_project(src_dir, out_file):
    template_path = os.path.join(src_dir, 'template.html')
    partials_dir = os.path.join(src_dir, 'partials')

    if not os.path.exists(template_path):
        print(f'⚠️ Alerta: No se encontró {template_path}')
        return

    with open(template_path, 'r', encoding='utf-8') as f:
        template = f.read()

    placeholders = re.findall(r'\{\{(.+?)\}\}', template)

    for p in placeholders:
        p_file = os.path.join(partials_dir, f'{p.lower()}.html')
        if os.path.exists(p_file):
            with open(p_file, 'r', encoding='utf-8') as pf:
                content = pf.read()
            template = template.replace(f'{{{{{p}}}}}', content)
        else:
            print(f'⚠️ Alerta: No se encontró {p_file}')

    os.makedirs(os.path.dirname(out_file), exist_ok=True)
    with open(out_file, 'w', encoding='utf-8') as f:
        f.write(template)
    print(f'✅ Generado: {out_file}')

if __name__ == '__main__':
    print('--- Construyendo Landing Page (public) ---')
    build_project('src/public', 'public/index.html')
    
    print('\n--- Construyendo Embudo de Training ---')
    build_project('src/training', 'public/training/index.html')

    print('\n--- Construyendo Página E-commerce ---')
    build_project('src/ecommerce', 'public/ecommerce/index.html')

    print('\n--- Construyendo Página Consulting ---')
    build_project('src/consulting', 'public/consulting/index.html')

    print('\n--- Copiando Páginas Legales ---')
    import shutil, os
    os.makedirs('public/legal', exist_ok=True)
    shutil.copy('src/legal/privacy.html', 'public/legal/privacy.html')
    shutil.copy('src/legal/terms.html', 'public/legal/terms.html')
    print('✅ Generado: public/legal/privacy.html y terms.html')

