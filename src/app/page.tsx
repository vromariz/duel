export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Início do duelo
          </li>
        </ol>
        <div>
          oi
        </div>

        <table className="border border-gray-300 text-sm text-center font-[family-name:var(--font-geist-mono)]">
          <thead className="bg-blck-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300">Participante</th>
              <th className="px-4 py-2 border border-gray-300">Pontos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Carol</td>
              <td className="px-4 py-2 border border-gray-300">0</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Pedro</td>
              <td className="px-4 py-2 border border-gray-300">0</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-gray-300">Vinicius</td>
              <td className="px-4 py-2 border border-gray-300">0</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}
