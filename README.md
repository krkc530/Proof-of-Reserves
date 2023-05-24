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
```
-------------
### run ganache block chain

```
$ cd contract
$ npm run build
$ npm run testrpc
```

#### run test
open new terminal and run 
```
$ cd contract/test
$ mocha test_verify_web3.js
```



