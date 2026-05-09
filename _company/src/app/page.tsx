import Link from 'next/link';
import { Dashboard } from '@/components/Dashboard'; // 가정된 컴포넌트 경로
import { UserProfile } from '@/components/UserProfile'; // 가정된 컴포넌트 경로

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar Placeholder */}
      <header className="bg-white shadow p-4 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">kmongland</h1>
          <nav>
            <Link href="/dashboard" className="text-gray-700 hover:text-indigo-600 transition">대시보드</Link>
            <Link href="/profile" className="text-gray-700 hover:text-indigo-600 transition">마이페이지</Link>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">환영합니다!</h2>
        
        {/* Example Data Integration based on assumed data model */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <UserProfile />
          <div className="bg-white p-6 rounded-lg shadow border border-indigo-200">
            <h3 className="text-xl font-semibold text-indigo-700 mb-3">학습 진도</h3>
            <p className="text-gray-600">현재 학습 중인 모듈: 기초 문법 (진도율 45%)</p>
          </div>
        </div>

      </main>
    </div>
  );
}