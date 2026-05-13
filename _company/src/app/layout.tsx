import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider'; // 디자인 시스템 컴포넌트 가정

const inter = Inter({ className: 'font-sans' });

export const metadata = {
  title: 'kmongland - 한국어 교육',
  description: '한국어를 배우고자 하는 전 세계 사람들을 위한 학습 플랫폼',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}