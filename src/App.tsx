import { FC } from 'react'

const App: FC = () => {
	const error1 = () => {
		JSON.parse('{test')
	}

	const error2 = () => {
		throw new Error('Error2')
	}

	return (
		<>
			<button onClick={() => error1()}>error1</button>
			<button onClick={() => error2()}>error2</button>
		</>
	)
}

export default App
