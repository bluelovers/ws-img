# README.md

    merge source.png with mask.png to alpha.png

## install

```
yarn add alpha-mask
```

## demo

![image_1](test/docs/image_1.png)

=>

![image](test/docs/image.png)

## code

```ts
    import { createWriteStream, pathExistsSync, ensureWriteStream, outputFile } from 'fs-iconv';
    import { mergeMaskByFile } from 'alpha-mask';
    import FastGlob from '@bluelovers/fast-glob/bluebird';
    import * as path from 'path';
    import { buffer as getStream } from 'get-stream';

    mergeMaskByFile(path.join(__dirname, './res/char_002_amiya_2.png'), path.join(__dirname, './res/char_002_amiya_2[alpha].png'))
    .then(img => {
     return getStream(img.pack())
      .then(data => {
       return outputFile(path.join(__dirname, 'out.png'), data)
      })
    })
    ;
```

---

![out.png](test/out.png)

