# 베이스 이미지 명시
FROM node:10

# 추가적으로 필요한 파일 다운
WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY ./ ./
# 컨테이너 시작 시 실행될 명령어
CMD ["node", "server.js"]