# 실행 환경(베이스 이미지)
FROM node:14.17.0

# 실행시 작동할 명령어
RUN mkdir /app

# 명령어를 실행할 디렉토리(cd 명령어와 동일한 기능)
WORKDIR /app
# 설정파일
ENV PATH /app/node_modules/.bin:$PATH
# 실행할 파일 전부를 디렉토리에 옮긴다.
ADD . /app

# 실행시 작동할 명령어
RUN npm install -g
RUN npm install react-scripts@4.0.3 -g

# 컨테이너 실행시 실행할 명령어
CMD [ "npm", "start" ]
