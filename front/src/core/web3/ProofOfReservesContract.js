export default {
  "contractName": "ProofOfReservesContract",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "_vk",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "proof",
          "type": "uint256[]"
        }
      ],
      "name": "upload_commitment",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "idx",
          "type": "uint256"
        },
        {
          "internalType": "uint256[]",
          "name": "proof",
          "type": "uint256[]"
        }
      ],
      "name": "update_commitment",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "get_vk",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "get_all_commitments",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "px",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "py",
              "type": "uint256"
            }
          ],
          "internalType": "struct ProofOfReservesContract.Commitment[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "get_commitment_cnt",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.2+commit.661d1103\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256[]\",\"name\":\"_vk\",\"type\":\"uint256[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"get_all_commitments\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"px\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"py\",\"type\":\"uint256\"}],\"internalType\":\"struct ProofOfReservesContract.Commitment[]\",\"name\":\"\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"get_commitment_cnt\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"get_vk\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"idx\",\"type\":\"uint256\"},{\"internalType\":\"uint256[]\",\"name\":\"proof\",\"type\":\"uint256[]\"}],\"name\":\"update_commitment\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256[]\",\"name\":\"proof\",\"type\":\"uint256[]\"}],\"name\":\"upload_commitment\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/proofOfReserves.sol\":\"ProofOfReservesContract\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/ccGroth16VerifyBn128.sol\":{\"keccak256\":\"0x21cd03dc9ade63bf60302ae274059632874257cd70a8bd8667328743109d99bb\",\"license\":\"LGPL-3.0+\",\"urls\":[\"bzz-raw://57159ea9a7e262c7043d41fdc1406f1239a56629d0c9c0e014fa55148e128f96\",\"dweb:/ipfs/QmNtLRwgA4BfX87cyyC8dqjdV2RQFaeXHAdh76ADX38XBN\"]},\"project:/contracts/proofOfReserves.sol\":{\"keccak256\":\"0x60f6e96a03b52e9c441a667114e8f0b536dd3de751fe7a19f9f7c9fd5ea32ab1\",\"license\":\"LGPL-3.0+\",\"urls\":[\"bzz-raw://239b268af147130ccf09af25f0d80de7e8363fc6f12321a00b4372e58fe26995\",\"dweb:/ipfs/Qmbm3NyRjsdtUy9yxauhiqbq37CuhxFQxbMEQ3FWuamLAJ\"]}},\"version\":1}",
  "bytecode": "0x6080604052600060025534801561001557600080fd5b50604051610a80380380610a80833981016040819052610034916100ae565b805161004790600090602084019061004e565b5050610182565b828054828255906000526020600020908101928215610089579160200282015b8281111561008957825182559160200191906001019061006e565b50610095929150610099565b5090565b5b80821115610095576000815560010161009a565b600060208083850312156100c0578182fd5b82516001600160401b03808211156100d6578384fd5b818501915085601f8301126100e9578384fd5b8151818111156100fb576100fb61016c565b838102604051601f19603f8301168101818110858211171561011f5761011f61016c565b604052828152858101935084860182860187018a101561013d578788fd5b8795505b8386101561015f578051855260019590950194938601938601610141565b5098975050505050505050565b634e487b7160e01b600052604160045260246000fd5b6108ef806101916000396000f3fe60806040526004361061004a5760003560e01c8063068a22531461004f578063621a93261461007a578063def596ef14610099578063f123b45a146100bb578063f5c13593146100de575b600080fd5b34801561005b57600080fd5b506100646100f1565b60405161007191906107e9565b60405180910390f35b34801561008657600080fd5b506002545b604051908152602001610071565b3480156100a557600080fd5b506100ae610164565b6040516100719190610838565b6100ce6100c93660046107a4565b6101bc565b6040519015158152602001610071565b61008b6100ec366004610769565b610311565b60606001805480602002602001604051908101604052809291908181526020016000905b8282101561015b57838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190610115565b50505050905090565b606060008054806020026020016040519081016040528092919081815260200182805480156101b257602002820191906000526020600020905b81548152602001906001019080831161019e575b5050505050905090565b600060025483106102045760405162461bcd60e51b815260206004820152600d60248201526c092dcecc2d8d2c840d2dcc8caf609b1b60448201526064015b60405180910390fd5b61020f600083610444565b6102495760405162461bcd60e51b815260206004820152600b60248201526a1d995c9a599e4819985a5b60aa1b60448201526064016101fb565b8160088151811061026a57634e487b7160e01b600052603260045260246000fd5b60200260200101516001848154811061029357634e487b7160e01b600052603260045260246000fd5b906000526020600020906002020160000181905550816009815181106102c957634e487b7160e01b600052603260045260246000fd5b6020026020010151600184815481106102f257634e487b7160e01b600052603260045260246000fd5b9060005260206000209060020201600101819055506001905092915050565b600061031e600083610444565b6103585760405162461bcd60e51b815260206004820152600b60248201526a1d995c9a599e4819985a5b60aa1b60448201526064016101fb565b600060405180604001604052808460088151811061038657634e487b7160e01b600052603260045260246000fd5b60200260200101518152602001846009815181106103b457634e487b7160e01b600052603260045260246000fd5b6020908102919091018101519091526001805480820182556000918252835160029182027fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6810191909155928401517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf79093019290925581549293506104398361087c565b909155509392505050565b60008151600a1461048e5760405162461bcd60e51b8152602060048201526014602482015273092dcecc2d8d2c840e0e4dedecc40d8cadccee8d60631b60448201526064016101fb565b82546010146104d35760405162461bcd60e51b8152602060048201526011602482015270092dcecc2d8d2c840ecd640d8cadccee8d607b1b60448201526064016101fb565b60006104dd6106ad565b600060019050602085018683526020832093506101008101518352610120810151602084015250600a8301546040830152600b830154606083015260406102408301608084600060065af19050806105675760405162461bcd60e51b815260206004820152600d60248201526c189b8c8d4d9059190819985a5b609a1b60448201526064016101fb565b60208501805183526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a0840152835460c0840152600184015460e0840152600284015461010084015260038401546101208401526004840154610140840152600584015461016084015260c081015161018084015260e08101516101a08401525060068301546101c083015260078301546101e083015260088301546102008301526009830154610220830152600c830154610280830152600d8301546102a0830152600e8301546102c0830152600f8301546102e083015260208261030084600060086107d05a03f116806106a05760405162461bcd60e51b8152602060048201526011602482015270189b8c8d4d94185a5c9a5b99c819985a5b607a1b60448201526064016101fb565b5051600114949350505050565b6040518061030001604052806018906020820280368337509192915050565b600082601f8301126106dc578081fd5b8135602067ffffffffffffffff808311156106f9576106f96108a3565b818302604051601f19603f8301168101818110848211171561071d5761071d6108a3565b6040528481528381019250868401828801850189101561073b578687fd5b8692505b8583101561075d57803584529284019260019290920191840161073f565b50979650505050505050565b60006020828403121561077a578081fd5b813567ffffffffffffffff811115610790578182fd5b61079c848285016106cc565b949350505050565b600080604083850312156107b6578081fd5b82359150602083013567ffffffffffffffff8111156107d3578182fd5b6107df858286016106cc565b9150509250929050565b602080825282518282018190526000919060409081850190868401855b8281101561082b57815180518552860151868501529284019290850190600101610806565b5091979650505050505050565b6020808252825182820181905260009190848201906040850190845b8181101561087057835183529284019291840191600101610854565b50909695505050505050565b600060001982141561089c57634e487b7160e01b81526011600452602481fd5b5060010190565b634e487b7160e01b600052604160045260246000fdfea26469706673582212200359f1d66e5512eb1d2b408ddf72d8afdab69ad7268adcdd94e206fa6caee8cb64736f6c63430008020033",
  "deployedBytecode": "0x60806040526004361061004a5760003560e01c8063068a22531461004f578063621a93261461007a578063def596ef14610099578063f123b45a146100bb578063f5c13593146100de575b600080fd5b34801561005b57600080fd5b506100646100f1565b60405161007191906107e9565b60405180910390f35b34801561008657600080fd5b506002545b604051908152602001610071565b3480156100a557600080fd5b506100ae610164565b6040516100719190610838565b6100ce6100c93660046107a4565b6101bc565b6040519015158152602001610071565b61008b6100ec366004610769565b610311565b60606001805480602002602001604051908101604052809291908181526020016000905b8282101561015b57838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190610115565b50505050905090565b606060008054806020026020016040519081016040528092919081815260200182805480156101b257602002820191906000526020600020905b81548152602001906001019080831161019e575b5050505050905090565b600060025483106102045760405162461bcd60e51b815260206004820152600d60248201526c092dcecc2d8d2c840d2dcc8caf609b1b60448201526064015b60405180910390fd5b61020f600083610444565b6102495760405162461bcd60e51b815260206004820152600b60248201526a1d995c9a599e4819985a5b60aa1b60448201526064016101fb565b8160088151811061026a57634e487b7160e01b600052603260045260246000fd5b60200260200101516001848154811061029357634e487b7160e01b600052603260045260246000fd5b906000526020600020906002020160000181905550816009815181106102c957634e487b7160e01b600052603260045260246000fd5b6020026020010151600184815481106102f257634e487b7160e01b600052603260045260246000fd5b9060005260206000209060020201600101819055506001905092915050565b600061031e600083610444565b6103585760405162461bcd60e51b815260206004820152600b60248201526a1d995c9a599e4819985a5b60aa1b60448201526064016101fb565b600060405180604001604052808460088151811061038657634e487b7160e01b600052603260045260246000fd5b60200260200101518152602001846009815181106103b457634e487b7160e01b600052603260045260246000fd5b6020908102919091018101519091526001805480820182556000918252835160029182027fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6810191909155928401517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf79093019290925581549293506104398361087c565b909155509392505050565b60008151600a1461048e5760405162461bcd60e51b8152602060048201526014602482015273092dcecc2d8d2c840e0e4dedecc40d8cadccee8d60631b60448201526064016101fb565b82546010146104d35760405162461bcd60e51b8152602060048201526011602482015270092dcecc2d8d2c840ecd640d8cadccee8d607b1b60448201526064016101fb565b60006104dd6106ad565b600060019050602085018683526020832093506101008101518352610120810151602084015250600a8301546040830152600b830154606083015260406102408301608084600060065af19050806105675760405162461bcd60e51b815260206004820152600d60248201526c189b8c8d4d9059190819985a5b609a1b60448201526064016101fb565b60208501805183526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a0840152835460c0840152600184015460e0840152600284015461010084015260038401546101208401526004840154610140840152600584015461016084015260c081015161018084015260e08101516101a08401525060068301546101c083015260078301546101e083015260088301546102008301526009830154610220830152600c830154610280830152600d8301546102a0830152600e8301546102c0830152600f8301546102e083015260208261030084600060086107d05a03f116806106a05760405162461bcd60e51b8152602060048201526011602482015270189b8c8d4d94185a5c9a5b99c819985a5b607a1b60448201526064016101fb565b5051600114949350505050565b6040518061030001604052806018906020820280368337509192915050565b600082601f8301126106dc578081fd5b8135602067ffffffffffffffff808311156106f9576106f96108a3565b818302604051601f19603f8301168101818110848211171561071d5761071d6108a3565b6040528481528381019250868401828801850189101561073b578687fd5b8692505b8583101561075d57803584529284019260019290920191840161073f565b50979650505050505050565b60006020828403121561077a578081fd5b813567ffffffffffffffff811115610790578182fd5b61079c848285016106cc565b949350505050565b600080604083850312156107b6578081fd5b82359150602083013567ffffffffffffffff8111156107d3578182fd5b6107df858286016106cc565b9150509250929050565b602080825282518282018190526000919060409081850190868401855b8281101561082b57815180518552860151868501529284019290850190600101610806565b5091979650505050505050565b6020808252825182820181905260009190848201906040850190845b8181101561087057835183529284019291840191600101610854565b50909695505050505050565b600060001982141561089c57634e487b7160e01b81526011600452602481fd5b5060010190565b634e487b7160e01b600052604160045260246000fdfea26469706673582212200359f1d66e5512eb1d2b408ddf72d8afdab69ad7268adcdd94e206fa6caee8cb64736f6c63430008020033",
  "immutableReferences": {},
  "generatedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:1310:11",
        "statements": [
          {
            "nodeType": "YulBlock",
            "src": "6:3:11",
            "statements": []
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "120:1056:11",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "130:12:11",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "140:2:11",
                    "type": "",
                    "value": "32"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "134:2:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "187:26:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "196:6:11"
                            },
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "204:6:11"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "189:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "189:22:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "189:22:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "162:7:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "171:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "158:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "158:23:11"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "183:2:11"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "154:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "154:32:11"
                  },
                  "nodeType": "YulIf",
                  "src": "151:2:11"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "222:30:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "242:9:11"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "236:5:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "236:16:11"
                  },
                  "variables": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "226:6:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "261:28:11",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "279:2:11",
                            "type": "",
                            "value": "64"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "283:1:11",
                            "type": "",
                            "value": "1"
                          }
                        ],
                        "functionName": {
                          "name": "shl",
                          "nodeType": "YulIdentifier",
                          "src": "275:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "275:10:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "287:1:11",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "sub",
                      "nodeType": "YulIdentifier",
                      "src": "271:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "271:18:11"
                  },
                  "variables": [
                    {
                      "name": "_2",
                      "nodeType": "YulTypedName",
                      "src": "265:2:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "316:26:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "325:6:11"
                            },
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "333:6:11"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "318:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "318:22:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "318:22:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "304:6:11"
                      },
                      {
                        "name": "_2",
                        "nodeType": "YulIdentifier",
                        "src": "312:2:11"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "301:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "301:14:11"
                  },
                  "nodeType": "YulIf",
                  "src": "298:2:11"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "351:32:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "365:9:11"
                      },
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "376:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "361:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "361:22:11"
                  },
                  "variables": [
                    {
                      "name": "_3",
                      "nodeType": "YulTypedName",
                      "src": "355:2:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "431:26:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "440:6:11"
                            },
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "448:6:11"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "433:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "433:22:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "433:22:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "_3",
                                "nodeType": "YulIdentifier",
                                "src": "410:2:11"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "414:4:11",
                                "type": "",
                                "value": "0x1f"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "406:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "406:13:11"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "421:7:11"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "402:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "402:27:11"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "395:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "395:35:11"
                  },
                  "nodeType": "YulIf",
                  "src": "392:2:11"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "466:19:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "_3",
                        "nodeType": "YulIdentifier",
                        "src": "482:2:11"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "476:5:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "476:9:11"
                  },
                  "variables": [
                    {
                      "name": "_4",
                      "nodeType": "YulTypedName",
                      "src": "470:2:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "508:22:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "510:16:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "510:18:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "510:18:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "_4",
                        "nodeType": "YulIdentifier",
                        "src": "500:2:11"
                      },
                      {
                        "name": "_2",
                        "nodeType": "YulIdentifier",
                        "src": "504:2:11"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "497:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "497:10:11"
                  },
                  "nodeType": "YulIf",
                  "src": "494:2:11"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "539:21:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "_4",
                        "nodeType": "YulIdentifier",
                        "src": "553:2:11"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "557:2:11"
                      }
                    ],
                    "functionName": {
                      "name": "mul",
                      "nodeType": "YulIdentifier",
                      "src": "549:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "549:11:11"
                  },
                  "variables": [
                    {
                      "name": "_5",
                      "nodeType": "YulTypedName",
                      "src": "543:2:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "569:23:11",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "589:2:11",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "583:5:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "583:9:11"
                  },
                  "variables": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "573:6:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "601:56:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "623:6:11"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "_5",
                                "nodeType": "YulIdentifier",
                                "src": "639:2:11"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "643:2:11",
                                "type": "",
                                "value": "63"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "635:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "635:11:11"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "652:2:11",
                                "type": "",
                                "value": "31"
                              }
                            ],
                            "functionName": {
                              "name": "not",
                              "nodeType": "YulIdentifier",
                              "src": "648:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "648:7:11"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "631:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "631:25:11"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "619:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "619:38:11"
                  },
                  "variables": [
                    {
                      "name": "newFreePtr",
                      "nodeType": "YulTypedName",
                      "src": "605:10:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "716:22:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "718:16:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "718:18:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "718:18:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "675:10:11"
                          },
                          {
                            "name": "_2",
                            "nodeType": "YulIdentifier",
                            "src": "687:2:11"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "672:2:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "672:18:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "695:10:11"
                          },
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "707:6:11"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "692:2:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "692:22:11"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "669:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "669:46:11"
                  },
                  "nodeType": "YulIf",
                  "src": "666:2:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "754:2:11",
                        "type": "",
                        "value": "64"
                      },
                      {
                        "name": "newFreePtr",
                        "nodeType": "YulIdentifier",
                        "src": "758:10:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "747:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "747:22:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "747:22:11"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "778:17:11",
                  "value": {
                    "name": "memPtr",
                    "nodeType": "YulIdentifier",
                    "src": "789:6:11"
                  },
                  "variables": [
                    {
                      "name": "dst",
                      "nodeType": "YulTypedName",
                      "src": "782:3:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "811:6:11"
                      },
                      {
                        "name": "_4",
                        "nodeType": "YulIdentifier",
                        "src": "819:2:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "804:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "804:18:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "804:18:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "831:22:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "842:6:11"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "850:2:11"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "838:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "838:15:11"
                  },
                  "variableNames": [
                    {
                      "name": "dst",
                      "nodeType": "YulIdentifier",
                      "src": "831:3:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "862:22:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "_3",
                        "nodeType": "YulIdentifier",
                        "src": "877:2:11"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "881:2:11"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "873:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "873:11:11"
                  },
                  "variables": [
                    {
                      "name": "src",
                      "nodeType": "YulTypedName",
                      "src": "866:3:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "930:26:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "939:6:11"
                            },
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "947:6:11"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "932:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "932:22:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "932:22:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "_3",
                                "nodeType": "YulIdentifier",
                                "src": "907:2:11"
                              },
                              {
                                "name": "_5",
                                "nodeType": "YulIdentifier",
                                "src": "911:2:11"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "903:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "903:11:11"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "916:2:11"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "899:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "899:20:11"
                      },
                      {
                        "name": "dataEnd",
                        "nodeType": "YulIdentifier",
                        "src": "921:7:11"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "896:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "896:33:11"
                  },
                  "nodeType": "YulIf",
                  "src": "893:2:11"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "965:15:11",
                  "value": {
                    "name": "value0",
                    "nodeType": "YulIdentifier",
                    "src": "974:6:11"
                  },
                  "variables": [
                    {
                      "name": "i",
                      "nodeType": "YulTypedName",
                      "src": "969:1:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1034:111:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "dst",
                              "nodeType": "YulIdentifier",
                              "src": "1055:3:11"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "src",
                                  "nodeType": "YulIdentifier",
                                  "src": "1066:3:11"
                                }
                              ],
                              "functionName": {
                                "name": "mload",
                                "nodeType": "YulIdentifier",
                                "src": "1060:5:11"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1060:10:11"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1048:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1048:23:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1048:23:11"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1084:19:11",
                        "value": {
                          "arguments": [
                            {
                              "name": "dst",
                              "nodeType": "YulIdentifier",
                              "src": "1095:3:11"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "1100:2:11"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1091:3:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1091:12:11"
                        },
                        "variableNames": [
                          {
                            "name": "dst",
                            "nodeType": "YulIdentifier",
                            "src": "1084:3:11"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1116:19:11",
                        "value": {
                          "arguments": [
                            {
                              "name": "src",
                              "nodeType": "YulIdentifier",
                              "src": "1127:3:11"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "1132:2:11"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1123:3:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1123:12:11"
                        },
                        "variableNames": [
                          {
                            "name": "src",
                            "nodeType": "YulIdentifier",
                            "src": "1116:3:11"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "1000:1:11"
                      },
                      {
                        "name": "_4",
                        "nodeType": "YulIdentifier",
                        "src": "1003:2:11"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "997:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "997:9:11"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "1007:18:11",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "1009:14:11",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "1018:1:11"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1021:1:11",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1014:3:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1014:9:11"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "1009:1:11"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "993:3:11",
                    "statements": []
                  },
                  "src": "989:156:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1154:16:11",
                  "value": {
                    "name": "memPtr",
                    "nodeType": "YulIdentifier",
                    "src": "1164:6:11"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "1154:6:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_array$_t_uint256_$dyn_memory_ptr_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "86:9:11",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "97:7:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "109:6:11",
                "type": ""
              }
            ],
            "src": "14:1162:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1213:95:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1230:1:11",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1237:3:11",
                            "type": "",
                            "value": "224"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1242:10:11",
                            "type": "",
                            "value": "0x4e487b71"
                          }
                        ],
                        "functionName": {
                          "name": "shl",
                          "nodeType": "YulIdentifier",
                          "src": "1233:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1233:20:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1223:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1223:31:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1223:31:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1270:1:11",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1273:4:11",
                        "type": "",
                        "value": "0x41"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1263:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1263:15:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1263:15:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1294:1:11",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1297:4:11",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "1287:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1287:15:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1287:15:11"
                }
              ]
            },
            "name": "panic_error_0x41",
            "nodeType": "YulFunctionDefinition",
            "src": "1181:127:11"
          }
        ]
      },
      "contents": "{\n    { }\n    function abi_decode_tuple_t_array$_t_uint256_$dyn_memory_ptr_fromMemory(headStart, dataEnd) -> value0\n    {\n        let _1 := 32\n        if slt(sub(dataEnd, headStart), _1) { revert(value0, value0) }\n        let offset := mload(headStart)\n        let _2 := sub(shl(64, 1), 1)\n        if gt(offset, _2) { revert(value0, value0) }\n        let _3 := add(headStart, offset)\n        if iszero(slt(add(_3, 0x1f), dataEnd)) { revert(value0, value0) }\n        let _4 := mload(_3)\n        if gt(_4, _2) { panic_error_0x41() }\n        let _5 := mul(_4, _1)\n        let memPtr := mload(64)\n        let newFreePtr := add(memPtr, and(add(_5, 63), not(31)))\n        if or(gt(newFreePtr, _2), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n        let dst := memPtr\n        mstore(memPtr, _4)\n        dst := add(memPtr, _1)\n        let src := add(_3, _1)\n        if gt(add(add(_3, _5), _1), dataEnd) { revert(value0, value0) }\n        let i := value0\n        for { } lt(i, _4) { i := add(i, 1) }\n        {\n            mstore(dst, mload(src))\n            dst := add(dst, _1)\n            src := add(src, _1)\n        }\n        value0 := memPtr\n    }\n    function panic_error_0x41()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n}",
      "id": 11,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "deployedGeneratedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:6016:11",
        "statements": [
          {
            "nodeType": "YulBlock",
            "src": "6:3:11",
            "statements": []
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "78:870:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "127:24:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "array",
                              "nodeType": "YulIdentifier",
                              "src": "136:5:11"
                            },
                            {
                              "name": "array",
                              "nodeType": "YulIdentifier",
                              "src": "143:5:11"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "129:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "129:20:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "129:20:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "106:6:11"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "114:4:11",
                                "type": "",
                                "value": "0x1f"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "102:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "102:17:11"
                          },
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "121:3:11"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "98:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "98:27:11"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "91:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "91:35:11"
                  },
                  "nodeType": "YulIf",
                  "src": "88:2:11"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "160:30:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "183:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "170:12:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "170:20:11"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "164:2:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "199:14:11",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "209:4:11",
                    "type": "",
                    "value": "0x20"
                  },
                  "variables": [
                    {
                      "name": "_2",
                      "nodeType": "YulTypedName",
                      "src": "203:2:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "222:28:11",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "232:18:11",
                    "type": "",
                    "value": "0xffffffffffffffff"
                  },
                  "variables": [
                    {
                      "name": "_3",
                      "nodeType": "YulTypedName",
                      "src": "226:2:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "273:22:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "275:16:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "275:18:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "275:18:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "265:2:11"
                      },
                      {
                        "name": "_3",
                        "nodeType": "YulIdentifier",
                        "src": "269:2:11"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "262:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "262:10:11"
                  },
                  "nodeType": "YulIf",
                  "src": "259:2:11"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "304:21:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "318:2:11"
                      },
                      {
                        "name": "_2",
                        "nodeType": "YulIdentifier",
                        "src": "322:2:11"
                      }
                    ],
                    "functionName": {
                      "name": "mul",
                      "nodeType": "YulIdentifier",
                      "src": "314:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "314:11:11"
                  },
                  "variables": [
                    {
                      "name": "_4",
                      "nodeType": "YulTypedName",
                      "src": "308:2:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "334:23:11",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "354:2:11",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "348:5:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "348:9:11"
                  },
                  "variables": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "338:6:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "366:56:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "388:6:11"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "_4",
                                "nodeType": "YulIdentifier",
                                "src": "404:2:11"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "408:2:11",
                                "type": "",
                                "value": "63"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "400:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "400:11:11"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "417:2:11",
                                "type": "",
                                "value": "31"
                              }
                            ],
                            "functionName": {
                              "name": "not",
                              "nodeType": "YulIdentifier",
                              "src": "413:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "413:7:11"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "396:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "396:25:11"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "384:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "384:38:11"
                  },
                  "variables": [
                    {
                      "name": "newFreePtr",
                      "nodeType": "YulTypedName",
                      "src": "370:10:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "481:22:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "483:16:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "483:18:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "483:18:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "440:10:11"
                          },
                          {
                            "name": "_3",
                            "nodeType": "YulIdentifier",
                            "src": "452:2:11"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "437:2:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "437:18:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "460:10:11"
                          },
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "472:6:11"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "457:2:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "457:22:11"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "434:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "434:46:11"
                  },
                  "nodeType": "YulIf",
                  "src": "431:2:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "519:2:11",
                        "type": "",
                        "value": "64"
                      },
                      {
                        "name": "newFreePtr",
                        "nodeType": "YulIdentifier",
                        "src": "523:10:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "512:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "512:22:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "512:22:11"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "543:17:11",
                  "value": {
                    "name": "memPtr",
                    "nodeType": "YulIdentifier",
                    "src": "554:6:11"
                  },
                  "variables": [
                    {
                      "name": "dst",
                      "nodeType": "YulTypedName",
                      "src": "547:3:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "576:6:11"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "584:2:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "569:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "569:18:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "569:18:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "596:22:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "607:6:11"
                      },
                      {
                        "name": "_2",
                        "nodeType": "YulIdentifier",
                        "src": "615:2:11"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "603:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "603:15:11"
                  },
                  "variableNames": [
                    {
                      "name": "dst",
                      "nodeType": "YulIdentifier",
                      "src": "596:3:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "627:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "642:6:11"
                      },
                      {
                        "name": "_2",
                        "nodeType": "YulIdentifier",
                        "src": "650:2:11"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "638:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "638:15:11"
                  },
                  "variables": [
                    {
                      "name": "src",
                      "nodeType": "YulTypedName",
                      "src": "631:3:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "699:24:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "array",
                              "nodeType": "YulIdentifier",
                              "src": "708:5:11"
                            },
                            {
                              "name": "array",
                              "nodeType": "YulIdentifier",
                              "src": "715:5:11"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "701:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "701:20:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "701:20:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "676:6:11"
                              },
                              {
                                "name": "_4",
                                "nodeType": "YulIdentifier",
                                "src": "684:2:11"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "672:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "672:15:11"
                          },
                          {
                            "name": "_2",
                            "nodeType": "YulIdentifier",
                            "src": "689:2:11"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "668:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "668:24:11"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "694:3:11"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "665:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "665:33:11"
                  },
                  "nodeType": "YulIf",
                  "src": "662:2:11"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "732:14:11",
                  "value": {
                    "name": "array",
                    "nodeType": "YulIdentifier",
                    "src": "741:5:11"
                  },
                  "variables": [
                    {
                      "name": "i",
                      "nodeType": "YulTypedName",
                      "src": "736:1:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "800:118:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "dst",
                              "nodeType": "YulIdentifier",
                              "src": "821:3:11"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "src",
                                  "nodeType": "YulIdentifier",
                                  "src": "839:3:11"
                                }
                              ],
                              "functionName": {
                                "name": "calldataload",
                                "nodeType": "YulIdentifier",
                                "src": "826:12:11"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "826:17:11"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "814:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "814:30:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "814:30:11"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "857:19:11",
                        "value": {
                          "arguments": [
                            {
                              "name": "dst",
                              "nodeType": "YulIdentifier",
                              "src": "868:3:11"
                            },
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "873:2:11"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "864:3:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "864:12:11"
                        },
                        "variableNames": [
                          {
                            "name": "dst",
                            "nodeType": "YulIdentifier",
                            "src": "857:3:11"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "889:19:11",
                        "value": {
                          "arguments": [
                            {
                              "name": "src",
                              "nodeType": "YulIdentifier",
                              "src": "900:3:11"
                            },
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "905:2:11"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "896:3:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "896:12:11"
                        },
                        "variableNames": [
                          {
                            "name": "src",
                            "nodeType": "YulIdentifier",
                            "src": "889:3:11"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "766:1:11"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "769:2:11"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "763:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "763:9:11"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "773:18:11",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "775:14:11",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "784:1:11"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "787:1:11",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "780:3:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "780:9:11"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "775:1:11"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "759:3:11",
                    "statements": []
                  },
                  "src": "755:163:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "927:15:11",
                  "value": {
                    "name": "memPtr",
                    "nodeType": "YulIdentifier",
                    "src": "936:6:11"
                  },
                  "variableNames": [
                    {
                      "name": "array",
                      "nodeType": "YulIdentifier",
                      "src": "927:5:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_array_uint256_dyn",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "52:6:11",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "60:3:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "68:5:11",
                "type": ""
              }
            ],
            "src": "14:934:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1048:273:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1094:26:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "1103:6:11"
                            },
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "1111:6:11"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1096:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1096:22:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1096:22:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1069:7:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1078:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1065:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1065:23:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1090:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "1061:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1061:32:11"
                  },
                  "nodeType": "YulIf",
                  "src": "1058:2:11"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1129:37:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1156:9:11"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1143:12:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1143:23:11"
                  },
                  "variables": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "1133:6:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1209:26:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "1218:6:11"
                            },
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "1226:6:11"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1211:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1211:22:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1211:22:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "1181:6:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1189:18:11",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "1178:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1178:30:11"
                  },
                  "nodeType": "YulIf",
                  "src": "1175:2:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1244:71:11",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1287:9:11"
                          },
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "1298:6:11"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1283:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1283:22:11"
                      },
                      {
                        "name": "dataEnd",
                        "nodeType": "YulIdentifier",
                        "src": "1307:7:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_array_uint256_dyn",
                      "nodeType": "YulIdentifier",
                      "src": "1254:28:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1254:61:11"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "1244:6:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_array$_t_uint256_$dyn_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1014:9:11",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "1025:7:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1037:6:11",
                "type": ""
              }
            ],
            "src": "953:368:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1438:324:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1484:26:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value1",
                              "nodeType": "YulIdentifier",
                              "src": "1493:6:11"
                            },
                            {
                              "name": "value1",
                              "nodeType": "YulIdentifier",
                              "src": "1501:6:11"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1486:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1486:22:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1486:22:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1459:7:11"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1468:9:11"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1455:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1455:23:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1480:2:11",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "1451:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1451:32:11"
                  },
                  "nodeType": "YulIf",
                  "src": "1448:2:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1519:33:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1542:9:11"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1529:12:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1529:23:11"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "1519:6:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1561:46:11",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1592:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1603:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1588:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1588:18:11"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1575:12:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1575:32:11"
                  },
                  "variables": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "1565:6:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1650:26:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value1",
                              "nodeType": "YulIdentifier",
                              "src": "1659:6:11"
                            },
                            {
                              "name": "value1",
                              "nodeType": "YulIdentifier",
                              "src": "1667:6:11"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1652:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1652:22:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1652:22:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "1622:6:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1630:18:11",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "1619:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1619:30:11"
                  },
                  "nodeType": "YulIf",
                  "src": "1616:2:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1685:71:11",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1728:9:11"
                          },
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "1739:6:11"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1724:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1724:22:11"
                      },
                      {
                        "name": "dataEnd",
                        "nodeType": "YulIdentifier",
                        "src": "1748:7:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_array_uint256_dyn",
                      "nodeType": "YulIdentifier",
                      "src": "1695:28:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1695:61:11"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "1685:6:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_uint256t_array$_t_uint256_$dyn_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1396:9:11",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "1407:7:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1419:6:11",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "1427:6:11",
                "type": ""
              }
            ],
            "src": "1326:436:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1972:590:11",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1982:12:11",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "1992:2:11",
                    "type": "",
                    "value": "32"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "1986:2:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2003:32:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2021:9:11"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "2032:2:11"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2017:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2017:18:11"
                  },
                  "variables": [
                    {
                      "name": "tail_1",
                      "nodeType": "YulTypedName",
                      "src": "2007:6:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2051:9:11"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "2062:2:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2044:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2044:21:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2044:21:11"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2074:17:11",
                  "value": {
                    "name": "tail_1",
                    "nodeType": "YulIdentifier",
                    "src": "2085:6:11"
                  },
                  "variables": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "2078:3:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2100:27:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "2120:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "2114:5:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2114:13:11"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "2104:6:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "tail_1",
                        "nodeType": "YulIdentifier",
                        "src": "2143:6:11"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "2151:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2136:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2136:22:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2136:22:11"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2167:12:11",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "2177:2:11",
                    "type": "",
                    "value": "64"
                  },
                  "variables": [
                    {
                      "name": "_2",
                      "nodeType": "YulTypedName",
                      "src": "2171:2:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2188:25:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2199:9:11"
                      },
                      {
                        "name": "_2",
                        "nodeType": "YulIdentifier",
                        "src": "2210:2:11"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2195:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2195:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "2188:3:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2222:29:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "2240:6:11"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "2248:2:11"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2236:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2236:15:11"
                  },
                  "variables": [
                    {
                      "name": "srcPtr",
                      "nodeType": "YulTypedName",
                      "src": "2226:6:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2260:13:11",
                  "value": {
                    "name": "tail",
                    "nodeType": "YulIdentifier",
                    "src": "2269:4:11"
                  },
                  "variables": [
                    {
                      "name": "i",
                      "nodeType": "YulTypedName",
                      "src": "2264:1:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2331:205:11",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2345:23:11",
                        "value": {
                          "arguments": [
                            {
                              "name": "srcPtr",
                              "nodeType": "YulIdentifier",
                              "src": "2361:6:11"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "2355:5:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2355:13:11"
                        },
                        "variables": [
                          {
                            "name": "_3",
                            "nodeType": "YulTypedName",
                            "src": "2349:2:11",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "2388:3:11"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "_3",
                                  "nodeType": "YulIdentifier",
                                  "src": "2399:2:11"
                                }
                              ],
                              "functionName": {
                                "name": "mload",
                                "nodeType": "YulIdentifier",
                                "src": "2393:5:11"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2393:9:11"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "2381:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2381:22:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2381:22:11"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "pos",
                                  "nodeType": "YulIdentifier",
                                  "src": "2427:3:11"
                                },
                                {
                                  "name": "_1",
                                  "nodeType": "YulIdentifier",
                                  "src": "2432:2:11"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "2423:3:11"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2423:12:11"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "_3",
                                      "nodeType": "YulIdentifier",
                                      "src": "2447:2:11"
                                    },
                                    {
                                      "name": "_1",
                                      "nodeType": "YulIdentifier",
                                      "src": "2451:2:11"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "2443:3:11"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2443:11:11"
                                }
                              ],
                              "functionName": {
                                "name": "mload",
                                "nodeType": "YulIdentifier",
                                "src": "2437:5:11"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2437:18:11"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "2416:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2416:40:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2416:40:11"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "2469:19:11",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "2480:3:11"
                            },
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "2485:2:11"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2476:3:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2476:12:11"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "2469:3:11"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "2501:25:11",
                        "value": {
                          "arguments": [
                            {
                              "name": "srcPtr",
                              "nodeType": "YulIdentifier",
                              "src": "2515:6:11"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "2523:2:11"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2511:3:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2511:15:11"
                        },
                        "variableNames": [
                          {
                            "name": "srcPtr",
                            "nodeType": "YulIdentifier",
                            "src": "2501:6:11"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "2293:1:11"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "2296:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "2290:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2290:13:11"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "2304:18:11",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "2306:14:11",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "2315:1:11"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2318:1:11",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2311:3:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2311:9:11"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "2306:1:11"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "2286:3:11",
                    "statements": []
                  },
                  "src": "2282:254:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2545:11:11",
                  "value": {
                    "name": "pos",
                    "nodeType": "YulIdentifier",
                    "src": "2553:3:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2545:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_array$_t_struct$_Commitment_$700_memory_ptr_$dyn_memory_ptr__to_t_array$_t_struct$_Commitment_$700_memory_ptr_$dyn_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1941:9:11",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1952:6:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "1963:4:11",
                "type": ""
              }
            ],
            "src": "1767:795:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2718:484:11",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2728:12:11",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "2738:2:11",
                    "type": "",
                    "value": "32"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "2732:2:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2749:32:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2767:9:11"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "2778:2:11"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2763:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2763:18:11"
                  },
                  "variables": [
                    {
                      "name": "tail_1",
                      "nodeType": "YulTypedName",
                      "src": "2753:6:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2797:9:11"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "2808:2:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2790:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2790:21:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2790:21:11"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2820:17:11",
                  "value": {
                    "name": "tail_1",
                    "nodeType": "YulIdentifier",
                    "src": "2831:6:11"
                  },
                  "variables": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "2824:3:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2846:27:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "2866:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "2860:5:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2860:13:11"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "2850:6:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "tail_1",
                        "nodeType": "YulIdentifier",
                        "src": "2889:6:11"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "2897:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2882:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2882:22:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2882:22:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2913:25:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2924:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2935:2:11",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2920:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2920:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "2913:3:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2947:29:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "2965:6:11"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "2973:2:11"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2961:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2961:15:11"
                  },
                  "variables": [
                    {
                      "name": "srcPtr",
                      "nodeType": "YulTypedName",
                      "src": "2951:6:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2985:13:11",
                  "value": {
                    "name": "tail",
                    "nodeType": "YulIdentifier",
                    "src": "2994:4:11"
                  },
                  "variables": [
                    {
                      "name": "i",
                      "nodeType": "YulTypedName",
                      "src": "2989:1:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3056:120:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "3077:3:11"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "srcPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "3088:6:11"
                                }
                              ],
                              "functionName": {
                                "name": "mload",
                                "nodeType": "YulIdentifier",
                                "src": "3082:5:11"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3082:13:11"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3070:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3070:26:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3070:26:11"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "3109:19:11",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "3120:3:11"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "3125:2:11"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3116:3:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3116:12:11"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "3109:3:11"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "3141:25:11",
                        "value": {
                          "arguments": [
                            {
                              "name": "srcPtr",
                              "nodeType": "YulIdentifier",
                              "src": "3155:6:11"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "3163:2:11"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3151:3:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3151:15:11"
                        },
                        "variableNames": [
                          {
                            "name": "srcPtr",
                            "nodeType": "YulIdentifier",
                            "src": "3141:6:11"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "3018:1:11"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "3021:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "3015:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3015:13:11"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "3029:18:11",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "3031:14:11",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "3040:1:11"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3043:1:11",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3036:3:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3036:9:11"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "3031:1:11"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "3011:3:11",
                    "statements": []
                  },
                  "src": "3007:169:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3185:11:11",
                  "value": {
                    "name": "pos",
                    "nodeType": "YulIdentifier",
                    "src": "3193:3:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "3185:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_array$_t_uint256_$dyn_memory_ptr__to_t_array$_t_uint256_$dyn_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2687:9:11",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2698:6:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "2709:4:11",
                "type": ""
              }
            ],
            "src": "2567:635:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3302:92:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3312:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3324:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3335:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3320:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3320:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "3312:4:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3354:9:11"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "3379:6:11"
                              }
                            ],
                            "functionName": {
                              "name": "iszero",
                              "nodeType": "YulIdentifier",
                              "src": "3372:6:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3372:14:11"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "3365:6:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3365:22:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3347:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3347:41:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3347:41:11"
                }
              ]
            },
            "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3271:9:11",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "3282:6:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "3293:4:11",
                "type": ""
              }
            ],
            "src": "3207:187:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3573:163:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3590:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3601:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3583:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3583:21:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3583:21:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3624:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3635:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3620:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3620:18:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3640:2:11",
                        "type": "",
                        "value": "13"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3613:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3613:30:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3613:30:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3663:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3674:2:11",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3659:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3659:18:11"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "3679:15:11",
                        "type": "",
                        "value": "Invalid index"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3652:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3652:43:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3652:43:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3704:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3716:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3727:2:11",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3712:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3712:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "3704:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_32cc480c4f0e15e5ce7060ec5e004886ed5a15831cba1ff1aa7cb787be55bb60__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3550:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "3564:4:11",
                "type": ""
              }
            ],
            "src": "3399:337:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3915:167:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3932:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3943:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3925:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3925:21:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3925:21:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3966:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3977:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3962:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3962:18:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3982:2:11",
                        "type": "",
                        "value": "17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3955:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3955:30:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3955:30:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4005:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4016:2:11",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4001:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4001:18:11"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "4021:19:11",
                        "type": "",
                        "value": "bn256Pairing fail"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3994:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3994:47:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3994:47:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4050:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4062:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4073:2:11",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4058:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4058:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "4050:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_8b92e7aa862a2b2ee6441a7735c284168ac78bc219935e6763b689eb3b6ab043__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3892:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "3906:4:11",
                "type": ""
              }
            ],
            "src": "3741:341:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4261:167:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4278:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4289:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4271:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4271:21:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4271:21:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4312:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4323:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4308:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4308:18:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4328:2:11",
                        "type": "",
                        "value": "17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4301:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4301:30:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4301:30:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4351:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4362:2:11",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4347:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4347:18:11"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "4367:19:11",
                        "type": "",
                        "value": "Invalid vk length"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4340:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4340:47:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4340:47:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4396:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4408:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4419:2:11",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4404:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4404:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "4396:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_a20d9bf9f3faaa4398dcb2e6d3531d16c6e91326d342df8e1a8cdaa3069f8247__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4238:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "4252:4:11",
                "type": ""
              }
            ],
            "src": "4087:341:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4607:170:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4624:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4635:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4617:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4617:21:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4617:21:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4658:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4669:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4654:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4654:18:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4674:2:11",
                        "type": "",
                        "value": "20"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4647:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4647:30:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4647:30:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4697:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4708:2:11",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4693:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4693:18:11"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "4713:22:11",
                        "type": "",
                        "value": "Invalid proof length"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4686:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4686:50:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4686:50:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4745:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4757:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4768:2:11",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4753:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4753:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "4745:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_a384685b2d9864ca58af3cdeb11675a5eb31234b321579291672bb93c38d256c__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4584:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "4598:4:11",
                "type": ""
              }
            ],
            "src": "4433:344:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4956:161:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4973:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4984:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4966:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4966:21:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4966:21:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5007:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5018:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5003:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5003:18:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5023:2:11",
                        "type": "",
                        "value": "11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4996:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4996:30:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4996:30:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5046:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5057:2:11",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5042:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5042:18:11"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "5062:13:11",
                        "type": "",
                        "value": "verify fail"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5035:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5035:41:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5035:41:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5085:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5097:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5108:2:11",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5093:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5093:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "5085:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_c55065d7b39eb0dd1a6c67b68aef2ac89bae2b26f88f2b8782f868f7c362d837__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4933:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "4947:4:11",
                "type": ""
              }
            ],
            "src": "4782:335:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5296:163:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5313:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5324:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5306:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5306:21:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5306:21:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5347:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5358:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5343:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5343:18:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5363:2:11",
                        "type": "",
                        "value": "13"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5336:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5336:30:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5336:30:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5386:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5397:2:11",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5382:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5382:18:11"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "5402:15:11",
                        "type": "",
                        "value": "bn256Add fail"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5375:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5375:43:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5375:43:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5427:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5439:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5450:2:11",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5435:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5435:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "5427:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_fbe53055ea2d1421f2a028da4cd0a593439a440cdd1167bb7f58ed951f8bc2e1__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "5273:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "5287:4:11",
                "type": ""
              }
            ],
            "src": "5122:337:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5565:76:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "5575:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5587:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5598:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5583:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5583:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "5575:4:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5617:9:11"
                      },
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "5628:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5610:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5610:25:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5610:25:11"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "5534:9:11",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "5545:6:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "5556:4:11",
                "type": ""
              }
            ],
            "src": "5464:177:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5693:189:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5732:115:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "ret",
                              "nodeType": "YulIdentifier",
                              "src": "5753:3:11"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "5762:3:11",
                                  "type": "",
                                  "value": "224"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "5767:10:11",
                                  "type": "",
                                  "value": "0x4e487b71"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "5758:3:11"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5758:20:11"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "5746:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5746:33:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5746:33:11"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5799:1:11",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5802:4:11",
                              "type": "",
                              "value": "0x11"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "5792:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5792:15:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5792:15:11"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "ret",
                              "nodeType": "YulIdentifier",
                              "src": "5827:3:11"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5832:4:11",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "5820:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5820:17:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5820:17:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "5709:5:11"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5720:1:11",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "not",
                          "nodeType": "YulIdentifier",
                          "src": "5716:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5716:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "5706:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5706:17:11"
                  },
                  "nodeType": "YulIf",
                  "src": "5703:2:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5856:20:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "5867:5:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5874:1:11",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5863:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5863:13:11"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "5856:3:11"
                    }
                  ]
                }
              ]
            },
            "name": "increment_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "5675:5:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "ret",
                "nodeType": "YulTypedName",
                "src": "5685:3:11",
                "type": ""
              }
            ],
            "src": "5646:236:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5919:95:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5936:1:11",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5943:3:11",
                            "type": "",
                            "value": "224"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5948:10:11",
                            "type": "",
                            "value": "0x4e487b71"
                          }
                        ],
                        "functionName": {
                          "name": "shl",
                          "nodeType": "YulIdentifier",
                          "src": "5939:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5939:20:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5929:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5929:31:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5929:31:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5976:1:11",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5979:4:11",
                        "type": "",
                        "value": "0x41"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5969:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5969:15:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5969:15:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6000:1:11",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6003:4:11",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "5993:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5993:15:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5993:15:11"
                }
              ]
            },
            "name": "panic_error_0x41",
            "nodeType": "YulFunctionDefinition",
            "src": "5887:127:11"
          }
        ]
      },
      "contents": "{\n    { }\n    function abi_decode_array_uint256_dyn(offset, end) -> array\n    {\n        if iszero(slt(add(offset, 0x1f), end)) { revert(array, array) }\n        let _1 := calldataload(offset)\n        let _2 := 0x20\n        let _3 := 0xffffffffffffffff\n        if gt(_1, _3) { panic_error_0x41() }\n        let _4 := mul(_1, _2)\n        let memPtr := mload(64)\n        let newFreePtr := add(memPtr, and(add(_4, 63), not(31)))\n        if or(gt(newFreePtr, _3), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n        let dst := memPtr\n        mstore(memPtr, _1)\n        dst := add(memPtr, _2)\n        let src := add(offset, _2)\n        if gt(add(add(offset, _4), _2), end) { revert(array, array) }\n        let i := array\n        for { } lt(i, _1) { i := add(i, 1) }\n        {\n            mstore(dst, calldataload(src))\n            dst := add(dst, _2)\n            src := add(src, _2)\n        }\n        array := memPtr\n    }\n    function abi_decode_tuple_t_array$_t_uint256_$dyn_memory_ptr(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(value0, value0) }\n        let offset := calldataload(headStart)\n        if gt(offset, 0xffffffffffffffff) { revert(value0, value0) }\n        value0 := abi_decode_array_uint256_dyn(add(headStart, offset), dataEnd)\n    }\n    function abi_decode_tuple_t_uint256t_array$_t_uint256_$dyn_memory_ptr(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(value1, value1) }\n        value0 := calldataload(headStart)\n        let offset := calldataload(add(headStart, 32))\n        if gt(offset, 0xffffffffffffffff) { revert(value1, value1) }\n        value1 := abi_decode_array_uint256_dyn(add(headStart, offset), dataEnd)\n    }\n    function abi_encode_tuple_t_array$_t_struct$_Commitment_$700_memory_ptr_$dyn_memory_ptr__to_t_array$_t_struct$_Commitment_$700_memory_ptr_$dyn_memory_ptr__fromStack_reversed(headStart, value0) -> tail\n    {\n        let _1 := 32\n        let tail_1 := add(headStart, _1)\n        mstore(headStart, _1)\n        let pos := tail_1\n        let length := mload(value0)\n        mstore(tail_1, length)\n        let _2 := 64\n        pos := add(headStart, _2)\n        let srcPtr := add(value0, _1)\n        let i := tail\n        for { } lt(i, length) { i := add(i, 1) }\n        {\n            let _3 := mload(srcPtr)\n            mstore(pos, mload(_3))\n            mstore(add(pos, _1), mload(add(_3, _1)))\n            pos := add(pos, _2)\n            srcPtr := add(srcPtr, _1)\n        }\n        tail := pos\n    }\n    function abi_encode_tuple_t_array$_t_uint256_$dyn_memory_ptr__to_t_array$_t_uint256_$dyn_memory_ptr__fromStack_reversed(headStart, value0) -> tail\n    {\n        let _1 := 32\n        let tail_1 := add(headStart, _1)\n        mstore(headStart, _1)\n        let pos := tail_1\n        let length := mload(value0)\n        mstore(tail_1, length)\n        pos := add(headStart, 64)\n        let srcPtr := add(value0, _1)\n        let i := tail\n        for { } lt(i, length) { i := add(i, 1) }\n        {\n            mstore(pos, mload(srcPtr))\n            pos := add(pos, _1)\n            srcPtr := add(srcPtr, _1)\n        }\n        tail := pos\n    }\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, iszero(iszero(value0)))\n    }\n    function abi_encode_tuple_t_stringliteral_32cc480c4f0e15e5ce7060ec5e004886ed5a15831cba1ff1aa7cb787be55bb60__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 13)\n        mstore(add(headStart, 64), \"Invalid index\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_8b92e7aa862a2b2ee6441a7735c284168ac78bc219935e6763b689eb3b6ab043__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 17)\n        mstore(add(headStart, 64), \"bn256Pairing fail\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_a20d9bf9f3faaa4398dcb2e6d3531d16c6e91326d342df8e1a8cdaa3069f8247__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 17)\n        mstore(add(headStart, 64), \"Invalid vk length\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_a384685b2d9864ca58af3cdeb11675a5eb31234b321579291672bb93c38d256c__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 20)\n        mstore(add(headStart, 64), \"Invalid proof length\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_c55065d7b39eb0dd1a6c67b68aef2ac89bae2b26f88f2b8782f868f7c362d837__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 11)\n        mstore(add(headStart, 64), \"verify fail\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_fbe53055ea2d1421f2a028da4cd0a593439a440cdd1167bb7f58ed951f8bc2e1__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 13)\n        mstore(add(headStart, 64), \"bn256Add fail\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, value0)\n    }\n    function increment_t_uint256(value) -> ret\n    {\n        if eq(value, not(0))\n        {\n            mstore(ret, shl(224, 0x4e487b71))\n            mstore(4, 0x11)\n            revert(ret, 0x24)\n        }\n        ret := add(value, 1)\n    }\n    function panic_error_0x41()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n}",
      "id": 11,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "sourceMap": "102:1440:10:-:0;;;331:1;303:29;;339:69;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;383:18;;;;:12;;:18;;;;;:::i;:::-;;339:69;102:1440;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;102:1440:10;;;-1:-1:-1;102:1440:10;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;14:1162:11;;140:2;183;171:9;162:7;158:23;154:32;151:2;;;204:6;196;189:22;151:2;236:16;;-1:-1:-1;;;;;301:14:11;;;298:2;;;333:6;325;318:22;298:2;376:6;365:9;361:22;351:32;;421:7;414:4;410:2;406:13;402:27;392:2;;448:6;440;433:22;392:2;482;476:9;504:2;500;497:10;494:2;;;510:18;;:::i;:::-;557:2;553;549:11;589:2;583:9;652:2;648:7;643:2;639;635:11;631:25;623:6;619:38;707:6;695:10;692:22;687:2;675:10;672:18;669:46;666:2;;;718:18;;:::i;:::-;754:2;747:22;804:18;;;838:15;;;;-1:-1:-1;873:11:11;;;903;;;899:20;;896:33;-1:-1:-1;893:2:11;;;947:6;939;932:22;893:2;974:6;965:15;;989:156;1003:2;1000:1;997:9;989:156;;;1060:10;;1048:23;;1021:1;1014:9;;;;;1091:12;;;;1123;;989:156;;;-1:-1:-1;1164:6:11;120:1056;-1:-1:-1;;;;;;;;120:1056:11:o;1181:127::-;1242:10;1237:3;1233:20;1230:1;1223:31;1273:4;1270:1;1263:15;1297:4;1294:1;1287:15;1213:95;102:1440:10;;;;;;",
  "deployedSourceMap": "102:1440:10:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1333:108;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1447:93;;;;;;;;;;-1:-1:-1;1524:9:10;;1447:93;;;5610:25:11;;;5598:2;5583:18;1447:93:10;5565:76:11;1234:93:10;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;875:353::-;;;;;;:::i;:::-;;:::i;:::-;;;3372:14:11;;3365:22;3347:41;;3335:2;3320:18;875:353:10;3302:92:11;565:304:10;;;;;;:::i;:::-;;:::i;1333:108::-;1385:19;1423:11;1416:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1333:108;:::o;1234:93::-;1273:16;1308:12;1301:19;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1234:93;:::o;875:353::-;985:4;1015:9;;1009:3;:15;1001:41;;;;-1:-1:-1;;;1001:41:10;;3601:2:11;1001:41:10;;;3583:21:11;3640:2;3620:18;;;3613:30;-1:-1:-1;;;3659:18:11;;;3652:43;3712:18;;1001:41:10;;;;;;;;;1060:43;1083:12;1097:5;1060:22;:43::i;:::-;1052:67;;;;-1:-1:-1;;;1052:67:10;;4984:2:11;1052:67:10;;;4966:21:11;5023:2;5003:18;;;4996:30;-1:-1:-1;;;5042:18:11;;;5035:41;5093:18;;1052:67:10;4956:161:11;1052:67:10;1152:5;1158:1;1152:8;;;;;;-1:-1:-1;;;1152:8:10;;;;;;;;;;;;;;;1130:11;1142:3;1130:16;;;;;;-1:-1:-1;;;1130:16:10;;;;;;;;;;;;;;;;;;;:19;;:30;;;;1192:5;1198:1;1192:8;;;;;;-1:-1:-1;;;1192:8:10;;;;;;;;;;;;;;;1170:11;1182:3;1170:16;;;;;;-1:-1:-1;;;1170:16:10;;;;;;;;;;;;;;;;;;;:19;;:30;;;;1217:4;1210:11;;875:353;;;;:::o;565:304::-;654:7;681:43;704:12;718:5;681:22;:43::i;:::-;673:67;;;;-1:-1:-1;;;673:67:10;;4984:2:11;673:67:10;;;4966:21:11;5023:2;5003:18;;;4996:30;-1:-1:-1;;;5042:18:11;;;5035:41;5093:18;;673:67:10;4956:161:11;673:67:10;751:20;774:30;;;;;;;;785:5;791:1;785:8;;;;;;-1:-1:-1;;;785:8:10;;;;;;;;;;;;;;;774:30;;;;795:5;801:1;795:8;;;;;;-1:-1:-1;;;795:8:10;;;;;;;;;;;;;;;;;;;;774:30;;;814:11;:20;;;;;;;-1:-1:-1;814:20:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;851:11;;751:53;;-1:-1:-1;851:11:10;;;:::i;:::-;;;;-1:-1:-1;844:18:10;565:304;-1:-1:-1;;;565:304:10:o;912:3610:9:-;1031:4;1059:5;:12;1075:2;1059:18;1051:51;;;;-1:-1:-1;;;1051:51:9;;4635:2:11;1051:51:9;;;4617:21:11;4674:2;4654:18;;;4647:30;-1:-1:-1;;;4693:18:11;;;4686:50;4753:18;;1051:51:9;4607:170:11;1051:51:9;1120:9;;1134:2;1120:16;1112:46;;;;-1:-1:-1;;;1112:46:9;;4289:2:11;1112:46:9;;;4271:21:11;4328:2;4308:18;;;4301:30;-1:-1:-1;;;4347:18:11;;;4340:47;4404:18;;1112:46:9;4261:167:11;1112:46:9;1185:19;1236:25;;:::i;:::-;1309:12;1324:4;1309:19;;1528:4;1521:5;1517:16;1562:7;1554:6;1547:23;1616:4;1608:6;1598:23;1583:38;;1669:5;1660:7;1656:19;1650:26;1642:6;1635:42;1735:5;1726:7;1722:19;1716:26;1709:4;1701:6;1697:17;1690:53;;1805:2;1792:11;1788:20;1782:27;1775:4;1767:6;1763:17;1756:54;1872:2;1859:11;1855:20;1849:27;1842:4;1834:6;1830:17;1823:54;2040:4;2032:5;2024:6;2020:18;2014:4;2006:6;2003:1;1997:4;1990:5;1985:60;1974:71;;2072:7;2064:33;;;;-1:-1:-1;;;2064:33:9;;5324:2:11;2064:33:9;;;5306:21:11;5363:2;5343:18;;;5336:30;-1:-1:-1;;;5382:18:11;;;5375:43;5435:18;;2064:33:9;5296:163:11;2064:33:9;2506:4;2499:5;2495:16;2628:7;2622:14;2614:6;2607:30;2695:4;2686:7;2682:18;2676:25;2669:4;2661:6;2657:17;2650:52;2760:4;2751:7;2747:18;2741:25;2734:4;2726:6;2722:17;2715:52;2825:4;2816:7;2812:18;2806:25;2799:4;2791:6;2787:17;2780:52;2890:4;2881:7;2877:18;2871:25;2864:4;2856:6;2852:17;2845:52;2955:4;2946:7;2942:18;2936:25;2929:4;2921:6;2917:17;2910:52;3121:11;3115:18;3108:4;3100:6;3096:17;3089:45;3196:1;3183:11;3179:19;3173:26;3166:4;3158:6;3154:17;3147:53;3263:1;3250:11;3246:19;3240:26;3232:5;3224:6;3220:18;3213:54;3330:1;3317:11;3313:19;3307:26;3299:5;3291:6;3287:18;3280:54;3397:1;3384:11;3380:19;3374:26;3366:5;3358:6;3354:18;3347:54;3464:1;3451:11;3447:19;3441:26;3433:5;3425:6;3421:18;3414:54;3635:4;3626:7;3622:18;3616:25;3608:5;3600:6;3596:18;3589:53;3701:4;3692:7;3688:18;3682:25;3674:5;3666:6;3662:18;3655:53;;3771:1;3758:11;3754:19;3748:26;3740:5;3732:6;3728:18;3721:54;3838:1;3825:11;3821:19;3815:26;3807:5;3799:6;3795:18;3788:54;3905:1;3892:11;3888:19;3882:26;3874:5;3866:6;3862:18;3855:54;3972:1;3959:11;3955:19;3949:26;3941:5;3933:6;3929:18;3922:54;4094:2;4081:11;4077:20;4071:27;4063:5;4055:6;4051:18;4044:55;4162:2;4149:11;4145:20;4139:27;4131:5;4123:6;4119:18;4112:55;4230:2;4217:11;4213:20;4207:27;4199:5;4191:6;4187:18;4180:55;4298:2;4285:11;4281:20;4275:27;4267:5;4259:6;4255:18;4248:55;4422:4;4414:6;4407:5;4399:6;4396:1;4393;4386:4;4379:5;4375:16;4370:57;4357:71;;4447:37;;;;-1:-1:-1;;;4447:37:9;;3943:2:11;4447:37:9;;;3925:21:11;3982:2;3962:18;;;3955:30;-1:-1:-1;;;4001:18:11;;;3994:47;4058:18;;4447:37:9;3915:167:11;4447:37:9;-1:-1:-1;4501:9:9;4514:1;4501:14;;;-1:-1:-1;;;;912:3610:9:o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;:::o;14:934:11:-;;121:3;114:4;106:6;102:17;98:27;88:2;;143:5;136;129:20;88:2;183:6;170:20;209:4;232:18;269:2;265;262:10;259:2;;;275:18;;:::i;:::-;322:2;318;314:11;354:2;348:9;417:2;413:7;408:2;404;400:11;396:25;388:6;384:38;472:6;460:10;457:22;452:2;440:10;437:18;434:46;431:2;;;483:18;;:::i;:::-;519:2;512:22;569:18;;;603:15;;;;-1:-1:-1;638:15:11;;;672;;;668:24;;665:33;-1:-1:-1;662:2:11;;;715:5;708;701:20;662:2;741:5;732:14;;755:163;769:2;766:1;763:9;755:163;;;826:17;;814:30;;864:12;;;;787:1;780:9;;;;;896:12;;755:163;;;-1:-1:-1;936:6:11;78:870;-1:-1:-1;;;;;;;78:870:11:o;953:368::-;;1090:2;1078:9;1069:7;1065:23;1061:32;1058:2;;;1111:6;1103;1096:22;1058:2;1156:9;1143:23;1189:18;1181:6;1178:30;1175:2;;;1226:6;1218;1211:22;1175:2;1254:61;1307:7;1298:6;1287:9;1283:22;1254:61;:::i;:::-;1244:71;1048:273;-1:-1:-1;;;;1048:273:11:o;1326:436::-;;;1480:2;1468:9;1459:7;1455:23;1451:32;1448:2;;;1501:6;1493;1486:22;1448:2;1542:9;1529:23;1519:33;;1603:2;1592:9;1588:18;1575:32;1630:18;1622:6;1619:30;1616:2;;;1667:6;1659;1652:22;1616:2;1695:61;1748:7;1739:6;1728:9;1724:22;1695:61;:::i;:::-;1685:71;;;1438:324;;;;;:::o;1767:795::-;1992:2;2044:21;;;2114:13;;2017:18;;;2136:22;;;1767:795;;1992:2;2177;;2195:18;;;;2236:15;;;1767:795;2282:254;2296:6;2293:1;2290:13;2282:254;;;2355:13;;2393:9;;2381:22;;2443:11;;2437:18;2423:12;;;2416:40;2476:12;;;;2511:15;;;;2318:1;2311:9;2282:254;;;-1:-1:-1;2553:3:11;;1972:590;-1:-1:-1;;;;;;;1972:590:11:o;2567:635::-;2738:2;2790:21;;;2860:13;;2763:18;;;2882:22;;;2567:635;;2738:2;2961:15;;;;2935:2;2920:18;;;2567:635;3007:169;3021:6;3018:1;3015:13;3007:169;;;3082:13;;3070:26;;3151:15;;;;3116:12;;;;3043:1;3036:9;3007:169;;;-1:-1:-1;3193:3:11;;2718:484;-1:-1:-1;;;;;;2718:484:11:o;5646:236::-;;-1:-1:-1;;5706:17:11;;5703:2;;;-1:-1:-1;;;5746:33:11;;5802:4;5799:1;5792:15;5832:4;5753:3;5820:17;5703:2;-1:-1:-1;5874:1:11;5863:13;;5693:189::o;5887:127::-;5948:10;5943:3;5939:20;5936:1;5929:31;5979:4;5976:1;5969:15;6003:4;6000:1;5993:15",
  "source": "// SPDX-License-Identifier: LGPL-3.0+\npragma solidity >=0.8.0;\n\nimport \"./ccGroth16VerifyBn128.sol\";\n\ncontract ProofOfReservesContract {\n    // G1 Point (x, y)\n    struct Commitment {\n        uint256 px;\n        uint256 py;\n    }\n\n    uint256[] private verifyingKey;\n\n    Commitment[] commitArray;\n\n    uint256 private commitCnt = 0;\n\n    constructor(uint256[] memory _vk) {\n        verifyingKey = _vk;\n    }\n\n    // Proof :\n    //      uint256[2] A    : G_1\n    //      uint256[4] B    : G_2\n    //      uint256[2] C    : G_1\n    //      uint256[2] D    : G_1\n    function upload_commitment(\n        uint256[] memory proof\n    ) public payable returns (uint256) {\n        require(ccGroth16BN128._verify(verifyingKey, proof), \"verify fail\");\n\n        Commitment memory cm = Commitment(proof[8], proof[9]);\n        commitArray.push(cm);\n        return commitCnt++;\n    }\n\n    function update_commitment(\n        uint256 idx,\n        uint256[] memory proof\n    ) public payable returns (bool) {\n        require(idx < commitCnt, \"Invalid index\");\n        require(ccGroth16BN128._verify(verifyingKey, proof), \"verify fail\");\n\n        commitArray[idx].px = proof[8];\n        commitArray[idx].py = proof[9];\n        return true;\n    }\n\n    function get_vk() public view returns (uint256[] memory) {\n        return verifyingKey;\n    }\n\n    function get_all_commitments() public view returns (Commitment[] memory) {\n        return commitArray;\n    }\n\n    function get_commitment_cnt() public view returns (uint256) {\n        return commitCnt;\n    }\n}\n",
  "sourcePath": "/Users/kim/Proof-of-Reserves/contract/contracts/proofOfReserves.sol",
  "ast": {
    "absolutePath": "project:/contracts/proofOfReserves.sol",
    "exportedSymbols": {
      "ProofOfReservesContract": [
        835
      ],
      "ccGroth16BN128": [
        692
      ]
    },
    "id": 836,
    "license": "LGPL-3.0+",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 694,
        "literals": [
          "solidity",
          ">=",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "38:24:10"
      },
      {
        "absolutePath": "project:/contracts/ccGroth16VerifyBn128.sol",
        "file": "./ccGroth16VerifyBn128.sol",
        "id": 695,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 836,
        "sourceUnit": 693,
        "src": "64:36:10",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 835,
        "linearizedBaseContracts": [
          835
        ],
        "name": "ProofOfReservesContract",
        "nameLocation": "111:23:10",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "ProofOfReservesContract.Commitment",
            "id": 700,
            "members": [
              {
                "constant": false,
                "id": 697,
                "mutability": "mutable",
                "name": "px",
                "nameLocation": "200:2:10",
                "nodeType": "VariableDeclaration",
                "scope": 700,
                "src": "192:10:10",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 696,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "192:7:10",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 699,
                "mutability": "mutable",
                "name": "py",
                "nameLocation": "220:2:10",
                "nodeType": "VariableDeclaration",
                "scope": 700,
                "src": "212:10:10",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 698,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "212:7:10",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Commitment",
            "nameLocation": "171:10:10",
            "nodeType": "StructDefinition",
            "scope": 835,
            "src": "164:65:10",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 703,
            "mutability": "mutable",
            "name": "verifyingKey",
            "nameLocation": "253:12:10",
            "nodeType": "VariableDeclaration",
            "scope": 835,
            "src": "235:30:10",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
              "typeString": "uint256[]"
            },
            "typeName": {
              "baseType": {
                "id": 701,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "235:7:10",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "id": 702,
              "nodeType": "ArrayTypeName",
              "src": "235:9:10",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                "typeString": "uint256[]"
              }
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 707,
            "mutability": "mutable",
            "name": "commitArray",
            "nameLocation": "285:11:10",
            "nodeType": "VariableDeclaration",
            "scope": 835,
            "src": "272:24:10",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_Commitment_$700_storage_$dyn_storage",
              "typeString": "struct ProofOfReservesContract.Commitment[]"
            },
            "typeName": {
              "baseType": {
                "id": 705,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 704,
                  "name": "Commitment",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 700,
                  "src": "272:10:10"
                },
                "referencedDeclaration": 700,
                "src": "272:10:10",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Commitment_$700_storage_ptr",
                  "typeString": "struct ProofOfReservesContract.Commitment"
                }
              },
              "id": 706,
              "nodeType": "ArrayTypeName",
              "src": "272:12:10",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_Commitment_$700_storage_$dyn_storage_ptr",
                "typeString": "struct ProofOfReservesContract.Commitment[]"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 710,
            "mutability": "mutable",
            "name": "commitCnt",
            "nameLocation": "319:9:10",
            "nodeType": "VariableDeclaration",
            "scope": 835,
            "src": "303:29:10",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 708,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "303:7:10",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "30",
              "id": 709,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "331:1:10",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "private"
          },
          {
            "body": {
              "id": 720,
              "nodeType": "Block",
              "src": "373:35:10",
              "statements": [
                {
                  "expression": {
                    "id": 718,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 716,
                      "name": "verifyingKey",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 703,
                      "src": "383:12:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                        "typeString": "uint256[] storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 717,
                      "name": "_vk",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 713,
                      "src": "398:3:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[] memory"
                      }
                    },
                    "src": "383:18:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                      "typeString": "uint256[] storage ref"
                    }
                  },
                  "id": 719,
                  "nodeType": "ExpressionStatement",
                  "src": "383:18:10"
                }
              ]
            },
            "id": 721,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 714,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 713,
                  "mutability": "mutable",
                  "name": "_vk",
                  "nameLocation": "368:3:10",
                  "nodeType": "VariableDeclaration",
                  "scope": 721,
                  "src": "351:20:10",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 711,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "351:7:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 712,
                    "nodeType": "ArrayTypeName",
                    "src": "351:9:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "350:22:10"
            },
            "returnParameters": {
              "id": 715,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "373:0:10"
            },
            "scope": 835,
            "src": "339:69:10",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 759,
              "nodeType": "Block",
              "src": "663:206:10",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 732,
                            "name": "verifyingKey",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 703,
                            "src": "704:12:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                              "typeString": "uint256[] storage ref"
                            }
                          },
                          {
                            "id": 733,
                            "name": "proof",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 724,
                            "src": "718:5:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                              "typeString": "uint256[] memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                              "typeString": "uint256[] storage ref"
                            },
                            {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                              "typeString": "uint256[] memory"
                            }
                          ],
                          "expression": {
                            "id": 730,
                            "name": "ccGroth16BN128",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 692,
                            "src": "681:14:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_ccGroth16BN128_$692_$",
                              "typeString": "type(library ccGroth16BN128)"
                            }
                          },
                          "id": 731,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "_verify",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 691,
                          "src": "681:22:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_array$_t_uint256_$dyn_storage_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$returns$_t_bool_$",
                            "typeString": "function (uint256[] storage pointer,uint256[] memory) returns (bool)"
                          }
                        },
                        "id": 734,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "681:43:10",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "766572696679206661696c",
                        "id": 735,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "726:13:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c55065d7b39eb0dd1a6c67b68aef2ac89bae2b26f88f2b8782f868f7c362d837",
                          "typeString": "literal_string \"verify fail\""
                        },
                        "value": "verify fail"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c55065d7b39eb0dd1a6c67b68aef2ac89bae2b26f88f2b8782f868f7c362d837",
                          "typeString": "literal_string \"verify fail\""
                        }
                      ],
                      "id": 729,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "673:7:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 736,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "673:67:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 737,
                  "nodeType": "ExpressionStatement",
                  "src": "673:67:10"
                },
                {
                  "assignments": [
                    740
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 740,
                      "mutability": "mutable",
                      "name": "cm",
                      "nameLocation": "769:2:10",
                      "nodeType": "VariableDeclaration",
                      "scope": 759,
                      "src": "751:20:10",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Commitment_$700_memory_ptr",
                        "typeString": "struct ProofOfReservesContract.Commitment"
                      },
                      "typeName": {
                        "id": 739,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 738,
                          "name": "Commitment",
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 700,
                          "src": "751:10:10"
                        },
                        "referencedDeclaration": 700,
                        "src": "751:10:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Commitment_$700_storage_ptr",
                          "typeString": "struct ProofOfReservesContract.Commitment"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 749,
                  "initialValue": {
                    "arguments": [
                      {
                        "baseExpression": {
                          "id": 742,
                          "name": "proof",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 724,
                          "src": "785:5:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                            "typeString": "uint256[] memory"
                          }
                        },
                        "id": 744,
                        "indexExpression": {
                          "hexValue": "38",
                          "id": 743,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "791:1:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_8_by_1",
                            "typeString": "int_const 8"
                          },
                          "value": "8"
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "785:8:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "baseExpression": {
                          "id": 745,
                          "name": "proof",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 724,
                          "src": "795:5:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                            "typeString": "uint256[] memory"
                          }
                        },
                        "id": 747,
                        "indexExpression": {
                          "hexValue": "39",
                          "id": 746,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "801:1:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_9_by_1",
                            "typeString": "int_const 9"
                          },
                          "value": "9"
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "795:8:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 741,
                      "name": "Commitment",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 700,
                      "src": "774:10:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_Commitment_$700_storage_ptr_$",
                        "typeString": "type(struct ProofOfReservesContract.Commitment storage pointer)"
                      }
                    },
                    "id": 748,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "774:30:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Commitment_$700_memory_ptr",
                      "typeString": "struct ProofOfReservesContract.Commitment memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "751:53:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 753,
                        "name": "cm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 740,
                        "src": "831:2:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Commitment_$700_memory_ptr",
                          "typeString": "struct ProofOfReservesContract.Commitment memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Commitment_$700_memory_ptr",
                          "typeString": "struct ProofOfReservesContract.Commitment memory"
                        }
                      ],
                      "expression": {
                        "id": 750,
                        "name": "commitArray",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 707,
                        "src": "814:11:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Commitment_$700_storage_$dyn_storage",
                          "typeString": "struct ProofOfReservesContract.Commitment storage ref[] storage ref"
                        }
                      },
                      "id": 752,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "814:16:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_struct$_Commitment_$700_storage_$dyn_storage_ptr_$_t_struct$_Commitment_$700_storage_$returns$__$bound_to$_t_array$_t_struct$_Commitment_$700_storage_$dyn_storage_ptr_$",
                        "typeString": "function (struct ProofOfReservesContract.Commitment storage ref[] storage pointer,struct ProofOfReservesContract.Commitment storage ref)"
                      }
                    },
                    "id": 754,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "814:20:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 755,
                  "nodeType": "ExpressionStatement",
                  "src": "814:20:10"
                },
                {
                  "expression": {
                    "id": 757,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "851:11:10",
                    "subExpression": {
                      "id": 756,
                      "name": "commitCnt",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 710,
                      "src": "851:9:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 728,
                  "id": 758,
                  "nodeType": "Return",
                  "src": "844:18:10"
                }
              ]
            },
            "functionSelector": "f5c13593",
            "id": 760,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "upload_commitment",
            "nameLocation": "574:17:10",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 725,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 724,
                  "mutability": "mutable",
                  "name": "proof",
                  "nameLocation": "618:5:10",
                  "nodeType": "VariableDeclaration",
                  "scope": 760,
                  "src": "601:22:10",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 722,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "601:7:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 723,
                    "nodeType": "ArrayTypeName",
                    "src": "601:9:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "591:38:10"
            },
            "returnParameters": {
              "id": 728,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 727,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 760,
                  "src": "654:7:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 726,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "654:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "653:9:10"
            },
            "scope": 835,
            "src": "565:304:10",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 806,
              "nodeType": "Block",
              "src": "991:237:10",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 773,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 771,
                          "name": "idx",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 762,
                          "src": "1009:3:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "id": 772,
                          "name": "commitCnt",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 710,
                          "src": "1015:9:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1009:15:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "496e76616c696420696e646578",
                        "id": 774,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1026:15:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_32cc480c4f0e15e5ce7060ec5e004886ed5a15831cba1ff1aa7cb787be55bb60",
                          "typeString": "literal_string \"Invalid index\""
                        },
                        "value": "Invalid index"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_32cc480c4f0e15e5ce7060ec5e004886ed5a15831cba1ff1aa7cb787be55bb60",
                          "typeString": "literal_string \"Invalid index\""
                        }
                      ],
                      "id": 770,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1001:7:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 775,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1001:41:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 776,
                  "nodeType": "ExpressionStatement",
                  "src": "1001:41:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 780,
                            "name": "verifyingKey",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 703,
                            "src": "1083:12:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                              "typeString": "uint256[] storage ref"
                            }
                          },
                          {
                            "id": 781,
                            "name": "proof",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 765,
                            "src": "1097:5:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                              "typeString": "uint256[] memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                              "typeString": "uint256[] storage ref"
                            },
                            {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                              "typeString": "uint256[] memory"
                            }
                          ],
                          "expression": {
                            "id": 778,
                            "name": "ccGroth16BN128",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 692,
                            "src": "1060:14:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_ccGroth16BN128_$692_$",
                              "typeString": "type(library ccGroth16BN128)"
                            }
                          },
                          "id": 779,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "_verify",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 691,
                          "src": "1060:22:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_array$_t_uint256_$dyn_storage_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$returns$_t_bool_$",
                            "typeString": "function (uint256[] storage pointer,uint256[] memory) returns (bool)"
                          }
                        },
                        "id": 782,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1060:43:10",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "766572696679206661696c",
                        "id": 783,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1105:13:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c55065d7b39eb0dd1a6c67b68aef2ac89bae2b26f88f2b8782f868f7c362d837",
                          "typeString": "literal_string \"verify fail\""
                        },
                        "value": "verify fail"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c55065d7b39eb0dd1a6c67b68aef2ac89bae2b26f88f2b8782f868f7c362d837",
                          "typeString": "literal_string \"verify fail\""
                        }
                      ],
                      "id": 777,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1052:7:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 784,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1052:67:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 785,
                  "nodeType": "ExpressionStatement",
                  "src": "1052:67:10"
                },
                {
                  "expression": {
                    "id": 793,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 786,
                          "name": "commitArray",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 707,
                          "src": "1130:11:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Commitment_$700_storage_$dyn_storage",
                            "typeString": "struct ProofOfReservesContract.Commitment storage ref[] storage ref"
                          }
                        },
                        "id": 788,
                        "indexExpression": {
                          "id": 787,
                          "name": "idx",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 762,
                          "src": "1142:3:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1130:16:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Commitment_$700_storage",
                          "typeString": "struct ProofOfReservesContract.Commitment storage ref"
                        }
                      },
                      "id": 789,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "px",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 697,
                      "src": "1130:19:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "baseExpression": {
                        "id": 790,
                        "name": "proof",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 765,
                        "src": "1152:5:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      "id": 792,
                      "indexExpression": {
                        "hexValue": "38",
                        "id": 791,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1158:1:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_8_by_1",
                          "typeString": "int_const 8"
                        },
                        "value": "8"
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "1152:8:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1130:30:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 794,
                  "nodeType": "ExpressionStatement",
                  "src": "1130:30:10"
                },
                {
                  "expression": {
                    "id": 802,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 795,
                          "name": "commitArray",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 707,
                          "src": "1170:11:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_Commitment_$700_storage_$dyn_storage",
                            "typeString": "struct ProofOfReservesContract.Commitment storage ref[] storage ref"
                          }
                        },
                        "id": 797,
                        "indexExpression": {
                          "id": 796,
                          "name": "idx",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 762,
                          "src": "1182:3:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1170:16:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Commitment_$700_storage",
                          "typeString": "struct ProofOfReservesContract.Commitment storage ref"
                        }
                      },
                      "id": 798,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "py",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 699,
                      "src": "1170:19:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "baseExpression": {
                        "id": 799,
                        "name": "proof",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 765,
                        "src": "1192:5:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      "id": 801,
                      "indexExpression": {
                        "hexValue": "39",
                        "id": 800,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1198:1:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_9_by_1",
                          "typeString": "int_const 9"
                        },
                        "value": "9"
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "1192:8:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1170:30:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 803,
                  "nodeType": "ExpressionStatement",
                  "src": "1170:30:10"
                },
                {
                  "expression": {
                    "hexValue": "74727565",
                    "id": 804,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1217:4:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 769,
                  "id": 805,
                  "nodeType": "Return",
                  "src": "1210:11:10"
                }
              ]
            },
            "functionSelector": "f123b45a",
            "id": 807,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "update_commitment",
            "nameLocation": "884:17:10",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 766,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 762,
                  "mutability": "mutable",
                  "name": "idx",
                  "nameLocation": "919:3:10",
                  "nodeType": "VariableDeclaration",
                  "scope": 807,
                  "src": "911:11:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 761,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "911:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 765,
                  "mutability": "mutable",
                  "name": "proof",
                  "nameLocation": "949:5:10",
                  "nodeType": "VariableDeclaration",
                  "scope": 807,
                  "src": "932:22:10",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 763,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "932:7:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 764,
                    "nodeType": "ArrayTypeName",
                    "src": "932:9:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "901:59:10"
            },
            "returnParameters": {
              "id": 769,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 768,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 807,
                  "src": "985:4:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 767,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "985:4:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "984:6:10"
            },
            "scope": 835,
            "src": "875:353:10",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 815,
              "nodeType": "Block",
              "src": "1291:36:10",
              "statements": [
                {
                  "expression": {
                    "id": 813,
                    "name": "verifyingKey",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 703,
                    "src": "1308:12:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                      "typeString": "uint256[] storage ref"
                    }
                  },
                  "functionReturnParameters": 812,
                  "id": 814,
                  "nodeType": "Return",
                  "src": "1301:19:10"
                }
              ]
            },
            "functionSelector": "def596ef",
            "id": 816,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "get_vk",
            "nameLocation": "1243:6:10",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 808,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1249:2:10"
            },
            "returnParameters": {
              "id": 812,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 811,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 816,
                  "src": "1273:16:10",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 809,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1273:7:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 810,
                    "nodeType": "ArrayTypeName",
                    "src": "1273:9:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1272:18:10"
            },
            "scope": 835,
            "src": "1234:93:10",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 825,
              "nodeType": "Block",
              "src": "1406:35:10",
              "statements": [
                {
                  "expression": {
                    "id": 823,
                    "name": "commitArray",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 707,
                    "src": "1423:11:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Commitment_$700_storage_$dyn_storage",
                      "typeString": "struct ProofOfReservesContract.Commitment storage ref[] storage ref"
                    }
                  },
                  "functionReturnParameters": 822,
                  "id": 824,
                  "nodeType": "Return",
                  "src": "1416:18:10"
                }
              ]
            },
            "functionSelector": "068a2253",
            "id": 826,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "get_all_commitments",
            "nameLocation": "1342:19:10",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 817,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1361:2:10"
            },
            "returnParameters": {
              "id": 822,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 821,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 826,
                  "src": "1385:19:10",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Commitment_$700_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct ProofOfReservesContract.Commitment[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 819,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 818,
                        "name": "Commitment",
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 700,
                        "src": "1385:10:10"
                      },
                      "referencedDeclaration": 700,
                      "src": "1385:10:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Commitment_$700_storage_ptr",
                        "typeString": "struct ProofOfReservesContract.Commitment"
                      }
                    },
                    "id": 820,
                    "nodeType": "ArrayTypeName",
                    "src": "1385:12:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Commitment_$700_storage_$dyn_storage_ptr",
                      "typeString": "struct ProofOfReservesContract.Commitment[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1384:21:10"
            },
            "scope": 835,
            "src": "1333:108:10",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 833,
              "nodeType": "Block",
              "src": "1507:33:10",
              "statements": [
                {
                  "expression": {
                    "id": 831,
                    "name": "commitCnt",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 710,
                    "src": "1524:9:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 830,
                  "id": 832,
                  "nodeType": "Return",
                  "src": "1517:16:10"
                }
              ]
            },
            "functionSelector": "621a9326",
            "id": 834,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "get_commitment_cnt",
            "nameLocation": "1456:18:10",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 827,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1474:2:10"
            },
            "returnParameters": {
              "id": 830,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 829,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 834,
                  "src": "1498:7:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 828,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1498:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1497:9:10"
            },
            "scope": 835,
            "src": "1447:93:10",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 836,
        "src": "102:1440:10"
      }
    ],
    "src": "38:1505:10"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.2+commit.661d1103.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.4.14",
  "updatedAt": "2023-05-25T10:42:57.894Z",
  "devdoc": {
    "kind": "dev",
    "methods": {},
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}