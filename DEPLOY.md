# Odstranění 404 na GitHub Pages

1. **Po pushi na `main`** v repozitáři otevři záložku **Actions** a ověř, že workflow **Deploy to GitHub Pages** doběhl zeleně (včetně kroku „Verify index.html“).

2. **Nastavení Pages:**  
   **Settings** → v levém menu **Pages** → sekce **Build and deployment**:
   - **Source:** zvol **Deploy from a branch**
   - **Branch:** zvol **gh-pages** (ne main)
   - **Folder:** zvol **/ (root)**
   - Ulož (**Save**).

3. **Adresa webu:**  
   `https://sonyx9.github.io/aitodo-digital/`  
   (ne jen `https://sonyx9.github.io/`)

4. Po uložení nastavení může stránka naběhnout s 1–2 minuty zpožděním. Pokud je stále 404, v **Code** zkontroluj, že existuje větev **gh-pages** a že v ní je soubor **index.html** v kořeni.
