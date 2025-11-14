import { MainLayout } from "../../../Shared/Components/ui/MainLayout";

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-600">Aquí irá tu información.</p>
      </div>
    </MainLayout>
  );
}
