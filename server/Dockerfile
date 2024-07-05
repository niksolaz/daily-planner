# Utilizza un'immagine Node come base
FROM node:16

# Imposta la directory di lavoro
WORKDIR /app

# Copia i file package.json e package-lock.json
COPY package*.json ./

# Installa le dipendenze
RUN npm install

# Copia il resto dell'applicazione
COPY . .

# Espone la porta su cui gira l'app
EXPOSE 8000

# Comando per avviare l'applicazione
CMD ["npm", "start"]
