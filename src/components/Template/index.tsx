
const Template = ({ children }: any) => {
  return (
    <div>
      <div className="overflow-hidden relative pb-32 bg-sky-700">
        <div
          aria-hidden="true"
          className="overflow-hidden absolute inset-0 left-1/2 w-full -translate-x-1/2 lg:inset-y-0"
        >
          <div className="flex absolute inset-0">
            <div className="w-1/2 h-full" style={{ backgroundColor: '#0a527b' }} />
            <div className="w-1/2 h-full" style={{ backgroundColor: '#065d8c' }} />
          </div>
          <div className="flex relative justify-center">
            <svg
              className="shrink-0"
              width={1750}
              height={308}
              viewBox="0 0 1750 308"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M284.161 308H1465.84L875.001 182.413 284.161 308z" fill="#0369a1" />
              <path d="M1465.84 308L16.816 0H1750v308h-284.16z" fill="#065d8c" />
              <path d="M1733.19 0L284.161 308H0V0h1733.19z" fill="#0a527b" />
              <path d="M875.001 182.413L1733.19 0H16.816l858.185 182.413z" fill="#0a4f76" />
            </svg>
          </div>
        </div>
        <header className="relative py-10">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-white">Cashback App</h1>
          </div>
        </header>
      </div>

      <main className="relative -mt-32">
        <div className="px-4 pb-6 mx-auto max-w-screen-xl sm:px-6 lg:px-8 lg:pb-16">
          <div className="overflow-hidden min-h-[600px] bg-white rounded-lg shadow">
            {children}
          </div>
        </div>
      </main>

    </div>
  )
}

export default Template
