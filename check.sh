#!/bin/bash

echo "🔍 Vérification rapide du portfolio de Marine 💻"
echo "-----------------------------------------------"

echo -e "\n📁 Arborescence (niveau 2) :"
tree -L 2

echo -e "\n📘 Statut Git :"
git status

echo -e "\n📦 Nom du projet (package.json) :"
grep '"name":' package.json

echo -e "\n🧪 Vérifie que les fichiers critiques sont bien présents :"
for file in "src/pages/index.html" "src/css/index.css" "public/images/Logo MR - bleu.png"; do
  if [ -f "$file" ]; then
    echo "✅ $file trouvé"
  else
    echo "❌ $file manquant !"
  fi
done

echo -e "\n🚀 Pour tester ton site localement :"
echo "👉 Utilise 'Live Server' OU tape : npx serve ."

echo -e "\n✅ Fin de la vérification."
