import banner01 from './assets/banner_01.jpg'
import banner02 from './assets/banner_02.jpg'

function App() {
	return (
		<main className='flex flex-col items-center min-h-screen p-3 bg-yellow-400'>
			<div className='flex flex-col flex-1 w-full max-w-xs gap-3'>
				<span className='text-xs uppercase font-semibold mb-2'>
					seja bem vindo a
				</span>

				<h1 className='text-5xl font-medium '>
					TG Roleta VIP
				</h1>

				<img
					className='w-full rounded-lg object-cover h-40 '
					src={banner01}
					alt=''
				/>

				<p className='text-3xl my-4 font-medium'>
					Utilizamos AI para Mandar sinais Com a maior Acertividade do
					Brasil
				</p>

				<a href='https://wa.me/+5516992253868'>
					<button className='w-full py-4 px-8 text-lg font-semibold bg-black text-white rounded-lg cursor-pointer transition-colors duration-200 mb-8 uppercase'>
						Comece a lucrar aqui
					</button>
				</a>

				<hr className='w-full border-black border-opacity-50 ' />

				<img
					className='w-full rounded-lg object-cover h-40'
					src={banner02}
					alt=''
				/>
			</div>
		</main>
	)
}

export { App }
