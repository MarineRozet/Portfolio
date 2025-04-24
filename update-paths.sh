#!/bin/bash

# Chemin vers les fichiers HTML à modifier
FILES="docs/pages/*.html"

for f in $FILES
do
  echo "Mise à jour des chemins dans $f..."

  # Mise à jour des chemins CSS
  sed -i 's|href="css/|href="../css/|g' "$f"

  # Mise à jour des chemins JS
  sed -i 's|src="js/|src="../js/|g' "$f"

  # Mise à jour des chemins vers public/images/
  sed -i 's|src="public/|src="../public/|g' "$f"

  # Mise à jour des chemins vers assets/
  sed -i 's|src="assets/|src="../assets/|g' "$f"
  sed -i 's|href="assets/|href="../assets/|g' "$f"

done

echo "✔️ Tous les chemins ont été mis à jour (version Linux)."
