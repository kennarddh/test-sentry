import { FC, useEffect, useState } from 'react'

const App: FC = () => {
	const [State, SetState] = useState(0)

	const error1 = () => {
		JSON.parse('{test')
	}

	const error2 = () => {
		throw new Error('Error2')
	}

	const error3 = () => {
		return 10 / 0
	}

	const error4 = () => {
		error4()
	}

	const error5 = () => {
		SetState(1)
	}

	useEffect(() => {
		SetState(0)
	}, [State])

	const error6 = () => {
		// eslint-disable-next-line @typescript-eslint/no-extra-semi
		;[].length = 4294967296
	}

	return (
		<>
			<button onClick={() => error1()}>error1</button>
			<button onClick={() => error2()}>error2</button>
			<button onClick={() => error3()}>error3</button>
			<button onClick={() => error4()}>error4</button>
			<button onClick={() => error5()}>error5</button>
			<button onClick={() => error6()}>error6e</button>
		</>
	)
}

export default App
