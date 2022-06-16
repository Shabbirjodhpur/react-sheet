[Correct link syntax](https://www.example.com/)
* hh
* ff
	+ dd
	- JJ

# 1. sample program:

```
import React from "react"
import ReactDOM from "react-dom"

const page = (
<div>
<img src="./react-logo.png" width="40px" />
</div>
)

ReactDOM.render(page, document.getElementById("root"))
```

# 2. Creating sub component

### Header.js
```
import React from "react"
export default function Header(){
	return (<div> Hii </div>)
}
```
### index.js
```
import Header from "./Header"
import "./style.css"
import Logo from "./images/logo.png"
function App(){
	return (
		<div>
			<Header />
			<img src={Logo}/>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById("root"))

```


