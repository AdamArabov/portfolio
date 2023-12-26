import Background from "./components/Body/Background";
import "@/app/components/Body/style.css"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Background/>
    </main>
  )
}
