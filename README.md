# Proof-of-Reserves

설명 .... 설명 .....


-------------

### install package

1. init and update submodule
```
$ git submodule init && git submodule update --recursive
```  

2. install legogroth16 repo
```
$ cd server/napirs-legogroth16
$ yarn install
$ yarn build --release
```

3. install contract package
```
$ cd contract
$ npm i
```

4. install server package
```
$ cd server
$ npm i
$ echo 'export DB_PASSWORD="DB password"' >> ~/.zshrc 
```
-------------
### run ganache block chain

```
$ cd contract
$ npm run compile
$ npm run testrpc
```

#### run server
open new terminal.  
```
$ cd server 
$ npm run nodemon
```

#### run front 
open new terminal.  
```
$ cd front
$ npm start
```



