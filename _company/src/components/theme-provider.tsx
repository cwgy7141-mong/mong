'use client';

import React, { createContext, useState, useContext, useMemo } from 'react';

// 디자인 시스템 정의 (designer.md 기반으로 실제 값 적용 필요)
const theme = {
  colors: {
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
    background: 'var(--color-background)',
    text: 'var(--color-text-primary)',
  },
  fontSize: {
    base: 'var(--font-size-base)',
  }
};

const ThemeContext = createContext<typeof theme, any>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState('light'); // 추후 다크 모드 확장 가능

  // 실제 디자인 시스템 값은 외부 파일에서 로드되어야 하지만, MVP 환경 구축을 위해 기본 구조만 제공합니다.
  
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}