

const instance = await NftMarket.deployed();

instance.mintToken("https://gateway.pinata.cloud/ipfs/QmV72u6STBv5r6dbSHsRen8tkMP7wVEbW2zaHBG67kE4vK", "500000000000000000", {value: "25000000000000000",from: accounts[0]});
instance.mintToken("https://gateway.pinata.cloud/ipfs/QmX15YJoqhLdFeyStqB83UFVmwiiHANDVSWQw19wpnnn3e", "300000000000000000", {value: "25000000000000000",from: accounts[0]});


