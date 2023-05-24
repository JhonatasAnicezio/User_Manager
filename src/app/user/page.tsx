import { Header } from "@/components/Header";

export default function User() {
  return (
    <main className="h-screen">
      <Header />
      <div className="flex flex-col items-center p-24 gap-9">
        <h1 className="text-3xl text-white">Olá, seja bem-vindo ao meu projeto User Manager!</h1>
        <div className="bg-gray-300 shadow-md p-4">
          <p>O Projeto User Manager foi criado para fins didáticos, com o intuito de aprender a trabalhar com o framework NEXT.js. Por se tratar de um projeto full-stack, também desenvolvi a parte do back-end, mas esse não é o meu foco!</p>
          <p>Além disso, gostaria de agradecer a atenção, pois fiquei muito feliz com minha primeira experiência com a ferramenta e consegui aprender muito, com vários conceitos, como a renderização pelo lado do servidor.</p>
          <p>Acredito que, com a realização desse projeto, me tornei um profissional melhor do que era antes dele!</p>
        </div>
      </div>
    </main>
  )
}
