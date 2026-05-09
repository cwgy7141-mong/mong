import React from 'react';

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 border-b pb-2">사용자 대시보드</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Placeholder for Data Model Integration */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-indigo-500">
          <p className="text-sm font-medium text-gray-500">총 학습 시간</p>
          <p className="text-3xl font-extrabold text-indigo-600">12시간 30분</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
          <p className="text-sm font-medium text-gray-500">완료 모듈 수</p>
          <p className="text-3xl font-extrabold text-green-600">15 / 20</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-500">
          <p className="text-sm font-medium text-gray-500">다음 목표</p>
          <p className="text-3xl font-extrabold text-yellow-600">기초 문법 심화</p>
        </div>
      </div>
      {/* Future components based on data model */}
    </div>
  );
};