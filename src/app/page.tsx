export default function Home() {
  return (
    <div className="min-h-screen bg-blue-900 text-white px-4">
      <div className="max-w-screen-sm mx-auto text-lg flex flex-col gap-6 py-24">
        <h1 className="text-4xl font-bold text-white">
          👋🏻 Hei, jeg heter Andreas Aasheim Farup!
        </h1>
        <p>
          Jeg studerer Datateknologi på Universitetet i Bergen 💻🤓🫡
        </p>

        <p>🚀 Ting jeg er bedre enn Mikal i:</p>

        <ul className="pl-4 list-disc">
          <li>Bordtennis 🏓</li>
          <li>Soccer Heads ⚽️</li>
        </ul>
      </div>
    </div>
  );
}
