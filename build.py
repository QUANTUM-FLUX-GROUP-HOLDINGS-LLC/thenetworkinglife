import os
import re

def build():
    template_path = 'src/template.html'
    partials_dir = 'src/partials'
    output_path = 'public/index.html'

    with open(template_path, 'r', encoding='utf-8') as f:
        template = f.read()

    # Buscar todos los marcadores {{NOMBRE}}
    placeholders = re.findall(r'\{\{(.+?)\}\}', template)

    for p in placeholders:
        partial_file = os.path.join(partials_dir, f'{p.lower()}.html')
        if os.path.exists(partial_file):
            with open(partial_file, 'r', encoding='utf-8') as pf:
                content = pf.read()
            template = template.replace(f'{{{{{p}}}}}', content)
        else:
            print(f'⚠️ Alerta: No se encontró {partial_file}')

    os.makedirs('public', exist_ok=True)
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(template)
    
    print(f'✅ index.html generado con éxito en {output_path}')

if __name__ == '__main__':
    build()
