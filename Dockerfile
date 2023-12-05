# Utilise l'image Windows Server Core en tant que base
FROM mcr.microsoft.com/windows/servercore:ltsc2019

# Crée un répertoire pour l'application
WORKDIR /app

# Copie le package.json et le yarn.lock dans le conteneur
COPY package.json yarn.lock ./

# Installe les dépendances
RUN npm install -g yarn
RUN yarn install

# Copie le reste de l'application dans le conteneur
COPY . .

# Expose le port 3000
EXPOSE 3000

# Démarre l'application
CMD ["yarn", "dev"]
