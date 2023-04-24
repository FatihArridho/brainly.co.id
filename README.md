# Brainly.co.id

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

Or

```javascript
import brainly from 'brainly.co.id';

brainly("nkri").then(res => {
	console.log(res);
});
```

Tips :
	You can use JSON.stringify() to get string output