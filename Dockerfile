FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Vite varsayılan olarak 5173 portunu kullanır
EXPOSE 5174

# Vite'ı dış dünyaya açmak için --host ekliyoruz
CMD ["npm", "run", "dev", "--", "--host"]