import { getResult } from "@/app/actions/analyze";
import FeasibilityReport from "@/components/analysis/FeasibilityReport";
import type { FeasibilityReport as ReportType } from "@preflo/shared";

interface ResultPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ResultPage({ params }: ResultPageProps) {
  const { slug } = await params;
  const result = await getResult(slug);

  if (!result.success) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Result Not Found</h1>
          <p className="text-gray-500">
            No analysis results found for &quot;{slug}&quot;. Run an analysis first.
          </p>
          <a
            href="/analyze"
            className="inline-block mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Analyze a Niche
          </a>
        </div>
      </main>
    );
  }

  const report = result.data as unknown as ReportType;

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <a href="/analyze" className="text-sm text-blue-600 hover:text-blue-800">
            &larr; New Analysis
          </a>
        </div>
        <FeasibilityReport report={report} />
      </div>
    </main>
  );
}
