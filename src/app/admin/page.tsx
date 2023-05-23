import { Header } from "@/components/Header";
import { RegisterAdmin } from '../../components/Form/FormAdmin';
import { TableAdmin } from "@/components/Table/TableAdmin";
import { QueryProvider } from "@/context/QueryContext";

export default function Admin() {
  return (
    <main className="h-screen">
      <Header />
      <div className="flex flex-col p-14 gap-14 justify-center">
        <QueryProvider>
          <RegisterAdmin />
          <TableAdmin />
        </QueryProvider>
      </div>
    </main>
  )
}
