import React from 'react';

export const UserProfile: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-indigo-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">사용자 프로필</h3>
      <div className="space-y-3">
        <p><strong>이름:</strong> 김OO</p>
        <p><strong>레벨:</strong> 중급 (B1)</p>
        <p><strong>등록일:</strong> 2026.05.09</p>
      </div>
      <button className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">프로필 편집</button>
    </div>
  );
};