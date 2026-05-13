import React from 'react';
import { useTheme } from '@/components/theme-provider';

export function LandingPage() {
  const { colors, fontSize } = useTheme();

  return (
    <div className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 6-섹션 구조 적용 예시 */}
      <header className="text-center mb-12">
        <h1 className={`text-5xl font-bold text-${colors.primary}`}>kmongland: 한국어 학습의 시작</h1>
        <p className="mt-4 text-xl text-gray-600">전 세계를 위한 체계적이고 재미있는 한국어 교육 경험</p>
      </header>

      {/* Features 섹션 예시 */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">체계적인 커리큘럼</h2>
          <p className="text-gray-600">데이터 모델 기반으로 설계된 단계별 학습 경로로 확실하게 실력을 향상시킵니다.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-emerald-500">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">몰입형 콘텐츠</h2>
          <p className="text-gray-600">시각 자료와 인터랙티브 요소를 통해 자연스럽게 언어를 습득합니다.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-indigo-500">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">실시간 피드백</h2>
          <p className="text-gray-600">AI 기반의 즉각적인 피드백으로 학습 효과를 극대화합니다.</p>
        </div>
      </section>

      {/* CTA 섹션 예시 */}
      <section className="text-center mt-16 bg-white p-10 rounded-lg shadow-md">
        <h2 className={`text-3xl font-bold text-${colors.text}`}>지금 바로 시작하세요!</h2>
        <p className="mt-4 text-lg">당신의 한국어 여정을 kmongland와 함께 시작하세요.</p>
        <button className={`mt-6 px-8 py-3 bg-${colors.primary} text-white font-semibold rounded-full hover:bg-blue-600 transition duration-300`}>
          무료 체험 시작하기
        </button>
      </section>
    </div>
  );
}