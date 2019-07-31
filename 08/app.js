// - array : 3次元配列を作る

arrey1 = [
  ['apple','りんご',
    ['￥','100',],
  ],
  ['orange','みかん'],
  ['pink','ピンク'],
  ['red','赤']
];
console.log(arrey1[0])
console.log(arrey1[0][1])
console.log(arrey1 [0][2][1])



// 1次元配列
arrey = ['apple','りんご','orange','みかん','pink','ピンク','red','赤']
console.log(arrey)
console.log(arrey[1])

// これは何かわからない。
arrey2 = [
  ['apple','りんご',
    ['￥','100',
    ['種類','王林',],
  ],
  ],
  ['orange','みかん'],
  ['pink','ピンク'],
  ['red','赤']
];
console.log(arrey2[0])
console.log(arrey2[0][1])
console.log(arrey2[0][2][0])
console.log(arrey2[0][2][2][0])
