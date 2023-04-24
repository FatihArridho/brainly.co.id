# www.brainly.co.id

Library to scrape ```www.brainly.co.id```

## Installation

```
npm install brainly.co.id
```
or
```
yarn add brainly.co.id
```

## Parameters

| Name | Nullable | Description |
|------|----------|-------------|
| query|    ✔     | The keywords you want to find |
| count|    ✔     | Total data to be displayed |

### Simple Usage

```javascript
const brainly = require('brainly.co.id');

brainly("nkri").then(res => {
	console.log(res);
});
```

or

```javascript
import brainly from 'brainly.co.id';

brainly("nkri").then(res => {
	console.log(res);
});
```

Tips :
	You can use JSON.stringify() to get string output


  <h2>⭐ Thanks To</h2>

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/defrindr"><img src="https://github.com/defrindr.png" width="100px;" alt="defrindr"/><br /><sub><b>Defri Indra Mahardika</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/FatihArridho"><img src="https://github.com/FatihArridho.png" width="100px;" alt="Fatih Arridho"/><br /><sub><b>Fatih Arridho</b></sub></a><br /></td>
    </tr>
  </tbody>
</table>