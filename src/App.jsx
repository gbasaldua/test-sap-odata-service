import { createGlobalStyle } from 'styled-components'
import { BrowserRouter, Route } from 'react-router-dom'
import PurchaseOrders from './components/PurchaseOrders'
import PurchaseOrder from './components/PurchaseOrder'

const GlobalStyle = createGlobalStyle`
	body{
		font-family: 'Lucida Sans', sans-serif;
		text-align: center;
	}
`

const App = () => {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<h1>Purchase Orders</h1>
				<Route exact path="/" component={PurchaseOrders} />
				<Route path="/po/:poNumber" component={PurchaseOrder} />
			</BrowserRouter>
		</>
	)
}

export default App;
