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
              "name": "X",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "Y",
              "type": "uint256"
            }
          ],
          "internalType": "struct Pairing.G1Point[]",
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
    },
    {
      "inputs": [],
      "name": "get_sum_of_commitments",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "X",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "Y",
              "type": "uint256"
            }
          ],
          "internalType": "struct Pairing.G1Point",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.2+commit.661d1103\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256[]\",\"name\":\"_vk\",\"type\":\"uint256[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"get_all_commitments\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"X\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"Y\",\"type\":\"uint256\"}],\"internalType\":\"struct Pairing.G1Point[]\",\"name\":\"\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"get_commitment_cnt\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"get_sum_of_commitments\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"X\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"Y\",\"type\":\"uint256\"}],\"internalType\":\"struct Pairing.G1Point\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"get_vk\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"idx\",\"type\":\"uint256\"},{\"internalType\":\"uint256[]\",\"name\":\"proof\",\"type\":\"uint256[]\"}],\"name\":\"update_commitment\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256[]\",\"name\":\"proof\",\"type\":\"uint256[]\"}],\"name\":\"upload_commitment\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/proofOfReserves.sol\":\"ProofOfReservesContract\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/PairingBn128.sol\":{\"keccak256\":\"0x0dc59306a9d02913a33f44c50674d3151ec883265b2b7e0fd942487c91ee5e22\",\"license\":\"LGPL-3.0+\",\"urls\":[\"bzz-raw://66115d908c655f9919c936c3f17e96eb8cb12ddf428e54c70d9a9d18dd1d1fc3\",\"dweb:/ipfs/QmPR6pLjzJcSkqm45G18Uh2nXth1bHCRs9egY2tcP4E4HW\"]},\"project:/contracts/ccGroth16VerifyBn128.sol\":{\"keccak256\":\"0x21cd03dc9ade63bf60302ae274059632874257cd70a8bd8667328743109d99bb\",\"license\":\"LGPL-3.0+\",\"urls\":[\"bzz-raw://57159ea9a7e262c7043d41fdc1406f1239a56629d0c9c0e014fa55148e128f96\",\"dweb:/ipfs/QmNtLRwgA4BfX87cyyC8dqjdV2RQFaeXHAdh76ADX38XBN\"]},\"project:/contracts/proofOfReserves.sol\":{\"keccak256\":\"0x175e050a452190b5bc26d998920f94056bc57c9448625595b023751b5bc0ec31\",\"license\":\"LGPL-3.0+\",\"urls\":[\"bzz-raw://7f3f85d7af527fdf74e38dda0f84f060df415656f4f92f7d4e0b62b849bc0340\",\"dweb:/ipfs/QmPzboB1bQV8T7Vt8keEugqFpdaaMAkUoJk58BDaTtMJ7K\"]}},\"version\":1}",
  "bytecode": "0x60c06040526000608081905260a0819052600281905560038190556004553480156200002a57600080fd5b5060405162000e6238038062000e628339810160408190526200004d91620000d1565b8051620000629060009060208401906200006a565b5050620001b1565b828054828255906000526020600020908101928215620000a8579160200282015b82811115620000a85782518255916020019190600101906200008b565b50620000b6929150620000ba565b5090565b5b80821115620000b65760008155600101620000bb565b60006020808385031215620000e4578182fd5b82516001600160401b0380821115620000fb578384fd5b818501915085601f8301126200010f578384fd5b8151818111156200012457620001246200019b565b838102604051601f19603f830116810181811085821117156200014b576200014b6200019b565b604052828152858101935084860182860187018a10156200016a578788fd5b8795505b838610156200018e5780518552600195909501949386019386016200016e565b5098975050505050505050565b634e487b7160e01b600052604160045260246000fd5b610ca180620001c16000396000f3fe6080604052600436106100555760003560e01c80630651a1241461005a578063068a2253146100a5578063621a9326146100c7578063def596ef146100e6578063f123b45a14610108578063f5c135931461012b575b600080fd5b34801561006657600080fd5b506040805180820182526000808252602091820152815180830190925260025482526003549082015260405161009c9190610bd6565b60405180910390f35b3480156100b157600080fd5b506100ba61013e565b60405161009c9190610b3b565b3480156100d357600080fd5b506004545b60405190815260200161009c565b3480156100f257600080fd5b506100fb6101b1565b60405161009c9190610b92565b61011b610116366004610af6565b610209565b604051901515815260200161009c565b6100d8610139366004610abb565b610472565b60606001805480602002602001604051908101604052809291908181526020016000905b828210156101a857838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190610162565b50505050905090565b606060008054806020026020016040519081016040528092919081815260200182805480156101ff57602002820191906000526020600020905b8154815260200190600101908083116101eb575b5050505050905090565b600060045483106102515760405162461bcd60e51b815260206004820152600d60248201526c092dcecc2d8d2c840d2dcc8caf609b1b60448201526064015b60405180910390fd5b61025c6000836105fe565b6102965760405162461bcd60e51b815260206004820152600b60248201526a1d995c9a599e4819985a5b60aa1b6044820152606401610248565b6040805180820190915260008082526020820152604080518082019091526002548152600354602082015260018054610323929161031e91889081106102ec57634e487b7160e01b600052603260045260246000fd5b906000526020600020906002020160405180604001604052908160008201548152602001600182015481525050610867565b610906565b90508260088151811061034657634e487b7160e01b600052603260045260246000fd5b60200260200101516001858154811061036f57634e487b7160e01b600052603260045260246000fd5b906000526020600020906002020160000181905550826009815181106103a557634e487b7160e01b600052603260045260246000fd5b6020026020010151600185815481106103ce57634e487b7160e01b600052603260045260246000fd5b90600052602060002090600202016001018190555061045a6002604051806040016040529081600082015481526020016001820154815250506001868154811061042857634e487b7160e01b600052603260045260246000fd5b906000526020600020906002020160405180604001604052908160008201548152602001600182015481525050610906565b80516002556020015160035550600190505b92915050565b600061047f6000836105fe565b6104b95760405162461bcd60e51b815260206004820152600b60248201526a1d995c9a599e4819985a5b60aa1b6044820152606401610248565b60006040518060400160405280846008815181106104e757634e487b7160e01b600052603260045260246000fd5b602002602001015181526020018460098151811061051557634e487b7160e01b600052603260045260246000fd5b60209081029190910181015190915260018054808201825560009190915282517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf66002909202918201819055918301517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf79091015590915015801561059c57506020810151155b156105b357805160025560208101516003556105e1565b60408051808201909152600254815260035460208201526105d49082610906565b8051600255602001516003555b600480549060006105f183610c04565b919050559150505b919050565b60008151600a146106485760405162461bcd60e51b8152602060048201526014602482015273092dcecc2d8d2c840e0e4dedecc40d8cadccee8d60631b6044820152606401610248565b825460101461068d5760405162461bcd60e51b8152602060048201526011602482015270092dcecc2d8d2c840ecd640d8cadccee8d607b1b6044820152606401610248565b60006106976109e1565b600060019050602085018683526020832093506101008101518352610120810151602084015250600a8301546040830152600b830154606083015260406102408301608084600060065af19050806107215760405162461bcd60e51b815260206004820152600d60248201526c189b8c8d4d9059190819985a5b609a1b6044820152606401610248565b60208501805183526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a0840152835460c0840152600184015460e0840152600284015461010084015260038401546101208401526004840154610140840152600584015461016084015260c081015161018084015260e08101516101a08401525060068301546101c083015260078301546101e083015260088301546102008301526009830154610220830152600c830154610280830152600d8301546102a0830152600e8301546102c0830152600f8301546102e083015260208261030084600060086107d05a03f1168061085a5760405162461bcd60e51b8152602060048201526011602482015270189b8c8d4d94185a5c9a5b99c819985a5b607a1b6044820152606401610248565b5051600114949350505050565b604080518082019091526000808252602082015281517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47901580156108ae57506020830151155b156108ce57505060408051808201909152600080825260208201526105f9565b6040518060400160405280846000015181526020018285602001516108f39190610c1f565b6108fd9084610bed565b90529392505050565b6040805180820190915260008082526020820152610922610a00565b83518152602080850151818301528351604080840191909152908401516060830152600090836080848460066107d05a03f19050806109d95760405162461bcd60e51b815260206004820152604760248201527f43616c6c20746f2074686520626e32353641646420707265636f6d70696c656460448201527f206661696c6564202870726f6261626c7920616e206f7574206f6620676173206064820152666572726f723f2960c81b608482015260a401610248565b505092915050565b6040518061030001604052806018906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b600082601f830112610a2e578081fd5b8135602067ffffffffffffffff80831115610a4b57610a4b610c55565b818302604051601f19603f83011681018181108482111715610a6f57610a6f610c55565b60405284815283810192508684018288018501891015610a8d578687fd5b8692505b85831015610aaf578035845292840192600192909201918401610a91565b50979650505050505050565b600060208284031215610acc578081fd5b813567ffffffffffffffff811115610ae2578182fd5b610aee84828501610a1e565b949350505050565b60008060408385031215610b08578081fd5b82359150602083013567ffffffffffffffff811115610b25578182fd5b610b3185828601610a1e565b9150509250929050565b602080825282518282018190526000919060409081850190868401855b82811015610b8557610b7584835180518252602090810151910152565b9284019290850190600101610b58565b5091979650505050505050565b6020808252825182820181905260009190848201906040850190845b81811015610bca57835183529284019291840191600101610bae565b50909695505050505050565b81518152602080830151908201526040810161046c565b600082821015610bff57610bff610c3f565b500390565b6000600019821415610c1857610c18610c3f565b5060010190565b600082610c3a57634e487b7160e01b81526012600452602481fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea264697066735822122076a86c96eb3c609eb5611a783441b1ce2572b6715fb0b92d9319d752f9c6276d64736f6c63430008020033",
  "deployedBytecode": "0x6080604052600436106100555760003560e01c80630651a1241461005a578063068a2253146100a5578063621a9326146100c7578063def596ef146100e6578063f123b45a14610108578063f5c135931461012b575b600080fd5b34801561006657600080fd5b506040805180820182526000808252602091820152815180830190925260025482526003549082015260405161009c9190610bd6565b60405180910390f35b3480156100b157600080fd5b506100ba61013e565b60405161009c9190610b3b565b3480156100d357600080fd5b506004545b60405190815260200161009c565b3480156100f257600080fd5b506100fb6101b1565b60405161009c9190610b92565b61011b610116366004610af6565b610209565b604051901515815260200161009c565b6100d8610139366004610abb565b610472565b60606001805480602002602001604051908101604052809291908181526020016000905b828210156101a857838290600052602060002090600202016040518060400160405290816000820154815260200160018201548152505081526020019060010190610162565b50505050905090565b606060008054806020026020016040519081016040528092919081815260200182805480156101ff57602002820191906000526020600020905b8154815260200190600101908083116101eb575b5050505050905090565b600060045483106102515760405162461bcd60e51b815260206004820152600d60248201526c092dcecc2d8d2c840d2dcc8caf609b1b60448201526064015b60405180910390fd5b61025c6000836105fe565b6102965760405162461bcd60e51b815260206004820152600b60248201526a1d995c9a599e4819985a5b60aa1b6044820152606401610248565b6040805180820190915260008082526020820152604080518082019091526002548152600354602082015260018054610323929161031e91889081106102ec57634e487b7160e01b600052603260045260246000fd5b906000526020600020906002020160405180604001604052908160008201548152602001600182015481525050610867565b610906565b90508260088151811061034657634e487b7160e01b600052603260045260246000fd5b60200260200101516001858154811061036f57634e487b7160e01b600052603260045260246000fd5b906000526020600020906002020160000181905550826009815181106103a557634e487b7160e01b600052603260045260246000fd5b6020026020010151600185815481106103ce57634e487b7160e01b600052603260045260246000fd5b90600052602060002090600202016001018190555061045a6002604051806040016040529081600082015481526020016001820154815250506001868154811061042857634e487b7160e01b600052603260045260246000fd5b906000526020600020906002020160405180604001604052908160008201548152602001600182015481525050610906565b80516002556020015160035550600190505b92915050565b600061047f6000836105fe565b6104b95760405162461bcd60e51b815260206004820152600b60248201526a1d995c9a599e4819985a5b60aa1b6044820152606401610248565b60006040518060400160405280846008815181106104e757634e487b7160e01b600052603260045260246000fd5b602002602001015181526020018460098151811061051557634e487b7160e01b600052603260045260246000fd5b60209081029190910181015190915260018054808201825560009190915282517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf66002909202918201819055918301517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf79091015590915015801561059c57506020810151155b156105b357805160025560208101516003556105e1565b60408051808201909152600254815260035460208201526105d49082610906565b8051600255602001516003555b600480549060006105f183610c04565b919050559150505b919050565b60008151600a146106485760405162461bcd60e51b8152602060048201526014602482015273092dcecc2d8d2c840e0e4dedecc40d8cadccee8d60631b6044820152606401610248565b825460101461068d5760405162461bcd60e51b8152602060048201526011602482015270092dcecc2d8d2c840ecd640d8cadccee8d607b1b6044820152606401610248565b60006106976109e1565b600060019050602085018683526020832093506101008101518352610120810151602084015250600a8301546040830152600b830154606083015260406102408301608084600060065af19050806107215760405162461bcd60e51b815260206004820152600d60248201526c189b8c8d4d9059190819985a5b609a1b6044820152606401610248565b60208501805183526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a0840152835460c0840152600184015460e0840152600284015461010084015260038401546101208401526004840154610140840152600584015461016084015260c081015161018084015260e08101516101a08401525060068301546101c083015260078301546101e083015260088301546102008301526009830154610220830152600c830154610280830152600d8301546102a0830152600e8301546102c0830152600f8301546102e083015260208261030084600060086107d05a03f1168061085a5760405162461bcd60e51b8152602060048201526011602482015270189b8c8d4d94185a5c9a5b99c819985a5b607a1b6044820152606401610248565b5051600114949350505050565b604080518082019091526000808252602082015281517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47901580156108ae57506020830151155b156108ce57505060408051808201909152600080825260208201526105f9565b6040518060400160405280846000015181526020018285602001516108f39190610c1f565b6108fd9084610bed565b90529392505050565b6040805180820190915260008082526020820152610922610a00565b83518152602080850151818301528351604080840191909152908401516060830152600090836080848460066107d05a03f19050806109d95760405162461bcd60e51b815260206004820152604760248201527f43616c6c20746f2074686520626e32353641646420707265636f6d70696c656460448201527f206661696c6564202870726f6261626c7920616e206f7574206f6620676173206064820152666572726f723f2960c81b608482015260a401610248565b505092915050565b6040518061030001604052806018906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b600082601f830112610a2e578081fd5b8135602067ffffffffffffffff80831115610a4b57610a4b610c55565b818302604051601f19603f83011681018181108482111715610a6f57610a6f610c55565b60405284815283810192508684018288018501891015610a8d578687fd5b8692505b85831015610aaf578035845292840192600192909201918401610a91565b50979650505050505050565b600060208284031215610acc578081fd5b813567ffffffffffffffff811115610ae2578182fd5b610aee84828501610a1e565b949350505050565b60008060408385031215610b08578081fd5b82359150602083013567ffffffffffffffff811115610b25578182fd5b610b3185828601610a1e565b9150509250929050565b602080825282518282018190526000919060409081850190868401855b82811015610b8557610b7584835180518252602090810151910152565b9284019290850190600101610b58565b5091979650505050505050565b6020808252825182820181905260009190848201906040850190845b81811015610bca57835183529284019291840191600101610bae565b50909695505050505050565b81518152602080830151908201526040810161046c565b600082821015610bff57610bff610c3f565b500390565b6000600019821415610c1857610c18610c3f565b5060010190565b600082610c3a57634e487b7160e01b81526012600452602481fd5b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea264697066735822122076a86c96eb3c609eb5611a783441b1ce2572b6715fb0b92d9319d752f9c6276d64736f6c63430008020033",
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
        "src": "0:7193:11",
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
              "src": "1818:97:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1835:3:11"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "1846:5:11"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nodeType": "YulIdentifier",
                          "src": "1840:5:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1840:12:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1828:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1828:25:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1828:25:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "1873:3:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1878:4:11",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1869:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1869:14:11"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "1895:5:11"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1902:4:11",
                                "type": "",
                                "value": "0x20"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1891:3:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1891:16:11"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nodeType": "YulIdentifier",
                          "src": "1885:5:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1885:23:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1862:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1862:47:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1862:47:11"
                }
              ]
            },
            "name": "abi_encode_struct_G1Point",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1802:5:11",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "1809:3:11",
                "type": ""
              }
            ],
            "src": "1767:148:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2115:524:11",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2125:12:11",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "2135:2:11",
                    "type": "",
                    "value": "32"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "2129:2:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2146:32:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2164:9:11"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "2175:2:11"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2160:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2160:18:11"
                  },
                  "variables": [
                    {
                      "name": "tail_1",
                      "nodeType": "YulTypedName",
                      "src": "2150:6:11",
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
                        "src": "2194:9:11"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "2205:2:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2187:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2187:21:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2187:21:11"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2217:17:11",
                  "value": {
                    "name": "tail_1",
                    "nodeType": "YulIdentifier",
                    "src": "2228:6:11"
                  },
                  "variables": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "2221:3:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2243:27:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "2263:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "2257:5:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2257:13:11"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "2247:6:11",
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
                        "src": "2286:6:11"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "2294:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2279:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2279:22:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2279:22:11"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2310:12:11",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "2320:2:11",
                    "type": "",
                    "value": "64"
                  },
                  "variables": [
                    {
                      "name": "_2",
                      "nodeType": "YulTypedName",
                      "src": "2314:2:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2331:25:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2342:9:11"
                      },
                      {
                        "name": "_2",
                        "nodeType": "YulIdentifier",
                        "src": "2353:2:11"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2338:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2338:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "2331:3:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2365:29:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "2383:6:11"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "2391:2:11"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2379:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2379:15:11"
                  },
                  "variables": [
                    {
                      "name": "srcPtr",
                      "nodeType": "YulTypedName",
                      "src": "2369:6:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2403:13:11",
                  "value": {
                    "name": "tail",
                    "nodeType": "YulIdentifier",
                    "src": "2412:4:11"
                  },
                  "variables": [
                    {
                      "name": "i",
                      "nodeType": "YulTypedName",
                      "src": "2407:1:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2474:139:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "srcPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "2520:6:11"
                                }
                              ],
                              "functionName": {
                                "name": "mload",
                                "nodeType": "YulIdentifier",
                                "src": "2514:5:11"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2514:13:11"
                            },
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "2529:3:11"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_struct_G1Point",
                            "nodeType": "YulIdentifier",
                            "src": "2488:25:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2488:45:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2488:45:11"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "2546:19:11",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "2557:3:11"
                            },
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "2562:2:11"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2553:3:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2553:12:11"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "2546:3:11"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "2578:25:11",
                        "value": {
                          "arguments": [
                            {
                              "name": "srcPtr",
                              "nodeType": "YulIdentifier",
                              "src": "2592:6:11"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "2600:2:11"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2588:3:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2588:15:11"
                        },
                        "variableNames": [
                          {
                            "name": "srcPtr",
                            "nodeType": "YulIdentifier",
                            "src": "2578:6:11"
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
                        "src": "2436:1:11"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "2439:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "2433:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2433:13:11"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "2447:18:11",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "2449:14:11",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "2458:1:11"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2461:1:11",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2454:3:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2454:9:11"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "2449:1:11"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "2429:3:11",
                    "statements": []
                  },
                  "src": "2425:188:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2622:11:11",
                  "value": {
                    "name": "pos",
                    "nodeType": "YulIdentifier",
                    "src": "2630:3:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2622:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_array$_t_struct$_G1Point_$7_memory_ptr_$dyn_memory_ptr__to_t_array$_t_struct$_G1Point_$7_memory_ptr_$dyn_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2084:9:11",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2095:6:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "2106:4:11",
                "type": ""
              }
            ],
            "src": "1920:719:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2795:484:11",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2805:12:11",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "2815:2:11",
                    "type": "",
                    "value": "32"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "2809:2:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2826:32:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2844:9:11"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "2855:2:11"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2840:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2840:18:11"
                  },
                  "variables": [
                    {
                      "name": "tail_1",
                      "nodeType": "YulTypedName",
                      "src": "2830:6:11",
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
                        "src": "2874:9:11"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "2885:2:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2867:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2867:21:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2867:21:11"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2897:17:11",
                  "value": {
                    "name": "tail_1",
                    "nodeType": "YulIdentifier",
                    "src": "2908:6:11"
                  },
                  "variables": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "2901:3:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2923:27:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "2943:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "2937:5:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2937:13:11"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "2927:6:11",
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
                        "src": "2966:6:11"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "2974:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2959:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2959:22:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2959:22:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2990:25:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3001:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3012:2:11",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2997:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2997:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "2990:3:11"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3024:29:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "3042:6:11"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "3050:2:11"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3038:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3038:15:11"
                  },
                  "variables": [
                    {
                      "name": "srcPtr",
                      "nodeType": "YulTypedName",
                      "src": "3028:6:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3062:13:11",
                  "value": {
                    "name": "tail",
                    "nodeType": "YulIdentifier",
                    "src": "3071:4:11"
                  },
                  "variables": [
                    {
                      "name": "i",
                      "nodeType": "YulTypedName",
                      "src": "3066:1:11",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3133:120:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "3154:3:11"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "srcPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "3165:6:11"
                                }
                              ],
                              "functionName": {
                                "name": "mload",
                                "nodeType": "YulIdentifier",
                                "src": "3159:5:11"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3159:13:11"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3147:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3147:26:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3147:26:11"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "3186:19:11",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "3197:3:11"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "3202:2:11"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3193:3:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3193:12:11"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "3186:3:11"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "3218:25:11",
                        "value": {
                          "arguments": [
                            {
                              "name": "srcPtr",
                              "nodeType": "YulIdentifier",
                              "src": "3232:6:11"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "3240:2:11"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3228:3:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3228:15:11"
                        },
                        "variableNames": [
                          {
                            "name": "srcPtr",
                            "nodeType": "YulIdentifier",
                            "src": "3218:6:11"
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
                        "src": "3095:1:11"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "3098:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "3092:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3092:13:11"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "3106:18:11",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "3108:14:11",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "3117:1:11"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3120:1:11",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3113:3:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3113:9:11"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "3108:1:11"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "3088:3:11",
                    "statements": []
                  },
                  "src": "3084:169:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3262:11:11",
                  "value": {
                    "name": "pos",
                    "nodeType": "YulIdentifier",
                    "src": "3270:3:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "3262:4:11"
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
                "src": "2764:9:11",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2775:6:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "2786:4:11",
                "type": ""
              }
            ],
            "src": "2644:635:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3379:92:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3389:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3401:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3412:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3397:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3397:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "3389:4:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3431:9:11"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "3456:6:11"
                              }
                            ],
                            "functionName": {
                              "name": "iszero",
                              "nodeType": "YulIdentifier",
                              "src": "3449:6:11"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3449:14:11"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "3442:6:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3442:22:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3424:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3424:41:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3424:41:11"
                }
              ]
            },
            "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3348:9:11",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "3359:6:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "3370:4:11",
                "type": ""
              }
            ],
            "src": "3284:187:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3650:301:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3667:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3678:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3660:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3660:21:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3660:21:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3701:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3712:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3697:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3697:18:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3717:2:11",
                        "type": "",
                        "value": "71"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3690:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3690:30:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3690:30:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3740:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3751:2:11",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3736:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3736:18:11"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "3756:34:11",
                        "type": "",
                        "value": "Call to the bn256Add precompiled"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3729:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3729:62:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3729:62:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3811:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3822:2:11",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3807:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3807:18:11"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "3827:34:11",
                        "type": "",
                        "value": " failed (probably an out of gas "
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3800:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3800:62:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3800:62:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3882:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3893:3:11",
                            "type": "",
                            "value": "128"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3878:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3878:19:11"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "3899:9:11",
                        "type": "",
                        "value": "error?)"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3871:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3871:38:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3871:38:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3918:27:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3930:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3941:3:11",
                        "type": "",
                        "value": "160"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3926:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3926:19:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "3918:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_246b0a2b4e8832f8a3b0e2d4abead752b5216f08dd060d2e569c9f901f217cc9__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3627:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "3641:4:11",
                "type": ""
              }
            ],
            "src": "3476:475:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4130:163:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4147:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4158:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4140:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4140:21:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4140:21:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4181:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4192:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4177:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4177:18:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4197:2:11",
                        "type": "",
                        "value": "13"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4170:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4170:30:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4170:30:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4220:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4231:2:11",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4216:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4216:18:11"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "4236:15:11",
                        "type": "",
                        "value": "Invalid index"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4209:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4209:43:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4209:43:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4261:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4273:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4284:2:11",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4269:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4269:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "4261:4:11"
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
                "src": "4107:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "4121:4:11",
                "type": ""
              }
            ],
            "src": "3956:337:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4472:167:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4489:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4500:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4482:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4482:21:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4482:21:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4523:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4534:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4519:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4519:18:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4539:2:11",
                        "type": "",
                        "value": "17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4512:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4512:30:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4512:30:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4562:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4573:2:11",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4558:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4558:18:11"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "4578:19:11",
                        "type": "",
                        "value": "bn256Pairing fail"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4551:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4551:47:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4551:47:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4607:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4619:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4630:2:11",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4615:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4615:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "4607:4:11"
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
                "src": "4449:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "4463:4:11",
                "type": ""
              }
            ],
            "src": "4298:341:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4818:167:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4835:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4846:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4828:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4828:21:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4828:21:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4869:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4880:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4865:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4865:18:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4885:2:11",
                        "type": "",
                        "value": "17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4858:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4858:30:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4858:30:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4908:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4919:2:11",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4904:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4904:18:11"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "4924:19:11",
                        "type": "",
                        "value": "Invalid vk length"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4897:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4897:47:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4897:47:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4953:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4965:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4976:2:11",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4961:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4961:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "4953:4:11"
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
                "src": "4795:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "4809:4:11",
                "type": ""
              }
            ],
            "src": "4644:341:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5164:170:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5181:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5192:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5174:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5174:21:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5174:21:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5215:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5226:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5211:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5211:18:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5231:2:11",
                        "type": "",
                        "value": "20"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5204:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5204:30:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5204:30:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5254:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5265:2:11",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5250:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5250:18:11"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "5270:22:11",
                        "type": "",
                        "value": "Invalid proof length"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5243:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5243:50:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5243:50:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5302:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5314:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5325:2:11",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5310:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5310:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "5302:4:11"
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
                "src": "5141:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "5155:4:11",
                "type": ""
              }
            ],
            "src": "4990:344:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5513:161:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5530:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5541:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5523:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5523:21:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5523:21:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5564:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5575:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5560:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5560:18:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5580:2:11",
                        "type": "",
                        "value": "11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5553:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5553:30:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5553:30:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5603:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5614:2:11",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5599:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5599:18:11"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "5619:13:11",
                        "type": "",
                        "value": "verify fail"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5592:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5592:41:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5592:41:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5642:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5654:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5665:2:11",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5650:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5650:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "5642:4:11"
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
                "src": "5490:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "5504:4:11",
                "type": ""
              }
            ],
            "src": "5339:335:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5853:163:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5870:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5881:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5863:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5863:21:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5863:21:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5904:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5915:2:11",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5900:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5900:18:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5920:2:11",
                        "type": "",
                        "value": "13"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5893:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5893:30:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5893:30:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5943:9:11"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5954:2:11",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5939:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5939:18:11"
                      },
                      {
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "5959:15:11",
                        "type": "",
                        "value": "bn256Add fail"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5932:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5932:43:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5932:43:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5984:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5996:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6007:2:11",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5992:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5992:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "5984:4:11"
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
                "src": "5830:9:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "5844:4:11",
                "type": ""
              }
            ],
            "src": "5679:337:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6166:95:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "6176:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6188:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6199:2:11",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6184:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6184:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "6176:4:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "6237:6:11"
                      },
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6245:9:11"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_struct_G1Point",
                      "nodeType": "YulIdentifier",
                      "src": "6211:25:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6211:44:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6211:44:11"
                }
              ]
            },
            "name": "abi_encode_tuple_t_struct$_G1Point_$7_memory_ptr__to_t_struct$_G1Point_$7_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "6135:9:11",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "6146:6:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "6157:4:11",
                "type": ""
              }
            ],
            "src": "6021:240:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6367:76:11",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "6377:26:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6389:9:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6400:2:11",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6385:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6385:18:11"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "6377:4:11"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6419:9:11"
                      },
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "6430:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6412:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6412:25:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6412:25:11"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "6336:9:11",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "6347:6:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "6358:4:11",
                "type": ""
              }
            ],
            "src": "6266:177:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6497:76:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6519:22:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "6521:16:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6521:18:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6521:18:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "6513:1:11"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "6516:1:11"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "6510:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6510:8:11"
                  },
                  "nodeType": "YulIf",
                  "src": "6507:2:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6550:17:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "6562:1:11"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "6565:1:11"
                      }
                    ],
                    "functionName": {
                      "name": "sub",
                      "nodeType": "YulIdentifier",
                      "src": "6558:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6558:9:11"
                  },
                  "variableNames": [
                    {
                      "name": "diff",
                      "nodeType": "YulIdentifier",
                      "src": "6550:4:11"
                    }
                  ]
                }
              ]
            },
            "name": "checked_sub_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "6479:1:11",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "6482:1:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "diff",
                "nodeType": "YulTypedName",
                "src": "6488:4:11",
                "type": ""
              }
            ],
            "src": "6448:125:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6625:88:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6656:22:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "6658:16:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6658:18:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6658:18:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "6641:5:11"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6652:1:11",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "not",
                          "nodeType": "YulIdentifier",
                          "src": "6648:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6648:6:11"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "6638:2:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6638:17:11"
                  },
                  "nodeType": "YulIf",
                  "src": "6635:2:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6687:20:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "6698:5:11"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6705:1:11",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6694:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6694:13:11"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "6687:3:11"
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
                "src": "6607:5:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "ret",
                "nodeType": "YulTypedName",
                "src": "6617:3:11",
                "type": ""
              }
            ],
            "src": "6578:135:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6756:171:11",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6787:111:11",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "r",
                              "nodeType": "YulIdentifier",
                              "src": "6808:1:11"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "6815:3:11",
                                  "type": "",
                                  "value": "224"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "6820:10:11",
                                  "type": "",
                                  "value": "0x4e487b71"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "6811:3:11"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6811:20:11"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "6801:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6801:31:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6801:31:11"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6852:1:11",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6855:4:11",
                              "type": "",
                              "value": "0x12"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "6845:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6845:15:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6845:15:11"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "r",
                              "nodeType": "YulIdentifier",
                              "src": "6880:1:11"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6883:4:11",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "6873:6:11"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6873:15:11"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6873:15:11"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "6776:1:11"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "6769:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6769:9:11"
                  },
                  "nodeType": "YulIf",
                  "src": "6766:2:11"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6907:14:11",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "6916:1:11"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "6919:1:11"
                      }
                    ],
                    "functionName": {
                      "name": "mod",
                      "nodeType": "YulIdentifier",
                      "src": "6912:3:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6912:9:11"
                  },
                  "variableNames": [
                    {
                      "name": "r",
                      "nodeType": "YulIdentifier",
                      "src": "6907:1:11"
                    }
                  ]
                }
              ]
            },
            "name": "mod_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "6741:1:11",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "6744:1:11",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "r",
                "nodeType": "YulTypedName",
                "src": "6750:1:11",
                "type": ""
              }
            ],
            "src": "6718:209:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6964:95:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6981:1:11",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6988:3:11",
                            "type": "",
                            "value": "224"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6993:10:11",
                            "type": "",
                            "value": "0x4e487b71"
                          }
                        ],
                        "functionName": {
                          "name": "shl",
                          "nodeType": "YulIdentifier",
                          "src": "6984:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6984:20:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6974:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6974:31:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6974:31:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7021:1:11",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7024:4:11",
                        "type": "",
                        "value": "0x11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7014:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7014:15:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7014:15:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7045:1:11",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7048:4:11",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "7038:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7038:15:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7038:15:11"
                }
              ]
            },
            "name": "panic_error_0x11",
            "nodeType": "YulFunctionDefinition",
            "src": "6932:127:11"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7096:95:11",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7113:1:11",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7120:3:11",
                            "type": "",
                            "value": "224"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7125:10:11",
                            "type": "",
                            "value": "0x4e487b71"
                          }
                        ],
                        "functionName": {
                          "name": "shl",
                          "nodeType": "YulIdentifier",
                          "src": "7116:3:11"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7116:20:11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7106:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7106:31:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7106:31:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7153:1:11",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7156:4:11",
                        "type": "",
                        "value": "0x41"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7146:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7146:15:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7146:15:11"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7177:1:11",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7180:4:11",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "7170:6:11"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7170:15:11"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7170:15:11"
                }
              ]
            },
            "name": "panic_error_0x41",
            "nodeType": "YulFunctionDefinition",
            "src": "7064:127:11"
          }
        ]
      },
      "contents": "{\n    { }\n    function abi_decode_array_uint256_dyn(offset, end) -> array\n    {\n        if iszero(slt(add(offset, 0x1f), end)) { revert(array, array) }\n        let _1 := calldataload(offset)\n        let _2 := 0x20\n        let _3 := 0xffffffffffffffff\n        if gt(_1, _3) { panic_error_0x41() }\n        let _4 := mul(_1, _2)\n        let memPtr := mload(64)\n        let newFreePtr := add(memPtr, and(add(_4, 63), not(31)))\n        if or(gt(newFreePtr, _3), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n        let dst := memPtr\n        mstore(memPtr, _1)\n        dst := add(memPtr, _2)\n        let src := add(offset, _2)\n        if gt(add(add(offset, _4), _2), end) { revert(array, array) }\n        let i := array\n        for { } lt(i, _1) { i := add(i, 1) }\n        {\n            mstore(dst, calldataload(src))\n            dst := add(dst, _2)\n            src := add(src, _2)\n        }\n        array := memPtr\n    }\n    function abi_decode_tuple_t_array$_t_uint256_$dyn_memory_ptr(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(value0, value0) }\n        let offset := calldataload(headStart)\n        if gt(offset, 0xffffffffffffffff) { revert(value0, value0) }\n        value0 := abi_decode_array_uint256_dyn(add(headStart, offset), dataEnd)\n    }\n    function abi_decode_tuple_t_uint256t_array$_t_uint256_$dyn_memory_ptr(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(value1, value1) }\n        value0 := calldataload(headStart)\n        let offset := calldataload(add(headStart, 32))\n        if gt(offset, 0xffffffffffffffff) { revert(value1, value1) }\n        value1 := abi_decode_array_uint256_dyn(add(headStart, offset), dataEnd)\n    }\n    function abi_encode_struct_G1Point(value, pos)\n    {\n        mstore(pos, mload(value))\n        mstore(add(pos, 0x20), mload(add(value, 0x20)))\n    }\n    function abi_encode_tuple_t_array$_t_struct$_G1Point_$7_memory_ptr_$dyn_memory_ptr__to_t_array$_t_struct$_G1Point_$7_memory_ptr_$dyn_memory_ptr__fromStack_reversed(headStart, value0) -> tail\n    {\n        let _1 := 32\n        let tail_1 := add(headStart, _1)\n        mstore(headStart, _1)\n        let pos := tail_1\n        let length := mload(value0)\n        mstore(tail_1, length)\n        let _2 := 64\n        pos := add(headStart, _2)\n        let srcPtr := add(value0, _1)\n        let i := tail\n        for { } lt(i, length) { i := add(i, 1) }\n        {\n            abi_encode_struct_G1Point(mload(srcPtr), pos)\n            pos := add(pos, _2)\n            srcPtr := add(srcPtr, _1)\n        }\n        tail := pos\n    }\n    function abi_encode_tuple_t_array$_t_uint256_$dyn_memory_ptr__to_t_array$_t_uint256_$dyn_memory_ptr__fromStack_reversed(headStart, value0) -> tail\n    {\n        let _1 := 32\n        let tail_1 := add(headStart, _1)\n        mstore(headStart, _1)\n        let pos := tail_1\n        let length := mload(value0)\n        mstore(tail_1, length)\n        pos := add(headStart, 64)\n        let srcPtr := add(value0, _1)\n        let i := tail\n        for { } lt(i, length) { i := add(i, 1) }\n        {\n            mstore(pos, mload(srcPtr))\n            pos := add(pos, _1)\n            srcPtr := add(srcPtr, _1)\n        }\n        tail := pos\n    }\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, iszero(iszero(value0)))\n    }\n    function abi_encode_tuple_t_stringliteral_246b0a2b4e8832f8a3b0e2d4abead752b5216f08dd060d2e569c9f901f217cc9__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 71)\n        mstore(add(headStart, 64), \"Call to the bn256Add precompiled\")\n        mstore(add(headStart, 96), \" failed (probably an out of gas \")\n        mstore(add(headStart, 128), \"error?)\")\n        tail := add(headStart, 160)\n    }\n    function abi_encode_tuple_t_stringliteral_32cc480c4f0e15e5ce7060ec5e004886ed5a15831cba1ff1aa7cb787be55bb60__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 13)\n        mstore(add(headStart, 64), \"Invalid index\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_8b92e7aa862a2b2ee6441a7735c284168ac78bc219935e6763b689eb3b6ab043__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 17)\n        mstore(add(headStart, 64), \"bn256Pairing fail\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_a20d9bf9f3faaa4398dcb2e6d3531d16c6e91326d342df8e1a8cdaa3069f8247__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 17)\n        mstore(add(headStart, 64), \"Invalid vk length\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_a384685b2d9864ca58af3cdeb11675a5eb31234b321579291672bb93c38d256c__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 20)\n        mstore(add(headStart, 64), \"Invalid proof length\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_c55065d7b39eb0dd1a6c67b68aef2ac89bae2b26f88f2b8782f868f7c362d837__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 11)\n        mstore(add(headStart, 64), \"verify fail\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_fbe53055ea2d1421f2a028da4cd0a593439a440cdd1167bb7f58ed951f8bc2e1__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 13)\n        mstore(add(headStart, 64), \"bn256Add fail\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_struct$_G1Point_$7_memory_ptr__to_t_struct$_G1Point_$7_memory_ptr__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 64)\n        abi_encode_struct_G1Point(value0, headStart)\n    }\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, value0)\n    }\n    function checked_sub_t_uint256(x, y) -> diff\n    {\n        if lt(x, y) { panic_error_0x11() }\n        diff := sub(x, y)\n    }\n    function increment_t_uint256(value) -> ret\n    {\n        if eq(value, not(0)) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n    function mod_t_uint256(x, y) -> r\n    {\n        if iszero(y)\n        {\n            mstore(r, shl(224, 0x4e487b71))\n            mstore(4, 0x12)\n            revert(r, 0x24)\n        }\n        r := mod(x, y)\n    }\n    function panic_error_0x11()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n    function panic_error_0x41()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n}",
      "id": 11,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "sourceMap": "370:21:10:-:0;131:2048;370:21;-1:-1:-1;131:2048:10;370:21;;;;;;;336:55;;;;;;;;398:29;;434:69;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;478:18;;;;:12;;:18;;;;;:::i;:::-;;434:69;131:2048;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;131:2048:10;;;-1:-1:-1;131:2048:10;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;14:1162:11;;140:2;183;171:9;162:7;158:23;154:32;151:2;;;204:6;196;189:22;151:2;236:16;;-1:-1:-1;;;;;301:14:11;;;298:2;;;333:6;325;318:22;298:2;376:6;365:9;361:22;351:32;;421:7;414:4;410:2;406:13;402:27;392:2;;448:6;440;433:22;392:2;482;476:9;504:2;500;497:10;494:2;;;510:18;;:::i;:::-;557:2;553;549:11;589:2;583:9;652:2;648:7;643:2;639;635:11;631:25;623:6;619:38;707:6;695:10;692:22;687:2;675:10;672:18;669:46;666:2;;;718:18;;:::i;:::-;754:2;747:22;804:18;;;838:15;;;;-1:-1:-1;873:11:11;;;903;;;899:20;;896:33;-1:-1:-1;893:2:11;;;947:6;939;932:22;893:2;974:6;965:15;;989:156;1003:2;1000:1;997:9;989:156;;;1060:10;;1048:23;;1021:1;1014:9;;;;;1091:12;;;;1123;;989:156;;;-1:-1:-1;1164:6:11;120:1056;-1:-1:-1;;;;;;;;120:1056:11:o;1181:127::-;1242:10;1237:3;1233:20;1230:1;1223:31;1273:4;1270:1;1263:15;1297:4;1294:1;1287:15;1213:95;131:2048:10;;;;;;",
  "deployedSourceMap": "131:2048:10:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2059:118;;;;;;;;;;-1:-1:-1;;;;;;;;;;;;;;;;;;2148:22:10;;;;;;;;2155:15;2148:22;;;;;;;;;2059:118;;;;;;:::i;:::-;;;;;;;;1841:113;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;1960:93::-;;;;;;;;;;-1:-1:-1;2037:9:10;;1960:93;;;6412:25:11;;;6400:2;6385:18;1960:93:10;6367:76:11;1742:93:10;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;1113:623::-;;;;;;:::i;:::-;;:::i;:::-;;;3449:14:11;;3442:22;3424:41;;3412:2;3397:18;1113:623:10;3379:92:11;660:447:10;;;;;;:::i;:::-;;:::i;1841:113::-;1893:24;1936:11;1929:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1841:113;:::o;1742:93::-;1781:16;1816:12;1809:19;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1742:93;:::o;1113:623::-;1223:4;1253:9;;1247:3;:15;1239:41;;;;-1:-1:-1;;;1239:41:10;;4158:2:11;1239:41:10;;;4140:21:11;4197:2;4177:18;;;4170:30;-1:-1:-1;;;4216:18:11;;;4209:43;4269:18;;1239:41:10;;;;;;;;;1298:43;1321:12;1335:5;1298:22;:43::i;:::-;1290:67;;;;-1:-1:-1;;;1290:67:10;;5541:2:11;1290:67:10;;;5523:21:11;5580:2;5560:18;;;5553:30;-1:-1:-1;;;5599:18:11;;;5592:41;5650:18;;1290:67:10;5513:161:11;1290:67:10;-1:-1:-1;;;;;;;;;;;;;;;;;1415:96:10;;;;;;;;;1440:15;1415:96;;;;;;;;;;1484:16;;1415:96;;;1469:32;;1496:3;;1484:16;;;;-1:-1:-1;;;1484:16:10;;;;;;;;;;;;;;;;;;;1469:32;;;;;;;;;;;;;;;;;;;;;;;;;:14;:32::i;:::-;1415:11;:96::i;:::-;1409:102;;1543:5;1549:1;1543:8;;;;;;-1:-1:-1;;;1543:8:10;;;;;;;;;;;;;;;1522:11;1534:3;1522:16;;;;;;-1:-1:-1;;;1522:16:10;;;;;;;;;;;;;;;;;;;:18;;:29;;;;1582:5;1588:1;1582:8;;;;;;-1:-1:-1;;;1582:8:10;;;;;;;;;;;;;;;1561:11;1573:3;1561:16;;;;;;-1:-1:-1;;;1561:16:10;;;;;;;;;;;;;;;;;;;:18;;:29;;;;1619:80;1644:15;1619:80;;;;;;;;;;;;;;;;;;;;;;;;;1673:11;1685:3;1673:16;;;;;;-1:-1:-1;;;1673:16:10;;;;;;;;;;;;;;;;;;;1619:80;;;;;;;;;;;;;;;;;;;;;;;;;:11;:80::i;:::-;1601:98;;:15;:98;;;;;;-1:-1:-1;1601:98:10;;-1:-1:-1;1113:623:10;;;;;:::o;660:447::-;749:7;776:43;799:12;813:5;776:22;:43::i;:::-;768:67;;;;-1:-1:-1;;;768:67:10;;5541:2:11;768:67:10;;;5523:21:11;5580:2;5560:18;;;5553:30;-1:-1:-1;;;5599:18:11;;;5592:41;5650:18;;768:67:10;5513:161:11;768:67:10;846:25;874:35;;;;;;;;890:5;896:1;890:8;;;;;;-1:-1:-1;;;890:8:10;;;;;;;;;;;;;;;874:35;;;;900:5;906:1;900:8;;;;;;-1:-1:-1;;;900:8:10;;;;;;;;;;;;;;;;;;;;874:35;;;919:11;:20;;;;;;;-1:-1:-1;919:20:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;953:9:10;:22;;;;-1:-1:-1;966:4:10;;;;:9;953:22;950:122;;;979:20;;:15;:20;;;;;;;950:122;;;1037:32;;;;;;;;;1049:15;1037:32;;;;;;;;;;;1066:2;1037:11;:32::i;:::-;1019:50;;:15;:50;;;;;;950:122;1089:9;:11;;;:9;:11;;;:::i;:::-;;;;;1082:18;;;660:447;;;;:::o;912:3610:9:-;1031:4;1059:5;:12;1075:2;1059:18;1051:51;;;;-1:-1:-1;;;1051:51:9;;5192:2:11;1051:51:9;;;5174:21:11;5231:2;5211:18;;;5204:30;-1:-1:-1;;;5250:18:11;;;5243:50;5310:18;;1051:51:9;5164:170:11;1051:51:9;1120:9;;1134:2;1120:16;1112:46;;;;-1:-1:-1;;;1112:46:9;;4846:2:11;1112:46:9;;;4828:21:11;4885:2;4865:18;;;4858:30;-1:-1:-1;;;4904:18:11;;;4897:47;4961:18;;1112:46:9;4818:167:11;1112:46:9;1185:19;1236:25;;:::i;:::-;1309:12;1324:4;1309:19;;1528:4;1521:5;1517:16;1562:7;1554:6;1547:23;1616:4;1608:6;1598:23;1583:38;;1669:5;1660:7;1656:19;1650:26;1642:6;1635:42;1735:5;1726:7;1722:19;1716:26;1709:4;1701:6;1697:17;1690:53;;1805:2;1792:11;1788:20;1782:27;1775:4;1767:6;1763:17;1756:54;1872:2;1859:11;1855:20;1849:27;1842:4;1834:6;1830:17;1823:54;2040:4;2032:5;2024:6;2020:18;2014:4;2006:6;2003:1;1997:4;1990:5;1985:60;1974:71;;2072:7;2064:33;;;;-1:-1:-1;;;2064:33:9;;5881:2:11;2064:33:9;;;5863:21:11;5920:2;5900:18;;;5893:30;-1:-1:-1;;;5939:18:11;;;5932:43;5992:18;;2064:33:9;5853:163:11;2064:33:9;2506:4;2499:5;2495:16;2628:7;2622:14;2614:6;2607:30;2695:4;2686:7;2682:18;2676:25;2669:4;2661:6;2657:17;2650:52;2760:4;2751:7;2747:18;2741:25;2734:4;2726:6;2722:17;2715:52;2825:4;2816:7;2812:18;2806:25;2799:4;2791:6;2787:17;2780:52;2890:4;2881:7;2877:18;2871:25;2864:4;2856:6;2852:17;2845:52;2955:4;2946:7;2942:18;2936:25;2929:4;2921:6;2917:17;2910:52;3121:11;3115:18;3108:4;3100:6;3096:17;3089:45;3196:1;3183:11;3179:19;3173:26;3166:4;3158:6;3154:17;3147:53;3263:1;3250:11;3246:19;3240:26;3232:5;3224:6;3220:18;3213:54;3330:1;3317:11;3313:19;3307:26;3299:5;3291:6;3287:18;3280:54;3397:1;3384:11;3380:19;3374:26;3366:5;3358:6;3354:18;3347:54;3464:1;3451:11;3447:19;3441:26;3433:5;3425:6;3421:18;3414:54;3635:4;3626:7;3622:18;3616:25;3608:5;3600:6;3596:18;3589:53;3701:4;3692:7;3688:18;3682:25;3674:5;3666:6;3662:18;3655:53;;3771:1;3758:11;3754:19;3748:26;3740:5;3732:6;3728:18;3721:54;3838:1;3825:11;3821:19;3815:26;3807:5;3799:6;3795:18;3788:54;3905:1;3892:11;3888:19;3882:26;3874:5;3866:6;3862:18;3855:54;3972:1;3959:11;3955:19;3949:26;3941:5;3933:6;3929:18;3922:54;4094:2;4081:11;4077:20;4071:27;4063:5;4055:6;4051:18;4044:55;4162:2;4149:11;4145:20;4139:27;4131:5;4123:6;4119:18;4112:55;4230:2;4217:11;4213:20;4207:27;4199:5;4191:6;4187:18;4180:55;4298:2;4285:11;4281:20;4275:27;4267:5;4259:6;4255:18;4248:55;4422:4;4414:6;4407:5;4399:6;4396:1;4393;4386:4;4379:5;4375:16;4370:57;4357:71;;4447:37;;;;-1:-1:-1;;;4447:37:9;;4500:2:11;4447:37:9;;;4482:21:11;4539:2;4519:18;;;4512:30;-1:-1:-1;;;4558:18:11;;;4551:47;4615:18;;4447:37:9;4472:167:11;4447:37:9;-1:-1:-1;4501:9:9;4514:1;4501:14;;;-1:-1:-1;;;;912:3610:9:o;1627:380:0:-;-1:-1:-1;;;;;;;;;;;;;;;;;1902:3:0;;1811:77;;1902:8;:20;;;;-1:-1:-1;1914:3:0;;;;:8;1902:20;1898:58;;;-1:-1:-1;;1943:13:0;;;;;;;;;-1:-1:-1;1943:13:0;;;;;;;1936:20;;1898:58;1973:27;;;;;;;;1981:1;:3;;;1973:27;;;;1997:1;1991;:3;;;:7;;;;:::i;:::-;1986:13;;:1;:13;:::i;:::-;1973:27;;1966:34;1627:380;-1:-1:-1;;;1627:380:0:o;2055:682::-;-1:-1:-1;;;;;;;;;;;;;;;;;2172:23:0;;:::i;:::-;2216:4;;2205:15;;:8;2241:4;;;;2230:8;;;:15;2266:4;;2255:8;;;;:15;;;;2291:4;;;;2280:8;;;:15;-1:-1:-1;;2458:1:0;2452:4;2205:15;-1:-1:-1;2439:1:0;2432:4;2425:5;2421:16;2416:50;2405:61;;2611:7;2590:140;;;;-1:-1:-1;;;2590:140:0;;3678:2:11;2590:140:0;;;3660:21:11;3717:2;3697:18;;;3690:30;3756:34;3736:18;;;3729:62;3827:34;3807:18;;;3800:62;-1:-1:-1;;;3878:19:11;;;3871:38;3926:19;;2590:140:0;3650:301:11;2590:140:0;2055:682;;;;;;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;:::o;14:934:11:-;;121:3;114:4;106:6;102:17;98:27;88:2;;143:5;136;129:20;88:2;183:6;170:20;209:4;232:18;269:2;265;262:10;259:2;;;275:18;;:::i;:::-;322:2;318;314:11;354:2;348:9;417:2;413:7;408:2;404;400:11;396:25;388:6;384:38;472:6;460:10;457:22;452:2;440:10;437:18;434:46;431:2;;;483:18;;:::i;:::-;519:2;512:22;569:18;;;603:15;;;;-1:-1:-1;638:15:11;;;672;;;668:24;;665:33;-1:-1:-1;662:2:11;;;715:5;708;701:20;662:2;741:5;732:14;;755:163;769:2;766:1;763:9;755:163;;;826:17;;814:30;;864:12;;;;787:1;780:9;;;;;896:12;;755:163;;;-1:-1:-1;936:6:11;78:870;-1:-1:-1;;;;;;;78:870:11:o;953:368::-;;1090:2;1078:9;1069:7;1065:23;1061:32;1058:2;;;1111:6;1103;1096:22;1058:2;1156:9;1143:23;1189:18;1181:6;1178:30;1175:2;;;1226:6;1218;1211:22;1175:2;1254:61;1307:7;1298:6;1287:9;1283:22;1254:61;:::i;:::-;1244:71;1048:273;-1:-1:-1;;;;1048:273:11:o;1326:436::-;;;1480:2;1468:9;1459:7;1455:23;1451:32;1448:2;;;1501:6;1493;1486:22;1448:2;1542:9;1529:23;1519:33;;1603:2;1592:9;1588:18;1575:32;1630:18;1622:6;1619:30;1616:2;;;1667:6;1659;1652:22;1616:2;1695:61;1748:7;1739:6;1728:9;1724:22;1695:61;:::i;:::-;1685:71;;;1438:324;;;;;:::o;1920:719::-;2135:2;2187:21;;;2257:13;;2160:18;;;2279:22;;;1920:719;;2135:2;2320;;2338:18;;;;2379:15;;;1920:719;2425:188;2439:6;2436:1;2433:13;2425:188;;;2488:45;2529:3;2520:6;2514:13;1840:12;;1828:25;;1902:4;1891:16;;;1885:23;1869:14;;1862:47;1818:97;2488:45;2553:12;;;;2588:15;;;;2461:1;2454:9;2425:188;;;-1:-1:-1;2630:3:11;;2115:524;-1:-1:-1;;;;;;;2115:524:11:o;2644:635::-;2815:2;2867:21;;;2937:13;;2840:18;;;2959:22;;;2644:635;;2815:2;3038:15;;;;3012:2;2997:18;;;2644:635;3084:169;3098:6;3095:1;3092:13;3084:169;;;3159:13;;3147:26;;3228:15;;;;3193:12;;;;3120:1;3113:9;3084:169;;;-1:-1:-1;3270:3:11;;2795:484;-1:-1:-1;;;;;;2795:484:11:o;6021:240::-;1840:12;;1828:25;;1902:4;1891:16;;;1885:23;1869:14;;;1862:47;6199:2;6184:18;;6211:44;1818:97;6448:125;;6516:1;6513;6510:8;6507:2;;;6521:18;;:::i;:::-;-1:-1:-1;6558:9:11;;6497:76::o;6578:135::-;;-1:-1:-1;;6638:17:11;;6635:2;;;6658:18;;:::i;:::-;-1:-1:-1;6705:1:11;6694:13;;6625:88::o;6718:209::-;;6776:1;6766:2;;-1:-1:-1;;;6801:31:11;;6855:4;6852:1;6845:15;6883:4;6808:1;6873:15;6766:2;-1:-1:-1;6912:9:11;;6756:171::o;6932:127::-;6993:10;6988:3;6984:20;6981:1;6974:31;7024:4;7021:1;7014:15;7048:4;7045:1;7038:15;7064:127;7125:10;7120:3;7116:20;7113:1;7106:31;7156:4;7153:1;7146:15;7180:4;7177:1;7170:15",
  "source": "// SPDX-License-Identifier: LGPL-3.0+\npragma solidity >=0.8.0;\n\nimport \"./ccGroth16VerifyBn128.sol\";\nimport \"./PairingBn128.sol\";\n\ncontract ProofOfReservesContract {\n    // G1 Point (x, y)\n    struct Commitment {\n        uint256 px;\n        uint256 py;\n    }\n\n    uint256[] private verifyingKey;\n\n    Pairing.G1Point[] commitArray;\n    Pairing.G1Point sumOfCommitment = Pairing.G1Point(0, 0);\n\n    uint256 private commitCnt = 0;\n\n    constructor(uint256[] memory _vk) {\n        verifyingKey = _vk;\n    }\n\n    // Proof :\n    //      uint256[2] A    : G_1\n    //      uint256[4] B    : G_2\n    //      uint256[2] C    : G_1\n    //      uint256[2] D    : G_1\n    function upload_commitment(\n        uint256[] memory proof\n    ) public payable returns (uint256) {\n        require(ccGroth16BN128._verify(verifyingKey, proof), \"verify fail\");\n\n        Pairing.G1Point memory cm = Pairing.G1Point(proof[8], proof[9]);\n        commitArray.push(cm);\n\n        if(cm.X == 0 && cm.Y == 0) { sumOfCommitment = cm; } \n        else { sumOfCommitment = Pairing.add(sumOfCommitment, cm); }\n\n        return commitCnt++;\n    }\n\n    function update_commitment(\n        uint256 idx,\n        uint256[] memory proof\n    ) public payable returns (bool) {\n        require(idx < commitCnt, \"Invalid index\");\n        require(ccGroth16BN128._verify(verifyingKey, proof), \"verify fail\");\n\n        Pairing.G1Point memory tmp;\n    \n        tmp = Pairing.add(\n            sumOfCommitment,\n            Pairing.negate(commitArray[idx])\n        );\n\n        commitArray[idx].X = proof[8];\n        commitArray[idx].Y = proof[9];\n\n        sumOfCommitment = Pairing.add(\n            sumOfCommitment,\n            commitArray[idx]\n        );\n        \n        return true;\n    }\n\n    function get_vk() public view returns (uint256[] memory) {\n        return verifyingKey;\n    }\n\n    function get_all_commitments() public view returns (Pairing.G1Point[] memory) {\n        return commitArray;\n    }\n\n    function get_commitment_cnt() public view returns (uint256) {\n        return commitCnt;\n    }\n\n    function get_sum_of_commitments() public view returns (Pairing.G1Point memory) {\n        return sumOfCommitment;\n    }\n}\n",
  "sourcePath": "/Users/kim/Proof-of-Reserves/contract/contracts/proofOfReserves.sol",
  "ast": {
    "absolutePath": "project:/contracts/proofOfReserves.sol",
    "exportedSymbols": {
      "Pairing": [
        613
      ],
      "ProofOfReservesContract": [
        909
      ],
      "ccGroth16BN128": [
        692
      ]
    },
    "id": 910,
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
        "scope": 910,
        "sourceUnit": 693,
        "src": "64:36:10",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "project:/contracts/PairingBn128.sol",
        "file": "./PairingBn128.sol",
        "id": 696,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 910,
        "sourceUnit": 614,
        "src": "101:28:10",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 909,
        "linearizedBaseContracts": [
          909
        ],
        "name": "ProofOfReservesContract",
        "nameLocation": "140:23:10",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "ProofOfReservesContract.Commitment",
            "id": 701,
            "members": [
              {
                "constant": false,
                "id": 698,
                "mutability": "mutable",
                "name": "px",
                "nameLocation": "229:2:10",
                "nodeType": "VariableDeclaration",
                "scope": 701,
                "src": "221:10:10",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 697,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "221:7:10",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 700,
                "mutability": "mutable",
                "name": "py",
                "nameLocation": "249:2:10",
                "nodeType": "VariableDeclaration",
                "scope": 701,
                "src": "241:10:10",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 699,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "241:7:10",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Commitment",
            "nameLocation": "200:10:10",
            "nodeType": "StructDefinition",
            "scope": 909,
            "src": "193:65:10",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 704,
            "mutability": "mutable",
            "name": "verifyingKey",
            "nameLocation": "282:12:10",
            "nodeType": "VariableDeclaration",
            "scope": 909,
            "src": "264:30:10",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
              "typeString": "uint256[]"
            },
            "typeName": {
              "baseType": {
                "id": 702,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "264:7:10",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "id": 703,
              "nodeType": "ArrayTypeName",
              "src": "264:9:10",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                "typeString": "uint256[]"
              }
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 708,
            "mutability": "mutable",
            "name": "commitArray",
            "nameLocation": "319:11:10",
            "nodeType": "VariableDeclaration",
            "scope": 909,
            "src": "301:29:10",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_G1Point_$7_storage_$dyn_storage",
              "typeString": "struct Pairing.G1Point[]"
            },
            "typeName": {
              "baseType": {
                "id": 706,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 705,
                  "name": "Pairing.G1Point",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 7,
                  "src": "301:15:10"
                },
                "referencedDeclaration": 7,
                "src": "301:15:10",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_G1Point_$7_storage_ptr",
                  "typeString": "struct Pairing.G1Point"
                }
              },
              "id": 707,
              "nodeType": "ArrayTypeName",
              "src": "301:17:10",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_G1Point_$7_storage_$dyn_storage_ptr",
                "typeString": "struct Pairing.G1Point[]"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 716,
            "mutability": "mutable",
            "name": "sumOfCommitment",
            "nameLocation": "352:15:10",
            "nodeType": "VariableDeclaration",
            "scope": 909,
            "src": "336:55:10",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_G1Point_$7_storage",
              "typeString": "struct Pairing.G1Point"
            },
            "typeName": {
              "id": 710,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 709,
                "name": "Pairing.G1Point",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 7,
                "src": "336:15:10"
              },
              "referencedDeclaration": 7,
              "src": "336:15:10",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_G1Point_$7_storage_ptr",
                "typeString": "struct Pairing.G1Point"
              }
            },
            "value": {
              "arguments": [
                {
                  "hexValue": "30",
                  "id": 713,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "386:1:10",
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_0_by_1",
                    "typeString": "int_const 0"
                  },
                  "value": "0"
                },
                {
                  "hexValue": "30",
                  "id": 714,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "389:1:10",
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_0_by_1",
                    "typeString": "int_const 0"
                  },
                  "value": "0"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_rational_0_by_1",
                    "typeString": "int_const 0"
                  },
                  {
                    "typeIdentifier": "t_rational_0_by_1",
                    "typeString": "int_const 0"
                  }
                ],
                "expression": {
                  "id": 711,
                  "name": "Pairing",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 613,
                  "src": "370:7:10",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_Pairing_$613_$",
                    "typeString": "type(library Pairing)"
                  }
                },
                "id": 712,
                "isConstant": false,
                "isLValue": false,
                "isPure": false,
                "lValueRequested": false,
                "memberName": "G1Point",
                "nodeType": "MemberAccess",
                "referencedDeclaration": 7,
                "src": "370:15:10",
                "typeDescriptions": {
                  "typeIdentifier": "t_type$_t_struct$_G1Point_$7_storage_ptr_$",
                  "typeString": "type(struct Pairing.G1Point storage pointer)"
                }
              },
              "id": 715,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "structConstructorCall",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "370:21:10",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_G1Point_$7_memory_ptr",
                "typeString": "struct Pairing.G1Point memory"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 719,
            "mutability": "mutable",
            "name": "commitCnt",
            "nameLocation": "414:9:10",
            "nodeType": "VariableDeclaration",
            "scope": 909,
            "src": "398:29:10",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 717,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "398:7:10",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "30",
              "id": 718,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "426:1:10",
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
              "id": 729,
              "nodeType": "Block",
              "src": "468:35:10",
              "statements": [
                {
                  "expression": {
                    "id": 727,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 725,
                      "name": "verifyingKey",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 704,
                      "src": "478:12:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                        "typeString": "uint256[] storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 726,
                      "name": "_vk",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 722,
                      "src": "493:3:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                        "typeString": "uint256[] memory"
                      }
                    },
                    "src": "478:18:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                      "typeString": "uint256[] storage ref"
                    }
                  },
                  "id": 728,
                  "nodeType": "ExpressionStatement",
                  "src": "478:18:10"
                }
              ]
            },
            "id": 730,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 723,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 722,
                  "mutability": "mutable",
                  "name": "_vk",
                  "nameLocation": "463:3:10",
                  "nodeType": "VariableDeclaration",
                  "scope": 730,
                  "src": "446:20:10",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 720,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "446:7:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 721,
                    "nodeType": "ArrayTypeName",
                    "src": "446:9:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "445:22:10"
            },
            "returnParameters": {
              "id": 724,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "468:0:10"
            },
            "scope": 909,
            "src": "434:69:10",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 795,
              "nodeType": "Block",
              "src": "758:349:10",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 741,
                            "name": "verifyingKey",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 704,
                            "src": "799:12:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                              "typeString": "uint256[] storage ref"
                            }
                          },
                          {
                            "id": 742,
                            "name": "proof",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 733,
                            "src": "813:5:10",
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
                            "id": 739,
                            "name": "ccGroth16BN128",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 692,
                            "src": "776:14:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_ccGroth16BN128_$692_$",
                              "typeString": "type(library ccGroth16BN128)"
                            }
                          },
                          "id": 740,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "_verify",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 691,
                          "src": "776:22:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_array$_t_uint256_$dyn_storage_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$returns$_t_bool_$",
                            "typeString": "function (uint256[] storage pointer,uint256[] memory) returns (bool)"
                          }
                        },
                        "id": 743,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "776:43:10",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "766572696679206661696c",
                        "id": 744,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "821:13:10",
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
                      "id": 738,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "768:7:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 745,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "768:67:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 746,
                  "nodeType": "ExpressionStatement",
                  "src": "768:67:10"
                },
                {
                  "assignments": [
                    751
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 751,
                      "mutability": "mutable",
                      "name": "cm",
                      "nameLocation": "869:2:10",
                      "nodeType": "VariableDeclaration",
                      "scope": 795,
                      "src": "846:25:10",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_G1Point_$7_memory_ptr",
                        "typeString": "struct Pairing.G1Point"
                      },
                      "typeName": {
                        "id": 750,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 749,
                          "name": "Pairing.G1Point",
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 7,
                          "src": "846:15:10"
                        },
                        "referencedDeclaration": 7,
                        "src": "846:15:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_G1Point_$7_storage_ptr",
                          "typeString": "struct Pairing.G1Point"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 761,
                  "initialValue": {
                    "arguments": [
                      {
                        "baseExpression": {
                          "id": 754,
                          "name": "proof",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 733,
                          "src": "890:5:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                            "typeString": "uint256[] memory"
                          }
                        },
                        "id": 756,
                        "indexExpression": {
                          "hexValue": "38",
                          "id": 755,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "896:1:10",
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
                        "src": "890:8:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "baseExpression": {
                          "id": 757,
                          "name": "proof",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 733,
                          "src": "900:5:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                            "typeString": "uint256[] memory"
                          }
                        },
                        "id": 759,
                        "indexExpression": {
                          "hexValue": "39",
                          "id": 758,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "906:1:10",
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
                        "src": "900:8:10",
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
                      "expression": {
                        "id": 752,
                        "name": "Pairing",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 613,
                        "src": "874:7:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Pairing_$613_$",
                          "typeString": "type(library Pairing)"
                        }
                      },
                      "id": 753,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "G1Point",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7,
                      "src": "874:15:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_G1Point_$7_storage_ptr_$",
                        "typeString": "type(struct Pairing.G1Point storage pointer)"
                      }
                    },
                    "id": 760,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "874:35:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_G1Point_$7_memory_ptr",
                      "typeString": "struct Pairing.G1Point memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "846:63:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 765,
                        "name": "cm",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 751,
                        "src": "936:2:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_G1Point_$7_memory_ptr",
                          "typeString": "struct Pairing.G1Point memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_G1Point_$7_memory_ptr",
                          "typeString": "struct Pairing.G1Point memory"
                        }
                      ],
                      "expression": {
                        "id": 762,
                        "name": "commitArray",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 708,
                        "src": "919:11:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_G1Point_$7_storage_$dyn_storage",
                          "typeString": "struct Pairing.G1Point storage ref[] storage ref"
                        }
                      },
                      "id": 764,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "919:16:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_struct$_G1Point_$7_storage_$dyn_storage_ptr_$_t_struct$_G1Point_$7_storage_$returns$__$bound_to$_t_array$_t_struct$_G1Point_$7_storage_$dyn_storage_ptr_$",
                        "typeString": "function (struct Pairing.G1Point storage ref[] storage pointer,struct Pairing.G1Point storage ref)"
                      }
                    },
                    "id": 766,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "919:20:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 767,
                  "nodeType": "ExpressionStatement",
                  "src": "919:20:10"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 776,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 771,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 768,
                          "name": "cm",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 751,
                          "src": "953:2:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_G1Point_$7_memory_ptr",
                            "typeString": "struct Pairing.G1Point memory"
                          }
                        },
                        "id": 769,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "X",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 4,
                        "src": "953:4:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 770,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "961:1:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "953:9:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 775,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 772,
                          "name": "cm",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 751,
                          "src": "966:2:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_G1Point_$7_memory_ptr",
                            "typeString": "struct Pairing.G1Point memory"
                          }
                        },
                        "id": 773,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "Y",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6,
                        "src": "966:4:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 774,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "974:1:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "966:9:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "953:22:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 790,
                    "nodeType": "Block",
                    "src": "1017:55:10",
                    "statements": [
                      {
                        "expression": {
                          "id": 788,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 782,
                            "name": "sumOfCommitment",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 716,
                            "src": "1019:15:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_G1Point_$7_storage",
                              "typeString": "struct Pairing.G1Point storage ref"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "id": 785,
                                "name": "sumOfCommitment",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 716,
                                "src": "1049:15:10",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_G1Point_$7_storage",
                                  "typeString": "struct Pairing.G1Point storage ref"
                                }
                              },
                              {
                                "id": 786,
                                "name": "cm",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 751,
                                "src": "1066:2:10",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_G1Point_$7_memory_ptr",
                                  "typeString": "struct Pairing.G1Point memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_struct$_G1Point_$7_storage",
                                  "typeString": "struct Pairing.G1Point storage ref"
                                },
                                {
                                  "typeIdentifier": "t_struct$_G1Point_$7_memory_ptr",
                                  "typeString": "struct Pairing.G1Point memory"
                                }
                              ],
                              "expression": {
                                "id": 783,
                                "name": "Pairing",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 613,
                                "src": "1037:7:10",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_Pairing_$613_$",
                                  "typeString": "type(library Pairing)"
                                }
                              },
                              "id": 784,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "add",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 140,
                              "src": "1037:11:10",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_G1Point_$7_memory_ptr_$_t_struct$_G1Point_$7_memory_ptr_$returns$_t_struct$_G1Point_$7_memory_ptr_$",
                                "typeString": "function (struct Pairing.G1Point memory,struct Pairing.G1Point memory) returns (struct Pairing.G1Point memory)"
                              }
                            },
                            "id": 787,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1037:32:10",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_G1Point_$7_memory_ptr",
                              "typeString": "struct Pairing.G1Point memory"
                            }
                          },
                          "src": "1019:50:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_G1Point_$7_storage",
                            "typeString": "struct Pairing.G1Point storage ref"
                          }
                        },
                        "id": 789,
                        "nodeType": "ExpressionStatement",
                        "src": "1019:50:10"
                      }
                    ]
                  },
                  "id": 791,
                  "nodeType": "IfStatement",
                  "src": "950:122:10",
                  "trueBody": {
                    "id": 781,
                    "nodeType": "Block",
                    "src": "977:25:10",
                    "statements": [
                      {
                        "expression": {
                          "id": 779,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 777,
                            "name": "sumOfCommitment",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 716,
                            "src": "979:15:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_G1Point_$7_storage",
                              "typeString": "struct Pairing.G1Point storage ref"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "id": 778,
                            "name": "cm",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 751,
                            "src": "997:2:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_G1Point_$7_memory_ptr",
                              "typeString": "struct Pairing.G1Point memory"
                            }
                          },
                          "src": "979:20:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_G1Point_$7_storage",
                            "typeString": "struct Pairing.G1Point storage ref"
                          }
                        },
                        "id": 780,
                        "nodeType": "ExpressionStatement",
                        "src": "979:20:10"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 793,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "1089:11:10",
                    "subExpression": {
                      "id": 792,
                      "name": "commitCnt",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 719,
                      "src": "1089:9:10",
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
                  "functionReturnParameters": 737,
                  "id": 794,
                  "nodeType": "Return",
                  "src": "1082:18:10"
                }
              ]
            },
            "functionSelector": "f5c13593",
            "id": 796,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "upload_commitment",
            "nameLocation": "669:17:10",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 734,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 733,
                  "mutability": "mutable",
                  "name": "proof",
                  "nameLocation": "713:5:10",
                  "nodeType": "VariableDeclaration",
                  "scope": 796,
                  "src": "696:22:10",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 731,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "696:7:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 732,
                    "nodeType": "ArrayTypeName",
                    "src": "696:9:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "686:38:10"
            },
            "returnParameters": {
              "id": 737,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 736,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 796,
                  "src": "749:7:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 735,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "749:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "748:9:10"
            },
            "scope": 909,
            "src": "660:447:10",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 871,
              "nodeType": "Block",
              "src": "1229:507:10",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 809,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 807,
                          "name": "idx",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 798,
                          "src": "1247:3:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "id": 808,
                          "name": "commitCnt",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 719,
                          "src": "1253:9:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1247:15:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "496e76616c696420696e646578",
                        "id": 810,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1264:15:10",
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
                      "id": 806,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1239:7:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 811,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1239:41:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 812,
                  "nodeType": "ExpressionStatement",
                  "src": "1239:41:10"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 816,
                            "name": "verifyingKey",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 704,
                            "src": "1321:12:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                              "typeString": "uint256[] storage ref"
                            }
                          },
                          {
                            "id": 817,
                            "name": "proof",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 801,
                            "src": "1335:5:10",
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
                            "id": 814,
                            "name": "ccGroth16BN128",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 692,
                            "src": "1298:14:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_ccGroth16BN128_$692_$",
                              "typeString": "type(library ccGroth16BN128)"
                            }
                          },
                          "id": 815,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "_verify",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 691,
                          "src": "1298:22:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_nonpayable$_t_array$_t_uint256_$dyn_storage_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$returns$_t_bool_$",
                            "typeString": "function (uint256[] storage pointer,uint256[] memory) returns (bool)"
                          }
                        },
                        "id": 818,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1298:43:10",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "766572696679206661696c",
                        "id": 819,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1343:13:10",
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
                      "id": 813,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1290:7:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 820,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1290:67:10",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 821,
                  "nodeType": "ExpressionStatement",
                  "src": "1290:67:10"
                },
                {
                  "assignments": [
                    826
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 826,
                      "mutability": "mutable",
                      "name": "tmp",
                      "nameLocation": "1391:3:10",
                      "nodeType": "VariableDeclaration",
                      "scope": 871,
                      "src": "1368:26:10",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_G1Point_$7_memory_ptr",
                        "typeString": "struct Pairing.G1Point"
                      },
                      "typeName": {
                        "id": 825,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 824,
                          "name": "Pairing.G1Point",
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 7,
                          "src": "1368:15:10"
                        },
                        "referencedDeclaration": 7,
                        "src": "1368:15:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_G1Point_$7_storage_ptr",
                          "typeString": "struct Pairing.G1Point"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 827,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1368:26:10"
                },
                {
                  "expression": {
                    "id": 839,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 828,
                      "name": "tmp",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 826,
                      "src": "1409:3:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_G1Point_$7_memory_ptr",
                        "typeString": "struct Pairing.G1Point memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 831,
                          "name": "sumOfCommitment",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 716,
                          "src": "1440:15:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_G1Point_$7_storage",
                            "typeString": "struct Pairing.G1Point storage ref"
                          }
                        },
                        {
                          "arguments": [
                            {
                              "baseExpression": {
                                "id": 834,
                                "name": "commitArray",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 708,
                                "src": "1484:11:10",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_struct$_G1Point_$7_storage_$dyn_storage",
                                  "typeString": "struct Pairing.G1Point storage ref[] storage ref"
                                }
                              },
                              "id": 836,
                              "indexExpression": {
                                "id": 835,
                                "name": "idx",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 798,
                                "src": "1496:3:10",
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
                              "src": "1484:16:10",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_G1Point_$7_storage",
                                "typeString": "struct Pairing.G1Point storage ref"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_struct$_G1Point_$7_storage",
                                "typeString": "struct Pairing.G1Point storage ref"
                              }
                            ],
                            "expression": {
                              "id": 832,
                              "name": "Pairing",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 613,
                              "src": "1469:7:10",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_Pairing_$613_$",
                                "typeString": "type(library Pairing)"
                              }
                            },
                            "id": 833,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "negate",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 83,
                            "src": "1469:14:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_struct$_G1Point_$7_memory_ptr_$returns$_t_struct$_G1Point_$7_memory_ptr_$",
                              "typeString": "function (struct Pairing.G1Point memory) pure returns (struct Pairing.G1Point memory)"
                            }
                          },
                          "id": 837,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1469:32:10",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_G1Point_$7_memory_ptr",
                            "typeString": "struct Pairing.G1Point memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_struct$_G1Point_$7_storage",
                            "typeString": "struct Pairing.G1Point storage ref"
                          },
                          {
                            "typeIdentifier": "t_struct$_G1Point_$7_memory_ptr",
                            "typeString": "struct Pairing.G1Point memory"
                          }
                        ],
                        "expression": {
                          "id": 829,
                          "name": "Pairing",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 613,
                          "src": "1415:7:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_Pairing_$613_$",
                            "typeString": "type(library Pairing)"
                          }
                        },
                        "id": 830,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 140,
                        "src": "1415:11:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_G1Point_$7_memory_ptr_$_t_struct$_G1Point_$7_memory_ptr_$returns$_t_struct$_G1Point_$7_memory_ptr_$",
                          "typeString": "function (struct Pairing.G1Point memory,struct Pairing.G1Point memory) returns (struct Pairing.G1Point memory)"
                        }
                      },
                      "id": 838,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1415:96:10",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_G1Point_$7_memory_ptr",
                        "typeString": "struct Pairing.G1Point memory"
                      }
                    },
                    "src": "1409:102:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_G1Point_$7_memory_ptr",
                      "typeString": "struct Pairing.G1Point memory"
                    }
                  },
                  "id": 840,
                  "nodeType": "ExpressionStatement",
                  "src": "1409:102:10"
                },
                {
                  "expression": {
                    "id": 848,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 841,
                          "name": "commitArray",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 708,
                          "src": "1522:11:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_G1Point_$7_storage_$dyn_storage",
                            "typeString": "struct Pairing.G1Point storage ref[] storage ref"
                          }
                        },
                        "id": 843,
                        "indexExpression": {
                          "id": 842,
                          "name": "idx",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 798,
                          "src": "1534:3:10",
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
                        "src": "1522:16:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_G1Point_$7_storage",
                          "typeString": "struct Pairing.G1Point storage ref"
                        }
                      },
                      "id": 844,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "X",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4,
                      "src": "1522:18:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "baseExpression": {
                        "id": 845,
                        "name": "proof",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 801,
                        "src": "1543:5:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      "id": 847,
                      "indexExpression": {
                        "hexValue": "38",
                        "id": 846,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1549:1:10",
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
                      "src": "1543:8:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1522:29:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 849,
                  "nodeType": "ExpressionStatement",
                  "src": "1522:29:10"
                },
                {
                  "expression": {
                    "id": 857,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 850,
                          "name": "commitArray",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 708,
                          "src": "1561:11:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_G1Point_$7_storage_$dyn_storage",
                            "typeString": "struct Pairing.G1Point storage ref[] storage ref"
                          }
                        },
                        "id": 852,
                        "indexExpression": {
                          "id": 851,
                          "name": "idx",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 798,
                          "src": "1573:3:10",
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
                        "src": "1561:16:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_G1Point_$7_storage",
                          "typeString": "struct Pairing.G1Point storage ref"
                        }
                      },
                      "id": 853,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "Y",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6,
                      "src": "1561:18:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "baseExpression": {
                        "id": 854,
                        "name": "proof",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 801,
                        "src": "1582:5:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                          "typeString": "uint256[] memory"
                        }
                      },
                      "id": 856,
                      "indexExpression": {
                        "hexValue": "39",
                        "id": 855,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1588:1:10",
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
                      "src": "1582:8:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1561:29:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 858,
                  "nodeType": "ExpressionStatement",
                  "src": "1561:29:10"
                },
                {
                  "expression": {
                    "id": 867,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 859,
                      "name": "sumOfCommitment",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 716,
                      "src": "1601:15:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_G1Point_$7_storage",
                        "typeString": "struct Pairing.G1Point storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 862,
                          "name": "sumOfCommitment",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 716,
                          "src": "1644:15:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_G1Point_$7_storage",
                            "typeString": "struct Pairing.G1Point storage ref"
                          }
                        },
                        {
                          "baseExpression": {
                            "id": 863,
                            "name": "commitArray",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 708,
                            "src": "1673:11:10",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_G1Point_$7_storage_$dyn_storage",
                              "typeString": "struct Pairing.G1Point storage ref[] storage ref"
                            }
                          },
                          "id": 865,
                          "indexExpression": {
                            "id": 864,
                            "name": "idx",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 798,
                            "src": "1685:3:10",
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
                          "src": "1673:16:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_G1Point_$7_storage",
                            "typeString": "struct Pairing.G1Point storage ref"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_struct$_G1Point_$7_storage",
                            "typeString": "struct Pairing.G1Point storage ref"
                          },
                          {
                            "typeIdentifier": "t_struct$_G1Point_$7_storage",
                            "typeString": "struct Pairing.G1Point storage ref"
                          }
                        ],
                        "expression": {
                          "id": 860,
                          "name": "Pairing",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 613,
                          "src": "1619:7:10",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_Pairing_$613_$",
                            "typeString": "type(library Pairing)"
                          }
                        },
                        "id": 861,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "add",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 140,
                        "src": "1619:11:10",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_G1Point_$7_memory_ptr_$_t_struct$_G1Point_$7_memory_ptr_$returns$_t_struct$_G1Point_$7_memory_ptr_$",
                          "typeString": "function (struct Pairing.G1Point memory,struct Pairing.G1Point memory) returns (struct Pairing.G1Point memory)"
                        }
                      },
                      "id": 866,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1619:80:10",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_G1Point_$7_memory_ptr",
                        "typeString": "struct Pairing.G1Point memory"
                      }
                    },
                    "src": "1601:98:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_G1Point_$7_storage",
                      "typeString": "struct Pairing.G1Point storage ref"
                    }
                  },
                  "id": 868,
                  "nodeType": "ExpressionStatement",
                  "src": "1601:98:10"
                },
                {
                  "expression": {
                    "hexValue": "74727565",
                    "id": 869,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1725:4:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 805,
                  "id": 870,
                  "nodeType": "Return",
                  "src": "1718:11:10"
                }
              ]
            },
            "functionSelector": "f123b45a",
            "id": 872,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "update_commitment",
            "nameLocation": "1122:17:10",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 802,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 798,
                  "mutability": "mutable",
                  "name": "idx",
                  "nameLocation": "1157:3:10",
                  "nodeType": "VariableDeclaration",
                  "scope": 872,
                  "src": "1149:11:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 797,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1149:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 801,
                  "mutability": "mutable",
                  "name": "proof",
                  "nameLocation": "1187:5:10",
                  "nodeType": "VariableDeclaration",
                  "scope": 872,
                  "src": "1170:22:10",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 799,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1170:7:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 800,
                    "nodeType": "ArrayTypeName",
                    "src": "1170:9:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1139:59:10"
            },
            "returnParameters": {
              "id": 805,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 804,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 872,
                  "src": "1223:4:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 803,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1223:4:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1222:6:10"
            },
            "scope": 909,
            "src": "1113:623:10",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 880,
              "nodeType": "Block",
              "src": "1799:36:10",
              "statements": [
                {
                  "expression": {
                    "id": 878,
                    "name": "verifyingKey",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 704,
                    "src": "1816:12:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                      "typeString": "uint256[] storage ref"
                    }
                  },
                  "functionReturnParameters": 877,
                  "id": 879,
                  "nodeType": "Return",
                  "src": "1809:19:10"
                }
              ]
            },
            "functionSelector": "def596ef",
            "id": 881,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "get_vk",
            "nameLocation": "1751:6:10",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 873,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1757:2:10"
            },
            "returnParameters": {
              "id": 877,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 876,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 881,
                  "src": "1781:16:10",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 874,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1781:7:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 875,
                    "nodeType": "ArrayTypeName",
                    "src": "1781:9:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1780:18:10"
            },
            "scope": 909,
            "src": "1742:93:10",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 890,
              "nodeType": "Block",
              "src": "1919:35:10",
              "statements": [
                {
                  "expression": {
                    "id": 888,
                    "name": "commitArray",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 708,
                    "src": "1936:11:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_G1Point_$7_storage_$dyn_storage",
                      "typeString": "struct Pairing.G1Point storage ref[] storage ref"
                    }
                  },
                  "functionReturnParameters": 887,
                  "id": 889,
                  "nodeType": "Return",
                  "src": "1929:18:10"
                }
              ]
            },
            "functionSelector": "068a2253",
            "id": 891,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "get_all_commitments",
            "nameLocation": "1850:19:10",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 882,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1869:2:10"
            },
            "returnParameters": {
              "id": 887,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 886,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 891,
                  "src": "1893:24:10",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_G1Point_$7_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct Pairing.G1Point[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 884,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 883,
                        "name": "Pairing.G1Point",
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 7,
                        "src": "1893:15:10"
                      },
                      "referencedDeclaration": 7,
                      "src": "1893:15:10",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_G1Point_$7_storage_ptr",
                        "typeString": "struct Pairing.G1Point"
                      }
                    },
                    "id": 885,
                    "nodeType": "ArrayTypeName",
                    "src": "1893:17:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_G1Point_$7_storage_$dyn_storage_ptr",
                      "typeString": "struct Pairing.G1Point[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1892:26:10"
            },
            "scope": 909,
            "src": "1841:113:10",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 898,
              "nodeType": "Block",
              "src": "2020:33:10",
              "statements": [
                {
                  "expression": {
                    "id": 896,
                    "name": "commitCnt",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 719,
                    "src": "2037:9:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 895,
                  "id": 897,
                  "nodeType": "Return",
                  "src": "2030:16:10"
                }
              ]
            },
            "functionSelector": "621a9326",
            "id": 899,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "get_commitment_cnt",
            "nameLocation": "1969:18:10",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 892,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1987:2:10"
            },
            "returnParameters": {
              "id": 895,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 894,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 899,
                  "src": "2011:7:10",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 893,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2011:7:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2010:9:10"
            },
            "scope": 909,
            "src": "1960:93:10",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 907,
              "nodeType": "Block",
              "src": "2138:39:10",
              "statements": [
                {
                  "expression": {
                    "id": 905,
                    "name": "sumOfCommitment",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 716,
                    "src": "2155:15:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_G1Point_$7_storage",
                      "typeString": "struct Pairing.G1Point storage ref"
                    }
                  },
                  "functionReturnParameters": 904,
                  "id": 906,
                  "nodeType": "Return",
                  "src": "2148:22:10"
                }
              ]
            },
            "functionSelector": "0651a124",
            "id": 908,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "get_sum_of_commitments",
            "nameLocation": "2068:22:10",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 900,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2090:2:10"
            },
            "returnParameters": {
              "id": 904,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 903,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 908,
                  "src": "2114:22:10",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_G1Point_$7_memory_ptr",
                    "typeString": "struct Pairing.G1Point"
                  },
                  "typeName": {
                    "id": 902,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 901,
                      "name": "Pairing.G1Point",
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7,
                      "src": "2114:15:10"
                    },
                    "referencedDeclaration": 7,
                    "src": "2114:15:10",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_G1Point_$7_storage_ptr",
                      "typeString": "struct Pairing.G1Point"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2113:24:10"
            },
            "scope": 909,
            "src": "2059:118:10",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 910,
        "src": "131:2048:10"
      }
    ],
    "src": "38:2142:10"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.2+commit.661d1103.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.4.14",
  "updatedAt": "2023-05-28T08:43:29.456Z",
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