# 베이스 이미지 명시
FROM node:10

# 추가적으로 필요한 파일 다운
COPY ./ ./
RUN npm install

# 컨테이너 시작 시 실행될 명령어
CMD ["node", "server.js"]