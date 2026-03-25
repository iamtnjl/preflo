export default function ResultPage({ params }: { params: { slug: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-4">Result: {params.slug}</h1>
      <p className="text-gray-600">Coming soon.</p>
    </main>
  );
}
